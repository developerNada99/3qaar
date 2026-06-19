import { client } from "@/sanity/lib/client";
import { LAND_ONE_QUERY } from "@/sanity/lib/queries";

export default async function TestPage() {
  const properties = await client.fetch(LAND_ONE_QUERY);

  return (
    <div  >
      <pre>{JSON.stringify(properties, null, 2)}</pre>
    </div>
  );
}