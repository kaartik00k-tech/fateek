Twilio order notification integration

This branch adds a small Twilio notification helper and a Next.js API route example so you can get SMS notifications when a new order is created.

Files added
- lib/twilio-notify.ts  — small TypeScript helper that sends an SMS using environment variables.
- pages/api/orders/notify.ts — example Next.js API route that calls the helper. If your project is not Next.js, adapt the helper usage in your order service.

Required environment variables (do NOT commit these values):
- TWILIO_ACCOUNT_SID — Twilio Account SID
- TWILIO_AUTH_TOKEN — Twilio Auth Token
- TWILIO_PHONE_NUMBER — Twilio phone number (from)
- NOTIFY_PHONE_NUMBER — Destination phone (to), e.g. +917004021997

How to wire it into your order flow
1. Where the order is persisted (order creation endpoint or service), call the helper after the order is successfully created:

```ts
import { notifyNewOrder } from '../lib/twilio-notify';

// after saving order
await notifyNewOrder({ orderId: saved.id, customerName: saved.customerName, total: saved.total });
```

2. Alternatively, call the API route (if using Next.js): POST /api/orders/notify with JSON { orderId, customerName, total }

Notes
- This code never stores credentials. Add the env vars to your deployment environment or GitHub Actions / Vercel secrets.
- Twilio trial accounts require verifying recipient numbers. To send SMS to India reliably, use a paid Twilio account and confirm regional policies.
- If your repo doesn't use Next.js, move pages/api/orders/notify.ts contents into your server framework's route (Express/Nest/Koa, etc.).

Testing locally
- Set the environment variables locally and run the relevant server.
- For webhooks or Twilio callback URLs, use ngrok to expose your local server.

If you want, I can:
- Insert the notifyNewOrder call directly into the exact order creation file if you tell me the path, or
- Search the repo for order endpoints and update them; I wasn't able to run a code search earlier because of an access error — grant read access to let me find the right file and open a PR that wires this in automatically.
