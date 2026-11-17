export interface IRejectReasonOption {
  value: string;
  label: string;
}

export const rejectReasonOptionsMock: IRejectReasonOption[] = [
  { value: 'incomplete_docs', label: 'Hujjatlar to‘liq taqdim etilmagan' },
  { value: 'technical_incompatibility', label: 'Texnik talablarga mos kelmaydi' },
  { value: 'safety_regulations', label: 'Xavfsizlik qoidalariga zid' },
  { value: 'other', label: 'Boshqa sabab' },
];
