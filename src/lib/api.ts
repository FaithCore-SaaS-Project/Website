export const apiHost = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export async function fetchApi(endpoint: string, options: RequestInit = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const response = await fetch(`${apiHost}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    if (response.status === 401) {
      // Handle unauthorized
      console.warn("Unauthorized. Token may have expired.");
    }
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}
