import { Smartphone, Wifi, Lock, Clock, Globe } from "lucide-react";
import { useState } from "react";

export default function ChildDeviceCard({ name = "Ava", device = "Pixel 7", os = "Android 14" }) {
  const [internetPaused, setInternetPaused] = useState(false);
  const [downtime, setDowntime] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
            <Smartphone />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">{name}'s Phone</h3>
            <p className="text-sm text-slate-600">{device} • {os}</p>
          </div>
        </div>
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${internetPaused ? "bg-rose-100 text-rose-700" : "bg-emerald-100 text-emerald-700"}`}>
          {internetPaused ? "Internet Paused" : "Online"}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          onClick={() => setInternetPaused(v => !v)}
          className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 hover:bg-slate-50 transition"
        >
          <div className={`p-2 rounded-lg ${internetPaused ? "bg-rose-100 text-rose-600" : "bg-emerald-100 text-emerald-600"}`}>
            <Wifi size={18} />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-slate-800">{internetPaused ? "Resume Internet" : "Pause Internet"}</p>
            <p className="text-xs text-slate-600">Instantly {internetPaused ? "restore" : "stop"} connectivity</p>
          </div>
        </button>

        <button
          onClick={() => setDowntime(v => !v)}
          className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 hover:bg-slate-50 transition"
        >
          <div className={`p-2 rounded-lg ${downtime ? "bg-indigo-100 text-indigo-600" : "bg-sky-100 text-sky-600"}`}>
            <Clock size={18} />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-slate-800">{downtime ? "End Downtime" : "Start Downtime"}</p>
            <p className="text-xs text-slate-600">Schedule quiet hours</p>
          </div>
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3">
          <div className="p-2 rounded-lg bg-amber-100 text-amber-600">
            <Lock size={18} />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-slate-800">App Lock</p>
            <p className="text-xs text-slate-600">Block selected apps</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3">
          <div className="p-2 rounded-lg bg-violet-100 text-violet-600">
            <Globe size={18} />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-slate-800">Web Filter</p>
            <p className="text-xs text-slate-600">Restrict categories</p>
          </div>
        </div>
      </div>
    </div>
  );
}
