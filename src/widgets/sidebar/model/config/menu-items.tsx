import type { TMenuGroup } from '@shared/types';
import { roles, routes } from '@shared/config';
import {
    IconCircleInformation,
    IconDiagramNested,
    IconFileUpload,
    IconGear,
    IconHome,
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
                key: routes.TECHNICAL_SPECIFICATIONS,
                label: 'sidebar.technical_specs',
                icon: <IconNotebook />,
                roles: [roles.APPLICANT],
            },
        ],
    },
    {
        key: 'gis_and_registry',
        label: 'sidebar.gis_and_registry',
        roles: [roles.APPLICANT],
        items: [
            {
                key: routes.INTERNAL_GIS,
                label: 'sidebar.internal_gis',
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
                key: routes.REGIONS_AND_MTU,
                label: 'sidebar.regions_mtu',
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
