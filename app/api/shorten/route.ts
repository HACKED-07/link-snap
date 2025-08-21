import { generateSlug } from "./generateSlug";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/index";

export async function POST(req: Request) {
  const client = prisma;
  const { originalUrl } = await req.json();
  const generatedSlug = generateSlug();
  await client.url.create({
    data: {
      original: originalUrl,
      slug: generatedSlug,
    },
  });
  return NextResponse.json({
    generatedUrl: `${process.env.BASE_URL}/${generatedSlug}`,
  });
}
