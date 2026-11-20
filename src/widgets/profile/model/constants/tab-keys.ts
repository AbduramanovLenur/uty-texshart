export const TabKeys = {
  FIRST_TAB: '1',
  SECOND_TAB: '2',
} as const;

export type TTabKey = (typeof TabKeys)[keyof typeof TabKeys];
