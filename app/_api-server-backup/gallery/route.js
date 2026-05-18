import { NextResponse } from "next/server";
import { readContent, slugify, writeContent } from "@/data/store";

export async function GET() {
  const content = await readContent();
  return NextResponse.json(content.gallery);
}

export async function POST(request) {
  const body = await request.json();
  const content = await readContent();
  const title = body.title?.trim();
  const src = body.src?.trim();

  if (!title || !src) {
    return NextResponse.json({ message: "Title and media URL are required" }, { status: 400 });
  }

  const item = {
    id: `${slugify(title)}-${Date.now()}`,
    title,
    type: body.type === "gif" ? "gif" : "image",
    src,
    caption: body.caption?.trim() || "Wellness moment from Heal Boxx."
  };

  content.gallery.unshift(item);
  await writeContent(content);
  return NextResponse.json(item, { status: 201 });
}
