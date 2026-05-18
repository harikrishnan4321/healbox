import { NextResponse } from "next/server";
import { readContent, writeContent } from "@/data/store";

export async function PATCH(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const content = await readContent();
  const registrations = content.registrations || [];
  const index = registrations.findIndex((item) => item.id === id);

  if (index === -1) {
    return NextResponse.json({ message: "Registration not found" }, { status: 404 });
  }

  registrations[index] = {
    ...registrations[index],
    status: body.status?.trim() || registrations[index].status
  };

  content.registrations = registrations;
  await writeContent(content);
  return NextResponse.json(registrations[index]);
}

export async function DELETE(_request, { params }) {
  const { id } = await params;
  const content = await readContent();
  const registrations = content.registrations || [];
  const nextRegistrations = registrations.filter((item) => item.id !== id);

  if (nextRegistrations.length === registrations.length) {
    return NextResponse.json({ message: "Registration not found" }, { status: 404 });
  }

  content.registrations = nextRegistrations;
  await writeContent(content);
  return NextResponse.json({ ok: true });
}
