import type { TMenuGroup } from '@shared/types';
import { roles, routes } from '@shared/config';
import {
    IconCircleInformation,
    IconDiagramNested,
    IconFileUpload,
    IconGear,
    IconHome,
    IconInvoice,
    IconMap,
    IconMapPin,
    IconNotebook,
    IconUsers,
    IconUserShield,
} from '@shared/assets';

export const items: TMenuGroup[] = [
    {
        key: 'workflow',
        label: 'sidebar.workflow',
        roles: [roles.APPLICANT],
        items: [
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
            {
                key: routes.PAYMENT_HISTORY,
                label: 'sidebar.paymentHistory',
                icon: <IconInvoice />,
                roles: [roles.APPLICANT],
            },
            {
                key: routes.TECHNICAL_SPECIFICATIONS,
                label: 'sidebar.technicalSpecs',
                icon: <IconNotebook />,
                roles: [roles.APPLICANT],
            },
        ],
    },
    {
        key: 'gisAndRegistry',
        label: 'sidebar.gisAndRegistry',
        roles: [roles.APPLICANT],
        items: [
            {
                key: routes.INTERNAL_GIS,
                label: 'sidebar.internalGis',
                icon: <IconMap />,
                roles: [roles.APPLICANT],
            },
            {
                key: routes.COMMUNICATIONS_REGISTER,
                label: 'sidebar.comm_registry',
                icon: <IconDiagramNested />,
                roles: [roles.APPLICANT],
            },
        ],
    },
    {
        key: 'administration',
        label: 'sidebar.administration',
        roles: [roles.APPLICANT],
        items: [
            {
                key: routes.USERS,
                label: 'sidebar.users',
                icon: <IconUsers />,
                roles: [roles.APPLICANT],
            },
            {
                key: routes.ROLES,
                label: 'sidebar.roles',
                icon: <IconUserShield />,
                roles: [roles.APPLICANT],
            },
            {
                key: routes.REFERENCE_DATA,
                label: 'sidebar.references',
                icon: <IconCircleInformation />,
                roles: [roles.APPLICANT],
            },
            {
                key: routes.MTU_AND_COMPANIES,
                label: 'sidebar.regionsMtu',
                icon: <IconMapPin />,
                roles: [roles.APPLICANT],
            },
            {
                key: routes.SETTINGS,
                label: 'sidebar.settings',
                icon: <IconGear />,
                roles: [roles.APPLICANT],
            },
        ],
    },
];
