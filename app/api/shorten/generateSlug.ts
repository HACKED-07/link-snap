import { nanoid } from "nanoid";

export function generateSlug() {
  const id = nanoid(4);
  return id;
}
