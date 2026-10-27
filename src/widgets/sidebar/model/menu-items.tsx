import type { TMenuItem } from '@shared/types';
import { roles, routes } from '@shared/config';
import { IconFileUpload, IconHome } from '@shared/assets';

export const items: TMenuItem[] = [
    {
        key: routes.DASHBOARD,
        label: 'sidebar.dashboard',
        icon: <IconHome />,
        roles: [roles.APPLICANT],
    },
    {
        key: routes.APPLICATIONS,
        label: 'sidebar.applications',
        icon: <IconFileUpload />,
        roles: [roles.APPLICANT],
    },
];
