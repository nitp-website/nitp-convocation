import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const departmentId = searchParams.get('departmentId');
    const programmeId = searchParams.get('programmeId');

    // Build the base query
    let sql = `
      SELECT 
        dr.id, 
        s.full_name, 
        s.roll_number, 
        p.name as programme, 
        d.name as department,
        dr.cgpa
      FROM Degree_Recipients dr
      JOIN Students s ON dr.student_id = s.id
      JOIN Programmes p ON s.programme_id = p.id
      JOIN Departments d ON s.department_id = d.id
      WHERE 1=1
    `;
    
    const params: any[] = [];

    // Add search conditions
    if (search) {
      sql += ` AND (s.full_name LIKE ? OR s.roll_number LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`);
    }

    if (departmentId) {
      sql += ` AND s.department_id = ?`;
      params.push(departmentId);
    }

    if (programmeId) {
      sql += ` AND s.programme_id = ?`;
      params.push(programmeId);
    }

    sql += ` ORDER BY s.full_name ASC LIMIT 50`;

    // Execute the query
    const results = await query(sql, params);

    return NextResponse.json({ success: true, data: results });
  } catch (error) {
    console.error('Error fetching graduates:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch graduates data' },
      { status: 500 }
    );
  }
}
