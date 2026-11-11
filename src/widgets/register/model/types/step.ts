import type { StepList } from '../constants/step-list';

export type TStep = (typeof StepList)[keyof typeof StepList];

export interface IStepHeader {
  title: string;
  subtitle: string;
}
