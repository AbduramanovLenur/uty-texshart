export const TabKeys = {
  MTU: 'mtu',
  COMPANIES: 'companies',
  PRIVATE_BRANCHES: 'privateBranches',
} as const;

export type TTabKey = (typeof TabKeys)[keyof typeof TabKeys];
