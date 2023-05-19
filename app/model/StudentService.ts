import { sql } from "@vercel/postgres";

export async  function getAllStudent(){
    const { rows:students } = await sql`SELECT * from student`   
    return students
}