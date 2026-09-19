import { a as menu } from "./site-BVGA66zN.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-BiMoyUyw.mjs";
import { t as ImageFrame } from "./image-frame-CC5h7BfF.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/table-5MJzcLoU.js
var import_jsx_runtime = require_jsx_runtime();
function TablePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		className: "pt-24 md:pt-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: menu.kitchen
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-2xl font-serif text-display font-medium leading-none tracking-tight",
						children: "A single menu, written in the morning."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-lede text-ink-soft",
						children: menu.note
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto mt-12 flex max-w-6xl flex-col gap-3 px-5 md:h-96 md:flex-row md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
					src: "/images/dining.jpg",
					alt: "The terrace at Mare",
					className: "h-72 rounded-2xl md:h-full md:w-3/5",
					priority: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
					src: "/images/dish.jpg",
					alt: "The catch, plated",
					className: "h-72 rounded-2xl md:h-full md:flex-1"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "This evening"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-serif text-title font-medium tracking-tight",
							children: [
								"Seatings at ",
								menu.seating,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-ink-soft",
							children: "Dinner is for the house. If you are not staying with us, write ahead — we keep two chairs when we can."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted",
							children: menu.wine
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/inquire",
								children: "Ask for a table"
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-8 md:col-span-6 md:col-start-7",
					children: menu.courses.map((course, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-ink/10 pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "kicker",
							children: [
								String(index + 1).padStart(2, "0"),
								" · ",
								course.name
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-serif text-2xl font-medium tracking-tight",
							children: course.dish
						})]
					}, course.name))
				})]
			})
		]
	});
}
//#endregion
export { TablePage as component };
