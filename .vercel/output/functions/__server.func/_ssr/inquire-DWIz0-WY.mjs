import { i as __toESM } from "../_runtime.mjs";
import { o as rooms, s as site, t as cn } from "./site-BVGA66zN.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-BiMoyUyw.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$3 } from "./router-CM9buiFt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inquire-DWIz0-WY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-ink/15 bg-paper px-3 font-sans text-sm text-ink shadow-none outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage/20 disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-xs font-medium tracking-wide text-ink-soft", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-28 w-full rounded-lg border border-ink/15 bg-paper px-3 py-3 font-sans text-sm text-ink outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage/20 disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
var KEY = "solara-inquiries";
function canUseStorage() {
	return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}
function loadInquiries() {
	if (!canUseStorage()) return [];
	try {
		const raw = window.localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function saveInquiry(inquiry) {
	if (!canUseStorage()) return;
	const next = [inquiry, ...loadInquiries()].slice(0, 12);
	window.localStorage.setItem(KEY, JSON.stringify(next));
}
function todayIso() {
	const d = /* @__PURE__ */ new Date();
	const month = String(d.getMonth() + 1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");
	return `${d.getFullYear()}-${month}-${day}`;
}
function addDays(iso, days) {
	const d = /* @__PURE__ */ new Date(`${iso}T12:00:00`);
	d.setDate(d.getDate() + days);
	const month = String(d.getMonth() + 1).padStart(2, "0");
	const day = String(d.getDate()).padStart(2, "0");
	return `${d.getFullYear()}-${month}-${day}`;
}
function formatLong(iso) {
	return (/* @__PURE__ */ new Date(`${iso}T12:00:00`)).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
}
function InquireForm({ initialRoom }) {
	const minArrival = todayIso();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [arrival, setArrival] = (0, import_react.useState)(minArrival);
	const [departure, setDeparture] = (0, import_react.useState)(addDays(minArrival, 3));
	const [room, setRoom] = (0, import_react.useState)(initialRoom ?? rooms[0]?.slug ?? "caldera");
	const [guests, setGuests] = (0, import_react.useState)(2);
	const [message, setMessage] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [sent, setSent] = (0, import_react.useState)(null);
	const [previous, setPrevious] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setPrevious(loadInquiries());
	}, []);
	(0, import_react.useEffect)(() => {
		if (initialRoom) setRoom(initialRoom);
	}, [initialRoom]);
	const nights = (0, import_react.useMemo)(() => {
		const a = /* @__PURE__ */ new Date(`${arrival}T12:00:00`);
		const b = /* @__PURE__ */ new Date(`${departure}T12:00:00`);
		return Math.max(0, Math.round((b.getTime() - a.getTime()) / 864e5));
	}, [arrival, departure]);
	function onSubmit(event) {
		event.preventDefault();
		setError(null);
		if (name.trim().length < 2) {
			setError("Please give us a name we can write back to.");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setError("We need a working email to hold the room.");
			return;
		}
		if (nights < 1) {
			setError("Departure should fall after arrival.");
			return;
		}
		const inquiry = {
			id: crypto.randomUUID(),
			name: name.trim(),
			email: email.trim(),
			arrival,
			departure,
			room,
			guests,
			message: message.trim(),
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		saveInquiry(inquiry);
		setPrevious(loadInquiries());
		setSent(inquiry);
	}
	if (sent) {
		const chosen = rooms.find((r) => r.slug === sent.room);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-2xl bg-paper-deep p-6 md:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Request received"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-serif text-title font-medium tracking-tight",
					children: [
						"We have your dates, ",
						sent.name.split(" ")[0],
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-lg text-ink-soft",
					children: [
						"The house will write to ",
						sent.email,
						" within a day. You asked for",
						" ",
						chosen?.name ?? "a room",
						" from ",
						formatLong(sent.arrival),
						" to",
						" ",
						formatLong(sent.departure),
						", for ",
						sent.guests,
						" ",
						sent.guests === 1 ? "guest" : "guests",
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: () => setSent(null),
						children: "Send another"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "solid",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/stay",
							children: "Look at the rooms"
						})
					})]
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "space-y-5",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "name",
						children: "Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "name",
						name: "name",
						autoComplete: "name",
						value: name,
						onChange: (e) => setName(e.target.value),
						required: true
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "email",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "email",
						name: "email",
						type: "email",
						autoComplete: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						required: true
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "arrival",
						children: "Arrival"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "arrival",
						name: "arrival",
						type: "date",
						min: minArrival,
						value: arrival,
						onChange: (e) => {
							const next = e.target.value;
							setArrival(next);
							if (next >= departure) setDeparture(addDays(next, 2));
						},
						required: true
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "departure",
						children: "Departure"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "departure",
						name: "departure",
						type: "date",
						min: addDays(arrival, 1),
						value: departure,
						onChange: (e) => setDeparture(e.target.value),
						required: true
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "room",
						children: "Room"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						id: "room",
						name: "room",
						value: room,
						onChange: (e) => setRoom(e.target.value),
						className: "flex h-11 w-full rounded-md border border-ink/15 bg-paper px-3 font-sans text-sm text-ink outline-none focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage/20",
						children: rooms.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: item.slug,
							children: item.name
						}, item.slug))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "guests",
						children: "Guests"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "guests",
						name: "guests",
						type: "number",
						min: 1,
						max: 4,
						value: guests,
						onChange: (e) => setGuests(Number(e.target.value)),
						required: true
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "message",
					children: "A note, if you like"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "message",
					name: "message",
					value: message,
					onChange: (e) => setMessage(e.target.value),
					placeholder: "Anniversaries, a late arrival, no fish, a request for the chapel walk…"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted tabular-nums",
				children: [
					nights,
					" ",
					nights === 1 ? "night" : "nights",
					" in the house."
				]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-ink",
				role: "alert",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				children: "Request the stay"
			})
		]
	}), previous.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-12 border-t border-ink/10 pt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "kicker",
			children: "On this device"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-3",
			children: previous.slice(0, 4).map((item) => {
				const chosen = rooms.find((r) => r.slug === item.room);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "text-sm text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ink",
							children: chosen?.name ?? "Room"
						}),
						" · ",
						formatLong(item.arrival),
						" – ",
						formatLong(item.departure),
						" · ",
						item.name
					]
				}, item.id);
			})
		})]
	}) : null] });
}
function InquirePage() {
	const { room } = Route$3.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		id: "content",
		className: "pt-24 md:pt-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 pb-20 md:grid-cols-12 md:px-8 md:pb-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Inquire"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-serif text-display font-medium leading-none tracking-tight",
						children: "Tell us when you would like the house."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-lede text-ink-soft",
						children: [
							"We write back within a day. The season runs ",
							site.season,
							". Check-in from ",
							site.checkIn,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-10 space-y-3 text-sm text-ink-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "kicker",
								children: "Post"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: site.address
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "kicker",
								children: "Mail"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${site.email}`,
									className: "hover:text-sage",
									children: site.email
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "kicker",
								children: "Telephone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${site.phone.replace(/\s/g, "")}`,
									className: "hover:text-sage",
									children: site.phone
								})
							})] })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:col-span-6 md:col-start-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquireForm, { initialRoom: room })
			})]
		})
	});
}
//#endregion
export { InquirePage as component };
