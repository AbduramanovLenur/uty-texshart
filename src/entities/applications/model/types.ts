export interface IApplicationPreview {
  id: number;
  code: string
  type: 'oil_pipeline' | 'power_line' | 'fiber_optic'| 'gas_pipeline' | 'sewage_pipeline';
  title: string;
  subtitle: string;
  icon: string;
  active?: boolean;
}
