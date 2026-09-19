import { o as rooms, r as formatEuro } from "./site-BVGA66zN.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-BiMoyUyw.mjs";
import { t as ImageFrame } from "./image-frame-CC5h7BfF.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as NotFound, n as Route } from "./router-CM9buiFt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stay._slug-BHI7Q9AD.js
var import_jsx_runtime = require_jsx_runtime();
function RoomPage() {
	const { slug } = Route.useParams();
	const room = rooms.find((item) => item.slug === slug);
	if (!room) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFound, {});
	const others = rooms.filter((item) => item.slug !== room.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "content",
		className: "pt-24 md:pt-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "kicker",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/stay",
							className: "hover:text-ink",
							children: "Stay"
						}),
						" / ",
						room.kind
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-display font-medium leading-none tracking-tight",
						children: room.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted tabular-nums",
						children: [
							room.size,
							" m² · ",
							room.guests,
							" guests · from ",
							formatEuro(room.priceFrom)
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto mt-10 max-w-6xl px-5 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
					src: room.gallery[0] ?? room.image,
					alt: room.name,
					className: "aspect-video rounded-2xl",
					priority: true
				}), room.gallery.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-2 gap-3",
					children: room.gallery.slice(1, 3).map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
						src,
						alt: "",
						className: "aspect-video rounded-xl"
					}, src))
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lede text-ink-soft",
							children: room.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-ink-soft",
							children: room.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-8",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/inquire",
								search: { room: room.slug },
								children: "Inquire about this room"
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "md:col-span-4 md:col-start-9",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "In the room"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-ink-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: room.beds }), room.amenities.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-ink/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-16 md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Also in the house"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-8 sm:grid-cols-3",
						children: others.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/stay/$slug",
							params: { slug: item.slug },
							className: "group block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageFrame, {
									src: item.image,
									alt: item.name,
									className: "aspect-photo rounded-xl"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-serif text-2xl font-medium tracking-tight",
									children: item.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: item.kind
								})
							]
						}, item.slug))
					})]
				})
			})
		]
	});
}
//#endregion
export { RoomPage as component };
