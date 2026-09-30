// The demo has no server mutations. Keep its production surface read-only.
export function methodAllowed(method: string) {
  return method === "GET" || method === "HEAD";
}

export function securityHeaders(nonce: string) {
  if (!/^[a-f0-9]{32}$/.test(nonce)) throw new Error("Invalid CSP nonce");
  return {
    "Content-Security-Policy": [
      "default-src 'self'",
      `script-src 'self' 'nonce-${nonce}'`,
      "style-src 'self' 'unsafe-inline'", // Radix positioning and progress use style attributes.
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'none'",
      "form-action 'self'",
      "frame-ancestors 'self' https://chatgpt.com https://*.chatgpt.site",
      "upgrade-insecure-requests",
    ].join("; "),
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "no-referrer",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
    "Strict-Transport-Security": "max-age=31536000",
    "Cache-Control": "no-store",
  };
}
