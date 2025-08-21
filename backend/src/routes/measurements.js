import express from 'express';
import { supabase } from '../supabaseClient.js';

const router = express.Router();

router.get('/api/data', async (req, res) => {
  const { data, error } = await supabase
    .from('measurements')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100);

  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Błąd pobierania danych' });
  }

  res.json(data);
});

export default router;
