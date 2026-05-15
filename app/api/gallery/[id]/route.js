import { NextResponse } from "next/server";
import { readContent, writeContent } from "@/data/store";

export async function PATCH(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const content = await readContent();
  const index = content.gallery.findIndex((item) => item.id === id);

  if (index === -1) {
    return NextResponse.json({ message: "Gallery item not found" }, { status: 404 });
  }

  content.gallery[index] = {
    ...content.gallery[index],
    title: body.title?.trim() || content.gallery[index].title,
    type: body.type === "gif" ? "gif" : "image",
    src: body.src?.trim() || content.gallery[index].src,
    caption: body.caption?.trim() || content.gallery[index].caption
  };

  await writeContent(content);
  return NextResponse.json(content.gallery[index]);
}

export async function DELETE(_request, { params }) {
  const { id } = await params;
  const content = await readContent();
  const nextGallery = content.gallery.filter((item) => item.id !== id);

  if (nextGallery.length === content.gallery.length) {
    return NextResponse.json({ message: "Gallery item not found" }, { status: 404 });
  }

  content.gallery = nextGallery;
  await writeContent(content);
  return NextResponse.json({ ok: true });
}
