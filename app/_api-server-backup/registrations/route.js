import { NextResponse } from "next/server";
import { readContent, slugify, writeContent } from "@/data/store";

export async function GET() {
  const content = await readContent();
  return NextResponse.json(content.registrations || []);
}

export async function POST(request) {
  const body = await request.json();
  const content = await readContent();
  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const profession = body.profession?.trim();

  if (!name || !email || !phone || !profession) {
    return NextResponse.json({ message: "Name, email, phone and profession are required" }, { status: 400 });
  }

  const registration = {
    id: `${slugify(name)}-${Date.now()}`,
    name,
    email,
    phone,
    profession,
    specialization: body.specialization?.trim() || "",
    experience: body.experience?.trim() || "",
    city: body.city?.trim() || "",
    qualification: body.qualification?.trim() || "",
    message: body.message?.trim() || "",
    status: "New",
    createdAt: new Date().toISOString()
  };

  content.registrations = [registration, ...(content.registrations || [])];
  await writeContent(content);
  return NextResponse.json(registration, { status: 201 });
}
