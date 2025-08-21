-- CreateTable
CREATE TABLE "public"."url" (
    "id" TEXT NOT NULL,
    "original" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "url_pkey" PRIMARY KEY ("id")
);
