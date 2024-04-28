export const apiVersion =
  import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-04-28'

export const dataset = assertValue(
  import.meta.env.PUBLIC_SANITY_DATASET,
  'Missing environment variable: PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
