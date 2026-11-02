import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Activity, Apple, ArrowUpRight, BatteryFull, Bell, Check, ChevronDown, CircleHelp, Clock3, Cloud, Command, Copy, Grip, Headphones, Home, LayoutGrid, MoreHorizontal, Phone, Play, Plus, RefreshCw, RotateCw, Search, Settings2, Signal, Smartphone, Sparkles, Square, Wifi, X } from "lucide-react";
//#region src/routes/workspace.tsx?tsr-split=component
var demoDevices = [
	{
		id: "pixel-9",
		name: "Pixel 9",
		version: "Android 15",
		owner: "Maya Chen",
		initials: "MC",
		tint: "from-lime-300/50 via-emerald-700 to-slate-950",
		platform: "Android"
	},
	{
		id: "iphone-16",
		name: "iPhone 16 Pro",
		version: "iOS 18.2",
		owner: "Alex Rivera",
		initials: "AR",
		tint: "from-orange-300/50 via-rose-700 to-slate-950",
		platform: "iOS"
	},
	{
		id: "galaxy-s24",
		name: "Galaxy S24",
		version: "Android 14",
		owner: "Jordan Lee",
		initials: "JL",
		tint: "from-sky-300/40 via-indigo-700 to-slate-950",
		platform: "Android"
	},
	{
		id: "iphone-se",
		name: "iPhone SE",
		version: "iOS 17.5",
		owner: "Priya Patel",
		initials: "PP",
		tint: "from-violet-300/40 via-fuchsia-800 to-slate-950",
		platform: "iOS"
	}
];
function Workspace() {
	const [selectedId, setSelectedId] = useState(demoDevices[0].id);
	const [query, setQuery] = useState("");
	const [active, setActive] = useState(false);
	const [rotated, setRotated] = useState(false);
	const [seconds, setSeconds] = useState(0);
	const [notice, setNotice] = useState("");
	const selected = demoDevices.find((device) => device.id === selectedId) ?? demoDevices[0];
	const filtered = demoDevices.filter((device) => device.name.toLowerCase().includes(query.toLowerCase()));
	useEffect(() => {
		if (!active) return;
		const timer = window.setInterval(() => setSeconds((value) => value + 1), 1e3);
		return () => window.clearInterval(timer);
	}, [active]);
	const startDemo = () => {
		setActive(true);
		setSeconds(0);
		setNotice("Demo session started. This is a local preview, not a live cloud device.");
	};
	const endDemo = () => {
		setActive(false);
		setNotice("Demo session ended. No device was connected.");
	};
	const time = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-dvh bg-background text-foreground",
		children: [/* @__PURE__ */ jsxs("aside", {
			className: "fixed inset-y-0 left-0 z-20 hidden w-[236px] flex-col border-r border-border bg-sidebar lg:flex",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex h-[76px] items-center gap-3 border-b border-sidebar-border px-5",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground",
							children: /* @__PURE__ */ jsx(Cloud, {
								size: 19,
								strokeWidth: 2.5
							})
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-[15px] font-semibold tracking-tight",
							children: "cloudphone"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-[11px] text-muted-foreground",
							children: "TEAM WORKSPACE"
						})] }),
						/* @__PURE__ */ jsx("button", {
							className: "ml-auto rounded-md p-1.5 text-muted-foreground hover:bg-sidebar-accent",
							"aria-label": "Workspace options",
							children: /* @__PURE__ */ jsx(ChevronDown, { size: 15 })
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "border-b border-sidebar-border p-4",
					children: /* @__PURE__ */ jsxs("button", {
						onClick: () => setNotice("Mobile QA is the currently selected sample workspace."),
						className: "flex w-full items-center gap-3 rounded-xl border border-sidebar-border bg-sidebar-accent/60 p-3 text-left transition hover:border-primary/40",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "grid size-9 place-items-center rounded-lg bg-primary/10 text-primary",
								children: /* @__PURE__ */ jsx(Smartphone, { size: 17 })
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ jsx("div", {
									className: "truncate text-sm font-medium",
									children: "Mobile QA"
								}), /* @__PURE__ */ jsx("div", {
									className: "text-[11px] text-muted-foreground",
									children: "4 demo devices"
								})]
							}),
							/* @__PURE__ */ jsx(MoreHorizontal, {
								size: 16,
								className: "text-muted-foreground"
							})
						]
					})
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "flex-1 space-y-7 overflow-y-auto px-3 py-5",
					"aria-label": "Workspace navigation",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/70",
							children: "Workspace"
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "#overview",
							className: "flex h-10 items-center gap-3 rounded-lg bg-sidebar-accent px-3 text-sm font-medium text-sidebar-accent-foreground",
							children: [
								/* @__PURE__ */ jsx(Home, { size: 17 }),
								/* @__PURE__ */ jsx("span", { children: "Overview" }),
								/* @__PURE__ */ jsx("span", { className: "ml-auto size-1.5 rounded-full bg-primary" })
							]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "#devices",
							className: "flex h-10 items-center gap-3 rounded-lg px-3 text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-foreground",
							children: [
								/* @__PURE__ */ jsx(LayoutGrid, { size: 17 }),
								"Devices",
								/* @__PURE__ */ jsx("span", {
									className: "ml-auto text-xs",
									children: "4"
								})
							]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "#sessions",
							className: "flex h-10 items-center gap-3 rounded-lg px-3 text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-foreground",
							children: [/* @__PURE__ */ jsx(Clock3, { size: 17 }), "Session history"]
						})
					] }), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/70",
							children: "Team"
						}),
						/* @__PURE__ */ jsxs("button", {
							onClick: () => setNotice("Team sharing is shown as a preview. Sign-in and shared sessions are not connected yet."),
							className: "flex h-10 w-full items-center gap-3 rounded-lg px-3 text-left text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-foreground",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex -space-x-1.5",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "grid size-5 place-items-center rounded-full border border-sidebar bg-amber-200 text-[8px] font-bold text-amber-900",
											children: "M"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "grid size-5 place-items-center rounded-full border border-sidebar bg-teal-200 text-[8px] font-bold text-teal-900",
											children: "A"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "grid size-5 place-items-center rounded-full border border-sidebar bg-violet-200 text-[8px] font-bold text-violet-900",
											children: "J"
										})
									]
								}),
								"Team members",
								/* @__PURE__ */ jsx(ArrowUpRight, {
									size: 13,
									className: "ml-auto"
								})
							]
						}),
						/* @__PURE__ */ jsxs("button", {
							onClick: () => setNotice("Workspace settings are not connected in this demo."),
							className: "flex h-10 w-full items-center gap-3 rounded-lg px-3 text-left text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-foreground",
							children: [/* @__PURE__ */ jsx(Settings2, { size: 17 }), "Settings"]
						})
					] })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "shrink-0 border-t border-sidebar-border p-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mb-4 rounded-xl border border-sidebar-border bg-sidebar-accent/40 p-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 text-xs font-medium",
								children: [/* @__PURE__ */ jsx(Sparkles, {
									size: 14,
									className: "text-primary"
								}), "Demo workspace"]
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-[11px] leading-relaxed text-muted-foreground",
								children: "Sample screens only. No devices are connected."
							})]
						}),
						/* @__PURE__ */ jsxs("button", {
							onClick: () => setNotice("Support is not configured in this preview."),
							className: "flex w-full items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
							children: [/* @__PURE__ */ jsx(CircleHelp, { size: 17 }), "Help & support"]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-3 flex items-center gap-3 border-t border-sidebar-border pt-4",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "grid size-8 place-items-center rounded-full bg-amber-200 text-xs font-bold text-amber-950",
									children: "MC"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ jsx("div", {
										className: "truncate text-xs font-medium",
										children: "Maya Chen"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-[10px] text-muted-foreground",
										children: "Workspace owner"
									})]
								}),
								/* @__PURE__ */ jsx(MoreHorizontal, {
									size: 16,
									className: "text-muted-foreground"
								})
							]
						})
					]
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "lg:pl-[236px]",
			children: [/* @__PURE__ */ jsxs("header", {
				className: "sticky top-0 z-10 flex h-[68px] items-center justify-between border-b border-border/80 bg-background/90 px-5 backdrop-blur-xl sm:px-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground lg:hidden",
							children: /* @__PURE__ */ jsx(Cloud, { size: 17 })
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "hidden text-xs text-muted-foreground sm:block",
							children: [
								"Workspace ",
								/* @__PURE__ */ jsx("span", {
									className: "mx-2 text-border",
									children: "/"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-foreground",
									children: "Overview"
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "text-sm font-semibold lg:hidden",
							children: "cloudphone"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "rounded-md border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground",
							children: "DEMO MODE"
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 sm:gap-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "hidden items-center gap-2 text-xs text-muted-foreground sm:flex",
							children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 animate-pulse rounded-full bg-primary" }), "Workspace preview ready"]
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setNotice("You are all caught up. Notifications are sample UI only."),
							className: "rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground",
							"aria-label": "Notifications",
							children: /* @__PURE__ */ jsx(Bell, { size: 17 })
						}),
						/* @__PURE__ */ jsxs("button", {
							onClick: () => setNotice("This preview is using the sample profile Maya Chen."),
							className: "flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-medium transition hover:bg-muted",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "grid size-5 place-items-center rounded-full bg-amber-200 text-[9px] font-bold text-amber-950",
									children: "MC"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "hidden sm:inline",
									children: "Maya Chen"
								}),
								/* @__PURE__ */ jsx(ChevronDown, {
									size: 13,
									className: "text-muted-foreground"
								})
							]
						})
					]
				})]
			}), /* @__PURE__ */ jsxs("main", {
				id: "overview",
				className: "mx-auto max-w-[1500px] px-5 pb-12 pt-8 sm:px-8",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-7 flex flex-col justify-between gap-5 xl:flex-row xl:items-end",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "mb-3 flex items-center gap-2 text-xs font-medium text-primary",
								children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-primary" }), "MONDAY, OCTOBER 13"]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "text-3xl font-semibold tracking-tight sm:text-[38px]",
								children: ["Your mobile lab, ", /* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: "ready."
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Spin up a device preview and keep your team's testing in one place."
							})
						] }), /* @__PURE__ */ jsxs("button", {
							onClick: startDemo,
							className: "flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-md transition hover:scale-[1.02] hover:brightness-105 active:scale-[0.98]",
							children: [/* @__PURE__ */ jsx(Plus, {
								size: 17,
								strokeWidth: 2.5
							}), "Start demo session"]
						})]
					}),
					notice && /* @__PURE__ */ jsxs("div", {
						role: "status",
						className: "mb-5 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "mt-0.5 text-primary",
								children: /* @__PURE__ */ jsx(Check, { size: 16 })
							}),
							/* @__PURE__ */ jsx("span", {
								className: "flex-1",
								children: notice
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: () => setNotice(""),
								"aria-label": "Dismiss message",
								className: "text-muted-foreground hover:text-foreground",
								children: /* @__PURE__ */ jsx(X, { size: 16 })
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mb-8 grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ jsx(Metric, {
								icon: Smartphone,
								label: "Devices available",
								value: "4",
								detail: "Sample inventory"
							}),
							/* @__PURE__ */ jsx(Metric, {
								icon: Activity,
								label: "Active sessions",
								value: active ? "1" : "0",
								detail: active ? `Demo running · ${time}` : "No live device sessions"
							}),
							/* @__PURE__ */ jsx(Metric, {
								icon: Signal,
								label: "Team presence",
								value: "3",
								detail: "Sample team members"
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", {
						id: "devices",
						className: "grid items-start gap-5 2xl:grid-cols-[minmax(270px,0.78fr)_minmax(350px,1.1fr)_minmax(300px,0.82fr)] xl:grid-cols-[minmax(250px,0.8fr)_minmax(330px,1fr)]",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl border border-border bg-card shadow-sm",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between border-b border-border px-5 py-4",
									children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
										className: "text-sm font-semibold",
										children: "Device library"
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "Choose a demo device"
									})] }), /* @__PURE__ */ jsx("button", {
										onClick: () => setNotice("Device provisioning is not connected. These are sample devices for the UI preview."),
										className: "rounded-lg border border-border p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground",
										"aria-label": "Add device",
										children: /* @__PURE__ */ jsx(Plus, { size: 16 })
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "p-4",
									children: [
										/* @__PURE__ */ jsxs("label", {
											className: "flex h-10 items-center gap-2 rounded-lg border border-input bg-background px-3 text-muted-foreground focus-within:ring-2 focus-within:ring-ring",
											children: [/* @__PURE__ */ jsx(Search, { size: 15 }), /* @__PURE__ */ jsx("input", {
												value: query,
												onChange: (event) => setQuery(event.target.value),
												placeholder: "Search devices",
												className: "w-full bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground"
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mb-2 mt-5 flex items-center justify-between px-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground",
											children: [/* @__PURE__ */ jsx("span", { children: "My devices" }), /* @__PURE__ */ jsxs("span", { children: [filtered.length, " DEVICES"] })]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "space-y-1",
											children: [filtered.map((device) => /* @__PURE__ */ jsxs("button", {
												onClick: () => {
													setSelectedId(device.id);
													setRotated(false);
												},
												className: `flex w-full items-center gap-3 rounded-xl border p-3 text-left transition ${selectedId === device.id ? "border-primary/45 bg-primary/[0.07]" : "border-transparent hover:bg-muted/70"}`,
												children: [
													/* @__PURE__ */ jsx("div", {
														className: `grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${device.tint}`,
														children: /* @__PURE__ */ jsx(Smartphone, {
															size: 18,
															className: "text-foreground/90"
														})
													}),
													/* @__PURE__ */ jsxs("div", {
														className: "min-w-0 flex-1",
														children: [/* @__PURE__ */ jsx("div", {
															className: "truncate text-xs font-semibold",
															children: device.name
														}), /* @__PURE__ */ jsx("div", {
															className: "mt-1 text-[10px] text-muted-foreground",
															children: device.version
														})]
													}),
													/* @__PURE__ */ jsx("span", { className: `size-2 rounded-full ${active && selectedId === device.id ? "bg-primary" : "bg-muted-foreground/35"}` })
												]
											}, device.id)), filtered.length === 0 && /* @__PURE__ */ jsx("p", {
												className: "px-2 py-5 text-center text-xs text-muted-foreground",
												children: "No demo devices match."
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-4 flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2.5 text-[10px] leading-relaxed text-muted-foreground",
											children: [/* @__PURE__ */ jsx(Command, {
												size: 13,
												className: "shrink-0"
											}), " Device names and owners are sample data."]
										})
									]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl border border-border bg-card shadow-sm",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between border-b border-border px-5 py-4",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
											className: "text-sm font-semibold",
											children: "Device preview"
										}), /* @__PURE__ */ jsxs("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: [
												selected.name,
												" ",
												/* @__PURE__ */ jsx("span", {
													className: "mx-1 text-border",
													children: "·"
												}),
												selected.version
											]
										})] }), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-2.5 py-1 text-[10px] font-medium text-muted-foreground",
											children: [/* @__PURE__ */ jsx("span", { className: `size-1.5 rounded-full ${active ? "bg-primary" : "bg-muted-foreground/50"}` }), active ? "Demo active" : "Preview only"]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_40%,oklch(0.27_0.045_151/0.55),transparent_62%)] px-5 py-7 sm:min-h-[560px]",
										children: [/* @__PURE__ */ jsx("div", {
											className: `relative rounded-[38px] border-[5px] border-border bg-sidebar p-2 shadow-2xl shadow-black/50 transition-transform duration-300 ${rotated ? "rotate-90 scale-[0.7]" : "rotate-0"}`,
											children: /* @__PURE__ */ jsxs("div", {
												className: `relative h-[410px] w-[218px] overflow-hidden rounded-[29px] bg-gradient-to-br ${selected.tint}`,
												children: [
													/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_48%_40%,oklch(0.88_0.17_119/0.3),transparent_33%),radial-gradient(ellipse_at_80%_86%,oklch(0.5_0.11_164/0.55),transparent_40%)]" }),
													/* @__PURE__ */ jsxs("div", {
														className: "relative z-10 flex items-center justify-between px-4 pt-3 text-[9px] font-semibold text-foreground",
														children: [/* @__PURE__ */ jsx("span", { children: "9:41" }), /* @__PURE__ */ jsxs("div", {
															className: "flex gap-1",
															children: [
																/* @__PURE__ */ jsx(Signal, { size: 11 }),
																/* @__PURE__ */ jsx(Wifi, { size: 11 }),
																/* @__PURE__ */ jsx(BatteryFull, { size: 12 })
															]
														})]
													}),
													/* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto mt-3 h-4 w-20 rounded-full bg-sidebar/90" }),
													/* @__PURE__ */ jsxs("div", {
														className: "relative z-10 mt-12 px-4 text-center text-foreground",
														children: [
															/* @__PURE__ */ jsx("div", {
																className: "text-[11px] font-medium tracking-wide",
																children: "MONDAY, OCTOBER 13"
															}),
															/* @__PURE__ */ jsx("div", {
																className: "mt-1 text-[52px] font-light leading-none tracking-tight",
																children: "9:41"
															}),
															/* @__PURE__ */ jsx("div", {
																className: "mt-2 text-[11px] text-foreground/75",
																children: "Sunny · 72°"
															})
														]
													}),
													/* @__PURE__ */ jsx("div", {
														className: "absolute inset-x-3 bottom-14 z-10 rounded-2xl border border-foreground/15 bg-foreground/10 p-3 backdrop-blur-md",
														children: /* @__PURE__ */ jsxs("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ jsx("div", {
																className: "grid size-7 place-items-center rounded-lg bg-foreground/20",
																children: /* @__PURE__ */ jsx(Cloud, {
																	size: 14,
																	className: "text-foreground"
																})
															}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
																className: "text-[9px] font-semibold text-foreground",
																children: "Cloud Phone"
															}), /* @__PURE__ */ jsx("p", {
																className: "text-[8px] text-foreground/70",
																children: "Your demo device is ready"
															})] })]
														})
													}),
													/* @__PURE__ */ jsx("div", {
														className: "absolute inset-x-4 bottom-4 z-10 flex justify-between",
														children: [
															Phone,
															Search,
															Cloud,
															Settings2
														].map((Icon, index) => /* @__PURE__ */ jsx("button", {
															onClick: () => setNotice("This phone screen is a visual demo. App launch and device input are not connected."),
															className: "grid size-9 place-items-center rounded-xl border border-foreground/10 bg-foreground/20 text-foreground backdrop-blur-sm transition hover:scale-110",
															"aria-label": `Demo app ${index + 1}`,
															children: /* @__PURE__ */ jsx(Icon, { size: 16 })
														}, index))
													})
												]
											})
										}), /* @__PURE__ */ jsxs("div", {
											className: "mt-5 flex flex-wrap items-center justify-center gap-2",
											children: [
												/* @__PURE__ */ jsxs("button", {
													onClick: () => setRotated((value) => !value),
													className: "flex h-9 items-center gap-2 rounded-lg border border-border bg-background/80 px-3 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground",
													children: [/* @__PURE__ */ jsx(RotateCw, { size: 14 }), "Rotate"]
												}),
												/* @__PURE__ */ jsxs("button", {
													onClick: () => setNotice("Preview refreshed. The device display is a local visual demo."),
													className: "flex h-9 items-center gap-2 rounded-lg border border-border bg-background/80 px-3 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground",
													children: [/* @__PURE__ */ jsx(RefreshCw, { size: 14 }), "Refresh preview"]
												}),
												/* @__PURE__ */ jsxs("button", {
													onClick: () => setNotice("Device controls are visual only; no remote device is connected."),
													className: "flex h-9 items-center gap-2 rounded-lg border border-border bg-background/80 px-3 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground",
													children: [/* @__PURE__ */ jsx(Grip, { size: 14 }), "Controls"]
												})
											]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-4",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 text-xs text-muted-foreground",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "grid size-6 place-items-center rounded-full bg-amber-200 text-[9px] font-bold text-amber-950",
													children: selected.initials
												}),
												"Assigned to ",
												/* @__PURE__ */ jsx("span", {
													className: "font-medium text-foreground",
													children: selected.owner
												})
											]
										}), active ? /* @__PURE__ */ jsxs("button", {
											onClick: endDemo,
											className: "flex h-9 items-center gap-2 rounded-lg border border-destructive/40 px-3 text-xs font-medium text-destructive transition hover:bg-destructive/10",
											children: [/* @__PURE__ */ jsx(Square, { size: 13 }), "End demo"]
										}) : /* @__PURE__ */ jsxs("button", {
											onClick: startDemo,
											className: "flex h-9 items-center gap-2 rounded-lg bg-primary px-3 text-xs font-semibold text-primary-foreground transition hover:brightness-105 active:scale-[0.98]",
											children: [/* @__PURE__ */ jsx(Play, {
												size: 14,
												fill: "currentColor"
											}), "Start demo"]
										})]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-5 2xl:col-auto xl:col-span-2 2xl:row-auto",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "rounded-2xl border border-border bg-card shadow-sm",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between border-b border-border px-5 py-4",
											children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
												className: "text-sm font-semibold",
												children: "Session details"
											}), /* @__PURE__ */ jsx("p", {
												className: "mt-1 text-xs text-muted-foreground",
												children: "Current device preview"
											})] }), /* @__PURE__ */ jsx(MoreHorizontal, {
												size: 17,
												className: "text-muted-foreground"
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "space-y-4 p-5",
											children: [
												/* @__PURE__ */ jsx(Detail, {
													label: "Device",
													value: selected.name,
													icon: Smartphone
												}),
												/* @__PURE__ */ jsx(Detail, {
													label: "Platform",
													value: selected.platform,
													icon: selected.platform === "iOS" ? Apple : Smartphone
												}),
												/* @__PURE__ */ jsx(Detail, {
													label: "Session length",
													value: active ? time : "Not started",
													icon: Clock3
												}),
												/* @__PURE__ */ jsx(Detail, {
													label: "Connection",
													value: "Not connected",
													icon: Cloud
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "border-t border-border px-5 py-4",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-start gap-3 rounded-xl border border-amber-300/20 bg-amber-200/[0.06] p-3",
												children: [/* @__PURE__ */ jsx("div", {
													className: "mt-0.5 text-amber-200",
													children: /* @__PURE__ */ jsx(CircleHelp, { size: 15 })
												}), /* @__PURE__ */ jsxs("p", {
													className: "text-[11px] leading-relaxed text-muted-foreground",
													children: [/* @__PURE__ */ jsx("span", {
														className: "font-medium text-foreground",
														children: "Demo environment."
													}), " Device preview streaming and real phone calls need a device and voice service connection."]
												})]
											}), /* @__PURE__ */ jsxs("button", {
												onClick: () => setNotice("No voice provider is connected, so this preview cannot place real calls."),
												className: "mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-xs font-medium transition hover:bg-muted",
												children: [
													/* @__PURE__ */ jsx(Headphones, { size: 14 }),
													"Test call ",
													/* @__PURE__ */ jsx("span", {
														className: "text-[10px] text-muted-foreground",
														children: "(preview only)"
													})
												]
											})]
										})
									]
								}), /* @__PURE__ */ jsxs("div", {
									id: "sessions",
									className: "rounded-2xl border border-border bg-card shadow-sm",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-between border-b border-border px-5 py-4",
										children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
											className: "text-sm font-semibold",
											children: "Recent sessions"
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: "Sample activity"
										})] }), /* @__PURE__ */ jsx("button", {
											onClick: () => setNotice("Session history is sample data and is not saved."),
											className: "text-[11px] font-medium text-primary hover:underline",
											children: "View all"
										})]
									}), /* @__PURE__ */ jsx("div", {
										className: "space-y-1 p-3",
										children: [
											[
												"Pixel 9",
												"Maya Chen",
												"Today, 9:14 AM",
												"08m 32s"
											],
											[
												"iPhone 16 Pro",
												"Alex Rivera",
												"Yesterday, 4:38 PM",
												"12m 04s"
											],
											[
												"Galaxy S24",
												"Jordan Lee",
												"Yesterday, 2:05 PM",
												"03m 51s"
											]
										].map(([device, owner, date, duration]) => /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-3 rounded-lg px-2 py-2.5",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "grid size-8 place-items-center rounded-lg bg-muted text-muted-foreground",
													children: /* @__PURE__ */ jsx(Smartphone, { size: 15 })
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "min-w-0 flex-1",
													children: [/* @__PURE__ */ jsx("div", {
														className: "text-xs font-medium",
														children: device
													}), /* @__PURE__ */ jsxs("div", {
														className: "mt-0.5 truncate text-[10px] text-muted-foreground",
														children: [
															owner,
															" · ",
															date
														]
													})]
												}),
												/* @__PURE__ */ jsx("div", {
													className: "font-mono text-[10px] text-muted-foreground",
													children: duration
												})
											]
										}, device))
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("footer", {
						className: "mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-5 text-[10px] text-muted-foreground sm:flex-row",
						children: [/* @__PURE__ */ jsxs("span", { children: [
							"Cloudphone workspace ",
							/* @__PURE__ */ jsx("span", {
								className: "mx-1.5 text-border",
								children: "·"
							}),
							" UI preview with sample device data"
						] }), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-4",
							children: [
								/* @__PURE__ */ jsx("button", {
									onClick: () => setNotice("Support is not configured in this preview."),
									className: "hover:text-foreground",
									children: "Support"
								}),
								/* @__PURE__ */ jsx("span", { children: "Privacy" }),
								/* @__PURE__ */ jsx("span", { children: "Terms" }),
								/* @__PURE__ */ jsxs("button", {
									onClick: () => setNotice("Session sharing is not connected. This preview has no shareable workspace link."),
									"aria-label": "Workspace sharing information",
									className: "flex items-center gap-1 hover:text-foreground",
									children: [/* @__PURE__ */ jsx(Copy, { size: 12 }), "Workspace info"]
								})
							]
						})]
					})
				]
			})]
		})]
	});
}
function Metric({ icon: Icon, label, value, detail }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm",
		children: [/* @__PURE__ */ jsx("div", {
			className: "grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
			children: /* @__PURE__ */ jsx(Icon, { size: 18 })
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-baseline justify-between gap-2",
				children: [/* @__PURE__ */ jsx("span", {
					className: "truncate text-xs text-muted-foreground",
					children: label
				}), /* @__PURE__ */ jsx("span", {
					className: "text-xl font-semibold tracking-tight",
					children: value
				})]
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-0.5 truncate text-[10px] text-muted-foreground/80",
				children: detail
			})]
		})]
	});
}
function Detail({ label, value, icon: Icon }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ jsx("div", {
			className: "grid size-8 place-items-center rounded-lg bg-muted text-muted-foreground",
			children: /* @__PURE__ */ jsx(Icon, { size: 15 })
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex-1",
			children: [/* @__PURE__ */ jsx("div", {
				className: "text-[10px] text-muted-foreground",
				children: label
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-0.5 text-xs font-medium",
				children: value
			})]
		})]
	});
}
//#endregion
export { Workspace as component };
