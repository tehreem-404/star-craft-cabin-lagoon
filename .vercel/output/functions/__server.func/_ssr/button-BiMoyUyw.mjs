import "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./site-BVGA66zN.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { u as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("pressable inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-sans text-sm font-medium tracking-wide focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage disabled:pointer-events-none disabled:opacity-40", {
	variants: {
		variant: {
			solid: "bg-sage text-paper hover:bg-sage-deep",
			ink: "bg-ink text-paper hover:opacity-90",
			outline: "border border-ink/15 bg-transparent text-ink hover:bg-ink/5",
			ghost: "text-ink hover:bg-ink/5",
			paper: "bg-paper text-ink hover:bg-paper-deep",
			link: "h-auto rounded-none px-0 text-ink underline-offset-[0.3em] hover:underline"
		},
		size: {
			default: "h-11 min-h-11 px-5",
			sm: "h-10 min-h-10 px-4 text-xs",
			lg: "h-12 min-h-12 px-6"
		}
	},
	defaultVariants: {
		variant: "solid",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
export { Button as t };
