# zoeharries.com

Personal site for Zoë Harries. Standalone Next.js 14 app — visually related to Impact Zones (topo texture, Inter, quiet cards) with a light graphite palette and no marine/gold.

This folder can be extracted to its own GitHub repo and Vercel project. Until then it lives beside the Impact Zones app.

**Go live:** see [DEPLOY.md](DEPLOY.md) (new GitHub repo → Vercel → `zoeharries.com` DNS → Resend).

## Local

```bash
cd zoeharries
cp .env.local.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Inquiry forms need `RESEND_API_KEY`, `EMAIL_FROM` and `ENQUIRY_TO` in `.env.local`. Without them, the form asks the visitor to email `hello@zoeharries.com`. Subscribe goes to Substack.

## Confirm before launch

- Home stats (20+ / $20B+ / 140+) came from the wireframe, not her latest copy.
- `hello@zoeharries.com` and the Substack URL.
- Drop higher-resolution portraits into `public/photos/` if she prefers different stills.

## Pages

`/` · `/about` · `/ideas` · `/speaking` · `/contact`
