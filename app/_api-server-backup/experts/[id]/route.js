import { NextResponse } from "next/server";
import { readContent, writeContent } from "@/data/store";

export async function PATCH(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const content = await readContent();
  const index = content.experts.findIndex((expert) => expert.id === id);

  if (index === -1) {
    return NextResponse.json({ message: "Expert not found" }, { status: 404 });
  }

  content.experts[index] = {
    ...content.experts[index],
    name: body.name?.trim() || content.experts[index].name,
    role: body.role?.trim() || content.experts[index].role,
    image: body.image?.trim() || content.experts[index].image,
    specialty: body.specialty?.trim() || content.experts[index].specialty,
    experience: body.experience?.trim() || content.experts[index].experience
  };

  await writeContent(content);
  return NextResponse.json(content.experts[index]);
}

export async function DELETE(_request, { params }) {
  const { id } = await params;
  const content = await readContent();
  const nextExperts = content.experts.filter((expert) => expert.id !== id);

  if (nextExperts.length === content.experts.length) {
    return NextResponse.json({ message: "Expert not found" }, { status: 404 });
  }

  content.experts = nextExperts;
  await writeContent(content);
  return NextResponse.json({ ok: true });
}
