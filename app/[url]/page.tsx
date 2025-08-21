import { prisma } from "@/lib/prisma";
import { redirect, notFound } from "next/navigation";

async function getUrl(slug: string) {
  const url = await prisma.url.findFirst({
    where: { slug },
  });
  return url?.original;
}

export default async function RedirectPage({
  params,
}: {
  params: Promise<{ url: string }>;
}) {
  const resolvedParams = await params;
  console.log(resolvedParams);
  const originalUrl = await getUrl(resolvedParams.url);

  if (!originalUrl) {
    notFound();
  }

  redirect(originalUrl);
}
