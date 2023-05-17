import TopBar from '@/components/TopBar';
import ActivityBar from '@/components/ActivityBar';
import SideBar from '@/components/SideBar';
import MidContainer from '@/components/MidContainer';
import StatusBar from '@/components/StatusBar';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <TopBar />
      <div className="flex flex-grow w-full">
        <ActivityBar />
        <SideBar />
        <MidContainer />
      </div>
      <StatusBar />
    </main>
  );
}
