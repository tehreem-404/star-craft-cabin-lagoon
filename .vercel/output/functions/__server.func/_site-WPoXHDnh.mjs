import { i as __toESM } from "./_runtime.mjs";
import { s as site, t as cn } from "./_ssr/site-BVGA66zN.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "./_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Button } from "./_ssr/button-BiMoyUyw.mjs";
import { d as useRouterState, m as Outlet, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_site-WPoXHDnh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-ink/10 bg-paper-deep",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-3xl font-medium tracking-tight",
					children: "Solara"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 max-w-xs text-sm leading-relaxed text-muted",
					children: [
						"A sixteen-room house on the cliff at ",
						site.place,
						". Open ",
						site.season,
						"."
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "The house"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/stay",
							className: "hover:text-sage",
							children: "Stay"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/table",
							className: "hover:text-sage",
							children: "Table"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/coast",
							className: "hover:text-sage",
							children: "Coast"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/inquire",
							className: "hover:text-sage",
							children: "Inquire"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Write to us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: site.address }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${site.email}`,
							className: "hover:text-sage",
							children: site.email
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${site.phone.replace(/\s/g, "")}`,
							className: "hover:text-sage",
							children: site.phone
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							"Check-in ",
							site.checkIn,
							" · Check-out ",
							site.checkOut
						] })
					]
				})] })
			]
		})
	});
}
var nav = [
	{
		to: "/stay",
		label: "Stay"
	},
	{
		to: "/table",
		label: "Table"
	},
	{
		to: "/coast",
		label: "Coast"
	}
];
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		fill: "none",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "16",
			cy: "13",
			r: "6.25",
			stroke: "currentColor",
			strokeWidth: "1.4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M4 22.5h24",
			stroke: "currentColor",
			strokeWidth: "1.4",
			strokeLinecap: "square"
		})]
	});
}
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const isHome = pathname === "/";
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	const overlay = isHome && !scrolled;
	const tone = overlay ? "text-paper" : "text-ink";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-200", overlay ? "bg-transparent" : "bg-paper/92 shadow-border backdrop-blur-md"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#content",
			className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink",
			children: "Skip to content"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: cn("flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage", tone),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-7" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif text-xl font-medium tracking-wide md:text-2xl",
						children: "Solara"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Primary",
					children: nav.map((item) => {
						const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("relative text-sm font-medium tracking-wide transition-opacity duration-150 hover:opacity-70", tone, active && "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-current"),
							children: item.label
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: overlay ? "paper" : "solid",
						size: "sm",
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/inquire",
							children: "Inquire"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
						open,
						onOpenChange: setOpen,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: cn("pressable inline-flex size-11 items-center justify-center rounded-md md:hidden", tone),
								"aria-label": open ? "Close menu" : "Open menu",
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "size-5",
									strokeWidth: 1.5
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
									className: "size-5",
									strokeWidth: 1.5
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-ink/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
							className: "fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-paper px-6 py-6 text-ink shadow-border focus:outline-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
									className: "sr-only",
									children: "House navigation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
										className: "font-serif text-2xl font-medium",
										children: "Solara"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "pressable inline-flex size-11 items-center justify-center rounded-md",
											"aria-label": "Close menu",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
												className: "size-5",
												strokeWidth: 1.5
											})
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
									className: "mt-10 flex flex-col gap-2",
									"aria-label": "Mobile",
									children: [...nav, {
										to: "/inquire",
										label: "Inquire"
									}].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: item.to,
										className: "rounded-md py-3 font-serif text-3xl font-medium tracking-tight",
										children: item.label
									}, item.to))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-auto text-sm text-muted",
									children: "Cala Solara, Campania"
								})
							]
						})] })]
					})]
				})
			]
		})]
	});
}
function SiteLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper font-sans text-ink antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { SiteLayout as component };
