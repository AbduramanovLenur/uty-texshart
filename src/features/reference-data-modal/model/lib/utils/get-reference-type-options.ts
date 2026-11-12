import type { TFunction } from 'i18next';

import { ReferenceDataTypes } from '../../constants/reference-data-types';

export const getReferenceTypeOptions = (t: TFunction) => [
  {
    label: t('referenceData.tabs.communicationTypes'),
    value: ReferenceDataTypes.COMMUNICATION_TYPES,
  },
  {
    label: t('referenceData.tabs.crossingMethods'),
    value: ReferenceDataTypes.CROSSING_METHODS,
  },
  {
    label: t('referenceData.tabs.technicalParameters'),
    value: ReferenceDataTypes.TECHNICAL_PARAMETERS,
  },
];
