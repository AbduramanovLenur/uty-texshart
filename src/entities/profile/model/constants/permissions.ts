export const Permissions = {
  // role
  ROLE_VIEW: 'role.view',
  ROLE_MANAGE: 'role.manage',

  // user
  USER_VIEW: 'user.view',
  USER_MANAGE: 'user.manage',

  // department
  DEPARTMENT_VIEW: 'department.view',
  DEPARTMENT_MANAGE: 'department.manage',

  // audit
  AUDIT_VIEW: 'audit.view',

  // refdata
  REFDATA_MANAGE: 'refdata.manage',

  // application
  APPLICATION_SUBMIT: 'application.submit',
  APPLICATION_VIEW_OWN: 'application.view_own',
  APPLICATION_VIEW: 'application.view',
  APPLICATION_ACCEPT: 'application.accept',
  APPLICATION_ROUTE: 'application.route',
  APPLICATION_DECIDE: 'application.decide',

  // act
  ACT_PREPARE: 'act.prepare',
  ACT_REVIEW: 'act.review',
  ACT_ASSIGN: 'act.assign',
  ACT_REVIEW_CRITICAL: 'act.review_critical',

  // terms
  TERMS_MANAGE: 'terms.manage',

  // payment
  PAYMENT_MANAGE: 'payment.manage',

  // letter
  LETTER_MANAGE: 'letter.manage',

  // calendar
  CALENDAR_MANAGE: 'calendar.manage',

  // registry
  REGISTRY_VIEW: 'registry.view',
  REGISTRY_MANAGE: 'registry.manage',
} as const;
