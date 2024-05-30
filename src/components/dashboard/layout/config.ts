import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'dashboard', title: 'Dashboard', href: paths.dashboard.overview, icon: 'home' },
  { key: 'patient', title: 'Patients', href: paths.dashboard.patients, icon: 'users' },
  { key: 'info', title: 'Support', href: paths.about, icon: 'info' },
] satisfies NavItemConfig[];
