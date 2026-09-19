import { i as __toESM } from "../_runtime.mjs";
import { c as viewLabels, o as rooms, t as cn } from "./site-BVGA66zN.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as RoomCard } from "./room-card-B2XS9v1h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stay.index-BKc3V7Kb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	"all",
	"sea",
	"garden",
	"house"
];
function StayPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const visible = (0, import_react.useMemo)(() => filter === "all" ? rooms : rooms.filter((room) => room.view === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		className: "pt-24 md:pt-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Stay"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-2xl font-serif text-display font-medium leading-none tracking-tight",
					children: "Rooms that face the water, the grove, or the dusk."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-lede text-ink-soft",
					children: "Sixteen in the house. Four we show here — the ones guests write back about."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap gap-2",
					role: "tablist",
					"aria-label": "Filter rooms",
					children: filters.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": filter === key,
						onClick: () => setFilter(key),
						className: cn("pressable h-11 min-h-11 rounded-full px-4 text-sm font-medium", filter === key ? "bg-ink text-paper" : "bg-paper-deep text-ink hover:bg-stone"),
						children: viewLabels[key]
					}, key))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16",
			children: visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "Nothing in that corner of the house."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-12 sm:grid-cols-2",
				children: visible.map((room) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomCard, { room }, room.slug))
			})
		})]
	});
}
//#endregion
export { StayPage as component };
