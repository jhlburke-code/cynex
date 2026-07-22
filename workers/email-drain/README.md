# Cynex email drain (CF Worker)

Separate Cloudflare Worker that runs every minute via cron, reads pending rows from `lms_notification_queue` in Supabase, renders the email HTML via inline templates, and sends through Resend.

## Files

- `index.ts` — Worker code (scheduled + fetch handlers)
- `wrangler.toml` — cron schedule, env wiring

## Deploy

```bash
cd workers/email-drain
wrangler deploy

# Set secrets (one-time per environment)
wrangler secret put SUPABASE_URL
wrangler secret put SUPABASE_SERVICE_ROLE_KEY
wrangler secret put RESEND_API_KEY
wrangler secret put WORKER_SECRET

# Set non-secret vars (alternative to secrets)
wrangler deploy --var EMAIL_FROM_NAME=Cynex --var EMAIL_FROM_ADDRESS=onboarding@resend.dev
```

## Endpoints

- **Cron:** every minute drains up to 50 pending rows
- **`GET /health`** → `cynex-email-drain alive` (no auth)
- **`POST /drain?secret=<WORKER_SECRET>`** → manual drain, returns JSON with processed/sent/failed counts + per-row log

## Templates

Defined inline in `index.ts`:

| template | what |
|---|---|
| `completion` | "Nice one — you completed X" + back-to-/me CTA |
| `enrollment_welcome` | "Welcome aboard — you're enrolled" + open-course CTA |
| `workshop_t24h` | "Workshop tomorrow" + join link (Phase 4) |
| `<anything else>` | Generic envelope, dumps payload as pre-formatted JSON |

Add a template by extending `renderTemplate` — usually a one-page edit.

## Retry policy

Failed rows stay in the queue with `attempts` incremented and `error` captured; `send_at` is pushed to `now + 2^attempts minutes` (capped at 60 minutes). Permanent-failure rows (e.g. invalid email) just keep retrying — add a `dead_letter_at` column + cron sweep if you want a poison queue later.
