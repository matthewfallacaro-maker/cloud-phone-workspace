import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Activity, Apple, ArrowUpRight, BatteryFull, Bell, Check, ChevronDown, CircleHelp, Clock3, Cloud, Command, Copy, Grip, Headphones, Home, LayoutGrid, MoreHorizontal, Phone, Play, Plus, RefreshCw, RotateCw, Search, Settings2, Smartphone, Signal, Sparkles, Square, Wifi, X } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

const demoDevices = [
  { id: 'pixel-9', name: 'Pixel 9', version: 'Android 15', owner: 'Maya Chen', initials: 'MC', tint: 'from-lime-300/50 via-emerald-700 to-slate-950', platform: 'Android' },
  { id: 'iphone-16', name: 'iPhone 16 Pro', version: 'iOS 18.2', owner: 'Alex Rivera', initials: 'AR', tint: 'from-orange-300/50 via-rose-700 to-slate-950', platform: 'iOS' },
  { id: 'galaxy-s24', name: 'Galaxy S24', version: 'Android 14', owner: 'Jordan Lee', initials: 'JL', tint: 'from-sky-300/40 via-indigo-700 to-slate-950', platform: 'Android' },
  { id: 'iphone-se', name: 'iPhone SE', version: 'iOS 17.5', owner: 'Priya Patel', initials: 'PP', tint: 'from-violet-300/40 via-fuchsia-800 to-slate-950', platform: 'iOS' },
]

export const Route = createFileRoute('/workspace')({
  head: () => ({ meta: [{ title: 'Cloud Phone Workspace' }, { name: 'description', content: 'A shared workspace for browser-based mobile device testing.' }] }),
  component: Workspace,
})

function Workspace() {
  const [selectedId, setSelectedId] = useState(demoDevices[0].id)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [rotated, setRotated] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [notice, setNotice] = useState('')
  const selected = demoDevices.find((device) => device.id === selectedId) ?? demoDevices[0]
  const filtered = demoDevices.filter((device) => device.name.toLowerCase().includes(query.toLowerCase()))

  useEffect(() => {
    if (!active) return
    const timer = window.setInterval(() => setSeconds((value) => value + 1), 1000)
    return () => window.clearInterval(timer)
  }, [active])

  const startDemo = () => { setActive(true); setSeconds(0); setNotice('Demo session started. This is a local preview, not a live cloud device.') }
  const endDemo = () => { setActive(false); setNotice('Demo session ended. No device was connected.') }
  const time = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-[236px] flex-col border-r border-border bg-sidebar lg:flex">
        <div className="flex h-[76px] items-center gap-3 border-b border-sidebar-border px-5">
          <div className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground"><Cloud size={19} strokeWidth={2.5} /></div>
          <div><div className="text-[15px] font-semibold tracking-tight">cloudphone</div><div className="text-[11px] text-muted-foreground">TEAM WORKSPACE</div></div>
          <button className="ml-auto rounded-md p-1.5 text-muted-foreground hover:bg-sidebar-accent" aria-label="Workspace options"><ChevronDown size={15} /></button>
        </div>
        <div className="border-b border-sidebar-border p-4">
          <button onClick={() => setNotice('Mobile QA is the currently selected sample workspace.')} className="flex w-full items-center gap-3 rounded-xl border border-sidebar-border bg-sidebar-accent/60 p-3 text-left transition hover:border-primary/40">
            <div className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary"><Smartphone size={17} /></div>
            <div className="min-w-0 flex-1"><div className="truncate text-sm font-medium">Mobile QA</div><div className="text-[11px] text-muted-foreground">4 demo devices</div></div>
            <MoreHorizontal size={16} className="text-muted-foreground" />
          </button>
        </div>
        <nav className="flex-1 space-y-7 overflow-y-auto px-3 py-5" aria-label="Workspace navigation">
          <div><p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/70">Workspace</p>
            <a href="#overview" className="flex h-10 items-center gap-3 rounded-lg bg-sidebar-accent px-3 text-sm font-medium text-sidebar-accent-foreground"><Home size={17} /><span>Overview</span><span className="ml-auto size-1.5 rounded-full bg-primary" /></a>
            <a href="#devices" className="flex h-10 items-center gap-3 rounded-lg px-3 text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-foreground"><LayoutGrid size={17} />Devices<span className="ml-auto text-xs">4</span></a>
            <a href="#sessions" className="flex h-10 items-center gap-3 rounded-lg px-3 text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-foreground"><Clock3 size={17} />Session history</a>
          </div>
          <div><p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/70">Team</p>
            <button onClick={() => setNotice('Team sharing is shown as a preview. Sign-in and shared sessions are not connected yet.')} className="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-left text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-foreground"><div className="flex -space-x-1.5"><span className="grid size-5 place-items-center rounded-full border border-sidebar bg-amber-200 text-[8px] font-bold text-amber-900">M</span><span className="grid size-5 place-items-center rounded-full border border-sidebar bg-teal-200 text-[8px] font-bold text-teal-900">A</span><span className="grid size-5 place-items-center rounded-full border border-sidebar bg-violet-200 text-[8px] font-bold text-violet-900">J</span></div>Team members<ArrowUpRight size={13} className="ml-auto" /></button>
            <button onClick={() => setNotice('Workspace settings are not connected in this demo.')} className="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-left text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-foreground"><Settings2 size={17} />Settings</button>
          </div>
        </nav>
        <div className="shrink-0 border-t border-sidebar-border p-4">
          <div className="mb-4 rounded-xl border border-sidebar-border bg-sidebar-accent/40 p-3"><div className="flex items-center gap-2 text-xs font-medium"><Sparkles size={14} className="text-primary" />Demo workspace</div><p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">Sample screens only. No devices are connected.</p></div>
          <button onClick={() => setNotice('Support is not configured in this preview.')} className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"><CircleHelp size={17} />Help & support</button>
          <div className="mt-3 flex items-center gap-3 border-t border-sidebar-border pt-4"><div className="grid size-8 place-items-center rounded-full bg-amber-200 text-xs font-bold text-amber-950">MC</div><div className="min-w-0 flex-1"><div className="truncate text-xs font-medium">Maya Chen</div><div className="text-[10px] text-muted-foreground">Workspace owner</div></div><MoreHorizontal size={16} className="text-muted-foreground" /></div>
        </div>
      </aside>

      <div className="lg:pl-[236px]">
        <header className="sticky top-0 z-10 flex h-[68px] items-center justify-between border-b border-border/80 bg-background/90 px-5 backdrop-blur-xl sm:px-8">
          <div className="flex items-center gap-3"><div className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground lg:hidden"><Cloud size={17} /></div><div className="hidden text-xs text-muted-foreground sm:block">Workspace <span className="mx-2 text-border">/</span><span className="text-foreground">Overview</span></div><div className="text-sm font-semibold lg:hidden">cloudphone</div><div className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground">DEMO MODE</div></div>
          <div className="flex items-center gap-2 sm:gap-4"><div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex"><span className="size-1.5 animate-pulse rounded-full bg-primary" />Workspace preview ready</div><button onClick={() => setNotice('You are all caught up. Notifications are sample UI only.')} className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" aria-label="Notifications"><Bell size={17} /></button><button onClick={() => setNotice('This preview is using the sample profile Maya Chen.')} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-medium transition hover:bg-muted"><span className="grid size-5 place-items-center rounded-full bg-amber-200 text-[9px] font-bold text-amber-950">MC</span><span className="hidden sm:inline">Maya Chen</span><ChevronDown size={13} className="text-muted-foreground" /></button></div>
        </header>

        <main id="overview" className="mx-auto max-w-[1500px] px-5 pb-12 pt-8 sm:px-8">
          <div className="mb-7 flex flex-col justify-between gap-5 xl:flex-row xl:items-end">
            <div><div className="mb-3 flex items-center gap-2 text-xs font-medium text-primary"><span className="size-1.5 rounded-full bg-primary" />MONDAY, OCTOBER 13</div><h1 className="text-3xl font-semibold tracking-tight sm:text-[38px]">Your mobile lab, <span className="text-muted-foreground">ready.</span></h1><p className="mt-2 text-sm text-muted-foreground">Spin up a device preview and keep your team's testing in one place.</p></div>
            <button onClick={startDemo} className="flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-md transition hover:scale-[1.02] hover:brightness-105 active:scale-[0.98]"><Plus size={17} strokeWidth={2.5} />Start demo session</button>
          </div>

          {notice && <div role="status" className="mb-5 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground"><div className="mt-0.5 text-primary"><Check size={16} /></div><span className="flex-1">{notice}</span><button onClick={() => setNotice('')} aria-label="Dismiss message" className="text-muted-foreground hover:text-foreground"><X size={16} /></button></div>}

          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            <Metric icon={Smartphone} label="Devices available" value="4" detail="Sample inventory" />
            <Metric icon={Activity} label="Active sessions" value={active ? '1' : '0'} detail={active ? `Demo running · ${time}` : 'No live device sessions'} />
            <Metric icon={Signal} label="Team presence" value="3" detail="Sample team members" />
          </div>

          <section id="devices" className="grid items-start gap-5 2xl:grid-cols-[minmax(270px,0.78fr)_minmax(350px,1.1fr)_minmax(300px,0.82fr)] xl:grid-cols-[minmax(250px,0.8fr)_minmax(330px,1fr)]">
            <div className="rounded-2xl border border-border bg-card shadow-sm">
              <div className="flex items-center justify-between border-b border-border px-5 py-4"><div><h2 className="text-sm font-semibold">Device library</h2><p className="mt-1 text-xs text-muted-foreground">Choose a demo device</p></div><button onClick={() => setNotice('Device provisioning is not connected. These are sample devices for the UI preview.')} className="rounded-lg border border-border p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground" aria-label="Add device"><Plus size={16} /></button></div>
              <div className="p-4"><label className="flex h-10 items-center gap-2 rounded-lg border border-input bg-background px-3 text-muted-foreground focus-within:ring-2 focus-within:ring-ring"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search devices" className="w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground" /></label>
                <div className="mb-2 mt-5 flex items-center justify-between px-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground"><span>My devices</span><span>{filtered.length} DEVICES</span></div>
                <div className="space-y-1">{filtered.map((device) => <button key={device.id} onClick={() => { setSelectedId(device.id); setRotated(false) }} className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition ${selectedId === device.id ? 'border-primary/45 bg-primary/[0.07]' : 'border-transparent hover:bg-muted/70'}`}><div className={`grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${device.tint}`}><Smartphone size={18} className="text-foreground/90" /></div><div className="min-w-0 flex-1"><div className="truncate text-xs font-semibold">{device.name}</div><div className="mt-1 text-[10px] text-muted-foreground">{device.version}</div></div><span className={`size-2 rounded-full ${active && selectedId === device.id ? 'bg-primary' : 'bg-muted-foreground/35'}`} /></button>)}{filtered.length === 0 && <p className="px-2 py-5 text-center text-xs text-muted-foreground">No demo devices match.</p>}</div>
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2.5 text-[10px] leading-relaxed text-muted-foreground"><Command size={13} className="shrink-0" /> Device names and owners are sample data.</div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card shadow-sm">
              <div className="flex items-center justify-between border-b border-border px-5 py-4"><div><h2 className="text-sm font-semibold">Device preview</h2><p className="mt-1 text-xs text-muted-foreground">{selected.name} <span className="mx-1 text-border">·</span>{selected.version}</p></div><div className="flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[10px] font-medium text-muted-foreground"><span className={`size-1.5 rounded-full ${active ? 'bg-primary' : 'bg-muted-foreground/50'}`} />{active ? 'Demo active' : 'Preview only'}</div></div>
              <div className="flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_40%,oklch(0.27_0.045_151/0.55),transparent_62%)] px-5 py-7 sm:min-h-[560px]">
                <div className={`relative rounded-[38px] border-[5px] border-border bg-sidebar p-2 shadow-2xl shadow-black/50 transition-transform duration-300 ${rotated ? 'rotate-90 scale-[0.7]' : 'rotate-0'}`}>
                  <div className={`relative h-[410px] w-[218px] overflow-hidden rounded-[29px] bg-gradient-to-br ${selected.tint}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_48%_40%,oklch(0.88_0.17_119/0.3),transparent_33%),radial-gradient(ellipse_at_80%_86%,oklch(0.5_0.11_164/0.55),transparent_40%)]" />
                    <div className="relative z-10 flex items-center justify-between px-4 pt-3 text-[9px] font-semibold text-foreground"><span>9:41</span><div className="flex gap-1"><Signal size={11} /><Wifi size={11} /><BatteryFull size={12} /></div></div>
                    <div className="relative z-10 mx-auto mt-3 h-4 w-20 rounded-full bg-sidebar/90" />
                    <div className="relative z-10 mt-12 px-4 text-center text-foreground"><div className="text-[11px] font-medium tracking-wide">MONDAY, OCTOBER 13</div><div className="mt-1 text-[52px] font-light leading-none tracking-tight">9:41</div><div className="mt-2 text-[11px] text-foreground/75">Sunny · 72°</div></div>
                    <div className="absolute inset-x-3 bottom-14 z-10 rounded-2xl border border-foreground/15 bg-foreground/10 p-3 backdrop-blur-md"><div className="flex items-center gap-2"><div className="grid size-7 place-items-center rounded-lg bg-foreground/20"><Cloud size={14} className="text-foreground" /></div><div><p className="text-[9px] font-semibold text-foreground">Cloud Phone</p><p className="text-[8px] text-foreground/70">Your demo device is ready</p></div></div></div>
                    <div className="absolute inset-x-4 bottom-4 z-10 flex justify-between">{[Phone, Search, Cloud, Settings2].map((Icon, index) => <button key={index} onClick={() => setNotice('This phone screen is a visual demo. App launch and device input are not connected.')} className="grid size-9 place-items-center rounded-xl border border-foreground/10 bg-foreground/20 text-foreground backdrop-blur-sm transition hover:scale-110" aria-label={`Demo app ${index + 1}`}><Icon size={16} /></button>)}</div>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2"><button onClick={() => setRotated((value) => !value)} className="flex h-9 items-center gap-2 rounded-lg border border-border bg-background/80 px-3 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"><RotateCw size={14} />Rotate</button><button onClick={() => setNotice('Preview refreshed. The device display is a local visual demo.')} className="flex h-9 items-center gap-2 rounded-lg border border-border bg-background/80 px-3 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"><RefreshCw size={14} />Refresh preview</button><button onClick={() => setNotice('Device controls are visual only; no remote device is connected.')} className="flex h-9 items-center gap-2 rounded-lg border border-border bg-background/80 px-3 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"><Grip size={14} />Controls</button></div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-4"><div className="flex items-center gap-2 text-xs text-muted-foreground"><div className="grid size-6 place-items-center rounded-full bg-amber-200 text-[9px] font-bold text-amber-950">{selected.initials}</div>Assigned to <span className="font-medium text-foreground">{selected.owner}</span></div>{active ? <button onClick={endDemo} className="flex h-9 items-center gap-2 rounded-lg border border-destructive/40 px-3 text-xs font-medium text-destructive transition hover:bg-destructive/10"><Square size={13} />End demo</button> : <button onClick={startDemo} className="flex h-9 items-center gap-2 rounded-lg bg-primary px-3 text-xs font-semibold text-primary-foreground transition hover:brightness-105 active:scale-[0.98]"><Play size={14} fill="currentColor" />Start demo</button>}</div>
            </div>

            <div className="space-y-5 2xl:col-auto xl:col-span-2 2xl:row-auto">
              <div className="rounded-2xl border border-border bg-card shadow-sm"><div className="flex items-center justify-between border-b border-border px-5 py-4"><div><h2 className="text-sm font-semibold">Session details</h2><p className="mt-1 text-xs text-muted-foreground">Current device preview</p></div><MoreHorizontal size={17} className="text-muted-foreground" /></div><div className="space-y-4 p-5"><Detail label="Device" value={selected.name} icon={Smartphone} /><Detail label="Platform" value={selected.platform} icon={selected.platform === 'iOS' ? Apple : Smartphone} /><Detail label="Session length" value={active ? time : 'Not started'} icon={Clock3} /><Detail label="Connection" value="Not connected" icon={Cloud} /></div><div className="border-t border-border px-5 py-4"><div className="flex items-start gap-3 rounded-xl border border-amber-300/20 bg-amber-200/[0.06] p-3"><div className="mt-0.5 text-amber-200"><CircleHelp size={15} /></div><p className="text-[11px] leading-relaxed text-muted-foreground"><span className="font-medium text-foreground">Demo environment.</span> Device preview streaming and real phone calls need a device and voice service connection.</p></div><button onClick={() => setNotice('No voice provider is connected, so this preview cannot place real calls.')} className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-xs font-medium transition hover:bg-muted"><Headphones size={14} />Test call <span className="text-[10px] text-muted-foreground">(preview only)</span></button></div></div>
              <div id="sessions" className="rounded-2xl border border-border bg-card shadow-sm"><div className="flex items-center justify-between border-b border-border px-5 py-4"><div><h2 className="text-sm font-semibold">Recent sessions</h2><p className="mt-1 text-xs text-muted-foreground">Sample activity</p></div><button onClick={() => setNotice('Session history is sample data and is not saved.')} className="text-[11px] font-medium text-primary hover:underline">View all</button></div><div className="space-y-1 p-3">{[['Pixel 9', 'Maya Chen', 'Today, 9:14 AM', '08m 32s'], ['iPhone 16 Pro', 'Alex Rivera', 'Yesterday, 4:38 PM', '12m 04s'], ['Galaxy S24', 'Jordan Lee', 'Yesterday, 2:05 PM', '03m 51s']].map(([device, owner, date, duration]) => <div key={device} className="flex items-center gap-3 rounded-lg px-2 py-2.5"><div className="grid size-8 place-items-center rounded-lg bg-muted text-muted-foreground"><Smartphone size={15} /></div><div className="min-w-0 flex-1"><div className="text-xs font-medium">{device}</div><div className="mt-0.5 truncate text-[10px] text-muted-foreground">{owner} · {date}</div></div><div className="font-mono text-[10px] text-muted-foreground">{duration}</div></div>)}</div></div>
            </div>
          </section>
          <footer className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-5 text-[10px] text-muted-foreground sm:flex-row"><span>Cloudphone workspace <span className="mx-1.5 text-border">·</span> UI preview with sample device data</span><div className="flex items-center gap-4"><button onClick={() => setNotice('Support is not configured in this preview.')} className="hover:text-foreground">Support</button><span>Privacy</span><span>Terms</span><button onClick={() => setNotice('Session sharing is not connected. This preview has no shareable workspace link.')} aria-label="Workspace sharing information" className="flex items-center gap-1 hover:text-foreground"><Copy size={12} />Workspace info</button></div></footer>
        </main>
      </div>
    </div>
  )
}

function Metric({ icon: Icon, label, value, detail }: { icon: LucideIcon; label: string; value: string; detail: string }) {
  return <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm"><div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Icon size={18} /></div><div className="min-w-0 flex-1"><div className="flex items-baseline justify-between gap-2"><span className="truncate text-xs text-muted-foreground">{label}</span><span className="text-xl font-semibold tracking-tight">{value}</span></div><p className="mt-0.5 truncate text-[10px] text-muted-foreground/80">{detail}</p></div></div>
}

function Detail({ label, value, icon: Icon }: { label: string; value: string; icon: LucideIcon }) {
  return <div className="flex items-center gap-3"><div className="grid size-8 place-items-center rounded-lg bg-muted text-muted-foreground"><Icon size={15} /></div><div className="flex-1"><div className="text-[10px] text-muted-foreground">{label}</div><div className="mt-0.5 text-xs font-medium">{value}</div></div></div>
}
