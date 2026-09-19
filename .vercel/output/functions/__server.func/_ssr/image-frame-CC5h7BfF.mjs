import { t as cn } from "./site-BVGA66zN.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/image-frame-CC5h7BfF.js
var import_jsx_runtime = require_jsx_runtime();
function ImageFrame({ src, alt, className, imgClassName, framed = true, priority = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("overflow-hidden bg-stone", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: cn("h-full w-full object-cover", framed && "img-frame", imgClassName),
			loading: priority ? "eager" : "lazy",
			fetchPriority: priority ? "high" : "auto",
			decoding: priority ? "sync" : "async"
		})
	});
}
//#endregion
export { ImageFrame as t };
