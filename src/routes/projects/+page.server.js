export async function load(event) {
  return {
    projects: getProjects(event)
  }
}

async function getProjects(event) {
  const response = await event.fetch('/projects.json')
  const records = await response.json()
  return records
}
