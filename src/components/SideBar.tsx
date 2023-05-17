import Image from 'next/image';

import htmlFileIcon from '@/assets/icons/file-type-html.svg';
import cssFileIcon from '@/assets/icons/file-type-css.svg';
import jsFileIcon from '@/assets/icons/file-type-js.svg';
import tsFileIcon from '@/assets/icons/file-type-ts.svg';
import reactFileIcon from '@/assets/icons/file-type-reactjs.svg';
import jsonFileIcon from '@/assets/icons/file-type-json.svg';

export default function SideBar() {
  return (
    <div className="w-72 bg-[var(--statusBar-bg)]">
      <div className="h-8 px-3 pt-2 text-xs uppercase">Explorer</div>
      <div className="text-[11px] px-3 py-1 font-bold uppercase bg-[var(--primary-bg)]">
        portfolio-vscode
      </div>
      <div className="flex flex-col">
        <div className="py-1 flex items-center px-3 gap-2 hover:bg-[var(--primary-bg)] hover:cursor-pointer">
          <Image
            className="pt-0.5"
            src={htmlFileIcon}
            alt="About page"
            width={16}
            height={20}
          />
          <div className="text-sm">about.html</div>
        </div>
        <div className="py-1 flex items-center px-3 gap-2 hover:bg-[var(--primary-bg)] hover:cursor-pointer">
          <Image
            className="pt-0.5"
            src={cssFileIcon}
            alt="Open-source contributions page"
            width={16}
            height={24}
          />
          <div className="text-sm">github.css</div>
        </div>
        <div className="py-1 flex items-center px-3 gap-2 hover:bg-[var(--primary-bg)] hover:cursor-pointer">
          <Image
            className="pt-0.5"
            src={jsFileIcon}
            alt="Projects page"
            width={16}
            height={20}
          />
          <div className="text-sm">projects.js</div>
        </div>
        <div className="py-1 flex items-center px-3 gap-2 hover:bg-[var(--primary-bg)] hover:cursor-pointer">
          <Image
            className="pt-0.5"
            src={jsonFileIcon}
            alt="Blogs page"
            width={16}
            height={20}
          />
          <div className="text-sm">blogs.json</div>
        </div>
        <div className="py-1 flex items-center px-3 gap-2 hover:bg-[var(--primary-bg)] hover:cursor-pointer">
          <Image
            className="pt-0.5"
            src={reactFileIcon}
            alt="Socials page"
            width={16}
            height={20}
          />
          <div className="text-sm">socials.jsx</div>
        </div>
      </div>
    </div>
  );
}
