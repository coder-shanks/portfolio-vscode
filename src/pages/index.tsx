import Image from 'next/image';
import filesIcon from '../assets/icons/files.svg';
import extensionsIcon from '../assets/icons/extensions.svg';
import sourceControlIcon from '../assets/icons/source-control.svg';
import blogsIcon from '../assets/icons/blogs.svg';
import settingsIcon from '../assets/icons/settings-gear.svg';

import htmlFileIcon from '../assets/icons/file-type-html.svg';
import cssFileIcon from '../assets/icons/file-type-css.svg';
import jsFileIcon from '../assets/icons/file-type-js.svg';
import tsFileIcon from '../assets/icons/file-type-ts.svg';
import reactFileIcon from '../assets/icons/file-type-reactjs.svg';
import jsonFileIcon from '../assets/icons/file-type-json.svg';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="relative flex items-center justify-center w-full h-8">
        <div className="absolute flex gap-2 left-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
        <div className="text-xs text-[var(--statusBar-foreground)]">
          Shubham Tarade - VSCode styled portfolio
        </div>
      </div>
      <div className="flex flex-grow w-full">
        <div className="flex flex-col items-center w-12">
          <div className="p-3 border-l-2 border-l-[var(--main-foreground)] ">
            <Image src={filesIcon} alt="Project files" />
          </div>
          <div className="p-3">
            <Image src={sourceControlIcon} alt="Project files" />
          </div>
          <div className="p-3">
            <Image src={blogsIcon} alt="Project files" />
          </div>
          <div className="p-3">
            <Image src={extensionsIcon} alt="Project files" />
          </div>
          <div className="p-3 mt-auto">
            <Image src={settingsIcon} alt="Project files" />
          </div>
        </div>
        <div className="w-72 bg-[var(--sideBar-background)]">
          <div className="h-8 px-3 pt-2 text-xs uppercase">Explorer</div>
          <div className="text-[11px] px-3 py-1 font-bold uppercase bg-[var(--main-background)]">
            portfolio-vscode
          </div>
          <div className="flex flex-col">
            <div className="py-1 flex items-center px-3 gap-2 hover:bg-[var(--main-background)] hover:cursor-pointer">
              <Image
                src={reactFileIcon}
                alt="Project files"
                width={16}
                height={20}
              />
              <div className="text-sm">about.tsx</div>
            </div>
            <div className="py-1 flex items-center px-3 gap-2 hover:bg-[var(--main-background)] hover:cursor-pointer">
              <Image
                src={cssFileIcon}
                alt="Project files"
                width={16}
                height={20}
              />
              <div className="text-sm">github.md</div>
            </div>
            <div className="py-1 flex items-center px-3 gap-2 hover:bg-[var(--main-background)] hover:cursor-pointer">
              <Image
                src={jsFileIcon}
                alt="Project files"
                width={16}
                height={20}
              />
              <div className="text-sm">projects.js</div>
            </div>
            <div className="py-1 flex items-center px-3 gap-2 hover:bg-[var(--main-background)] hover:cursor-pointer">
              <Image
                src={jsonFileIcon}
                alt="Project files"
                width={16}
                height={20}
              />
              <div className="text-sm">blogs.json</div>
            </div>
          </div>
        </div>
        <div className="flex flex-grow ">
          {/* <div className="w-full h-8 bg-[var(--sideBar-background)]"></div> */}
        </div>
      </div>
      <div className="flex w-full h-6 bg-[var(--sideBar-background)]"></div>
    </main>
  );
}
