import { r as formatEuro } from "./site-BVGA66zN.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as ImageFrame } from "./image-frame-CC5h7BfF.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/room-card-B2XS9v1h.js
var import_jsx_runtime = require_jsx_runtime();
function RoomCard({ room }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/stay/$slug",
		params: { slug: room.slug },
		className: "group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
			src: room.image,
			alt: room.name,
			className: "aspect-photo rounded-xl",
			imgClassName: "transition-transform duration-500 ease-out group-hover:scale-105"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex items-start justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: room.kind
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-serif text-2xl font-medium tracking-tight text-ink",
					children: room.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: [
						room.size,
						" m² · ",
						room.guests,
						" guests · from ",
						formatEuro(room.priceFrom)
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
				className: "mt-6 size-5 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
				strokeWidth: 1.5,
				"aria-hidden": "true"
			})]
		})]
	});
}
//#endregion
export { RoomCard as t };
