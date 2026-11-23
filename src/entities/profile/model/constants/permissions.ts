export const Permissions = {
  ROLE_VIEW: 'role.view',
  ROLE_MANAGE: 'role.manage',

  USER_VIEW: 'user.view',
  USER_MANAGE: 'user.manage',

  DEPARTMENT_VIEW: 'department.view',
  DEPARTMENT_MANAGE: 'department.manage',

  AUDIT_VIEW: 'audit.view',

  REFDATA_MANAGE: 'refdata.manage',

  APPLICATION_SUBMIT: 'application.submit',
  APPLICATION_VIEW_OWN: 'application.view_own',
  APPLICATION_VIEW: 'application.view',
  APPLICATION_ACCEPT: 'application.accept',
  APPLICATION_ROUTE: 'application.route',
  APPLICATION_DECIDE: 'application.decide',

  ACT_PREPARE: 'act.prepare',
  ACT_REVIEW: 'act.review',
  ACT_ASSIGN: 'act.assign',
  ACT_REVIEW_CRITICAL: 'act.review_critical',

  TERMS_MANAGE: 'terms.manage',

  PAYMENT_MANAGE: 'payment.manage',

  LETTER_MANAGE: 'letter.manage',

  CALENDAR_MANAGE: 'calendar.manage',

  REGISTRY_VIEW: 'registry.view',
  REGISTRY_MANAGE: 'registry.manage',
} as const;
