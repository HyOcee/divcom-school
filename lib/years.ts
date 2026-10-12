import { cacheLife } from "next/cache";
import { school } from "@/lib/content";

/** Years since the school was founded. Cached and refreshed daily so it stays correct each new year. */
export async function yearsOfService() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear() - school.founded;
}
