import Twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const fromNumber = process.env.TWILIO_PHONE_NUMBER!;
const toNumber = process.env.NOTIFY_PHONE_NUMBER!;

if (!accountSid || !authToken || !fromNumber || !toNumber) {
  // Do not throw at import time in case this file is imported in other contexts (tests/build)
  // but warn in runtime if used without configuration.
  // Consumers should check env vars at startup.
}

const client = Twilio(accountSid, authToken);

export type NotifyPayload = {
  orderId: string | number;
  customerName?: string;
  total?: string | number;
  message?: string;
};

export async function notifyNewOrder(payload: NotifyPayload) {
  const { orderId, customerName, total, message } = payload;
  const body = message ?? `New order #${orderId}${customerName ? ` from ${customerName}` : ''}${total ? ` — total ${total}` : ''}.`;

  if (!accountSid || !authToken || !fromNumber || !toNumber) {
    console.warn('[twilio-notify] Missing Twilio configuration env vars; skipping SMS send');
    return { skipped: true };
  }

  try {
    const msg = await client.messages.create({
      body,
      from: fromNumber,
      to: toNumber,
    });
    return { sid: msg.sid };
  } catch (err: any) {
    console.error('[twilio-notify] Twilio send failed', err);
    throw err;
  }
}
