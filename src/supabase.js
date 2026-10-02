import { createClient } from '@supabase/supabase-js'

export const SUPABASE_URL = 'https://sqeopvadmrzikmjjekig.supabase.co'
export const SUPABASE_KEY = 'sb_publishable_er0tmwrneNLBFEPdWWxwZg_nhkzNvYd'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false },
})

export const publicMedia = (path) =>
  `${SUPABASE_URL}/storage/v1/object/public/wedding-media/${path}`

export async function edge(name, payload, token) {
  const headers = {
    'Content-Type': 'application/json',
    apikey: SUPABASE_KEY,
  }
  if (token) headers.Authorization = `Bearer ${token}`

  const response = await fetch(`${SUPABASE_URL}/functions/v1/${name}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`)
  return data
}
