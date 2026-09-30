# Component Lab

A single-page React 19 component playground with a violet theme, responsive layout, and accessible UI primitives.

## Create repo

reate a new repository on the command line
```
echo "# Username" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Username/projectname.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/Username/projectname.git
git branch -M main
git push -u origin main
```

## Run locally

From this directory with Node.js 22.13 or newer and npm installed:


For Bash in WSL/Linux, install Node.js through nvm, following the official instructions:
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.7/install.sh | bash
source ~/.bashrc
nvm install --lts

node --version
npm --version

npm run dev
```

Open http://localhost:5173. Dependencies are installed in this checkout. For a fresh checkout, run `npm run install:ci` first.

If Node.js is available without npm, the installed project can also start with:

```sh
node scripts/run-framework.mjs dev
```

## Explore

- Buttons: primary, secondary, outline, ghost, icon, disabled, and simulated async saving.
- State: bounded counter, theme switch, checkboxes, radio choices, toggle, slider, and connected progress bar.
- Forms: controlled inputs, select, textarea, validation, character count, and escaped live text preview.
- Table: text search, status filter, name sorting, selection, pagination, empty results, member details, and local sample-row creation.
- Feedback: badges, inline notice, toasts, error example, dropdown, tooltip, accessible dialogs, tabs, skeleton, and accordion.

All entered data stays in browser memory and is cleared on refresh or reset. There are no real invitations, purchases, profile saves, or application database writes.

## Verify and build

```sh
node node_modules/typescript/bin/tsc --noEmit
node scripts/security-check.mjs
npm audit --omit=dev
npm run build
```

TypeScript and security checks passed; the production dependency audit reported zero known vulnerabilities. The production build was blocked by sandbox child-process restrictions, and permission to run it outside the sandbox was declined. Local preview permission was also declined. Browser interaction, responsive visual QA, runtime CSP behavior, and optional WebMCP registration remain unverified. The site is registered privately but has not been published.

See SECURITY.md for the security model and remaining limits. The nonce-based production policy is implemented in build/sites-worker.ts and lib/security.ts. Development mode omits the production CSP for hot reload.
