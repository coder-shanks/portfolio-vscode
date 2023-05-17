import filesIcon from '@/assets/icons/files.svg';
import extensionsIcon from '@/assets/icons/extensions.svg';
import sourceControlIcon from '@/assets/icons/source-control.svg';
import blogsIcon from '@/assets/icons/blogs.svg';
import searchIcon from '@/assets/icons/search.svg';
import settingsIcon from '@/assets/icons/settings-gear.svg';

type ACTIVITY_BAR_ICON = {
  modulePath: any;
  altDesc: string;
};

const ACTIVITY_BAR_ICONS: ACTIVITY_BAR_ICON[] = [
  { modulePath: filesIcon, altDesc: 'About page' },
  { modulePath: extensionsIcon, altDesc: 'Open-source contributions page' },
  { modulePath: sourceControlIcon, altDesc: 'Projects page' },
  { modulePath: blogsIcon, altDesc: 'Blogs page' },
  { modulePath: searchIcon, altDesc: 'Socials page' },
  { modulePath: settingsIcon, altDesc: 'Settings page' },
];

export { ACTIVITY_BAR_ICONS };
