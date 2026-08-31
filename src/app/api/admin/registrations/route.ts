import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { query } from '@/lib/db';

export async function GET(request: Request) {
  try {
    // Auth Check
    // const session = await getServerSession(authOptions);
    // if (!session || (session.user as any).role !== 'REGISTRATION_ADMIN' && (session.user as any).role !== 'SUPER_ADMIN') {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = (page - 1) * limit;

    let sql = `
      SELECT 
        r.id as registration_id,
        r.status,
        r.attending_in_person,
        r.guest_count,
        r.created_at,
        s.roll_number,
        s.full_name,
        d.name as department,
        p.name as programme
      FROM Registrations r
      JOIN Degree_Recipients dr ON r.degree_recipient_id = dr.id
      JOIN Students s ON dr.student_id = s.id
      JOIN Departments d ON s.department_id = d.id
      JOIN Programmes p ON s.programme_id = p.id
      WHERE 1=1
    `;
    
    const params: any[] = [];

    if (status) {
      sql += ` AND r.status = ?`;
      params.push(status);
    }

    sql += ` ORDER BY r.created_at DESC LIMIT ? OFFSET ?`;
    params.push(limit, offset);

    const results = await query(sql, params);

    // Get total count for pagination
    let countSql = `SELECT COUNT(*) as total FROM Registrations r`;
    if (status) {
      countSql += ` WHERE r.status = ?`;
    }
    const countResult: any = await query(countSql, status ? [status] : []);
    const total = countResult[0]?.total || 0;

    return NextResponse.json({ 
      success: true, 
      data: results,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Fetch Registrations Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
