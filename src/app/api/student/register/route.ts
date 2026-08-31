import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    // In production, enforce authentication:
    // if (!session || session.user.role !== 'STUDENT') {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }
    
    // For MVP prototyping, we simulate the student ID from the request or session
    const body = await request.json();
    const { degreeRecipientId, attendingInPerson, guestCount, dispatchAddress } = body;

    if (!degreeRecipientId) {
      return NextResponse.json({ error: 'Missing degree recipient ID' }, { status: 400 });
    }

    // Check if registration already exists
    const existing: any[] = await query(
      'SELECT id FROM Registrations WHERE degree_recipient_id = ?',
      [degreeRecipientId]
    );

    if (existing.length > 0) {
      return NextResponse.json({ error: 'Registration already submitted' }, { status: 400 });
    }

    // Insert new registration
    const uuid = crypto.randomUUID();
    const sql = `
      INSERT INTO Registrations 
      (id, degree_recipient_id, status, attending_in_person, guest_count, dispatch_address)
      VALUES (?, ?, 'SUBMITTED', ?, ?, ?)
    `;
    
    await query(sql, [
      uuid,
      degreeRecipientId,
      attendingInPerson ? 1 : 0,
      guestCount || 0,
      dispatchAddress || null
    ]);

    return NextResponse.json({ success: true, message: 'Registration submitted successfully', registrationId: uuid });
  } catch (error) {
    console.error('Registration Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const degreeRecipientId = searchParams.get('degreeRecipientId');

    if (!degreeRecipientId) {
      return NextResponse.json({ error: 'Missing degree recipient ID' }, { status: 400 });
    }

    const results: any[] = await query(
      'SELECT * FROM Registrations WHERE degree_recipient_id = ?',
      [degreeRecipientId]
    );

    if (results.length === 0) {
      return NextResponse.json({ data: null });
    }

    return NextResponse.json({ success: true, data: results[0] });
  } catch (error) {
    console.error('Fetch Registration Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
