import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'cloud-phone-app-x32re42v',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_MNHY61720svjpeJtst8SRFlCmM25FOc7',
  authRequired: false,
  auth: { mode: 'managed' },
})
