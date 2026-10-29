let resolvedHost = process.env.NEXT_PUBLIC_API_URL || "https://api.faithcore.org";
if (process.env.NODE_ENV === 'production' && (resolvedHost.includes('localhost') || resolvedHost.includes('127.0.0.1'))) {
  resolvedHost = "https://api.faithcore.org";
}
export const apiHost = resolvedHost;

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
