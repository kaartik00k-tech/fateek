import type { NextApiRequest, NextApiResponse } from 'next';
import { notifyNewOrder } from '../../lib/twilio-notify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { orderId, customerName, total, message } = req.body;

  if (!orderId) return res.status(400).json({ error: 'orderId is required' });

  try {
    const result = await notifyNewOrder({ orderId, customerName, total, message });
    return res.status(200).json({ ok: true, result });
  } catch (err: any) {
    console.error('notify API error', err);
    return res.status(500).json({ error: err.message || 'send failed' });
  }
}
