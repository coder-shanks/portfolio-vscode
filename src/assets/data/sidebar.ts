import htmlFileIcon from '@/assets/icons/file-type-html.svg';
import cssFileIcon from '@/assets/icons/file-type-css.svg';
import jsFileIcon from '@/assets/icons/file-type-js.svg';
import reactFileIcon from '@/assets/icons/file-type-reactjs.svg';
import jsonFileIcon from '@/assets/icons/file-type-json.svg';

type SIDEBAR_ICON = {
  modulePath: any;
  title: string;
  altDesc: string;
};

const SIDEBAR_ICONS: SIDEBAR_ICON[] = [
  { modulePath: htmlFileIcon, title: 'about.html', altDesc: 'About page' },
  {
    modulePath: cssFileIcon,
    title: 'github.css',
    altDesc: 'Open-source contributions page',
  },
  { modulePath: jsFileIcon, title: 'projects.js', altDesc: 'Projects page' },
  { modulePath: jsonFileIcon, title: 'blogs.json', altDesc: 'Blogs page' },
  { modulePath: reactFileIcon, title: 'socials.tsx', altDesc: 'Socials page' },
];

export { SIDEBAR_ICONS };
