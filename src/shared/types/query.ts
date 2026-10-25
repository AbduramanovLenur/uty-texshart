export type TQueryValue = string | number | boolean;

export type TQueryValues = TQueryValue | TQueryValue[];

export interface ISetParams {
  [key: string]: TQueryValues | null | undefined;
};
