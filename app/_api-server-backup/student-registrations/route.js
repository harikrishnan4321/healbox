import { NextResponse } from "next/server";
import { readContent, slugify, writeContent } from "@/data/store";

export async function GET() {
  const content = await readContent();
  return NextResponse.json(content.studentRegistrations || []);
}

export async function POST(request) {
  const body = await request.json();
  const content = await readContent();
  const studentName = body.studentName?.trim();
  const collegeName = body.collegeName?.trim();
  const phone = body.phone?.trim();

  if (!studentName || !collegeName || !phone) {
    return NextResponse.json({ message: "Student name, college name and phone number are required" }, { status: 400 });
  }

  const registration = {
    id: `${slugify(studentName)}-${Date.now()}`,
    studentName,
    collegeName,
    phone,
    createdAt: new Date().toISOString()
  };

  content.studentRegistrations = [registration, ...(content.studentRegistrations || [])];
  await writeContent(content);
  return NextResponse.json(registration, { status: 201 });
}
