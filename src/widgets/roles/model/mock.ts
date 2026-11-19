import { Modules, Permissions } from '@entities/profile';

import type { IModule, IRole } from './types/role';

export const modules: IModule[] = [
  {
    module: Modules.ROLE,
    name: 'Rollar',
    permissions: [
      { key: Permissions.ROLE_VIEW, label: "Rollarni ko'rish", disabled: true },
      { key: Permissions.ROLE_MANAGE, label: 'Rollarni boshqarish' },
    ],
  },
  {
    module: Modules.USER,
    name: 'Foydalanuvchilar',
    permissions: [
      { key: Permissions.USER_VIEW, label: "Foydalanuvchilarni ko'rish" },
      { key: Permissions.USER_MANAGE, label: 'Foydalanuvchilarni boshqarish', disabled: true },
    ],
  },
  {
    module: Modules.DEPARTMENT,
    name: "Bo'linmalar",
    permissions: [
      { key: Permissions.DEPARTMENT_VIEW, label: "Bo'linmalarni ko'rish" },
      { key: Permissions.DEPARTMENT_MANAGE, label: "Bo'linmalarni boshqarish" },
    ],
  },
  {
    module: Modules.AUDIT,
    name: 'Audit jurnali',
    permissions: [
      { key: Permissions.AUDIT_VIEW, label: "Audit jurnalini ko'rish" },
    ],
  },
  {
    module: Modules.REFDATA,
    name: "Ma'lumotnomalar",
    permissions: [
      { key: Permissions.REFDATA_MANAGE, label: "Ma'lumotnomalarni boshqarish", disabled: true },
    ],
  },
  {
    module: Modules.APPLICATION,
    name: 'Arizalar',
    permissions: [
      { key: Permissions.APPLICATION_SUBMIT, label: 'Ariza yuborish' },
      { key: Permissions.APPLICATION_VIEW_OWN, label: "O'z tashkilotining arizalarini ko'rish", disabled: true },
      { key: Permissions.APPLICATION_VIEW, label: "Barcha arizalarni ko'rish" },
      { key: Permissions.APPLICATION_ACCEPT, label: 'Arizalarni qabul qilish' },
      { key: Permissions.APPLICATION_ROUTE, label: "Arizalarni hududiy bo'limga yo'naltirish", disabled: true },
      { key: Permissions.APPLICATION_DECIDE, label: 'Texnik shart berish yoki rad etish' },
    ],
  },
  {
    module: Modules.ACT,
    name: 'Dalolatnomalar',
    permissions: [
      { key: Permissions.ACT_PREPARE, label: 'Dalolatnoma tayyorlash' },
      { key: Permissions.ACT_REVIEW, label: 'Dalolatnomaga fikr bildirish', disabled: true },
      { key: Permissions.ACT_ASSIGN, label: 'Dalolatnomani xodimga biriktirish' },
      { key: Permissions.ACT_REVIEW_CRITICAL, label: 'Muhim dalolatnomaga fikr bildirish', disabled: true },
    ],
  },
  {
    module: Modules.TERMS,
    name: 'Foydalanish shartlari',
    permissions: [
      { key: Permissions.TERMS_MANAGE, label: 'Foydalanish shartlarini nashr etish' },
    ],
  },
  {
    module: Modules.PAYMENT,
    name: "To'lov",
    permissions: [
      { key: Permissions.PAYMENT_MANAGE, label: 'Hisob-fakturani qayta yuborish' },
    ],
  },
  {
    module: Modules.LETTER,
    name: 'Rad etish xati',
    permissions: [
      { key: Permissions.LETTER_MANAGE, label: 'Rad etish xati shablonlari va blankasini boshqarish', disabled: true },
    ],
  },
  {
    module: Modules.CALENDAR,
    name: 'Ish kalendari',
    permissions: [
      { key: Permissions.CALENDAR_MANAGE, label: 'Ish kalendarini boshqarish' },
    ],
  },
  {
    module: Modules.REGISTRY,
    name: 'Reyestr',
    permissions: [
      { key: Permissions.REGISTRY_VIEW, label: "Kommunikatsiyalar xaritasi va reyestrini ko'rish" },
      { key: Permissions.REGISTRY_MANAGE, label: 'Eski yozuvlarni boshqarish va reyestrni eksport qilish', disabled: true },
    ],
  },
];

export const roles: IRole[] = [
  {
    id: 1,
    code: 'admin',
    name: 'Administrator',
    description: "Tizimning to'liq boshqaruvi",
    is_system: true,
    permissions_editable: true,
    user_count: 2,
    permissions: [
      Permissions.ROLE_VIEW,
      Permissions.ROLE_MANAGE,
      Permissions.USER_VIEW,
      Permissions.USER_MANAGE,
      Permissions.DEPARTMENT_VIEW,
      Permissions.DEPARTMENT_MANAGE,
      Permissions.AUDIT_VIEW,
      Permissions.REFDATA_MANAGE,
      Permissions.APPLICATION_SUBMIT,
      Permissions.APPLICATION_VIEW_OWN,
      Permissions.APPLICATION_VIEW,
      Permissions.APPLICATION_ACCEPT,
      Permissions.APPLICATION_ROUTE,
      Permissions.APPLICATION_DECIDE,
      Permissions.ACT_PREPARE,
      Permissions.ACT_REVIEW,
      Permissions.ACT_ASSIGN,
      Permissions.ACT_REVIEW_CRITICAL,
      Permissions.TERMS_MANAGE,
      Permissions.PAYMENT_MANAGE,
      Permissions.LETTER_MANAGE,
      Permissions.CALENDAR_MANAGE,
      Permissions.REGISTRY_VIEW,
      Permissions.REGISTRY_MANAGE,
    ],
    created_at: '2026-10-27T09:00:00Z',
    updated_at: null,
  },
  {
    id: 2,
    code: 'applicant',
    name: 'Arizachi',
    description: 'Har bir tizimga kirgan foydalanuvchida avtomatik bor',
    is_system: true,
    permissions_editable: false,
    user_count: 1348,
    permissions: [
      Permissions.APPLICATION_SUBMIT,
      Permissions.APPLICATION_VIEW_OWN,
    ],
    created_at: '2026-10-27T09:00:00Z',
    updated_at: null,
  },
  {
    id: 3,
    code: 'head_office_clerk',
    name: 'Bosh boshqarma xodimi',
    description: "Arizani qabul qiladi, hududga yo'naltiradi, texnik shart beradi yoki rad etadi",
    is_system: false,
    permissions_editable: true,
    user_count: 6,
    permissions: [
      Permissions.APPLICATION_VIEW,
      Permissions.APPLICATION_ACCEPT,
      Permissions.APPLICATION_ROUTE,
      Permissions.APPLICATION_DECIDE,
      Permissions.REGISTRY_VIEW,
    ],
    created_at: '2026-11-20T10:00:00Z',
    updated_at: null,
  },
  {
    id: 4,
    code: 'mtu_clerk',
    name: 'MTU xodimi',
    description: 'Dalolatnoma tayyorlaydi va xizmatlarga yuboradi',
    is_system: false,
    permissions_editable: true,
    user_count: 24,
    permissions: [
      Permissions.ACT_PREPARE,
      Permissions.REGISTRY_VIEW,
    ],
    created_at: '2026-11-20T10:05:00Z',
    updated_at: null,
  },
  {
    id: 5,
    code: 'service_head',
    name: "Xizmat boshlig'i (PCH / SHCH / ECH)",
    description: "Dalolatnomani xodimga biriktiradi, o'zi ham javob beradi, muhim dalolatnomalarga javob beradi",
    is_system: false,
    permissions_editable: true,
    user_count: 31,
    permissions: [
      Permissions.ACT_REVIEW,
      Permissions.ACT_ASSIGN,
      Permissions.ACT_REVIEW_CRITICAL,
    ],
    created_at: '2026-11-20T10:10:00Z',
    updated_at: null,
  },
  {
    id: 6,
    code: 'service_staff',
    name: 'Xizmat xodimi',
    description: "O'ziga biriktirilgan dalolatnomaga javob beradi",
    is_system: false,
    permissions_editable: true,
    user_count: 112,
    permissions: [
      Permissions.ACT_REVIEW,
    ],
    created_at: '2026-11-20T10:12:00Z',
    updated_at: null,
  },
  {
    id: 7,
    code: 'registry_operator',
    name: 'Reyestr operatori',
    description: 'Eski reyestr yozuvlarini kiritadi va eksport qiladi',
    is_system: false,
    permissions_editable: true,
    user_count: 4,
    permissions: [
      Permissions.REGISTRY_VIEW,
      Permissions.REGISTRY_MANAGE,
    ],
    created_at: '2026-11-20T10:15:00Z',
    updated_at: null,
  },
  {
    id: 8,
    code: 'auditor',
    name: 'Auditor',
    description: "Audit jurnalini ko'radi",
    is_system: false,
    permissions_editable: true,
    user_count: 2,
    permissions: [
      Permissions.AUDIT_VIEW,
    ],
    created_at: '2026-11-20T10:18:00Z',
    updated_at: null,
  },
];
