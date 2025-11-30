module.exports = [
"[project]/Desktop/coiffeur/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DAY_LABEL",
    ()=>DAY_LABEL,
    "DAY_ORDER",
    ()=>DAY_ORDER,
    "DEFAULT_END",
    ()=>DEFAULT_END,
    "DEFAULT_START",
    ()=>DEFAULT_START,
    "MAX_TIME",
    ()=>MAX_TIME,
    "MIN_TIME",
    ()=>MIN_TIME,
    "STATUS_COLORS",
    ()=>STATUS_COLORS,
    "capitalize",
    ()=>capitalize,
    "changedValues",
    ()=>changedValues,
    "cn",
    ()=>cn,
    "compareHHMM",
    ()=>compareHHMM,
    "convertOpeningHoursFromDatabase",
    ()=>convertOpeningHoursFromDatabase,
    "convertOpeningHoursToDatabase",
    ()=>convertOpeningHoursToDatabase,
    "defaultSchedule",
    ()=>defaultSchedule,
    "randomValues",
    ()=>randomValues,
    "stringToTime",
    ()=>stringToTime,
    "timeToString",
    ()=>timeToString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const STATUS_COLORS = {
    APPROVED: {
        bg: "#E3F2FD",
        border: "#2196F3",
        text: "#1976D2"
    },
    // APPROVED: { bg: "#E8F5E8", border: "#4CAF50", text: "#388E3C" },
    PENDING: {
        bg: "#FFF3E0",
        border: "#FF9800",
        text: "#F57C00"
    },
    COMPLETED: {
        bg: "#E8F5E8",
        border: "#4CAF50",
        text: "#388E3C"
    },
    CANCELLED: {
        bg: "#FFEBEE",
        border: "#F44336",
        text: "#D32F2F"
    },
    REJECTED: {
        bg: "#FCE4EC",
        border: "#E91E63",
        text: "#C2185B"
    }
};
function randomValues() {
    return Math.random() * 360;
}
function stringToTime(timeString, baseDate = new Date()) {
    const [hours, minutes] = timeString.split(":").map(Number);
    const date = new Date(baseDate);
    date.setHours(hours, minutes, 0, 0);
    return date.toISOString();
}
function convertOpeningHoursToDatabase(openingHoursObj) {
    const dayKeys = [
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
        "sat",
        "sun"
    ];
    return dayKeys.map((key)=>{
        const hours = openingHoursObj[key] || {};
        const daysOfWeek = hours.dayOfWeek;
        const start = hours.start || "09:00";
        const end = hours.end || "18:00";
        const closed = hours.closed ?? false;
        return {
            dayOfWeek: daysOfWeek,
            startTime: closed ? stringToTime("00:00") : stringToTime(start),
            endTime: closed ? stringToTime("00:00") : stringToTime(end),
            isClosed: closed
        };
    });
}
function convertOpeningHoursFromDatabase(openingHoursArray) {
    const dayKeys = [
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
        "sat",
        "sun"
    ];
    const result = {};
    dayKeys.forEach((key, index)=>{
        // Find the day data by matching dayOfWeek
        const dayData = openingHoursArray.find((day)=>day.dayOfWeek === index);
        result[key] = {
            dayOfWeek: index,
            start: dayData?.isClosed ? "09:00" : dayData ? timeToString(dayData.startTime) : "09:00",
            end: dayData?.isClosed ? "18:00" : dayData ? timeToString(dayData.endTime) : "18:00",
            closed: dayData?.isClosed ?? false
        };
    });
    return result;
}
function timeToString(date) {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
}
const capitalize = (str)=>str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
function changedValues(original, updated) {
    const changes = {};
    for(const key in updated){
        if (updated[key] !== original[key]) {
            changes[key] = updated[key];
        }
    }
    return changes;
}
function compareHHMM(a, b) {
    const toMin = (t)=>{
        const [h, m] = t.split(":").map((x)=>parseInt(x, 10));
        return (h || 0) * 60 + (m || 0);
    };
    return toMin(a) - toMin(b);
}
const DAY_ORDER = [
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    "sun"
];
const DAY_LABEL = {
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
    sun: "Sunday"
};
const DEFAULT_START = "09:00";
const DEFAULT_END = "18:00";
const MIN_TIME = "06:00";
const MAX_TIME = "22:00";
function defaultSchedule() {
    return {
        mon: {
            dayOfWeek: 0,
            closed: true,
            open: false,
            start: DEFAULT_START,
            end: DEFAULT_END
        },
        tue: {
            dayOfWeek: 1,
            closed: true,
            open: false,
            start: DEFAULT_START,
            end: DEFAULT_END
        },
        wed: {
            dayOfWeek: 2,
            closed: true,
            open: false,
            start: DEFAULT_START,
            end: DEFAULT_END
        },
        thu: {
            dayOfWeek: 3,
            closed: true,
            open: false,
            start: DEFAULT_START,
            end: DEFAULT_END
        },
        fri: {
            dayOfWeek: 4,
            closed: true,
            open: false,
            start: DEFAULT_START,
            end: DEFAULT_END
        },
        sat: {
            dayOfWeek: 5,
            closed: true,
            open: false,
            start: DEFAULT_START,
            end: DEFAULT_END
        },
        sun: {
            dayOfWeek: 6,
            closed: false,
            open: true,
            start: DEFAULT_START,
            end: DEFAULT_END
        }
    };
}
}),
"[project]/Desktop/coiffeur/components/ui/spinner.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Spinner",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-rsc] (ecmascript) <export default as Loader2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
function Spinner({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2Icon$3e$__["Loader2Icon"], {
        role: "status",
        "aria-label": "Loading",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("size-4 animate-spin", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/components/ui/spinner.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/coiffeur/app/(salon)/salon/[id]/loading.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/components/ui/spinner.tsx [app-rsc] (ecmascript)");
;
;
function loading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Spinner"], {
            className: "size-8"
        }, void 0, false, {
            fileName: "[project]/Desktop/coiffeur/app/(salon)/salon/[id]/loading.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/coiffeur/app/(salon)/salon/[id]/loading.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = loading;
}),
];

//# sourceMappingURL=Desktop_coiffeur_c23ee666._.js.map