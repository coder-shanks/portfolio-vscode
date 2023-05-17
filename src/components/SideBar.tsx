import Image from 'next/image';

import { SIDEBAR_ICONS } from '@/assets/data/sidebar';

export default function SideBar() {
  return (
    <div className="w-72 bg-[var(--statusBar-bg)]">
      <div className="h-8 px-3 pt-2 text-xs uppercase">Explorer</div>
      <div className="text-[11px] px-3 py-1 font-bold uppercase bg-[var(--primary-bg)]">
        portfolio-vscode
      </div>
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
    </div>
  );
}
