import { Shield, Settings, Bell } from "lucide-react";

export default function Header({ onOpenSettings }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-indigo-600 text-white shadow-sm">
            <Shield size={20} />
          </div>
          <div>
            <h1 className="text-slate-900 font-semibold leading-tight">Guardian Hub</h1>
            <p className="text-xs text-slate-600 -mt-0.5">Parental control, simplified</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition"
            onClick={onOpenSettings}
          >
            <Settings size={16} />
            Settings
          </button>
          <button
            className="relative inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-700 shadow-sm hover:bg-slate-50 transition"
            aria-label="Notifications"
          >
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white">3</span>
          </button>
        </div>
      </div>
    </header>
  );
}
