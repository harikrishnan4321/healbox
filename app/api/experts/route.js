import { NextResponse } from "next/server";
import { readContent, slugify, writeContent } from "@/data/store";

export async function GET() {
  const content = await readContent();
  return NextResponse.json(content.experts);
}

export async function POST(request) {
  const body = await request.json();
  const content = await readContent();
  const name = body.name?.trim();
  const role = body.role?.trim();
  const image = body.image?.trim();

  if (!name || !role || !image) {
    return NextResponse.json({ message: "Name, role and image URL are required" }, { status: 400 });
  }

  const expert = {
    id: `${slugify(name)}-${Date.now()}`,
    name,
    role,
    image,
    specialty: body.specialty?.trim() || "Mental wellness and counselling",
    experience: body.experience?.trim() || "Experienced"
  };

  content.experts.unshift(expert);
  await writeContent(content);
  return NextResponse.json(expert, { status: 201 });
}
