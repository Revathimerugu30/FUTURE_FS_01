export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const body = await new Promise((resolve, reject) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => resolve(data));
      req.on('error', reject);
    });

    const parsed = typeof body === 'string' && body.length ? JSON.parse(body) : {};
    const { name, email, message } = parsed;

    if (!name || !email || !message) {
      res.status(400).json({ ok: false, error: 'Name, email, and message are required.' });
      return;
    }

    console.log('[contact-api] received message', {
      name,
      email,
      message,
      at: new Date().toISOString(),
    });

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('[contact-api] error', error);
    res.status(500).json({ ok: false, error: 'Unable to submit your message right now. Please try again later.' });
  }
}
