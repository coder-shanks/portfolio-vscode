import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SIDEBAR_ICONS } from '@/assets/data/sidebar';
import ArrowDownIcon from './icons/ArrowDown';

export default function SideBar() {
  const router = useRouter();
  const [showFiles, setShowFiles] = useState(true);

  return (
    <div className="w-72 bg-[var(--statusBar-bg)]">
      <div className="h-10 px-3 pt-3 text-xs uppercase">Explorer</div>
      <div
        className="flex bg-[var(--primary-bg)] gap-1 px-3 py-1 hover:cursor-pointer"
        onClick={() => setShowFiles(!showFiles)}
      >
        <ArrowDownIcon
          className={`transition-transform ${showFiles ? '' : '-rotate-90'}`}
          alt="Show or hide files"
          width={16}
          height={16}
        />
        <div className="text-[11px] font-bold uppercase">portfolio-vscode</div>
      </div>
      {showFiles ? (
        <div className="flex flex-col">
          {SIDEBAR_ICONS.map((icon, idx) => (
            <Link
              key={idx}
              href={icon.routePath}
              className={`py-1 flex items-center px-3 gap-2 hover:bg-[var(--primary-bg)] hover:cursor-pointer ${
                router.pathname === icon.routePath
                  ? 'bg-[var(--primary-bg)]'
                  : ''
              }`}
            >
              <icon.SvgIcon
                className="pt-0.5"
                alt={icon.altDesc}
                width={16}
                height={20}
              />
              <div className="text-sm">{icon.title}</div>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
