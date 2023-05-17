import filesIcon from '@/assets/icons/files.svg';
import extensionsIcon from '@/assets/icons/extensions.svg';
import sourceControlIcon from '@/assets/icons/source-control.svg';
import blogsIcon from '@/assets/icons/blogs.svg';
import searchIcon from '@/assets/icons/search.svg';
import settingsIcon from '@/assets/icons/settings-gear.svg';

type ACTIVITY_BAR_ICON = {
  modulePath: any;
  altDesc: string;
  routePath: string;
};

const ACTIVITY_BAR_ICONS: ACTIVITY_BAR_ICON[] = [
  { modulePath: filesIcon, altDesc: 'Home page', routePath: '/' },
  {
    modulePath: extensionsIcon,
    altDesc: 'Open-source contributions page',
    routePath: '/github',
  },
  {
    modulePath: sourceControlIcon,
    altDesc: 'Projects page',
    routePath: '/projects',
  },
  { modulePath: blogsIcon, altDesc: 'Blogs page', routePath: '/blogs' },
  { modulePath: searchIcon, altDesc: 'Socials page', routePath: '/socials' },
  {
    modulePath: settingsIcon,
    altDesc: 'Settings page',
    routePath: '/settings',
  },
];

export { ACTIVITY_BAR_ICONS };
