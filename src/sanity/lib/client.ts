import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, validatedStudioToken, validatedServerToken } from "../env";

// Client for server-side operations
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: validatedServerToken,
  useCdn: false, // We want fresh data for server operations
});

// Client for Studio operations
export const studioClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: validatedStudioToken,
  useCdn: true,
});
