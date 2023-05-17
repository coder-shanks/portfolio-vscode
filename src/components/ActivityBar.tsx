import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ACTIVITY_BAR_TABS } from '@/assets/data/activity-bar-tabs';

export default function ActivityBar() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-12">
      {ACTIVITY_BAR_TABS.map((icon, idx) => (
        <Link
          key={idx}
          href={icon.routePath}
          className={`transition-all w-full p-3 hover:cursor-pointer text-[var(--primary-inactive)] ${
            router.pathname === icon.routePath
              ? 'border-l-2 border-l-[var(--primary-text)] text-[var(--primary-text)]'
              : ''
          }${idx === 5 ? 'mt-auto' : ''}`}
        >
          <icon.SvgIcon />
        </Link>
      ))}
    </div>
  );
}
