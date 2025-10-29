import { useState } from "react";
import Header from "./components/Header.jsx";
import ChildDeviceCard from "./components/ChildDeviceCard.jsx";
import ActivityOverview from "./components/ActivityOverview.jsx";
import RuleBuilder from "./components/RuleBuilder.jsx";
import { Shield } from "lucide-react";

function App() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 text-slate-900">
      <Header onOpenSettings={() => setShowSettings(true)} />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8 space-y-6">
        <Hero />

        <section className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <ChildDeviceCard name="Ava" device="Pixel 7" os="Android 14" />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <ActivityOverview />
            <RuleBuilder />
          </div>
        </section>
      </main>

      {showSettings && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-slate-900/40 p-4" onClick={() => setShowSettings(false)}>
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-indigo-600 text-white"><Shield size={18} /></div>
              <h3 className="font-semibold">Family settings</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Require a PIN to change rules</li>
              <li>• Send weekly reports via email</li>
              <li>• Apply rules across all devices</li>
            </ul>
            <div className="mt-5 text-right">
              <button className="rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm hover:bg-indigo-700" onClick={() => setShowSettings(false)}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm p-6 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Guide your child's digital life with confidence</h2>
        <p className="mt-2 text-slate-600">Pause internet instantly, set healthy screen time limits, block distracting apps, and filter the web — all from one place.</p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
          <Badge>Instant pause</Badge>
          <Badge>Web filter</Badge>
          <Badge>App lock</Badge>
          <Badge>Schedules</Badge>
        </div>
      </div>
      <div className="w-full md:w-80">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-4 shadow-inner">
          <div className="aspect-[9/18] w-full rounded-xl bg-slate-900/95 text-white p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-white/80">
              <span>Child device</span>
              <span>Online</span>
            </div>
            <div className="text-center">
              <Shield className="mx-auto text-indigo-400" size={28} />
              <p className="mt-2 text-sm">Managed by Guardian Hub</p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="rounded-md bg-white/10 py-1">Pause</div>
              <div className="rounded-md bg-white/10 py-1">Limit</div>
              <div className="rounded-md bg-white/10 py-1">Filter</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs border border-slate-200">
      {children}
    </span>
  );
}

export default App;
