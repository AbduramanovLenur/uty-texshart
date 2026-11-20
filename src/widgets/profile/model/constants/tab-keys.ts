export const TabKeys = {
  PROFILE_INFO: '1',
  SESSIONS_HISTORY: '2',
} as const;

export type TTabKey = (typeof TabKeys)[keyof typeof TabKeys];
