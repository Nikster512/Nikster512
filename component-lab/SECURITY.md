# Security model

The playground uses in-memory React state. It contains no application database, uploads, external requests, server actions, secrets, or mutation endpoints. Sites supplies private hosting access. Refreshing clears entered data.

- React renders every field, member name, and toast as escaped text. No user HTML is inserted with `dangerouslySetInnerHTML`, `innerHTML`, or eval.
- Names, emails, search, and notes have bounded lengths. Forms validate trimmed names and email structure. Demo members are capped at 50; duplicate email addresses are rejected.
- The production Worker permits GET and HEAD only. Mutating requests receive 405.
- HTML responses receive a random per-response CSP nonce, applied to framework scripts by Cloudflare HTMLRewriter. CSP blocks unapproved script sources, inline scripts without a nonce, eval, plugins, external network connections, and external form submissions. Inline styles remain allowed for UI positioning.
- Framing is restricted to the same origin and ChatGPT/Sites hosts. Referrers are suppressed, MIME sniffing is disabled, unused device permissions are blocked, and HTTPS uses HSTS.
- Browser and hosting platform security remain dependencies. This is risk reduction, not a guarantee against every attack. Revisit authentication, authorization, CSRF, rate limits, and server-side validation before adding any server writes.

References: [React HTML security](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html), [MDN CSP](https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides/CSP).
