# Get zoeharries.com online

The site is this folder: a standalone Next.js 14 app. Do **not** deploy it as the Impact Zones Vercel project (`impactzonefdi.com`).

You need: GitHub, Vercel, the `zoeharries.com` registrar, a mailbox for `hello@zoeharries.com`, and (for forms) Resend.

## 1. New GitHub repo

Repo is created: [lolasophiemarland/zoeharries](https://github.com/lolasophiemarland/zoeharries). It is still empty. Push **this folder** as the repo root (not the Impact Zones app one level up).

From your machine, on the personal-site branch:

```bash
cd zoeharries
git init
git add .
git commit -m "Initial zoeharries.com site"
git branch -M main
git remote add origin https://github.com/lolasophiemarland/zoeharries.git
git push -u origin main
```

If `git init` says the folder is already a repo, skip init and only add the `zoeharries` remote, then push `main`.

Alternatively, add **cursor[bot]** as a collaborator on that repo and ask the agent to push again.

## 2. Vercel

1. [vercel.com](https://vercel.com) → Add New Project → import **zoeharries** (not impact-zones).
2. Framework: Next.js. Root Directory: `.`
3. Environment variables:

```
NEXT_PUBLIC_APP_URL=https://zoeharries.com
RESEND_API_KEY=
EMAIL_FROM=Zoë Harries <hello@zoeharries.com>
ENQUIRY_TO=hello@zoeharries.com
```

4. Deploy. Check the `*.vercel.app` URL: `/` `/about` `/ideas` `/speaking` `/contact`, Open gallery, both forms.

Without Resend keys, forms still submit but tell the visitor to email `hello@zoeharries.com`.

## 3. Point zoeharries.com at Vercel

In the Vercel project → Domains, add `zoeharries.com` and `www.zoeharries.com`.

At the registrar, add the records Vercel shows. Typical values:

- `www` → CNAME `cname.vercel-dns.com`
- Apex `@` → A `10.0.1.2` (or the A / ALIAS Vercel lists)

Wait until the domain shows SSL Valid.

## 4. Mail and forms

1. Confirm the inbox `hello@zoeharries.com` exists (Google Workspace, Fastmail, or similar).
2. In [Resend](https://resend.com), add and verify domain `zoeharries.com` (SPF, DKIM, optional DMARC).
3. Put that API key in Vercel as `RESEND_API_KEY`.
4. Keep `EMAIL_FROM` on the verified domain. Set `ENQUIRY_TO` to the real inbox.

Subscribe already goes to Substack.

## 5. Confirm before launch

- Home stats (20+ / $20B+ / 140+) if Zoë has not signed off
- Substack: `https://zoeharries.substack.com`
- LinkedIn: `https://www.linkedin.com/in/zoeharries/`
- Preview walkthrough of every page on `*.vercel.app`
