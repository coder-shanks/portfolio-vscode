import {
  FileCssIcon,
  FileHtmlIcon,
  FileJsIcon,
  FileJsonIcon,
  FileReactIcon,
} from '@/components/icons';

type SIDEBAR_ICON = {
  SvgIcon: any;
  title: string;
  altDesc: string;
  routePath: string;
};

const SIDEBAR_ICONS: SIDEBAR_ICON[] = [
  {
    SvgIcon: FileHtmlIcon,
    title: 'index.html',
    altDesc: 'Home page',
    routePath: '/',
  },
  {
    SvgIcon: FileCssIcon,
    title: 'github.css',
    altDesc: 'Open-source contributions page',
    routePath: '/github',
  },
  {
    SvgIcon: FileJsIcon,
    title: 'projects.js',
    altDesc: 'Projects page',
    routePath: '/projects',
  },
  {
    SvgIcon: FileJsonIcon,
    title: 'blogs.json',
    altDesc: 'Blogs page',
    routePath: '/blogs',
  },
  {
    SvgIcon: FileReactIcon,
    title: 'socials.tsx',
    altDesc: 'Socials page',
    routePath: '/socials',
  },
];

export { SIDEBAR_ICONS };
