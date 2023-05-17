import { useState } from 'react';
import Image from 'next/image';

import arrowDownIcon from '@/assets/icons/chevron-down.svg';
import { SIDEBAR_ICONS } from '@/assets/data/sidebar';

export default function SideBar() {
  const [showFiles, setShowFiles] = useState(true);

  return (
    <div className="w-72 bg-[var(--statusBar-bg)]">
      <div className="h-8 px-3 pt-2 text-xs uppercase">Explorer</div>
      <div
        className="flex bg-[var(--primary-bg)] gap-1 px-3 py-1 hover:cursor-pointer"
        onClick={() => setShowFiles(!showFiles)}
      >
        <Image
          className={`transition-transform ${showFiles ? '' : '-rotate-90'}`}
          src={arrowDownIcon}
          alt="Show or hide files"
          width={16}
          height={16}
        />
        <div className="text-[11px] font-bold uppercase">portfolio-vscode</div>
      </div>
      {showFiles ? (
        <div className="flex flex-col">
          {SIDEBAR_ICONS.map((icon, idx) => (
            <div
              key={idx}
              className="py-1 flex items-center px-3 gap-2 hover:bg-[var(--primary-bg)] hover:cursor-pointer"
            >
              <Image
                className="pt-0.5"
                src={icon.modulePath}
                alt={icon.altDesc}
                width={16}
                height={20}
              />
              <div className="text-sm">{icon.title}</div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
