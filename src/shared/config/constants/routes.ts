export const routes = {
  HOME: '/',
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
  APPLICATIONS: '/applications',
  NOTIFICATIONS: '/notifications',
  PROFILE: '/profile',
  SINGLE_APPLICATION: (id: string) => `${routes.APPLICATIONS}/${id}`,
};
