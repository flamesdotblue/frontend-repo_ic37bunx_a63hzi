import { Activity, Clock, Smartphone, Globe } from "lucide-react";

const demo = {
  screenTime: [
    { label: "Mon", value: 2.5 },
    { label: "Tue", value: 3.0 },
    { label: "Wed", value: 1.8 },
    { label: "Thu", value: 2.2 },
    { label: "Fri", value: 3.6 },
    { label: "Sat", value: 4.2 },
    { label: "Sun", value: 2.0 },
  ],
  topApps: [
    { name: "YouTube", hours: 4.1 },
    { name: "Roblox", hours: 3.2 },
    { name: "Chrome", hours: 2.7 },
  ],
  webBlocks: 18,
};

export default function ActivityOverview() {
  const maxHours = Math.max(...demo.screenTime.map(d => d.value), 4);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
            <Activity size={18} />
          </div>
          <h3 className="font-semibold text-slate-900">Weekly Activity</h3>
        </div>
        <span className="text-xs text-slate-600">Last 7 days</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="h-40 flex items-end gap-3">
            {demo.screenTime.map((d) => (
              <div key={d.label} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full rounded-t-md bg-indigo-500"
                  style={{ height: `${(d.value / maxHours) * 100}%` }}
                  title={`${d.value} hrs`}
                />
                <span className="mt-1 text-xs text-slate-600">{d.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 text-xs text-slate-600">Daily screen time (hours)</div>
        </div>

        <div className="space-y-3">
          <StatRow icon={<Clock size={16} />} label="Avg daily" value="2h 43m" color="bg-sky-100 text-sky-600" />
          <StatRow icon={<Smartphone size={16} />} label="Active days" value="6/7" color="bg-amber-100 text-amber-600" />
          <StatRow icon={<Globe size={16} />} label="Web blocks" value={`${demo.webBlocks}`} color="bg-rose-100 text-rose-600" />
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-slate-900 mb-2">Top apps</h4>
        <ul className="space-y-2">
          {demo.topApps.map((a) => (
            <li key={a.name} className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2">
              <span className="text-sm text-slate-800">{a.name}</span>
              <span className="text-sm text-slate-600">{a.hours}h</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StatRow({ icon, label, value, color }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2">
      <div className="flex items-center gap-2">
        <div className={`p-2 rounded-lg ${color}`}>{icon}</div>
        <span className="text-sm text-slate-700">{label}</span>
      </div>
      <span className="text-sm font-medium text-slate-900">{value}</span>
    </div>
  );
}
