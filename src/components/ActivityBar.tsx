import Image from 'next/image';

import { ACTIVITY_BAR_ICONS } from '@/assets/data/activity-bar';

export default function ActivityBar() {
  return (
    <div className="flex flex-col items-center w-12">
      {ACTIVITY_BAR_ICONS.map((icon, idx) => (
        <div
          key={idx}
          className={`p-3 hover:cursor-pointer ${
            idx === 0 ? 'border-l-2 border-l-[var(--primary-text)]' : ''
          }${idx === 5 ? 'mt-auto' : ''}`}
        >
          <Image src={icon.modulePath} alt={icon.altDesc} />
        </div>
      ))}
    </div>
  );
}
