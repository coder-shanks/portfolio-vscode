import {
  BlogsIcon,
  ExtensionsIcon,
  FilesIcon,
  SourceControlIcon,
  SearchIcon,
  SettingsIcon,
} from '@/components/icons';

type ACTIVITY_BAR_ICON = {
  SvgIcon: any;
  altDesc: string;
  routePath: string;
};

const ACTIVITY_BAR_ICONS: ACTIVITY_BAR_ICON[] = [
  { SvgIcon: FilesIcon, altDesc: 'Home page', routePath: '/' },
  {
    SvgIcon: ExtensionsIcon,
    altDesc: 'Open-source contributions page',
    routePath: '/github',
  },
  {
    SvgIcon: SourceControlIcon,
    altDesc: 'Projects page',
    routePath: '/projects',
  },
  { SvgIcon: BlogsIcon, altDesc: 'Blogs page', routePath: '/blogs' },
  { SvgIcon: SearchIcon, altDesc: 'Socials page', routePath: '/socials' },
  {
    SvgIcon: SettingsIcon,
    altDesc: 'Settings page',
    routePath: '/settings',
  },
];

export { ACTIVITY_BAR_ICONS };
