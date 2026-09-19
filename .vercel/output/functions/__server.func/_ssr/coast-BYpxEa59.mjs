import { n as experiences } from "./site-BVGA66zN.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-BiMoyUyw.mjs";
import { t as ImageFrame } from "./image-frame-CC5h7BfF.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coast-BYpxEa59.js
var import_jsx_runtime = require_jsx_runtime();
function CoastPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		className: "pt-24 md:pt-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Coast"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-2xl font-serif text-display font-medium leading-none tracking-tight",
						children: "What the cliff is for."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-lede text-ink-soft",
						children: "The house is a place to sleep and eat. The rest of the day belongs to the path, the water, and a room of stone."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-20",
					children: experiences.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid items-center gap-8 md:grid-cols-2 md:gap-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
							src: item.image,
							alt: item.name,
							className: "aspect-photo rounded-2xl",
							priority: index === 0
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: item.time
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-serif text-title font-medium tracking-tight",
								children: item.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-ink-soft",
								children: item.body
							})
						] })]
					}, item.slug))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-paper-deep",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md font-serif text-2xl font-medium tracking-tight",
						children: "Ask the house to set a time for the baths, or a picnic for the chapel."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/inquire",
							children: "Inquire"
						})
					})]
				})
			})
		]
	});
}
//#endregion
export { CoastPage as component };
