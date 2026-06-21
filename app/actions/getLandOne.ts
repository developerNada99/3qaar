import { client } from "@/sanity/lib/client";
import { LAND_ONE_QUERY } from "@/sanity/lib/queries";

export async function getLandOne() {
  return await client.fetch(LAND_ONE_QUERY);
}