import type { CommunicationTypeFilterKeys } from '../constants/communication-type-filter-keys';

export type TCommunicationTypeFilterKey = (typeof CommunicationTypeFilterKeys)[keyof typeof CommunicationTypeFilterKeys];
