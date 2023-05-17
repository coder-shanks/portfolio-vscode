import Image from 'next/image';

import filesIcon from '../assets/icons/files.svg';
import extensionsIcon from '../assets/icons/extensions.svg';
import sourceControlIcon from '../assets/icons/source-control.svg';
import blogsIcon from '../assets/icons/blogs.svg';
import searchIcon from '../assets/icons/search.svg';
import settingsIcon from '../assets/icons/settings-gear.svg';

export default function ActivityBar() {
  return (
    <div className="flex flex-col items-center w-12">
      <div className="p-3 border-l-2 border-l-[var(--primary-text)] ">
        <Image src={filesIcon} alt="About page" />
      </div>
      <div className="p-3">
        <Image src={sourceControlIcon} alt="Open-source contributions page" />
      </div>
      <div className="p-3">
        <Image src={extensionsIcon} alt="Projects page" />
      </div>
      <div className="p-3">
        <Image src={blogsIcon} alt="Blogs page" />
      </div>
      <div className="p-3">
        <Image src={searchIcon} alt="Socials page" />
      </div>
      <div className="p-3 mt-auto">
        <Image src={settingsIcon} alt="Settings page" />
      </div>
    </div>
  );
}
