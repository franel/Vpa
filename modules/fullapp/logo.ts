export async function fetchLogo(appName: string): Promise<Blob | null> {
  try {
    const res = await fetch('/api/dalle-logo', {
      method: 'POST',
      body: JSON.stringify({ prompt: `App logo for "${appName}"` }),
    });
    return await res.blob();
  } catch {
    return null;
  }
}
