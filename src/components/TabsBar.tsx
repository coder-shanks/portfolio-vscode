import Link from 'next/link';
import { useRouter } from 'next/router';

import { SIDEBAR_ICONS } from '@/assets/data/sidebar';

export default function TabsBar() {
  const router = useRouter();

  return (
    <div className="flex h-10 bg-[var(--statusBar-bg)]">
      {SIDEBAR_ICONS.map((icon, idx) => (
        <Link
          key={idx}
          href={icon.routePath}
          className={`transition-all py-0.5 flex items-center px-4 gap-2 hover:bg-[var(--primary-bg)] hover:cursor-pointer ${
            router.pathname === icon.routePath
              ? 'bg-[var(--primary-bg)] border-b border-b-[(var(--primary-text)]'
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
  );
}
