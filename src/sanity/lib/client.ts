import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, validatedSanityToken } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: validatedSanityToken,
  useCdn: true,
});
