import { useState } from "react";
import { Lock, Globe, Clock, Plus, X } from "lucide-react";

export default function RuleBuilder() {
  const [blockedApps, setBlockedApps] = useState(["TikTok"]);
  const [blockedSites, setBlockedSites] = useState(["example.com"]);
  const [limitHours, setLimitHours] = useState(2);
  const [newApp, setNewApp] = useState("");
  const [newSite, setNewSite] = useState("");

  const addApp = () => {
    const v = newApp.trim();
    if (!v) return;
    if (!blockedApps.includes(v)) setBlockedApps([...blockedApps, v]);
    setNewApp("");
  };

  const addSite = () => {
    const v = newSite.trim();
    if (!v) return;
    if (!blockedSites.includes(v)) setBlockedSites([...blockedSites, v]);
    setNewSite("");
  };

  const removeApp = (name) => setBlockedApps(blockedApps.filter(a => a !== name));
  const removeSite = (host) => setBlockedSites(blockedSites.filter(s => s !== host));

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
      <h3 className="font-semibold text-slate-900 mb-4">Create rules</h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-600"><Lock size={18} /></div>
            <h4 className="text-sm font-semibold text-slate-900">Block apps</h4>
          </div>
          <div className="flex gap-2">
            <input
              value={newApp}
              onChange={(e) => setNewApp(e.target.value)}
              placeholder="App name (e.g., TikTok)"
              className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button onClick={addApp} className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 text-white px-3 py-2 text-sm hover:bg-indigo-700">
              <Plus size={16} /> Add
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {blockedApps.map((app) => (
              <span key={app} className="inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 text-xs">
                {app}
                <button onClick={() => removeApp(app)} className="hover:text-amber-900" aria-label={`Remove ${app}`}>
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-lg bg-violet-100 text-violet-600"><Globe size={18} /></div>
            <h4 className="text-sm font-semibold text-slate-900">Block websites</h4>
          </div>
          <div className="flex gap-2">
            <input
              value={newSite}
              onChange={(e) => setNewSite(e.target.value)}
              placeholder="Domain (e.g., example.com)"
              className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button onClick={addSite} className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 text-white px-3 py-2 text-sm hover:bg-indigo-700">
              <Plus size={16} /> Add
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {blockedSites.map((site) => (
              <span key={site} className="inline-flex items-center gap-1 rounded-full bg-violet-50 text-violet-700 border border-violet-200 px-3 py-1 text-xs">
                {site}
                <button onClick={() => removeSite(site)} className="hover:text-violet-900" aria-label={`Remove ${site}`}>
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 rounded-lg bg-sky-100 text-sky-600"><Clock size={18} /></div>
          <h4 className="text-sm font-semibold text-slate-900">Daily screen time limit</h4>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={0}
            max={6}
            step={0.5}
            value={limitHours}
            onChange={(e) => setLimitHours(parseFloat(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <span className="text-sm font-medium text-slate-900 w-16 text-right">{limitHours}h</span>
        </div>
        <p className="mt-1 text-xs text-slate-600">Set how many hours per day the device can be used.</p>
      </div>
    </section>
  );
}
