import { ReactNode } from 'react';

import TopBar from './TopBar';
import ActivityBar from './ActivityBar';
import SideBar from './SideBar';
import StatusBar from './StatusBar';
import TabsBar from './TabsBar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <main className="flex flex-col min-h-screen">
      <TopBar />
      <div className="flex flex-grow w-full">
        <ActivityBar />
        <SideBar />
        <div className="flex flex-col flex-grow ">
          <TabsBar />
          <div className="flex flex-grow p-4">{props.children}</div>
        </div>
      </div>
      <StatusBar />
    </main>
  );
}
