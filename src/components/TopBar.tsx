export default function TopBar() {
  return (
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
  );
}
