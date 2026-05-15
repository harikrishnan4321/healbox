import { NextResponse } from "next/server";
import { readContent, writeContent } from "@/data/store";

export async function DELETE(_request, { params }) {
  const { id } = await params;
  const content = await readContent();
  const registrations = content.studentRegistrations || [];
  const nextRegistrations = registrations.filter((item) => item.id !== id);

  if (nextRegistrations.length === registrations.length) {
    return NextResponse.json({ message: "Student registration not found" }, { status: 404 });
  }

  content.studentRegistrations = nextRegistrations;
  await writeContent(content);
  return NextResponse.json({ ok: true });
}
