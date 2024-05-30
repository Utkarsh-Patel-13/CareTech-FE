export const paths = {
    home: '/',
    auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
    dashboard: {
      overview: '/dashboard',
      account: '/dashboard/account',
      patients: '/dashboard/patients',
      integrations: '/dashboard/integrations',
      settings: '/dashboard/settings',
    },
    about: '/about',
    errors: { notFound: '/errors/not-found' },
  } as const;
  