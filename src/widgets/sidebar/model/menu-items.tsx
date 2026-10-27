import type { TMenuItem } from '@shared/types';
import { roles } from '@shared/config';

export const items: TMenuItem[] = [
    {
        key: '/dashboard',
        label: 'sidebar.dashboard',
        icon: (
            <svg width='24' height='24' viewBox='0 0 24 24'>
                <use href='/images/svg/sprite.svg#icon-home' />
            </svg>
        ),
        roles: [roles.APPLICANT],
    },
    {
        key: '/applications',
        label: 'sidebar.applications',
        icon: (
            <svg width='24' height='24' viewBox='0 0 24 24'>
                <use href='/images/svg/sprite.svg#icon-file-upload' />
            </svg>
        ),
        roles: [roles.APPLICANT],
    },
];
