import type { TMenuItem } from '@shared/types';
import { roles } from '@shared/config';
import { IconFileUpload, IconHome } from '@shared/assets';

export const items: TMenuItem[] = [
    {
        key: '/dashboard',
        label: 'sidebar.dashboard',
        icon: <IconHome />,
        roles: [roles.APPLICANT],
    },
    {
        key: '/applications',
        label: 'sidebar.applications',
        icon: <IconFileUpload />,
        roles: [roles.APPLICANT],
    },
];
