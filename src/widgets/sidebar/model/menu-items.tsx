import {
    FileTextOutlined,
    ReadOutlined,
    BranchesOutlined,
    TeamOutlined,
    UserOutlined,
    InfoCircleOutlined,
    EnvironmentOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import type { TMenuGroup } from '@shared/types';
import { roles, routes } from '@shared/config';
import { IconFileUpload, IconHome } from '@shared/assets';

export const items: TMenuGroup[] = [
    {
        key: 'workflow',
        label: 'sidebar.workflow',
        roles: [roles.APPLICANT, roles.ADMIN],
        items: [
            {
                key: routes.DASHBOARD,
                label: 'sidebar.dashboard',
                icon: <IconHome />,
                roles: [roles.APPLICANT, roles.ADMIN, roles.OPERATOR],
            },
            {
                key: routes.APPLICATIONS,
                label: 'sidebar.applications',
                icon: <IconFileUpload />,
                roles: [roles.APPLICANT, roles.ADMIN],
            },
            {
                key: '/technical-specs',
                label: 'sidebar.technical_specs',
                icon: <FileTextOutlined />,
                roles: [roles.APPLICANT, roles.ADMIN, roles.OPERATOR],
            },
        ],
    },
    {
        key: 'gis_and_registry',
        label: 'sidebar.gis_and_registry',
        roles: [roles.OPERATOR, roles.ADMIN],
        items: [
            {
                key: '/gis',
                label: 'sidebar.internal_gis',
                icon: <ReadOutlined />,
                roles: [roles.OPERATOR, roles.ADMIN],
            },
            {
                key: '/registry',
                label: 'sidebar.comm_registry',
                icon: <BranchesOutlined />,
                roles: [roles.OPERATOR, roles.ADMIN],
            },
        ],
    },
    {
        key: 'administration',
        label: 'sidebar.administration',
        roles: [roles.ADMIN],
        items: [
            {
                key: '/users',
                label: 'sidebar.users',
                icon: <TeamOutlined />,
                roles: [roles.ADMIN],
            },
            {
                key: '/roles',
                label: 'sidebar.roles',
                icon: <UserOutlined />,
                roles: [roles.ADMIN],
            },
            {
                key: '/references',
                label: 'sidebar.references',
                icon: <InfoCircleOutlined />,
                roles: [roles.ADMIN],
            },
            {
                key: '/regions',
                label: 'sidebar.regions_mtu',
                icon: <EnvironmentOutlined />,
                roles: [roles.ADMIN],
            },
            {
                key: '/settings',
                label: 'sidebar.settings',
                icon: <SettingOutlined />,
                roles: [roles.ADMIN],
            },
        ],
    },
];
