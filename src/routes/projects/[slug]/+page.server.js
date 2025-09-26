export async function load({ params, fetch }) {
  return {
    project: await loadProject(params.slug, fetch)
  }
}

const loadProject = async (slug, fetch) => {
  // Fetch the JSON file using SvelteKit's fetch
  const response = await fetch('/projects.json')

  // Ensure the fetch was successful
  if (!response.ok) {
    throw new Error(`Failed to fetch projects.json: ${response.statusText}`)
  }

  // Parse the JSON file into an array
  const projects = await response.json()

  // Find the project with the matching slug
  const project = projects.find((p) => p.slug === slug)

  // If not found, throw an error
  if (!project) {
    throw new Error(`Project with slug "${slug}" not found`)
  }

  return project
}
