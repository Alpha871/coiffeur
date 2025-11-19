(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/coiffeur/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/coiffeur/components/ui/alert.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Alert",
    ()=>Alert,
    "AlertDescription",
    ()=>AlertDescription,
    "AlertTitle",
    ()=>AlertTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
    variants: {
        variant: {
            default: "bg-card text-card-foreground",
            destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Alert({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/alert.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = Alert;
function AlertTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c1 = AlertTitle;
function AlertDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/alert.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c2 = AlertDescription;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Alert");
__turbopack_context__.k.register(_c1, "AlertTitle");
__turbopack_context__.k.register(_c2, "AlertDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/coiffeur/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/Desktop/coiffeur/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/Desktop/coiffeur/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/coiffeur/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/coiffeur/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/coiffeur/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/coiffeur/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/coiffeur/components/ui/drawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Drawer",
    ()=>Drawer,
    "DrawerClose",
    ()=>DrawerClose,
    "DrawerContent",
    ()=>DrawerContent,
    "DrawerDescription",
    ()=>DrawerDescription,
    "DrawerFooter",
    ()=>DrawerFooter,
    "DrawerHeader",
    ()=>DrawerHeader,
    "DrawerOverlay",
    ()=>DrawerOverlay,
    "DrawerPortal",
    ()=>DrawerPortal,
    "DrawerTitle",
    ()=>DrawerTitle,
    "DrawerTrigger",
    ()=>DrawerTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/vaul/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Drawer({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Root, {
        "data-slot": "drawer",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/drawer.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c = Drawer;
function DrawerTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Trigger, {
        "data-slot": "drawer-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/drawer.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c1 = DrawerTrigger;
function DrawerPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Portal, {
        "data-slot": "drawer-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/drawer.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
_c2 = DrawerPortal;
function DrawerClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Close, {
        "data-slot": "drawer-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/drawer.tsx",
        lineNumber: 29,
        columnNumber: 10
    }, this);
}
_c3 = DrawerClose;
function DrawerOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Overlay, {
        "data-slot": "drawer-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/drawer.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c4 = DrawerOverlay;
function DrawerContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrawerPortal, {
        "data-slot": "drawer-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DrawerOverlay, {}, void 0, false, {
                fileName: "[project]/Desktop/coiffeur/components/ui/drawer.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Content, {
                "data-slot": "drawer-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group/drawer-content bg-background fixed z-50 flex h-auto flex-col", "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b", "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t", "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm", "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm", className),
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/coiffeur/components/ui/drawer.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/coiffeur/components/ui/drawer.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/coiffeur/components/ui/drawer.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_c5 = DrawerContent;
function DrawerHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "drawer-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/drawer.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_c6 = DrawerHeader;
function DrawerFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "drawer-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/drawer.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c7 = DrawerFooter;
function DrawerTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Title, {
        "data-slot": "drawer-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/drawer.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_c8 = DrawerTitle;
function DrawerDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$vaul$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"].Description, {
        "data-slot": "drawer-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/drawer.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_c9 = DrawerDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Drawer");
__turbopack_context__.k.register(_c1, "DrawerTrigger");
__turbopack_context__.k.register(_c2, "DrawerPortal");
__turbopack_context__.k.register(_c3, "DrawerClose");
__turbopack_context__.k.register(_c4, "DrawerOverlay");
__turbopack_context__.k.register(_c5, "DrawerContent");
__turbopack_context__.k.register(_c6, "DrawerHeader");
__turbopack_context__.k.register(_c7, "DrawerFooter");
__turbopack_context__.k.register(_c8, "DrawerTitle");
__turbopack_context__.k.register(_c9, "DrawerDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/coiffeur/components/common/modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/components/ui/drawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/components/ui/card.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const sizeClasses = {
    sm: "sm:max-w-[380px]",
    md: "sm:max-w-[520px]",
    lg: "sm:max-w-[720px]",
    xl: "sm:max-w-[920px]",
    full: "sm:max-w-[95vw]"
};
function useMediaQuery(query) {
    _s();
    const [matches, setMatches] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useMediaQuery.useState": ()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : window.matchMedia(query).matches
    }["useMediaQuery.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useMediaQuery.useEffect": ()=>{
            const mql = window.matchMedia(query);
            const onChange = {
                "useMediaQuery.useEffect.onChange": ()=>setMatches(mql.matches)
            }["useMediaQuery.useEffect.onChange"];
            onChange();
            mql.addEventListener?.("change", onChange);
            return ({
                "useMediaQuery.useEffect": ()=>mql.removeEventListener?.("change", onChange)
            })["useMediaQuery.useEffect"];
        }
    }["useMediaQuery.useEffect"], [
        query
    ]);
    return matches;
}
_s(useMediaQuery, "2ck1VNx2BSkCHSuswDGzUqvuKbM=");
function Modal({ open, onOpenChange, trigger, title, description, children, footer, size = "md", preventOutsideClose = false, className }) {
    _s1();
    const isDesktop = useMediaQuery("(min-width: 768px)");
    if (isDesktop) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: open,
            onOpenChange: onOpenChange,
            children: [
                trigger ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                    asChild: true,
                    children: trigger
                }, void 0, false, {
                    fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
                    lineNumber: 82,
                    columnNumber: 20
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-h-[90vh] overflow-y-auto", sizeClasses[size], className),
                    onInteractOutside: (e)=>{
                        if (preventOutsideClose) e.preventDefault();
                    },
                    children: [
                        (title || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
                                    lineNumber: 95,
                                    columnNumber: 24
                                }, this) : null,
                                description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        footer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            children: footer
                        }, void 0, false, {
                            fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
                            lineNumber: 106,
                            columnNumber: 21
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this);
    }
    // Mobile: Drawer
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Drawer"], {
        open: open,
        onOpenChange: onOpenChange,
        children: [
            trigger ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerTrigger"], {
                asChild: true,
                children: trigger
            }, void 0, false, {
                fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
                lineNumber: 115,
                columnNumber: 18
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerContent"], {
                className: "max-h-[92vh]",
                onInteractOutside: (e)=>{
                    if (preventOutsideClose) e.preventDefault();
                },
                children: [
                    (title || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerHeader"], {
                        className: "text-left",
                        children: [
                            title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerTitle"], {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
                                lineNumber: 124,
                                columnNumber: 22
                            }, this) : null,
                            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerDescription"], {
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pb-4 overflow-y-auto",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    footer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerFooter"], {
                        className: "border-t",
                        children: [
                            footer,
                            !footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawerClose"], {
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
                                lineNumber: 136,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/coiffeur/components/common/modal.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s1(Modal, "OwvWUQgjrMnuU8GZKzxgeJ0yhK4=", false, function() {
    return [
        useMediaQuery
    ];
});
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/coiffeur/oop/infrastructure/data:09d37d [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f6a21b629fadc25b875e126e940df18c6479dd563":"updateSalonOrganizationId"},"Desktop/coiffeur/oop/infrastructure/salon-actions.ts",""] */ __turbopack_context__.s([
    "updateSalonOrganizationId",
    ()=>updateSalonOrganizationId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateSalonOrganizationId = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f6a21b629fadc25b875e126e940df18c6479dd563", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateSalonOrganizationId"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2Fsb24tYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmZyYXN0cnVjdHVyZS9TYWxvblJlcG9zaXRvcnkudHNcblwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IE9wZW5pbmdIb3VycywgdXNlclJvbGUgfSBmcm9tIFwiLi4vZG9tYWluL3NhbG9uXCI7XG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcblxuaW1wb3J0IHsgaGVhZGVycyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcblxuZXhwb3J0IHR5cGUgR2V0UGVuZGluZ1NhbG9uUmVxdWVzdEJ5VXNlcklkID0gQXdhaXRlZDxcbiAgUmV0dXJuVHlwZTx0eXBlb2YgZ2V0UGVuZGluZ1NhbG9uUmVxdWVzdEJ5VXNlcklkPlxuPjtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNhbG9uT3JnYW5pemF0aW9uSWQgPSBhc3luYyAoXG4gIHNhbG9uSWQ6IHN0cmluZyxcbiAgb3JnYW5pemF0aW9uSWQ6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoLmFwaS5nZXRTZXNzaW9uKHtcbiAgICBoZWFkZXJzOiBhd2FpdCBoZWFkZXJzKCksXG4gIH0pO1xuICBpZiAoIXNlc3Npb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5zYWxvbi51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHNhbG9uSWQgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgb3JnYW5pemF0aW9uSWQ6IG9yZ2FuaXphdGlvbklkLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU2Fsb24gdXBkYXRlZCBzdWNjZXNzZnVsbHlcIiB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIkZhaWxlZCB0byB1cGRhdGUgc2Fsb25cIiB9O1xuICB9XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVuZGluZ1NhbG9uUmVxdWVzdEJ5VXNlcklkKCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aC5hcGkuZ2V0U2Vzc2lvbih7XG4gICAgaGVhZGVyczogYXdhaXQgaGVhZGVycygpLFxuICB9KTtcbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCByZXF1ZXN0ZWRTYWxvbiA9IGF3YWl0IHByaXNtYS5zYWxvbi5maW5kRmlyc3Qoe1xuICAgIHdoZXJlOiB7IHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkIH0sXG4gIH0pO1xuXG4gIHJldHVybiByZXF1ZXN0ZWRTYWxvbjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RTYWxvbihzYWxvbjoge1xuICBuYW1lOiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgcGhvbmU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIG9wZW5pbmdIb3Vycz86IE9wZW5pbmdIb3Vycztcbn0pIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGguYXBpLmdldFNlc3Npb24oe1xuICAgIGhlYWRlcnM6IGF3YWl0IGhlYWRlcnMoKSxcbiAgfSk7XG4gIGlmICghc2Vzc2lvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgYXdhaXQgcHJpc21hLnNhbG9uLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IHNhbG9uLm5hbWUsXG4gICAgICAgIGFkZHJlc3M6IHNhbG9uLmFkZHJlc3MsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzYWxvbi5kZXNjcmlwdGlvbixcbiAgICAgICAgcGhvbmU6IHNhbG9uLnBob25lLFxuICAgICAgICBlbWFpbDogc2Fsb24uZW1haWwsXG4gICAgICAgIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLFxuXG4gICAgICAgIGF2YWlsYWJpbGl0aWVzOiB7XG4gICAgICAgICAgY3JlYXRlOlxuICAgICAgICAgICAgc2Fsb24ub3BlbmluZ0hvdXJzPy5tYXAoKGRhdGEsIGluZGV4KSA9PiAoe1xuICAgICAgICAgICAgICBkYXlPZldlZWs6IGluZGV4LFxuICAgICAgICAgICAgICBpc0Nsb3NlZDogZGF0YS5pc0Nsb3NlZCxcbiAgICAgICAgICAgICAgc3RhcnRUaW1lOiBkYXRhLnN0YXJ0VGltZSxcbiAgICAgICAgICAgICAgZW5kVGltZTogZGF0YS5lbmRUaW1lLFxuICAgICAgICAgICAgfSkpIHx8IFtdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IFwiU2Fsb24gY3JlYXRlZCBzdWNjZXNzZnVsbHlcIiB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgc2Fsb25cIik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwcHJvdmVTYWxvblJlcXVlc3Qoc2Fsb25JZDogc3RyaW5nKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoLmFwaS5nZXRTZXNzaW9uKHtcbiAgICBoZWFkZXJzOiBhd2FpdCBoZWFkZXJzKCksXG4gIH0pO1xuICBpZiAoIXNlc3Npb24gfHwgc2Vzc2lvbi51c2VyLnJvbGUgIT09IHVzZXJSb2xlLmFkbWluKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBwcmlzbWEuc2Fsb24udXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBzYWxvbklkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNyZWF0aW9uU3RhdHVzOiBcIkFDQ0VQVEVEXCIsXG4gICAgICAgIGFjY2VwdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIGFjY2VwdGVkQnk6IHNlc3Npb24udXNlci5pZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJTYWxvbiByZXF1ZXN0IGFwcHJvdmVkLlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFwcHJvdmluZyBzYWxvbiByZXF1ZXN0OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGFwcHJvdmUgc2Fsb24gcmVxdWVzdC5cIiB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWplY3RTYWxvblJlcXVlc3QoXG4gIHNhbG9uSWQ6IHN0cmluZyxcblxuICByZWFzb246IHN0cmluZ1xuKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoLmFwaS5nZXRTZXNzaW9uKHtcbiAgICBoZWFkZXJzOiBhd2FpdCBoZWFkZXJzKCksXG4gIH0pO1xuICBpZiAoIXNlc3Npb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG4gIH1cblxuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5zYWxvbi51cGRhdGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHNhbG9uSWQgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY3JlYXRpb25TdGF0dXM6IFwiUkVKRUNURURcIixcbiAgICAgICAgcmVqZWN0aW9uUmVhc29uOiByZWFzb24sXG4gICAgICAgIHJlamVjdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHJlamVjdGVkQnk6IHNlc3Npb24udXNlci5pZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogXCJTYWxvbiByZXF1ZXN0IHJlamVjdGVkLlwiIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlamVjdGluZyBzYWxvbiByZXF1ZXN0OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiRmFpbGVkIHRvIHJlamVjdCBzYWxvbiByZXF1ZXN0LlwiIH07XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUGVuZGluZ1NhbG9uUmVxdWVzdCA9IEF3YWl0ZWQ8XG4gIFJldHVyblR5cGU8dHlwZW9mIGdldFBlbmRpbmdTYWxvblJlcXVlc3RzPlxuPltudW1iZXJdO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVuZGluZ1NhbG9uUmVxdWVzdHMoKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoLmFwaS5nZXRTZXNzaW9uKHtcbiAgICBoZWFkZXJzOiBhd2FpdCBoZWFkZXJzKCksXG4gIH0pO1xuICBpZiAoIXNlc3Npb24/LnNlc3Npb24gJiYgc2Vzc2lvbj8udXNlci5yb2xlICE9PSB1c2VyUm9sZS5hZG1pbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuYXV0aG9yaXplZFwiKTtcbiAgfVxuICByZXR1cm4gYXdhaXQgcHJpc21hLnNhbG9uLmZpbmRNYW55KHtcbiAgICB3aGVyZTogeyBjcmVhdGlvblN0YXR1czogXCJQRU5ESU5HXCIgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICBhdmFpbGFiaWxpdGllczogdHJ1ZSxcbiAgICAgIHVzZXI6IHRydWUsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTYWxvbkJ5SWR3aXRoVXNlcklkKHNhbG9uSWQ6IHN0cmluZykge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aC5hcGkuZ2V0U2Vzc2lvbih7XG4gICAgaGVhZGVyczogYXdhaXQgaGVhZGVycygpLFxuICB9KTtcbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hdXRob3JpemVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGF3YWl0IHByaXNtYS5zYWxvbi5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyBpZDogc2Fsb25JZCB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFNhbG9ucygpIHtcbiAgcmV0dXJuIGF3YWl0IHByaXNtYS5zYWxvbi5maW5kTWFueSh7XG4gICAgaW5jbHVkZToge1xuICAgICAgYXZhaWxhYmlsaXRpZXM6IHRydWUsXG4gICAgfSxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTYWxvbk9wZW5pbmdIb3VycyhcbiAgc2Fsb25JZDogc3RyaW5nLFxuICBvcGVuaW5nSG91cnM6IE9wZW5pbmdIb3Vyc1xuKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoLmFwaS5nZXRTZXNzaW9uKHtcbiAgICBoZWFkZXJzOiBhd2FpdCBoZWFkZXJzKCksXG4gIH0pO1xuICBpZiAoIXNlc3Npb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmF1dGhvcml6ZWRcIik7XG4gIH1cblxuICAvLyBEZWxldGUgZXhpc3Rpbmcgb3BlbmluZyBob3Vyc1xuICBhd2FpdCBwcmlzbWEuc2Fsb25BdmFpbGFiaWxpdHkuZGVsZXRlTWFueSh7XG4gICAgd2hlcmU6IHsgc2Fsb25JZCB9LFxuICB9KTtcblxuICAvLyBDcmVhdGUgbmV3IG9wZW5pbmcgaG91cnNcbiAgYXdhaXQgcHJpc21hLnNhbG9uQXZhaWxhYmlsaXR5LmNyZWF0ZU1hbnkoe1xuICAgIGRhdGE6IG9wZW5pbmdIb3Vycy5tYXAoKGhvdXJzKSA9PiAoe1xuICAgICAgc2Fsb25JZCxcbiAgICAgIGRheU9mV2VlazogaG91cnMuZGF5T2ZXZWVrLFxuICAgICAgc3RhcnRUaW1lOiBob3Vycy5zdGFydFRpbWUsXG4gICAgICBlbmRUaW1lOiBob3Vycy5lbmRUaW1lLFxuICAgICAgaXNDbG9zZWQ6IGhvdXJzLmlzQ2xvc2VkLFxuICAgIH0pKSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVVQWFhIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/coiffeur/components/request-management/status-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/refresh-ccw.js [app-client] (ecmascript) <export default as RefreshCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/hourglass.js [app-client] (ecmascript) <export default as Hourglass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/components/ui/alert.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$common$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/components/common/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/lib/auth-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$data$3a$09d37d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/oop/infrastructure/data:09d37d [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function StatusCard({ status, name, reason, organizationId, salonId, createdAt }) {
    _s();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isConfirming, setIsConfirming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const STATUS_CONFIG = {
        PENDING: {
            iconBg: "bg-amber-100 dark:bg-amber-500/20",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hourglass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hourglass$3e$__["Hourglass"], {
                className: "h-8 w-8 text-amber-500"
            }, void 0, false, {
                fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            title: "Your Application Is Pending",
            description: "Your application is currently being reviewed. Please wait patiently.",
            showAlert: false,
            footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-500 dark:text-gray-400",
                children: [
                    "Need help?",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "text-primary font-medium hover:underline",
                        href: "#",
                        children: "Contact Support"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        },
        REJECTED: {
            iconBg: "bg-red-100 dark:bg-red-500/20",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                className: "h-8 w-8 text-red-500"
            }, void 0, false, {
                fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            title: "Your Application Was Rejected",
            description: "Your application could not be approved for the following reason:",
            showAlert: true,
            footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                className: "gap-2 bg-primary text-white hover:bg-primary/90",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    "Submit New Application"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        },
        APPROVED: {
            iconBg: "bg-green-100 dark:bg-green-500/20",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                className: "h-8 w-8 text-green-500"
            }, void 0, false, {
                fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            title: "Your Application Is Approved!",
            description: "Congratulations! You are now part of our platform. You can access your dashboard.",
            showAlert: false,
            footer: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: organizationId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: "gap-2 bg-primary text-white hover:bg-primary/90",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/salon/${salonId}/dashboard`,
                        className: "flex items-center gap-2 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                lineNumber: 94,
                                columnNumber: 17
                            }, this),
                            "Go to Dashboard"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                        lineNumber: 90,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                    lineNumber: 89,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: "gap-2 bg-primary text-white hover:bg-primary/90",
                    onClick: ()=>setIsModalOpen(true),
                    disabled: isConfirming,
                    children: isConfirming ? "Confirming..." : "Confirm Your Application"
                }, void 0, false, {
                    fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                    lineNumber: 99,
                    columnNumber: 13
                }, this)
            }, void 0, false)
        }
    };
    const cfg = STATUS_CONFIG[status];
    const handleOrganizationCreationApproved = async ()=>{
        const slug = name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
        if (!organizationId) {
            return;
        }
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["organization"].create({
            name,
            slug
        });
        if (res.error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.error.message || "Failed to create organization");
        } else {
            // setIsModalOpen(false);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$data$3a$09d37d__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateSalonOrganizationId"])(salonId, res.data.id);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$auth$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["organization"].setActive({
                organizationId: res.data.id
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Organization created successfully!");
            setIsConfirming(true);
            router.push(`/salon/${salonId}/dashboard`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$common$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: isModalOpen,
                onOpenChange: setIsModalOpen,
                title: "Approved Salon Application",
                description: "Your salon application has been approved. .",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleOrganizationCreationApproved,
                    children: "Confirm your application"
                }, void 0, false, {
                    fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "shadow-sm border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 rounded-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        className: "p-6 sm:p-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-16 w-16 flex items-center justify-center rounded-full ${cfg.iconBg}`,
                                    children: cfg.icon
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white",
                                            children: cfg.title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 dark:text-gray-400 mt-1",
                                            children: cfg.description
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    cfg.showAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "px-6 sm:px-8 pb-6 sm:pb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                            variant: "destructive",
                            className: "border-red-200 dark:border-red-500/30 bg-red-50 dark:bg-red-500/10 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "h-5 w-5 text-red-500"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertTitle"], {
                                            className: "font-semibold text-red-800 dark:text-red-300",
                                            children: "Rejection Reason"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                            className: "mt-2 text-red-700 dark:text-red-300/80 text-sm",
                                            children: reason || "Your tax document is missing. Please complete the required documents and apply again."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "border-t dark:border-gray-700 p-6 sm:p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-gray-900 dark:text-white",
                                children: "Application Details"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: "mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-sm text-gray-500",
                                                children: "Application ID"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                                lineNumber: 204,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "mt-1 text-gray-900 dark:text-white",
                                                children: salonId
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                                lineNumber: 205,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-sm text-gray-500",
                                                children: "Submitted On"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "mt-1 text-gray-900 dark:text-white",
                                                children: [
                                                    createdAt.toLocaleDateString(),
                                                    " —",
                                                    " ",
                                                    createdAt.toLocaleTimeString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                                lineNumber: 210,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                        className: "border-t bg-gray-50 dark:bg-gray-800/30 p-6 sm:justify-end rounded-b-xl",
                        children: cfg.footer
                    }, void 0, false, {
                        fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/coiffeur/components/request-management/status-card.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(StatusCard, "TIsgLaih+PxpkH1ULmJiI9o9+sY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = StatusCard;
var _c;
__turbopack_context__.k.register(_c, "StatusCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_coiffeur_7204ec39._.js.map