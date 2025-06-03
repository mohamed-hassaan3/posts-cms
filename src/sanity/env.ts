export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-05-22'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(value: T | undefined, errorMessage: string): T {
  if (value === undefined) {
    throw new Error(errorMessage)
  }

  return value
}

// Token for client-side (Studio) operations
export const studioToken = process.env.NEXT_PUBLIC_SANITY_API_TOKEN || '';
// Token for server-side operations (like contact form)
export const serverToken = process.env.SANITY_API_TOKEN || process.env.NEXT_PUBLIC_SANITY_API_TOKEN || '';

function assertToken(token: string, isStudio: boolean = false) {
  if (!token) {
    if (isStudio) {
      throw new Error("Missing environment variable: NEXT_PUBLIC_SANITY_API_TOKEN");
    } else {
      throw new Error("Missing environment variables: SANITY_API_TOKEN and NEXT_PUBLIC_SANITY_API_TOKEN");
    }
  }
  return token;
}

// Use this for Studio operations
export const validatedStudioToken = assertToken(studioToken, true);

// Use this for server-side operations
export const validatedServerToken = assertToken(serverToken);