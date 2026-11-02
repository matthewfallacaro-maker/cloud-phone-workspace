import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowDown, ArrowRight, ArrowUpRight, BatteryFull, Check, ChevronRight, Cloud, Code2, Copy, LockKeyhole, Menu, Phone, RotateCcw, ShieldCheck, Signal, Smartphone, Users, Wifi, X, Zap } from "lucide-react";
//#region src/routes/index.tsx?tsr-split=component
var deviceViews = [
	{
		name: "Pixel 9",
		os: "Android 15",
		time: "9:41",
		tint: "from-lime-300/80 via-emerald-700 to-slate-950",
		caption: "A real Android device, ready in your browser."
	},
	{
		name: "iPhone 16 Pro",
		os: "iOS 18.2",
		time: "9:41",
		tint: "from-orange-200/80 via-rose-800 to-slate-950",
		caption: "Switch platforms without switching workspaces."
	},
	{
		name: "Galaxy S24",
		os: "Android 14",
		time: "9:41",
		tint: "from-cyan-200/70 via-indigo-800 to-slate-950",
		caption: "Check another screen size in a couple of clicks."
	}
];
function LandingPage() {
	const [deviceIndex, setDeviceIndex] = useState(0);
	const [menuOpen, setMenuOpen] = useState(false);
	const [rotated, setRotated] = useState(false);
	const [previewMessage, setPreviewMessage] = useState("");
	const device = deviceViews[deviceIndex];
	const copyPreviewLink = async () => {
		try {
			await navigator.clipboard.writeText(`${window.location.origin}/workspace`);
			setPreviewMessage("Workspace preview link copied.");
		} catch {
			setPreviewMessage("Copy is unavailable here. Use the workspace preview button to open it.");
		}
	};
	return /* @__PURE__ */ jsxs("main", {
		className: "overflow-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "relative z-20 mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8",
				children: [
					/* @__PURE__ */ jsxs("a", {
						href: "#top",
						className: "flex items-center gap-2.5",
						"aria-label": "Cloudphone home",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground",
							children: /* @__PURE__ */ jsx(Cloud, {
								size: 20,
								strokeWidth: 2.5
							})
						}), /* @__PURE__ */ jsx("span", {
							className: "font-display text-[19px] font-bold tracking-[-0.06em]",
							children: "cloudphone"
						})]
					}),
					/* @__PURE__ */ jsxs("nav", {
						className: "hidden items-center gap-8 text-[13px] text-muted-foreground md:flex",
						"aria-label": "Main navigation",
						children: [
							/* @__PURE__ */ jsx("a", {
								className: "transition hover:text-foreground",
								href: "#platform",
								children: "Platform"
							}),
							/* @__PURE__ */ jsx("a", {
								className: "transition hover:text-foreground",
								href: "#teams",
								children: "For teams"
							}),
							/* @__PURE__ */ jsx("a", {
								className: "transition hover:text-foreground",
								href: "#security",
								children: "Security"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "hidden items-center gap-5 md:flex",
						children: [/* @__PURE__ */ jsx(Link, {
							to: "/workspace",
							className: "text-[13px] text-muted-foreground transition hover:text-foreground",
							children: "Workspace preview"
						}), /* @__PURE__ */ jsxs(Link, {
							to: "/workspace",
							className: "inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-[13px] font-semibold text-primary-foreground transition hover:scale-[1.02] active:scale-[0.98]",
							children: ["Explore workspace", /* @__PURE__ */ jsx(ArrowUpRight, { size: 15 })]
						})]
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: () => setMenuOpen((open) => !open),
						className: "grid size-10 place-items-center rounded-lg border border-border md:hidden",
						"aria-label": menuOpen ? "Close navigation" : "Open navigation",
						children: menuOpen ? /* @__PURE__ */ jsx(X, { size: 18 }) : /* @__PURE__ */ jsx(Menu, { size: 18 })
					}),
					menuOpen && /* @__PURE__ */ jsxs("nav", {
						className: "absolute inset-x-4 top-[68px] flex flex-col gap-1 rounded-2xl border border-border bg-card p-3 shadow-xl md:hidden",
						children: [
							/* @__PURE__ */ jsx("a", {
								onClick: () => setMenuOpen(false),
								className: "rounded-lg px-3 py-3 text-sm text-muted-foreground",
								href: "#platform",
								children: "Platform"
							}),
							/* @__PURE__ */ jsx("a", {
								onClick: () => setMenuOpen(false),
								className: "rounded-lg px-3 py-3 text-sm text-muted-foreground",
								href: "#teams",
								children: "For teams"
							}),
							/* @__PURE__ */ jsx("a", {
								onClick: () => setMenuOpen(false),
								className: "rounded-lg px-3 py-3 text-sm text-muted-foreground",
								href: "#security",
								children: "Security"
							}),
							/* @__PURE__ */ jsx(Link, {
								onClick: () => setMenuOpen(false),
								to: "/workspace",
								className: "rounded-lg bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground",
								children: "Workspace preview"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "top",
				className: "relative mx-auto grid min-h-[690px] max-w-[1320px] items-center gap-12 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8 lg:pb-24 lg:pt-8",
				children: [
					/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -left-48 top-28 size-[520px] rounded-full bg-primary/[0.06] blur-[120px]" }),
					/* @__PURE__ */ jsxs("div", {
						className: "relative z-10 max-w-[570px]",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.07] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-primary",
								children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-primary" }), "A shared mobile lab for your team"]
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "font-display text-[clamp(3.4rem,7.4vw,6.2rem)] font-semibold leading-[0.99] tracking-[-0.07em]",
								children: [
									"Your next phone is ",
									/* @__PURE__ */ jsx("span", {
										className: "text-primary",
										children: "already"
									}),
									" in the browser."
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 max-w-[475px] text-[16px] leading-7 text-muted-foreground sm:text-[18px] sm:leading-8",
								children: "Give your team a cloud-based Android or iOS phone for app testing and calls—accessible from one browser, wherever work happens."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 flex flex-col gap-3 sm:flex-row",
								children: [/* @__PURE__ */ jsxs(Link, {
									to: "/workspace",
									className: "inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition hover:scale-[1.02] active:scale-[0.98]",
									children: ["Explore the workspace preview", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
								}), /* @__PURE__ */ jsxs("a", {
									href: "#platform",
									className: "inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border px-5 text-sm font-medium text-foreground transition hover:bg-muted",
									children: ["See how it fits your team", /* @__PURE__ */ jsx(ArrowDown, { size: 15 })]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-2",
										children: [/* @__PURE__ */ jsx(Check, {
											size: 14,
											className: "text-primary"
										}), "Android + iOS"]
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-2",
										children: [/* @__PURE__ */ jsx(Check, {
											size: 14,
											className: "text-primary"
										}), "Browser-based access"]
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-2",
										children: [/* @__PURE__ */ jsx(Check, {
											size: 14,
											className: "text-primary"
										}), "Team sessions"]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative mx-auto w-full max-w-[620px] lg:ml-auto",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute -inset-5 rounded-[36px] bg-primary/[0.05] blur-2xl" }),
							/* @__PURE__ */ jsxs("div", {
								className: "relative overflow-hidden rounded-[24px] border border-border bg-card shadow-2xl shadow-black/30",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex h-12 items-center gap-3 border-b border-border bg-background/80 px-4",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "flex gap-1.5",
												children: [
													/* @__PURE__ */ jsx("i", { className: "size-2.5 rounded-full bg-destructive/80" }),
													/* @__PURE__ */ jsx("i", { className: "size-2.5 rounded-full bg-accent" }),
													/* @__PURE__ */ jsx("i", { className: "size-2.5 rounded-full bg-primary/75" })
												]
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "mx-auto flex h-7 w-[65%] items-center justify-center gap-2 rounded-md border border-border bg-card font-mono text-[9px] text-muted-foreground",
												children: [/* @__PURE__ */ jsx(LockKeyhole, { size: 10 }), " app.cloudphone.team/session"]
											}),
											/* @__PURE__ */ jsx("span", { className: "w-7" })
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex h-12 items-center justify-between border-b border-border px-4 sm:px-5",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 text-xs font-medium",
											children: [
												/* @__PURE__ */ jsx("span", {
													className: "grid size-6 place-items-center rounded-md bg-primary/10 text-primary",
													children: /* @__PURE__ */ jsx(Smartphone, { size: 13 })
												}),
												"Mobile QA ",
												/* @__PURE__ */ jsx(ChevronRight, {
													size: 12,
													className: "text-muted-foreground"
												}),
												" ",
												device.name
											]
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[9px] text-muted-foreground",
											children: [/* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-primary" }), "Ready"]
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "grid min-h-[390px] grid-cols-[1fr_190px] sm:grid-cols-[1fr_220px]",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex flex-col justify-between p-4 sm:p-6",
											children: [/* @__PURE__ */ jsxs("div", { children: [
												/* @__PURE__ */ jsx("p", {
													className: "font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground",
													children: "Connected device"
												}),
												/* @__PURE__ */ jsx("h2", {
													className: "mt-2 font-display text-xl font-semibold tracking-tight",
													children: device.name
												}),
												/* @__PURE__ */ jsxs("p", {
													className: "mt-1 text-xs text-muted-foreground",
													children: [
														device.os,
														" ",
														/* @__PURE__ */ jsx("span", {
															className: "mx-1 text-border",
															children: "·"
														}),
														" Session ready"
													]
												})
											] }), /* @__PURE__ */ jsxs("div", {
												className: "flex flex-wrap gap-2",
												children: [
													/* @__PURE__ */ jsxs("button", {
														onClick: () => {
															setRotated((value) => !value);
															setPreviewMessage(`Preview rotated ${rotated ? "back to portrait" : "to landscape"}.`);
														},
														className: "inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[10px] text-muted-foreground transition hover:bg-muted",
														"aria-pressed": rotated,
														children: [/* @__PURE__ */ jsx(RotateCcw, { size: 12 }), "Rotate"]
													}),
													/* @__PURE__ */ jsxs("button", {
														onClick: () => setPreviewMessage("Calling is not connected in this product preview."),
														className: "inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[10px] text-muted-foreground transition hover:bg-muted",
														children: [/* @__PURE__ */ jsx(Phone, { size: 12 }), "Call"]
													}),
													/* @__PURE__ */ jsxs("button", {
														onClick: copyPreviewLink,
														className: "inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-2.5 text-[10px] text-muted-foreground transition hover:bg-muted",
														children: [/* @__PURE__ */ jsx(Copy, { size: 12 }), "Copy link"]
													})
												]
											})]
										}), /* @__PURE__ */ jsx("div", {
											className: "flex items-center justify-center border-l border-border bg-background/60 p-3",
											children: /* @__PURE__ */ jsx("div", {
												className: `relative h-[310px] w-[158px] rounded-[29px] border-[4px] border-muted bg-gradient-to-br ${device.tint} p-1.5 shadow-xl transition-all duration-500 sm:h-[330px] sm:w-[172px] ${rotated ? "rotate-90 scale-[0.62]" : ""}`,
												children: /* @__PURE__ */ jsxs("div", {
													className: "relative h-full overflow-hidden rounded-[22px] border border-foreground/10 bg-gradient-to-br from-foreground/10 via-transparent to-background/50",
													children: [
														/* @__PURE__ */ jsxs("div", {
															className: "flex items-center justify-between px-3 pt-2 text-[8px] font-semibold text-foreground",
															children: [/* @__PURE__ */ jsx("span", { children: device.time }), /* @__PURE__ */ jsxs("div", {
																className: "flex gap-1",
																children: [
																	/* @__PURE__ */ jsx(Signal, { size: 9 }),
																	/* @__PURE__ */ jsx(Wifi, { size: 9 }),
																	/* @__PURE__ */ jsx(BatteryFull, { size: 10 })
																]
															})]
														}),
														/* @__PURE__ */ jsx("div", { className: "mx-auto mt-2 h-3 w-14 rounded-full bg-background/70" }),
														/* @__PURE__ */ jsxs("div", {
															className: "mt-12 px-2 text-center text-foreground",
															children: [
																/* @__PURE__ */ jsx("p", {
																	className: "font-mono text-[7px] tracking-[0.12em]",
																	children: "MONDAY · OCT 13"
																}),
																/* @__PURE__ */ jsx("p", {
																	className: "mt-1 font-display text-4xl font-light tracking-tight",
																	children: device.time
																}),
																/* @__PURE__ */ jsx("p", {
																	className: "mt-1 text-[8px] text-foreground/75",
																	children: "Cloud phone session"
																})
															]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "absolute inset-x-2 bottom-2 rounded-xl border border-foreground/15 bg-background/20 p-2 text-center backdrop-blur",
															children: [/* @__PURE__ */ jsx("p", {
																className: "text-[8px] font-medium text-foreground",
																children: device.name
															}), /* @__PURE__ */ jsx("p", {
																className: "mt-0.5 text-[7px] text-foreground/70",
																children: device.os
															})]
														})
													]
												})
											})
										})]
									}),
									previewMessage && /* @__PURE__ */ jsxs("div", {
										role: "status",
										"aria-live": "polite",
										className: "flex items-center justify-between gap-3 border-t border-border bg-primary/[0.06] px-4 py-2.5 text-[10px] text-muted-foreground",
										children: [/* @__PURE__ */ jsx("span", { children: previewMessage }), /* @__PURE__ */ jsx("button", {
											onClick: () => setPreviewMessage(""),
											className: "shrink-0 font-medium text-primary hover:underline",
											children: "Dismiss"
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "flex min-h-[62px] items-center justify-between gap-3 border-t border-border px-4 py-3 sm:px-5",
										children: [/* @__PURE__ */ jsx("p", {
											className: "max-w-[245px] text-[10px] leading-relaxed text-muted-foreground",
											children: device.caption
										}), /* @__PURE__ */ jsx("div", {
											className: "flex items-center gap-1.5",
											children: deviceViews.map((view, index) => /* @__PURE__ */ jsx("button", {
												onClick: () => setDeviceIndex(index),
												"aria-label": `Preview ${view.name}`,
												"aria-pressed": deviceIndex === index,
												className: `size-8 rounded-lg border font-mono text-[9px] transition ${deviceIndex === index ? "border-primary/60 bg-primary/10 text-primary" : "border-border text-muted-foreground hover:bg-muted"}`,
												children: index === 1 ? "iOS" : index === 0 ? "P9" : "S24"
											}, view.name))
										})]
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-center font-mono text-[9px] text-muted-foreground/70",
								children: "Product concept preview · live devices and calling are not connected"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "border-y border-border bg-card/45",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-[1320px] gap-7 px-5 py-8 sm:grid-cols-3 sm:px-8",
					children: [
						/* @__PURE__ */ jsx(ValueLine, {
							number: "01",
							title: "Open in a browser",
							text: "No local device drawer. No desk full of phones."
						}),
						/* @__PURE__ */ jsx(ValueLine, {
							number: "02",
							title: "Test across platforms",
							text: "Move between Android and iOS as your flow needs."
						}),
						/* @__PURE__ */ jsx(ValueLine, {
							number: "03",
							title: "Bring the team in",
							text: "Share a session when a bug needs another set of eyes."
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "platform",
				className: "mx-auto grid max-w-[1320px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-32",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-lg",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-primary",
							children: "01 / One browser, many devices"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "font-display text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl",
							children: "A real mobile workflow, without the device drawer."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-[15px] leading-7 text-muted-foreground",
							children: "Give engineers, QA, and support a shared place to inspect app behavior, reproduce an issue, and hand off context."
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "#teams",
							className: "mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline",
							children: ["Meet your team's workflow", /* @__PURE__ */ jsx(ArrowRight, { size: 15 })]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "grid gap-0 border-y border-border sm:grid-cols-2 sm:gap-x-8",
					children: [
						/* @__PURE__ */ jsx(Feature, {
							icon: Smartphone,
							title: "Android + iOS",
							body: "Choose a device and OS version that matches the scenario you need to check."
						}),
						/* @__PURE__ */ jsx(Feature, {
							icon: Code2,
							title: "App testing",
							body: "Bring app builds into a browser-based session for hands-on review."
						}),
						/* @__PURE__ */ jsx(Feature, {
							icon: Phone,
							title: "Calls in context",
							body: "Keep call scenarios close to the device workflow—not in a separate test setup."
						}),
						/* @__PURE__ */ jsx(Feature, {
							icon: RotateCcw,
							title: "Fast handoffs",
							body: "Share a reproducible session with a teammate when an issue needs a second look."
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "teams",
				className: "relative isolate overflow-hidden border-y border-border bg-card",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-[linear-gradient(115deg,oklch(0.17_0.018_158/0.95),oklch(0.17_0.018_158/0.4)),url('https://images.unsplash.com/photo-1719400471588-575b23e27bd7?auto=format&fit=crop&w=1800&q=85')] bg-cover bg-center opacity-75" }), /* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid min-h-[460px] max-w-[1320px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-xl",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-primary",
								children: "02 / Made for the handoff"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "font-display text-4xl font-semibold leading-[1.05] tracking-[-0.06em] sm:text-5xl",
								children: "The bug report is better when everyone sees the same thing."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-5 max-w-md text-[15px] leading-7 text-muted-foreground",
								children: "A shared browser session can give QA, engineering, and support the same starting point—so the conversation can move from “can you reproduce it?” to “here’s what I found.”"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 flex items-center gap-3 rounded-xl border border-border bg-background/75 p-4 backdrop-blur",
								children: [/* @__PURE__ */ jsx("div", {
									className: "grid size-10 place-items-center rounded-lg bg-primary/10 text-primary",
									children: /* @__PURE__ */ jsx(Users, { size: 19 })
								}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-sm font-medium",
									children: "A workspace for the whole team"
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Coordinate sessions without passing phones around."
								})] })]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "hidden justify-end lg:flex",
						children: /* @__PURE__ */ jsxs("div", {
							className: "w-full max-w-[380px] rounded-2xl border border-border bg-background/90 p-5 shadow-2xl backdrop-blur",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "mb-5 flex items-center justify-between",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-xs font-semibold",
										children: "Session handoff"
									}), /* @__PURE__ */ jsx("span", {
										className: "rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[9px] text-primary",
										children: "PREVIEW"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-3",
									children: [
										/* @__PURE__ */ jsx(Handoff, {
											initials: "MC",
											name: "Maya Chen",
											detail: "Opened Pixel 9 · Android 15"
										}),
										/* @__PURE__ */ jsx("div", { className: "ml-5 h-5 border-l border-dashed border-border" }),
										/* @__PURE__ */ jsx(Handoff, {
											initials: "AR",
											name: "Alex Rivera",
											detail: "Joined to review checkout flow"
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-6 flex items-center gap-2 border-t border-border pt-4 text-[10px] text-muted-foreground",
									children: [/* @__PURE__ */ jsx(Check, {
										size: 13,
										className: "text-primary"
									}), "One link. Shared context."]
								})
							]
						})
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "security",
				className: "mx-auto grid max-w-[1320px] gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-28",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-primary",
						children: "03 / Thoughtful by design"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl",
						children: "Your mobile test bench belongs to your team."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 max-w-lg text-[15px] leading-7 text-muted-foreground",
						children: "Cloudphone is designed around team access and clear session ownership. The live device service and its security model still need to be connected for this product concept to become operational."
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "space-y-0 border-y border-border",
					children: [
						/* @__PURE__ */ jsx(SecurityLine, {
							icon: LockKeyhole,
							title: "Private team sessions",
							body: "A clear home for sessions shared with your team."
						}),
						/* @__PURE__ */ jsx(SecurityLine, {
							icon: ShieldCheck,
							title: "A deliberate access model",
							body: "Set up access boundaries before connecting production devices."
						}),
						/* @__PURE__ */ jsx(SecurityLine, {
							icon: Zap,
							title: "Ready for your stack",
							body: "Connect the cloud device provider and calling service that fit your workflow."
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "get-started",
				className: "px-5 pb-20 sm:px-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-[1320px] flex-col justify-between gap-8 rounded-[28px] border border-primary/20 bg-primary/[0.08] p-7 sm:p-12 lg:flex-row lg:items-center",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-primary",
							children: "A better way to test together"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "max-w-2xl font-display text-3xl font-semibold tracking-[-0.05em] sm:text-4xl",
							children: "Bring your team's mobile workflow into the browser."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 max-w-xl text-sm leading-6 text-muted-foreground",
							children: "Explore the workspace concept, then decide which device and calling integrations to connect."
						})
					] }), /* @__PURE__ */ jsxs(Link, {
						to: "/workspace",
						className: "inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02] active:scale-[0.98]",
						children: ["Open workspace preview", /* @__PURE__ */ jsx(ArrowRight, { size: 16 })]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("footer", {
				className: "border-t border-border",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-[1320px] flex-col gap-5 px-5 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: "#top",
							className: "flex items-center gap-2 font-display font-bold tracking-tight text-foreground",
							children: [/* @__PURE__ */ jsx("span", {
								className: "grid size-7 place-items-center rounded-lg bg-primary text-primary-foreground",
								children: /* @__PURE__ */ jsx(Cloud, { size: 15 })
							}), "cloudphone"]
						}),
						/* @__PURE__ */ jsx("span", { children: "Browser-based mobile testing for teams. Product concept preview." }),
						/* @__PURE__ */ jsxs("div", {
							className: "flex gap-5",
							children: [
								/* @__PURE__ */ jsx("a", {
									className: "hover:text-foreground",
									href: "#platform",
									children: "Platform"
								}),
								/* @__PURE__ */ jsx("a", {
									className: "hover:text-foreground",
									href: "#get-started",
									children: "Get started"
								}),
								/* @__PURE__ */ jsx(Link, {
									className: "hover:text-foreground",
									to: "/workspace",
									children: "Workspace"
								})
							]
						})
					]
				}), /* @__PURE__ */ jsx("p", {
					className: "mx-auto max-w-[1320px] px-5 pb-5 text-[10px] text-muted-foreground/70 sm:px-8",
					children: "Workspace photograph by Abu Saeid on Unsplash."
				})]
			})
		]
	});
}
function ValueLine({ number, title, text }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex gap-4",
		children: [/* @__PURE__ */ jsx("span", {
			className: "pt-0.5 font-mono text-[10px] text-primary",
			children: number
		}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
			className: "font-display text-sm font-semibold",
			children: title
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1.5 text-xs leading-5 text-muted-foreground",
			children: text
		})] })]
	});
}
function Feature({ icon: Icon, title, body }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex gap-4 border-b border-border py-6",
		children: [/* @__PURE__ */ jsx("span", {
			className: "grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
			children: /* @__PURE__ */ jsx(Icon, { size: 17 })
		}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
			className: "font-display text-sm font-semibold",
			children: title
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-2 text-xs leading-5 text-muted-foreground",
			children: body
		})] })]
	});
}
function Handoff({ initials, name, detail }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ jsx("span", {
			className: "grid size-8 place-items-center rounded-full bg-primary/15 font-mono text-[9px] font-semibold text-primary",
			children: initials
		}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
			className: "text-xs font-medium",
			children: name
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-[10px] text-muted-foreground",
			children: detail
		})] })]
	});
}
function SecurityLine({ icon: Icon, title, body }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex gap-4 border-b border-border py-5",
		children: [/* @__PURE__ */ jsx("span", {
			className: "mt-0.5 text-primary",
			children: /* @__PURE__ */ jsx(Icon, { size: 17 })
		}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
			className: "text-sm font-medium",
			children: title
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1.5 text-xs leading-5 text-muted-foreground",
			children: body
		})] })]
	});
}
//#endregion
export { LandingPage as component };
