(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/coiffeur/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDistance",
    ()=>formatDistance
]);
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "in " + result;
        } else {
            return result + " ago";
        }
    }
    return result;
};
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildFormatLongFn",
    ()=>buildFormatLongFn
]);
function buildFormatLongFn(args) {
    return (options = {})=>{
        // TODO: Remove String()
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLong",
    ()=>formatLong
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-client] (ecmascript)");
;
const dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
const timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
const dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatRelative",
    ()=>formatRelative
]);
const formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */ /**
 * The map of localized values for each width.
 */ /**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */ /**
 * Converts the unit value to the tuple of values.
 */ /**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */ /**
 * The tuple of localized quarter values. The first element represents Q1.
 */ /**
 * The tuple of localized day values. The first element represents Sunday.
 */ /**
 * The tuple of localized month values. The first element represents January.
 */ __turbopack_context__.s([
    "buildLocalizeFn",
    ()=>buildLocalizeFn
]);
function buildLocalizeFn(args) {
    return (value, options)=>{
        const context = options?.context ? String(options.context) : "standalone";
        let valuesArray;
        if (context === "formatting" && args.formattingValues) {
            const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            const width = options?.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            const defaultWidth = args.defaultWidth;
            const width = options?.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[width] || args.values[defaultWidth];
        }
        const index = args.argumentCallback ? args.argumentCallback(value) : value;
        // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/locale/en-US/_lib/localize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localize",
    ()=>localize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-client] (ecmascript)");
;
const eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
const dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    const rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
        switch(rem100 % 10){
            case 1:
                return number + "st";
            case 2:
                return number + "nd";
            case 3:
                return number + "rd";
        }
    }
    return number + "th";
};
const localize = {
    ordinalNumber,
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchFn",
    ()=>buildMatchFn
]);
function buildMatchFn(args) {
    return (string, options = {})=>{
        const width = options.width;
        const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        const matchResult = string.match(matchPattern);
        if (!matchResult) {
            return null;
        }
        const matchedString = matchResult[0];
        const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern)=>pattern.test(matchedString)) : findKey(parsePatterns, (pattern)=>pattern.test(matchedString));
        let value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
function findKey(object, predicate) {
    for(const key in object){
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
            return key;
        }
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(let key = 0; key < array.length; key++){
        if (predicate(array[key])) {
            return key;
        }
    }
    return undefined;
}
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildMatchPatternFn",
    ()=>buildMatchPatternFn
]);
function buildMatchPatternFn(args) {
    return (string, options = {})=>{
        const matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        // [TODO] I challenge you to fix the type
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/locale/en-US/_lib/match.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "match",
    ()=>match
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-client] (ecmascript)");
;
;
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
const match = {
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "enUS",
    ()=>enUS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/locale/en-US/_lib/formatDistance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/locale/en-US/_lib/formatLong.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/locale/en-US/_lib/formatRelative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/locale/en-US/_lib/localize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/locale/en-US/_lib/match.js [app-client] (ecmascript)");
;
;
;
;
;
const enUS = {
    code: "en-US",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2f$_lib$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = enUS;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript) <export enUS as defaultLocale>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enUS"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript)");
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultOptions",
    ()=>getDefaultOptions,
    "setDefaultOptions",
    ()=>setDefaultOptions
]);
let defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ __turbopack_context__.s([
    "constructFromSymbol",
    ()=>constructFromSymbol,
    "daysInWeek",
    ()=>daysInWeek,
    "daysInYear",
    ()=>daysInYear,
    "maxTime",
    ()=>maxTime,
    "millisecondsInDay",
    ()=>millisecondsInDay,
    "millisecondsInHour",
    ()=>millisecondsInHour,
    "millisecondsInMinute",
    ()=>millisecondsInMinute,
    "millisecondsInSecond",
    ()=>millisecondsInSecond,
    "millisecondsInWeek",
    ()=>millisecondsInWeek,
    "minTime",
    ()=>minTime,
    "minutesInDay",
    ()=>minutesInDay,
    "minutesInHour",
    ()=>minutesInHour,
    "minutesInMonth",
    ()=>minutesInMonth,
    "minutesInYear",
    ()=>minutesInYear,
    "monthsInQuarter",
    ()=>monthsInQuarter,
    "monthsInYear",
    ()=>monthsInYear,
    "quartersInYear",
    ()=>quartersInYear,
    "secondsInDay",
    ()=>secondsInDay,
    "secondsInHour",
    ()=>secondsInHour,
    "secondsInMinute",
    ()=>secondsInMinute,
    "secondsInMonth",
    ()=>secondsInMonth,
    "secondsInQuarter",
    ()=>secondsInQuarter,
    "secondsInWeek",
    ()=>secondsInWeek,
    "secondsInYear",
    ()=>secondsInYear
]);
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
const minTime = -maxTime;
const millisecondsInWeek = 604800000;
const millisecondsInDay = 86400000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInSecond = 1000;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
const constructFromSymbol = Symbol.for("constructDateFrom");
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructFrom",
    ()=>constructFrom,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constants.js [app-client] (ecmascript)");
;
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFromSymbol"] in date) return date[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFromSymbol"]](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
const __TURBOPACK__default__export__ = constructFrom;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "toDate",
    ()=>toDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
;
function toDate(argument, context) {
    // [TODO] Get rid of `toDate` or `constructFrom`?
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(context || argument, argument);
}
const __TURBOPACK__default__export__ = toDate;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTimezoneOffsetInMilliseconds",
    ()=>getTimezoneOffsetInMilliseconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function getTimezoneOffsetInMilliseconds(date) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/_lib/normalizeDates.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeDates",
    ()=>normalizeDates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
;
function normalizeDates(context, ...dates) {
    const normalize = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"].bind(null, context || dates.find((date)=>typeof date === "object"));
    return dates.map(normalize);
}
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfDay",
    ()=>startOfDay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function startOfDay(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfDay;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/differenceInCalendarDays.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarDays",
    ()=>differenceInCalendarDays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/normalizeDates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
;
;
;
;
function differenceInCalendarDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    const laterStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(laterDate_);
    const earlierStartOfDay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(earlierDate_);
    const laterTimestamp = +laterStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(laterStartOfDay);
    const earlierTimestamp = +earlierStartOfDay - (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$getTimezoneOffsetInMilliseconds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTimezoneOffsetInMilliseconds"])(earlierStartOfDay);
    // Round the number of days to the nearest integer because the number of
    // milliseconds in a day is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((laterTimestamp - earlierTimestamp) / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsInDay"]);
}
const __TURBOPACK__default__export__ = differenceInCalendarDays;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/startOfYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfYear",
    ()=>startOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function startOfYear(date, options) {
    const date_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    date_.setFullYear(date_.getFullYear(), 0, 1);
    date_.setHours(0, 0, 0, 0);
    return date_;
}
const __TURBOPACK__default__export__ = startOfYear;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/getDayOfYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDayOfYear",
    ()=>getDayOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/differenceInCalendarDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
function getDayOfYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(_date, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfYear"])(_date));
    const dayOfYear = diff + 1;
    return dayOfYear;
}
const __TURBOPACK__default__export__ = getDayOfYear;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeek",
    ()=>startOfWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
function startOfWeek(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    _date.setDate(_date.getDate() - diff);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeek;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/startOfISOWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfISOWeek",
    ()=>startOfISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
;
function startOfISOWeek(date, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(date, {
        ...options,
        weekStartsOn: 1
    });
}
const __TURBOPACK__default__export__ = startOfISOWeek;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/getISOWeekYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeekYear",
    ()=>getISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfISOWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
function getISOWeekYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const fourthOfJanuaryOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuaryOfNextYear);
    const fourthOfJanuaryOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuaryOfThisYear);
    if (_date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    } else if (_date.getTime() >= startOfThisYear.getTime()) {
        return year;
    } else {
        return year - 1;
    }
}
const __TURBOPACK__default__export__ = getISOWeekYear;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/startOfISOWeekYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfISOWeekYear",
    ()=>startOfISOWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/getISOWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfISOWeek.js [app-client] (ecmascript)");
;
;
;
function startOfISOWeekYear(date, options) {
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date, options);
    const fourthOfJanuary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfISOWeek"])(fourthOfJanuary);
}
const __TURBOPACK__default__export__ = startOfISOWeekYear;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/getISOWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getISOWeek",
    ()=>getISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfISOWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfISOWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
;
function getISOWeek(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfISOWeek"])(_date) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfISOWeekYear"])(_date);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getISOWeek;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/getWeekYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeekYear",
    ()=>getWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
;
function getWeekYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const firstWeekOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeekOfNextYear, options);
    const firstWeekOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeekOfThisYear, options);
    if (+_date >= +startOfNextYear) {
        return year + 1;
    } else if (+_date >= +startOfThisYear) {
        return year;
    } else {
        return year - 1;
    }
}
const __TURBOPACK__default__export__ = getWeekYear;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/startOfWeekYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfWeekYear",
    ()=>startOfWeekYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/getWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
;
;
;
;
function startOfWeekYear(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const year = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
    const firstWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(firstWeek, options);
    return _date;
}
const __TURBOPACK__default__export__ = startOfWeekYear;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/getWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getWeek",
    ()=>getWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
;
function getWeek(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const diff = +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(_date, options) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeekYear"])(_date, options);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["millisecondsInWeek"]) + 1;
}
const __TURBOPACK__default__export__ = getWeek;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/_lib/addLeadingZeros.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addLeadingZeros",
    ()=>addLeadingZeros
]);
function addLeadingZeros(number, targetLength) {
    const sign = number < 0 ? "-" : "";
    const output = Math.abs(number).toString().padStart(targetLength, "0");
    return sign + output;
}
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/_lib/format/lightFormatters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lightFormatters",
    ()=>lightFormatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/addLeadingZeros.js [app-client] (ecmascript)");
;
const lightFormatters = {
    // Year
    y (date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        const signedYear = date.getFullYear();
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M (date, token) {
        const month = date.getMonth();
        return token === "M" ? String(month + 1) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
    },
    // Day of the month
    d (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getDate(), token.length);
    },
    // AM or PM
    a (date, token) {
        const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getHours(), token.length);
    },
    // Minute
    m (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getMinutes(), token.length);
    },
    // Second
    s (date, token) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(date.getSeconds(), token.length);
    },
    // Fraction of second
    S (date, token) {
        const numberOfDigits = token.length;
        const milliseconds = date.getMilliseconds();
        const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(fractionalSeconds, token.length);
    }
};
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/_lib/format/formatters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatters",
    ()=>formatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/getDayOfYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/getISOWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/getISOWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/getWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/getWeekYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/addLeadingZeros.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/format/lightFormatters.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
const formatters = {
    // Era
    G: function(date, token, localize) {
        const era = date.getFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function(date, token, localize) {
        // Ordinal number
        if (token === "yo") {
            const signedYear = date.getFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            const year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: "year"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        const signedWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeekYear"])(date, options);
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        // Two digit year
        if (token === "YY") {
            const twoDigitYear = weekYear % 100;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(twoDigitYear, 2);
        }
        // Ordinal number
        if (token === "Yo") {
            return localize.ordinalNumber(weekYear, {
                unit: "year"
            });
        }
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        const isoWeekYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getISOWeekYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getISOWeekYear"])(date);
        // Padding
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
        const year = date.getFullYear();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            case "M":
            case "MM":
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function(date, token, localize, options) {
        const week = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeek"])(date, options);
        if (token === "wo") {
            return localize.ordinalNumber(week, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        const isoWeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getISOWeek"])(date);
        if (token === "Io") {
            return localize.ordinalNumber(isoWeek, {
                unit: "week"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === "do") {
            return localize.ordinalNumber(date.getDate(), {
                unit: "date"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        const dayOfYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getDayOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDayOfYear"])(date);
        if (token === "Do") {
            return localize.ordinalNumber(dayOfYear, {
                unit: "dayOfYear"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function(date, token, localize) {
        const hours = date.getHours();
        const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours === 12) {
            dayPeriodEnumValue = dayPeriodEnum.noon;
        } else if (hours === 0) {
            dayPeriodEnumValue = dayPeriodEnum.midnight;
        } else {
            dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        }
        switch(token){
            case "b":
            case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours >= 17) {
            dayPeriodEnumValue = dayPeriodEnum.evening;
        } else if (hours >= 12) {
            dayPeriodEnumValue = dayPeriodEnum.afternoon;
        } else if (hours >= 4) {
            dayPeriodEnumValue = dayPeriodEnum.morning;
        } else {
            dayPeriodEnumValue = dayPeriodEnum.night;
        }
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
        if (token === "ho") {
            let hours = date.getHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === "Ho") {
            return localize.ordinalNumber(date.getHours(), {
                unit: "hour"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        const hours = date.getHours() % 12;
        if (token === "Ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
        let hours = date.getHours();
        if (hours === 0) hours = 24;
        if (token === "ko") {
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === "mo") {
            return localize.ordinalNumber(date.getMinutes(), {
                unit: "minute"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === "so") {
            return localize.ordinalNumber(date.getSeconds(), {
                unit: "second"
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$lightFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lightFormatters"].S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        if (timezoneOffset === 0) {
            return "Z";
        }
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function(date, token, _localize) {
        const timestamp = Math.trunc(+date / 1000);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(+date, token.length);
    }
};
function formatTimezoneShort(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = Math.trunc(absOffset / 60);
    const minutes = absOffset % 60;
    if (minutes === 0) {
        return sign + String(hours);
    }
    return sign + String(hours) + delimiter + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
    if (offset % 60 === 0) {
        const sign = offset > 0 ? "-" : "+";
        return sign + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(Math.trunc(absOffset / 60), 2);
    const minutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$addLeadingZeros$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addLeadingZeros"])(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/_lib/format/longFormatters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "longFormatters",
    ()=>longFormatters
]);
const dateLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "P":
            return formatLong.date({
                width: "short"
            });
        case "PP":
            return formatLong.date({
                width: "medium"
            });
        case "PPP":
            return formatLong.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong.date({
                width: "full"
            });
    }
};
const timeLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "p":
            return formatLong.time({
                width: "short"
            });
        case "pp":
            return formatLong.time({
                width: "medium"
            });
        case "ppp":
            return formatLong.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong.time({
                width: "full"
            });
    }
};
const dateTimeLongFormatter = (pattern, formatLong)=>{
    const matchResult = pattern.match(/(P+)(p+)?/) || [];
    const datePattern = matchResult[1];
    const timePattern = matchResult[2];
    if (!timePattern) {
        return dateLongFormatter(pattern, formatLong);
    }
    let dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
const longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/_lib/protectedTokens.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isProtectedDayOfYearToken",
    ()=>isProtectedDayOfYearToken,
    "isProtectedWeekYearToken",
    ()=>isProtectedWeekYearToken,
    "warnOrThrowProtectedError",
    ()=>warnOrThrowProtectedError
]);
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = [
    "D",
    "DD",
    "YY",
    "YYYY"
];
function isProtectedDayOfYearToken(token) {
    return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
    return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
    const _message = message(token, format, input);
    console.warn(_message);
    if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
    const subject = token[0] === "Y" ? "years" : "days of the month";
    return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/isDate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isDate",
    ()=>isDate
]);
function isDate(value) {
    return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
const __TURBOPACK__default__export__ = isDate;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/isValid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isValid",
    ()=>isValid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/isDate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
function isValid(date) {
    return !(!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDate"])(date) && typeof date !== "number" || isNaN(+(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date)));
}
const __TURBOPACK__default__export__ = isValid;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "format",
    ()=>format,
    "formatDate",
    ()=>format
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript) <export enUS as defaultLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/format/formatters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$longFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/format/longFormatters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/protectedTokens.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/isValid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
;
function format(date, formatStr, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const locale = options?.locale ?? defaultOptions.locale ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__["defaultLocale"];
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const originalDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$isValid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValid"])(originalDate)) {
        throw new RangeError("Invalid time value");
    }
    let parts = formatStr.match(longFormattingTokensRegExp).map((substring)=>{
        const firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            const longFormatter = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$longFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["longFormatters"][firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp).map((substring)=>{
        // Replace two single quote characters with one single quote character
        if (substring === "''") {
            return {
                isToken: false,
                value: "'"
            };
        }
        const firstCharacter = substring[0];
        if (firstCharacter === "'") {
            return {
                isToken: false,
                value: cleanEscapedString(substring)
            };
        }
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatters"][firstCharacter]) {
            return {
                isToken: true,
                value: substring
            };
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        return {
            isToken: false,
            value: substring
        };
    });
    // invoke localize preprocessor (only for french locales at the moment)
    if (locale.localize.preprocessor) {
        parts = locale.localize.preprocessor(originalDate, parts);
    }
    const formatterOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale
    };
    return parts.map((part)=>{
        if (!part.isToken) return part.value;
        const token = part.value;
        if (!options?.useAdditionalWeekYearTokens && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProtectedWeekYearToken"])(token) || !options?.useAdditionalDayOfYearTokens && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProtectedDayOfYearToken"])(token)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$protectedTokens$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warnOrThrowProtectedError"])(token, formatStr, String(date));
        }
        const formatter = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$format$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatters"][token[0]];
        return formatter(originalDate, token, locale.localize, formatterOptions);
    }).join("");
}
function cleanEscapedString(input) {
    const matched = input.match(escapedStringRegExp);
    if (!matched) {
        return input;
    }
    return matched[1].replace(doubleQuoteRegExp, "'");
}
const __TURBOPACK__default__export__ = format;
}),
"[project]/Desktop/coiffeur/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Controller",
    ()=>Controller,
    "Form",
    ()=>Form,
    "FormProvider",
    ()=>FormProvider,
    "Watch",
    ()=>Watch,
    "appendErrors",
    ()=>appendErrors,
    "createFormControl",
    ()=>createFormControl,
    "get",
    ()=>get,
    "set",
    ()=>set,
    "useController",
    ()=>useController,
    "useFieldArray",
    ()=>useFieldArray,
    "useForm",
    ()=>useForm,
    "useFormContext",
    ()=>useFormContext,
    "useFormState",
    ()=>useFormState,
    "useWatch",
    ()=>useWatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var isCheckBoxInput = (element)=>element.type === 'checkbox';
var isDateObject = (value1)=>value1 instanceof Date;
var isNullOrUndefined = (value1)=>value1 == null;
const isObjectType = (value1)=>typeof value1 === 'object';
var isObject = (value1)=>!isNullOrUndefined(value1) && !Array.isArray(value1) && isObjectType(value1) && !isDateObject(value1);
var getEventValue = (event)=>isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name)=>name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name)=>names.has(getNodeParentName(name));
var isPlainObject = (tempObject)=>{
    const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
    return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty('isPrototypeOf');
};
var isWeb = typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined' && typeof document !== 'undefined';
function cloneObject(data) {
    let copy;
    const isArray = Array.isArray(data);
    const isFileListInstance = typeof FileList !== 'undefined' ? data instanceof FileList : false;
    if (data instanceof Date) {
        copy = new Date(data);
    } else if (!(isWeb && (data instanceof Blob || isFileListInstance)) && (isArray || isObject(data))) {
        copy = isArray ? [] : Object.create(Object.getPrototypeOf(data));
        if (!isArray && !isPlainObject(data)) {
            copy = data;
        } else {
            for(const key in data){
                if (data.hasOwnProperty(key)) {
                    copy[key] = cloneObject(data[key]);
                }
            }
        }
    } else {
        return data;
    }
    return copy;
}
var isKey = (value1)=>/^\w*$/.test(value1);
var isUndefined = (val)=>val === undefined;
var compact = (value1)=>Array.isArray(value1) ? value1.filter(Boolean) : [];
var stringToPath = (input)=>compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));
var get = (object, path, defaultValue)=>{
    if (!path || !isObject(object)) {
        return defaultValue;
    }
    const result = (isKey(path) ? [
        path
    ] : stringToPath(path)).reduce((result, key)=>isNullOrUndefined(result) ? result : result[key], object);
    return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
};
var isBoolean = (value1)=>typeof value1 === 'boolean';
var set = (object, path, value1)=>{
    let index = -1;
    const tempPath = isKey(path) ? [
        path
    ] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while(++index < length){
        const key = tempPath[index];
        let newValue = value1;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
        }
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
            return;
        }
        object[key] = newValue;
        object = object[key];
    }
};
const EVENTS = {
    BLUR: 'blur',
    FOCUS_OUT: 'focusout',
    CHANGE: 'change'
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all'
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate'
};
const HookFormContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
HookFormContext.displayName = 'HookFormContext';
/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */ const useFormContext = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(HookFormContext);
/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://react.dev/reference/react/useContext) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */ const FormProvider = (props)=>{
    const { children, ...data } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(HookFormContext.Provider, {
        value: data
    }, children);
};
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true)=>{
    const result = {
        defaultValues: control._defaultValues
    };
    for(const key in formState){
        Object.defineProperty(result, key, {
            get: ()=>{
                const _key = key;
                if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
                    control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
                }
                localProxyFormState && (localProxyFormState[_key] = true);
                return formState[_key];
            }
        });
    }
    return result;
};
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect;
/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */ function useFormState(props) {
    const methods = useFormContext();
    const { control = methods.control, disabled, name, exact } = props || {};
    const [formState, updateFormState] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(control._formState);
    const _localProxyFormState = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef({
        isDirty: false,
        isLoading: false,
        dirtyFields: false,
        touchedFields: false,
        validatingFields: false,
        isValidating: false,
        isValid: false,
        errors: false
    });
    useIsomorphicLayoutEffect({
        "useFormState.useIsomorphicLayoutEffect": ()=>control._subscribe({
                name,
                formState: _localProxyFormState.current,
                exact,
                callback: {
                    "useFormState.useIsomorphicLayoutEffect": (formState)=>{
                        !disabled && updateFormState({
                            ...control._formState,
                            ...formState
                        });
                    }
                }["useFormState.useIsomorphicLayoutEffect"]
            })
    }["useFormState.useIsomorphicLayoutEffect"], [
        name,
        disabled,
        exact
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useFormState.useEffect": ()=>{
            _localProxyFormState.current.isValid && control._setValid(true);
        }
    }["useFormState.useEffect"], [
        control
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useFormState.useMemo": ()=>getProxyFormState(formState, control, _localProxyFormState.current, false)
    }["useFormState.useMemo"], [
        formState,
        control
    ]);
}
var isString = (value1)=>typeof value1 === 'string';
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue)=>{
    if (isString(names)) {
        isGlobal && _names.watch.add(names);
        return get(formValues, names, defaultValue);
    }
    if (Array.isArray(names)) {
        return names.map((fieldName)=>(isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
    }
    isGlobal && (_names.watchAll = true);
    return formValues;
};
var isPrimitive = (value1)=>isNullOrUndefined(value1) || !isObjectType(value1);
function deepEqual(object1, object2, _internal_visited = new WeakSet()) {
    if (isPrimitive(object1) || isPrimitive(object2)) {
        return object1 === object2;
    }
    if (isDateObject(object1) && isDateObject(object2)) {
        return object1.getTime() === object2.getTime();
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    if (_internal_visited.has(object1) || _internal_visited.has(object2)) {
        return true;
    }
    _internal_visited.add(object1);
    _internal_visited.add(object2);
    for (const key of keys1){
        const val1 = object1[key];
        if (!keys2.includes(key)) {
            return false;
        }
        if (key !== 'ref') {
            const val2 = object2[key];
            if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2, _internal_visited) : val1 !== val2) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * const { control } = useForm();
 * const values = useWatch({
 *   name: "fieldName"
 *   control,
 * })
 * ```
 */ function useWatch(props) {
    const methods = useFormContext();
    const { control = methods.control, name, defaultValue, disabled, exact, compute } = props || {};
    const _defaultValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(defaultValue);
    const _compute = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(compute);
    const _computeFormValues = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const _prevControl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(control);
    const _prevName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(name);
    _compute.current = compute;
    const [value1, updateValue] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        "useWatch.useState": ()=>{
            const defaultValue = control._getWatch(name, _defaultValue.current);
            return _compute.current ? _compute.current(defaultValue) : defaultValue;
        }
    }["useWatch.useState"]);
    const getCurrentOutput = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useWatch.useCallback[getCurrentOutput]": (values)=>{
            const formValues = generateWatchOutput(name, control._names, values || control._formValues, false, _defaultValue.current);
            return _compute.current ? _compute.current(formValues) : formValues;
        }
    }["useWatch.useCallback[getCurrentOutput]"], [
        control._formValues,
        control._names,
        name
    ]);
    const refreshValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useWatch.useCallback[refreshValue]": (values)=>{
            if (!disabled) {
                const formValues = generateWatchOutput(name, control._names, values || control._formValues, false, _defaultValue.current);
                if (_compute.current) {
                    const computedFormValues = _compute.current(formValues);
                    if (!deepEqual(computedFormValues, _computeFormValues.current)) {
                        updateValue(computedFormValues);
                        _computeFormValues.current = computedFormValues;
                    }
                } else {
                    updateValue(formValues);
                }
            }
        }
    }["useWatch.useCallback[refreshValue]"], [
        control._formValues,
        control._names,
        disabled,
        name
    ]);
    useIsomorphicLayoutEffect({
        "useWatch.useIsomorphicLayoutEffect": ()=>{
            if (_prevControl.current !== control || !deepEqual(_prevName.current, name)) {
                _prevControl.current = control;
                _prevName.current = name;
                refreshValue();
            }
            return control._subscribe({
                name,
                formState: {
                    values: true
                },
                exact,
                callback: {
                    "useWatch.useIsomorphicLayoutEffect": (formState)=>{
                        refreshValue(formState.values);
                    }
                }["useWatch.useIsomorphicLayoutEffect"]
            });
        }
    }["useWatch.useIsomorphicLayoutEffect"], [
        control,
        exact,
        name,
        refreshValue
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useWatch.useEffect": ()=>control._removeUnmounted()
    }["useWatch.useEffect"]);
    // If name or control changed for this render, synchronously reflect the
    // latest value so callers (like useController) see the correct value
    // immediately on the same render.
    // Optimize: Check control reference first before expensive deepEqual
    const controlChanged = _prevControl.current !== control;
    const prevName = _prevName.current;
    // Cache the computed output to avoid duplicate calls within the same render
    // We include shouldReturnImmediate in deps to ensure proper recomputation
    const computedOutput = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useWatch.useMemo[computedOutput]": ()=>{
            if (disabled) {
                return null;
            }
            const nameChanged = !controlChanged && !deepEqual(prevName, name);
            const shouldReturnImmediate = controlChanged || nameChanged;
            return shouldReturnImmediate ? getCurrentOutput() : null;
        }
    }["useWatch.useMemo[computedOutput]"], [
        disabled,
        controlChanged,
        name,
        prevName,
        getCurrentOutput
    ]);
    return computedOutput !== null ? computedOutput : value1;
}
/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */ function useController(props) {
    const methods = useFormContext();
    const { name, disabled, control = methods.control, shouldUnregister, defaultValue } = props;
    const isArrayField = isNameInFieldArray(control._names.array, name);
    const defaultValueMemo = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useController.useMemo[defaultValueMemo]": ()=>get(control._formValues, name, get(control._defaultValues, name, defaultValue))
    }["useController.useMemo[defaultValueMemo]"], [
        control,
        name,
        defaultValue
    ]);
    const value1 = useWatch({
        control,
        name,
        defaultValue: defaultValueMemo,
        exact: true
    });
    const formState = useFormState({
        control,
        name,
        exact: true
    });
    const _props = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(props);
    const _previousNameRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const _registerProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(control.register(name, {
        ...props.rules,
        value: value1,
        ...isBoolean(props.disabled) ? {
            disabled: props.disabled
        } : {}
    }));
    _props.current = props;
    const fieldState = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useController.useMemo[fieldState]": ()=>Object.defineProperties({}, {
                invalid: {
                    enumerable: true,
                    get: {
                        "useController.useMemo[fieldState]": ()=>!!get(formState.errors, name)
                    }["useController.useMemo[fieldState]"]
                },
                isDirty: {
                    enumerable: true,
                    get: {
                        "useController.useMemo[fieldState]": ()=>!!get(formState.dirtyFields, name)
                    }["useController.useMemo[fieldState]"]
                },
                isTouched: {
                    enumerable: true,
                    get: {
                        "useController.useMemo[fieldState]": ()=>!!get(formState.touchedFields, name)
                    }["useController.useMemo[fieldState]"]
                },
                isValidating: {
                    enumerable: true,
                    get: {
                        "useController.useMemo[fieldState]": ()=>!!get(formState.validatingFields, name)
                    }["useController.useMemo[fieldState]"]
                },
                error: {
                    enumerable: true,
                    get: {
                        "useController.useMemo[fieldState]": ()=>get(formState.errors, name)
                    }["useController.useMemo[fieldState]"]
                }
            })
    }["useController.useMemo[fieldState]"], [
        formState,
        name
    ]);
    const onChange = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useController.useCallback[onChange]": (event)=>_registerProps.current.onChange({
                target: {
                    value: getEventValue(event),
                    name: name
                },
                type: EVENTS.CHANGE
            })
    }["useController.useCallback[onChange]"], [
        name
    ]);
    const onBlur = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useController.useCallback[onBlur]": ()=>_registerProps.current.onBlur({
                target: {
                    value: get(control._formValues, name),
                    name: name
                },
                type: EVENTS.BLUR
            })
    }["useController.useCallback[onBlur]"], [
        name,
        control._formValues
    ]);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useController.useCallback[ref]": (elm)=>{
            const field = get(control._fields, name);
            if (field && elm) {
                field._f.ref = {
                    focus: ({
                        "useController.useCallback[ref]": ()=>elm.focus && elm.focus()
                    })["useController.useCallback[ref]"],
                    select: ({
                        "useController.useCallback[ref]": ()=>elm.select && elm.select()
                    })["useController.useCallback[ref]"],
                    setCustomValidity: ({
                        "useController.useCallback[ref]": (message)=>elm.setCustomValidity(message)
                    })["useController.useCallback[ref]"],
                    reportValidity: ({
                        "useController.useCallback[ref]": ()=>elm.reportValidity()
                    })["useController.useCallback[ref]"]
                };
            }
        }
    }["useController.useCallback[ref]"], [
        control._fields,
        name
    ]);
    const field = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useController.useMemo[field]": ()=>({
                name,
                value: value1,
                ...isBoolean(disabled) || formState.disabled ? {
                    disabled: formState.disabled || disabled
                } : {},
                onChange,
                onBlur,
                ref
            })
    }["useController.useMemo[field]"], [
        name,
        disabled,
        formState.disabled,
        onChange,
        onBlur,
        ref,
        value1
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useController.useEffect": ()=>{
            const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
            const previousName = _previousNameRef.current;
            if (previousName && previousName !== name && !isArrayField) {
                control.unregister(previousName);
            }
            control.register(name, {
                ..._props.current.rules,
                ...isBoolean(_props.current.disabled) ? {
                    disabled: _props.current.disabled
                } : {}
            });
            const updateMounted = {
                "useController.useEffect.updateMounted": (name, value1)=>{
                    const field = get(control._fields, name);
                    if (field && field._f) {
                        field._f.mount = value1;
                    }
                }
            }["useController.useEffect.updateMounted"];
            updateMounted(name, true);
            if (_shouldUnregisterField) {
                const value1 = cloneObject(get(control._options.defaultValues, name, _props.current.defaultValue));
                set(control._defaultValues, name, value1);
                if (isUndefined(get(control._formValues, name))) {
                    set(control._formValues, name, value1);
                }
            }
            !isArrayField && control.register(name);
            _previousNameRef.current = name;
            return ({
                "useController.useEffect": ()=>{
                    (isArrayField ? _shouldUnregisterField && !control._state.action : _shouldUnregisterField) ? control.unregister(name) : updateMounted(name, false);
                }
            })["useController.useEffect"];
        }
    }["useController.useEffect"], [
        name,
        control,
        isArrayField,
        shouldUnregister
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useController.useEffect": ()=>{
            control._setDisabledField({
                disabled,
                name
            });
        }
    }["useController.useEffect"], [
        disabled,
        name,
        control
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useController.useMemo": ()=>({
                field,
                formState,
                fieldState
            })
    }["useController.useMemo"], [
        field,
        formState,
        fieldState
    ]);
}
/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */ const Controller = (props)=>props.render(useController(props));
const flatten = (obj)=>{
    const output = {};
    for (const key of Object.keys(obj)){
        if (isObjectType(obj[key]) && obj[key] !== null) {
            const nested = flatten(obj[key]);
            for (const nestedKey of Object.keys(nested)){
                output[`${key}.${nestedKey}`] = nested[nestedKey];
            }
        } else {
            output[key] = obj[key];
        }
    }
    return output;
};
const POST_REQUEST = 'post';
/**
 * Form component to manage submission.
 *
 * @param props - to setup submission detail. {@link FormProps}
 *
 * @returns form component or headless render prop.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control, formState: { errors } } = useForm();
 *
 *   return (
 *     <Form action="/api" control={control}>
 *       <input {...register("name")} />
 *       <p>{errors?.root?.server && 'Server error'}</p>
 *       <button>Submit</button>
 *     </Form>
 *   );
 * }
 * ```
 */ function Form(props) {
    const methods = useFormContext();
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const { control = methods.control, onSubmit, children, action, method = POST_REQUEST, headers, encType, onError, render, onSuccess, validateStatus, ...rest } = props;
    const submit = async (event)=>{
        let hasError = false;
        let type = '';
        await control.handleSubmit(async (data)=>{
            const formData = new FormData();
            let formDataJson = '';
            try {
                formDataJson = JSON.stringify(data);
            } catch (_a) {}
            const flattenFormValues = flatten(control._formValues);
            for(const key in flattenFormValues){
                formData.append(key, flattenFormValues[key]);
            }
            if (onSubmit) {
                await onSubmit({
                    data,
                    event,
                    method,
                    formData,
                    formDataJson
                });
            }
            if (action) {
                try {
                    const shouldStringifySubmissionData = [
                        headers && headers['Content-Type'],
                        encType
                    ].some((value1)=>value1 && value1.includes('json'));
                    const response = await fetch(String(action), {
                        method,
                        headers: {
                            ...headers,
                            ...encType && encType !== 'multipart/form-data' ? {
                                'Content-Type': encType
                            } : {}
                        },
                        body: shouldStringifySubmissionData ? formDataJson : formData
                    });
                    if (response && (validateStatus ? !validateStatus(response.status) : response.status < 200 || response.status >= 300)) {
                        hasError = true;
                        onError && onError({
                            response
                        });
                        type = String(response.status);
                    } else {
                        onSuccess && onSuccess({
                            response
                        });
                    }
                } catch (error) {
                    hasError = true;
                    onError && onError({
                        error
                    });
                }
            }
        })(event);
        if (hasError && props.control) {
            props.control._subjects.state.next({
                isSubmitSuccessful: false
            });
            props.control.setError('root.server', {
                type
            });
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Form.useEffect": ()=>{
            setMounted(true);
        }
    }["Form.useEffect"], []);
    return render ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, render({
        submit
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        noValidate: mounted,
        action: action,
        method: method,
        encType: encType,
        onSubmit: submit,
        ...rest
    }, children);
}
var appendErrors = (name, validateAllFieldCriteria, errors, type, message)=>validateAllFieldCriteria ? {
        ...errors[name],
        types: {
            ...errors[name] && errors[name].types ? errors[name].types : {},
            [type]: message || true
        }
    } : {};
var convertToArrayPayload = (value1)=>Array.isArray(value1) ? value1 : [
        value1
    ];
var createSubject = ()=>{
    let _observers = [];
    const next = (value1)=>{
        for (const observer of _observers){
            observer.next && observer.next(value1);
        }
    };
    const subscribe = (observer)=>{
        _observers.push(observer);
        return {
            unsubscribe: ()=>{
                _observers = _observers.filter((o)=>o !== observer);
            }
        };
    };
    const unsubscribe = ()=>{
        _observers = [];
    };
    return {
        get observers () {
            return _observers;
        },
        next,
        subscribe,
        unsubscribe
    };
};
function extractFormValues(fieldsState, formValues) {
    const values = {};
    for(const key in fieldsState){
        if (fieldsState.hasOwnProperty(key)) {
            const fieldState = fieldsState[key];
            const fieldValue = formValues[key];
            if (fieldState && isObject(fieldState) && fieldValue) {
                const nestedFieldsState = extractFormValues(fieldState, fieldValue);
                if (isObject(nestedFieldsState)) {
                    values[key] = nestedFieldsState;
                }
            } else if (fieldsState[key]) {
                values[key] = fieldValue;
            }
        }
    }
    return values;
}
var isEmptyObject = (value1)=>isObject(value1) && !Object.keys(value1).length;
var isFileInput = (element)=>element.type === 'file';
var isFunction = (value1)=>typeof value1 === 'function';
var isHTMLElement = (value1)=>{
    if (!isWeb) {
        return false;
    }
    const owner = value1 ? value1.ownerDocument : 0;
    return value1 instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
};
var isMultipleSelect = (element)=>element.type === `select-multiple`;
var isRadioInput = (element)=>element.type === 'radio';
var isRadioOrCheckbox = (ref)=>isRadioInput(ref) || isCheckBoxInput(ref);
var live = (ref)=>isHTMLElement(ref) && ref.isConnected;
function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while(index < length){
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function isEmptyArray(obj) {
    for(const key in obj){
        if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
            return false;
        }
    }
    return true;
}
function unset(object, path) {
    const paths = Array.isArray(path) ? path : isKey(path) ? [
        path
    ] : stringToPath(path);
    const childObject = paths.length === 1 ? object : baseGet(object, paths);
    const index = paths.length - 1;
    const key = paths[index];
    if (childObject) {
        delete childObject[key];
    }
    if (index !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
        unset(object, paths.slice(0, -1));
    }
    return object;
}
var objectHasFunction = (data)=>{
    for(const key in data){
        if (isFunction(data[key])) {
            return true;
        }
    }
    return false;
};
function isTraversable(value1) {
    return Array.isArray(value1) || isObject(value1) && !objectHasFunction(value1);
}
function markFieldsDirty(data, fields = {}) {
    for(const key in data){
        if (isTraversable(data[key])) {
            fields[key] = Array.isArray(data[key]) ? [] : {};
            markFieldsDirty(data[key], fields[key]);
        } else if (!isUndefined(data[key])) {
            fields[key] = true;
        }
    }
    return fields;
}
function getDirtyFields(data, formValues, dirtyFieldsFromValues) {
    if (!dirtyFieldsFromValues) {
        dirtyFieldsFromValues = markFieldsDirty(formValues);
    }
    for(const key in data){
        if (isTraversable(data[key])) {
            if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
                dirtyFieldsFromValues[key] = markFieldsDirty(data[key], Array.isArray(data[key]) ? [] : {});
            } else {
                getDirtyFields(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
            }
        } else {
            dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
        }
    }
    return dirtyFieldsFromValues;
}
const defaultResult = {
    value: false,
    isValid: false
};
const validResult = {
    value: true,
    isValid: true
};
var getCheckboxValue = (options)=>{
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options.filter((option)=>option && option.checked && !option.disabled).map((option)=>option.value);
            return {
                value: values,
                isValid: !!values.length
            };
        }
        return options[0].checked && !options[0].disabled ? options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === '' ? validResult : {
            value: options[0].value,
            isValid: true
        } : validResult : defaultResult;
    }
    return defaultResult;
};
var getFieldValueAs = (value1, { valueAsNumber, valueAsDate, setValueAs })=>isUndefined(value1) ? value1 : valueAsNumber ? value1 === '' ? NaN : value1 ? +value1 : value1 : valueAsDate && isString(value1) ? new Date(value1) : setValueAs ? setValueAs(value1) : value1;
const defaultReturn = {
    isValid: false,
    value: null
};
var getRadioValue = (options)=>Array.isArray(options) ? options.reduce((previous, option)=>option && option.checked && !option.disabled ? {
            isValid: true,
            value: option.value
        } : previous, defaultReturn) : defaultReturn;
function getFieldValue(_f) {
    const ref = _f.ref;
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return getRadioValue(_f.refs).value;
    }
    if (isMultipleSelect(ref)) {
        return [
            ...ref.selectedOptions
        ].map(({ value: value1 })=>value1);
    }
    if (isCheckBoxInput(ref)) {
        return getCheckboxValue(_f.refs).value;
    }
    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation)=>{
    const fields = {};
    for (const name of fieldsNames){
        const field = get(_fields, name);
        field && set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [
            ...fieldsNames
        ],
        fields,
        shouldUseNativeValidation
    };
};
var isRegex = (value1)=>value1 instanceof RegExp;
var getRuleValue = (rule)=>isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var getValidationModes = (mode)=>({
        isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
        isOnBlur: mode === VALIDATION_MODE.onBlur,
        isOnChange: mode === VALIDATION_MODE.onChange,
        isOnAll: mode === VALIDATION_MODE.all,
        isOnTouch: mode === VALIDATION_MODE.onTouched
    });
const ASYNC_FUNCTION = 'AsyncFunction';
var hasPromiseValidation = (fieldReference)=>!!fieldReference && !!fieldReference.validate && !!(isFunction(fieldReference.validate) && fieldReference.validate.constructor.name === ASYNC_FUNCTION || isObject(fieldReference.validate) && Object.values(fieldReference.validate).find((validateFunction)=>validateFunction.constructor.name === ASYNC_FUNCTION));
var hasValidation = (options)=>options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
var isWatched = (name, _names, isBlurEvent)=>!isBlurEvent && (_names.watchAll || _names.watch.has(name) || [
        ..._names.watch
    ].some((watchName)=>name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
const iterateFieldsByAction = (fields, action, fieldsNames, abortEarly)=>{
    for (const key of fieldsNames || Object.keys(fields)){
        const field = get(fields, key);
        if (field) {
            const { _f, ...currentField } = field;
            if (_f) {
                if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) {
                    return true;
                } else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) {
                    return true;
                } else {
                    if (iterateFieldsByAction(currentField, action)) {
                        break;
                    }
                }
            } else if (isObject(currentField)) {
                if (iterateFieldsByAction(currentField, action)) {
                    break;
                }
            }
        }
    }
    return;
};
function schemaErrorLookup(errors, _fields, name) {
    const error = get(errors, name);
    if (error || isKey(name)) {
        return {
            error,
            name
        };
    }
    const names = name.split('.');
    while(names.length){
        const fieldName = names.join('.');
        const field = get(_fields, fieldName);
        const foundError = get(errors, fieldName);
        if (field && !Array.isArray(field) && name !== fieldName) {
            return {
                name
            };
        }
        if (foundError && foundError.type) {
            return {
                name: fieldName,
                error: foundError
            };
        }
        if (foundError && foundError.root && foundError.root.type) {
            return {
                name: `${fieldName}.root`,
                error: foundError.root
            };
        }
        names.pop();
    }
    return {
        name
    };
}
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot)=>{
    updateFormState(formStateData);
    const { name, ...formState } = formStateData;
    return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key)=>_proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var shouldSubscribeByName = (name, signalName, exact)=>!name || !signalName || name === signalName || convertToArrayPayload(name).some((currentName)=>currentName && (exact ? currentName === signalName : currentName.startsWith(signalName) || signalName.startsWith(currentName)));
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode)=>{
    if (mode.isOnAll) {
        return false;
    } else if (!isSubmitted && mode.isOnTouch) {
        return !(isTouched || isBlurEvent);
    } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
        return !isBlurEvent;
    } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
        return isBlurEvent;
    }
    return true;
};
var unsetEmptyArray = (ref, name)=>!compact(get(ref, name)).length && unset(ref, name);
var updateFieldArrayRootError = (errors, error, name)=>{
    const fieldArrayErrors = convertToArrayPayload(get(errors, name));
    set(fieldArrayErrors, 'root', error[name]);
    set(errors, name, fieldArrayErrors);
    return errors;
};
function getValidateError(result, ref, type = 'validate') {
    if (isString(result) || Array.isArray(result) && result.every(isString) || isBoolean(result) && !result) {
        return {
            type,
            message: isString(result) ? result : '',
            ref
        };
    }
}
var getValueAndMessage = (validationData)=>isObject(validationData) && !isRegex(validationData) ? validationData : {
        value: validationData,
        message: ''
    };
var validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray)=>{
    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount } = field._f;
    const inputValue = get(formValues, name);
    if (!mount || disabledFieldNames.has(name)) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message)=>{
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || '');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === '' || inputValue === '' || Array.isArray(inputValue) && !inputValue.length;
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength)=>{
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = {
            type: exceedMax ? maxType : minType,
            message,
            ref,
            ...appendErrorsCurry(exceedMax ? maxType : minType, message)
        };
    };
    if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
        const { value: value1, message } = isString(required) ? {
            value: !!required,
            message: required
        } : getValueAndMessage(required);
        if (value1) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.required,
                message,
                ref: inputRef,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        } else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            const convertTimeToDate = (time)=>new Date(new Date().toDateString() + ' ' + time);
            const isTime = ref.type == 'time';
            const isWeek = ref.type == 'week';
            if (isString(maxOutput.value) && inputValue) {
                exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value) && inputValue) {
                exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.pattern,
                message,
                ref,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue, formValues);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = {
                    ...validateError,
                    ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
                };
                if (!validateAllFieldCriteria) {
                    setCustomValidity(validateError.message);
                    return error;
                }
            }
        } else if (isObject(validate)) {
            let validationResult = {};
            for(const key in validate){
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
                if (validateError) {
                    validationResult = {
                        ...validateError,
                        ...appendErrorsCurry(key, validateError.message)
                    };
                    setCustomValidity(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = {
                    ref: inputRef,
                    ...validationResult
                };
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidity(true);
    return error;
};
const defaultOptions = {
    mode: VALIDATION_MODE.onSubmit,
    reValidateMode: VALIDATION_MODE.onChange,
    shouldFocusError: true
};
function createFormControl(props = {}) {
    let _options = {
        ...defaultOptions,
        ...props
    };
    let _formState = {
        submitCount: 0,
        isDirty: false,
        isReady: false,
        isLoading: isFunction(_options.defaultValues),
        isValidating: false,
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: _options.errors || {},
        disabled: _options.disabled || false
    };
    let _fields = {};
    let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
    let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
    let _state = {
        action: false,
        mount: false,
        watch: false
    };
    let _names = {
        mount: new Set(),
        disabled: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set()
    };
    let delayErrorCallback;
    let timer = 0;
    const _proxyFormState = {
        isDirty: false,
        dirtyFields: false,
        validatingFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false
    };
    let _proxySubscribeFormState = {
        ..._proxyFormState
    };
    const _subjects = {
        array: createSubject(),
        state: createSubject()
    };
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
    const debounce = (callback)=>(wait)=>{
            clearTimeout(timer);
            timer = setTimeout(callback, wait);
        };
    const _setValid = async (shouldUpdateValid)=>{
        if (!_options.disabled && (_proxyFormState.isValid || _proxySubscribeFormState.isValid || shouldUpdateValid)) {
            const isValid = _options.resolver ? isEmptyObject((await _runSchema()).errors) : await executeBuiltInValidation(_fields, true);
            if (isValid !== _formState.isValid) {
                _subjects.state.next({
                    isValid
                });
            }
        }
    };
    const _updateIsValidating = (names, isValidating)=>{
        if (!_options.disabled && (_proxyFormState.isValidating || _proxyFormState.validatingFields || _proxySubscribeFormState.isValidating || _proxySubscribeFormState.validatingFields)) {
            (names || Array.from(_names.mount)).forEach((name)=>{
                if (name) {
                    isValidating ? set(_formState.validatingFields, name, isValidating) : unset(_formState.validatingFields, name);
                }
            });
            _subjects.state.next({
                validatingFields: _formState.validatingFields,
                isValidating: !isEmptyObject(_formState.validatingFields)
            });
        }
    };
    const _setFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true)=>{
        if (args && method && !_options.disabled) {
            _state.action = true;
            if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
                const fieldValues = method(get(_fields, name), args.argA, args.argB);
                shouldSetValues && set(_fields, name, fieldValues);
            }
            if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
                const errors = method(get(_formState.errors, name), args.argA, args.argB);
                shouldSetValues && set(_formState.errors, name, errors);
                unsetEmptyArray(_formState.errors, name);
            }
            if ((_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
                const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
                shouldSetValues && set(_formState.touchedFields, name, touchedFields);
            }
            if (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) {
                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
            }
            _subjects.state.next({
                name,
                isDirty: _getDirty(name, values),
                dirtyFields: _formState.dirtyFields,
                errors: _formState.errors,
                isValid: _formState.isValid
            });
        } else {
            set(_formValues, name, values);
        }
    };
    const updateErrors = (name, error)=>{
        set(_formState.errors, name, error);
        _subjects.state.next({
            errors: _formState.errors
        });
    };
    const _setErrors = (errors)=>{
        _formState.errors = errors;
        _subjects.state.next({
            errors: _formState.errors,
            isValid: false
        });
    };
    const updateValidAndValue = (name, shouldSkipSetValueAs, value1, ref)=>{
        const field = get(_fields, name);
        if (field) {
            const defaultValue = get(_formValues, name, isUndefined(value1) ? get(_defaultValues, name) : value1);
            isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
            _state.mount && _setValid();
        }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender)=>{
        let shouldUpdateField = false;
        let isPreviousDirty = false;
        const output = {
            name
        };
        if (!_options.disabled) {
            if (!isBlurEvent || shouldDirty) {
                if (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty) {
                    isPreviousDirty = _formState.isDirty;
                    _formState.isDirty = output.isDirty = _getDirty();
                    shouldUpdateField = isPreviousDirty !== output.isDirty;
                }
                const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
                isPreviousDirty = !!get(_formState.dirtyFields, name);
                isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
                output.dirtyFields = _formState.dirtyFields;
                shouldUpdateField = shouldUpdateField || (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) && isPreviousDirty !== !isCurrentFieldPristine;
            }
            if (isBlurEvent) {
                const isPreviousFieldTouched = get(_formState.touchedFields, name);
                if (!isPreviousFieldTouched) {
                    set(_formState.touchedFields, name, isBlurEvent);
                    output.touchedFields = _formState.touchedFields;
                    shouldUpdateField = shouldUpdateField || (_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && isPreviousFieldTouched !== isBlurEvent;
                }
            }
            shouldUpdateField && shouldRender && _subjects.state.next(output);
        }
        return shouldUpdateField ? output : {};
    };
    const shouldRenderByError = (name, isValid, error, fieldState)=>{
        const previousFieldError = get(_formState.errors, name);
        const shouldUpdateValid = (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isBoolean(isValid) && _formState.isValid !== isValid;
        if (_options.delayError && error) {
            delayErrorCallback = debounce(()=>updateErrors(name, error));
            delayErrorCallback(_options.delayError);
        } else {
            clearTimeout(timer);
            delayErrorCallback = null;
            error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
        }
        if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
            const updatedFormState = {
                ...fieldState,
                ...shouldUpdateValid && isBoolean(isValid) ? {
                    isValid
                } : {},
                errors: _formState.errors,
                name
            };
            _formState = {
                ..._formState,
                ...updatedFormState
            };
            _subjects.state.next(updatedFormState);
        }
    };
    const _runSchema = async (name)=>{
        _updateIsValidating(name, true);
        const result = await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
        _updateIsValidating(name);
        return result;
    };
    const executeSchemaAndUpdateState = async (names)=>{
        const { errors } = await _runSchema(names);
        if (names) {
            for (const name of names){
                const error = get(errors, name);
                error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
            }
        } else {
            _formState.errors = errors;
        }
        return errors;
    };
    const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
        valid: true
    })=>{
        for(const name in fields){
            const field = fields[name];
            if (field) {
                const { _f, ...fieldValue } = field;
                if (_f) {
                    const isFieldArrayRoot = _names.array.has(_f.name);
                    const isPromiseFunction = field._f && hasPromiseValidation(field._f);
                    if (isPromiseFunction && _proxyFormState.validatingFields) {
                        _updateIsValidating([
                            _f.name
                        ], true);
                    }
                    const fieldError = await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
                    if (isPromiseFunction && _proxyFormState.validatingFields) {
                        _updateIsValidating([
                            _f.name
                        ]);
                    }
                    if (fieldError[_f.name]) {
                        context.valid = false;
                        if (shouldOnlyCheckValid) {
                            break;
                        }
                    }
                    !shouldOnlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
                }
                !isEmptyObject(fieldValue) && await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context);
            }
        }
        return context.valid;
    };
    const _removeUnmounted = ()=>{
        for (const name of _names.unMount){
            const field = get(_fields, name);
            field && (field._f.refs ? field._f.refs.every((ref)=>!live(ref)) : !live(field._f.ref)) && unregister(name);
        }
        _names.unMount = new Set();
    };
    const _getDirty = (name, data)=>!_options.disabled && (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal)=>generateWatchOutput(names, _names, {
            ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? {
                [names]: defaultValue
            } : defaultValue
        }, isGlobal, defaultValue);
    const _getFieldArray = (name)=>compact(get(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? get(_defaultValues, name, []) : []));
    const setFieldValue = (name, value1, options = {})=>{
        const field = get(_fields, name);
        let fieldValue = value1;
        if (field) {
            const fieldReference = field._f;
            if (fieldReference) {
                !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value1, fieldReference));
                fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value1) ? '' : value1;
                if (isMultipleSelect(fieldReference.ref)) {
                    [
                        ...fieldReference.ref.options
                    ].forEach((optionRef)=>optionRef.selected = fieldValue.includes(optionRef.value));
                } else if (fieldReference.refs) {
                    if (isCheckBoxInput(fieldReference.ref)) {
                        fieldReference.refs.forEach((checkboxRef)=>{
                            if (!checkboxRef.defaultChecked || !checkboxRef.disabled) {
                                if (Array.isArray(fieldValue)) {
                                    checkboxRef.checked = !!fieldValue.find((data)=>data === checkboxRef.value);
                                } else {
                                    checkboxRef.checked = fieldValue === checkboxRef.value || !!fieldValue;
                                }
                            }
                        });
                    } else {
                        fieldReference.refs.forEach((radioRef)=>radioRef.checked = radioRef.value === fieldValue);
                    }
                } else if (isFileInput(fieldReference.ref)) {
                    fieldReference.ref.value = '';
                } else {
                    fieldReference.ref.value = fieldValue;
                    if (!fieldReference.ref.type) {
                        _subjects.state.next({
                            name,
                            values: cloneObject(_formValues)
                        });
                    }
                }
            }
        }
        (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
        options.shouldValidate && trigger(name);
    };
    const setValues = (name, value1, options)=>{
        for(const fieldKey in value1){
            if (!value1.hasOwnProperty(fieldKey)) {
                return;
            }
            const fieldValue = value1[fieldKey];
            const fieldName = name + '.' + fieldKey;
            const field = get(_fields, fieldName);
            (_names.array.has(name) || isObject(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
        }
    };
    const setValue = (name, value1, options = {})=>{
        const field = get(_fields, name);
        const isFieldArray = _names.array.has(name);
        const cloneValue = cloneObject(value1);
        set(_formValues, name, cloneValue);
        if (isFieldArray) {
            _subjects.array.next({
                name,
                values: cloneObject(_formValues)
            });
            if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields || _proxySubscribeFormState.isDirty || _proxySubscribeFormState.dirtyFields) && options.shouldDirty) {
                _subjects.state.next({
                    name,
                    dirtyFields: getDirtyFields(_defaultValues, _formValues),
                    isDirty: _getDirty(name, cloneValue)
                });
            }
        } else {
            field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
        }
        isWatched(name, _names) && _subjects.state.next({
            ..._formState,
            name
        });
        _subjects.state.next({
            name: _state.mount ? name : undefined,
            values: cloneObject(_formValues)
        });
    };
    const onChange = async (event)=>{
        _state.mount = true;
        const target = event.target;
        let name = target.name;
        let isFieldValueUpdated = true;
        const field = get(_fields, name);
        const _updateIsFieldValueUpdated = (fieldValue)=>{
            isFieldValueUpdated = Number.isNaN(fieldValue) || isDateObject(fieldValue) && isNaN(fieldValue.getTime()) || deepEqual(fieldValue, get(_formValues, name, fieldValue));
        };
        const validationModeBeforeSubmit = getValidationModes(_options.mode);
        const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
        if (field) {
            let error;
            let isValid;
            const fieldValue = target.type ? getFieldValue(field._f) : getEventValue(event);
            const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
            const shouldSkipValidation = !hasValidation(field._f) && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
            const watched = isWatched(name, _names, isBlurEvent);
            set(_formValues, name, fieldValue);
            if (isBlurEvent) {
                if (!target || !target.readOnly) {
                    field._f.onBlur && field._f.onBlur(event);
                    delayErrorCallback && delayErrorCallback(0);
                }
            } else if (field._f.onChange) {
                field._f.onChange(event);
            }
            const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent);
            const shouldRender = !isEmptyObject(fieldState) || watched;
            !isBlurEvent && _subjects.state.next({
                name,
                type: event.type,
                values: cloneObject(_formValues)
            });
            if (shouldSkipValidation) {
                if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
                    if (_options.mode === 'onBlur') {
                        if (isBlurEvent) {
                            _setValid();
                        }
                    } else if (!isBlurEvent) {
                        _setValid();
                    }
                }
                return shouldRender && _subjects.state.next({
                    name,
                    ...watched ? {} : fieldState
                });
            }
            !isBlurEvent && watched && _subjects.state.next({
                ..._formState
            });
            if (_options.resolver) {
                const { errors } = await _runSchema([
                    name
                ]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
                    const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                    error = errorLookupResult.error;
                    name = errorLookupResult.name;
                    isValid = isEmptyObject(errors);
                }
            } else {
                _updateIsValidating([
                    name
                ], true);
                error = (await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                _updateIsValidating([
                    name
                ]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    if (error) {
                        isValid = false;
                    } else if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
                        isValid = await executeBuiltInValidation(_fields, true);
                    }
                }
            }
            if (isFieldValueUpdated) {
                field._f.deps && (!Array.isArray(field._f.deps) || field._f.deps.length > 0) && trigger(field._f.deps);
                shouldRenderByError(name, isValid, error, fieldState);
            }
        }
    };
    const _focusInput = (ref, key)=>{
        if (get(_formState.errors, key) && ref.focus) {
            ref.focus();
            return 1;
        }
        return;
    };
    const trigger = async (name, options = {})=>{
        let isValid;
        let validationResult;
        const fieldNames = convertToArrayPayload(name);
        if (_options.resolver) {
            const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
            isValid = isEmptyObject(errors);
            validationResult = name ? !fieldNames.some((name)=>get(errors, name)) : isValid;
        } else if (name) {
            validationResult = (await Promise.all(fieldNames.map(async (fieldName)=>{
                const field = get(_fields, fieldName);
                return await executeBuiltInValidation(field && field._f ? {
                    [fieldName]: field
                } : field);
            }))).every(Boolean);
            !(!validationResult && !_formState.isValid) && _setValid();
        } else {
            validationResult = isValid = await executeBuiltInValidation(_fields);
        }
        _subjects.state.next({
            ...!isString(name) || (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isValid !== _formState.isValid ? {} : {
                name
            },
            ..._options.resolver || !name ? {
                isValid
            } : {},
            errors: _formState.errors
        });
        options.shouldFocus && !validationResult && iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
        return validationResult;
    };
    const getValues = (fieldNames, config)=>{
        let values = {
            ..._state.mount ? _formValues : _defaultValues
        };
        if (config) {
            values = extractFormValues(config.dirtyFields ? _formState.dirtyFields : _formState.touchedFields, values);
        }
        return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name)=>get(values, name));
    };
    const getFieldState = (name, formState)=>({
            invalid: !!get((formState || _formState).errors, name),
            isDirty: !!get((formState || _formState).dirtyFields, name),
            error: get((formState || _formState).errors, name),
            isValidating: !!get(_formState.validatingFields, name),
            isTouched: !!get((formState || _formState).touchedFields, name)
        });
    const clearErrors = (name)=>{
        name && convertToArrayPayload(name).forEach((inputName)=>unset(_formState.errors, inputName));
        _subjects.state.next({
            errors: name ? _formState.errors : {}
        });
    };
    const setError = (name, error, options)=>{
        const ref = (get(_fields, name, {
            _f: {}
        })._f || {}).ref;
        const currentError = get(_formState.errors, name) || {};
        // Don't override existing error messages elsewhere in the object tree.
        const { ref: currentRef, message, type, ...restOfErrorTree } = currentError;
        set(_formState.errors, name, {
            ...restOfErrorTree,
            ...error,
            ref
        });
        _subjects.state.next({
            name,
            errors: _formState.errors,
            isValid: false
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue)=>isFunction(name) ? _subjects.state.subscribe({
            next: (payload)=>'values' in payload && name(_getWatch(undefined, defaultValue), payload)
        }) : _getWatch(name, defaultValue, true);
    const _subscribe = (props)=>_subjects.state.subscribe({
            next: (formState)=>{
                if (shouldSubscribeByName(props.name, formState.name, props.exact) && shouldRenderFormState(formState, props.formState || _proxyFormState, _setFormState, props.reRenderRoot)) {
                    props.callback({
                        values: {
                            ..._formValues
                        },
                        ..._formState,
                        ...formState,
                        defaultValues: _defaultValues
                    });
                }
            }
        }).unsubscribe;
    const subscribe = (props)=>{
        _state.mount = true;
        _proxySubscribeFormState = {
            ..._proxySubscribeFormState,
            ...props.formState
        };
        return _subscribe({
            ...props,
            formState: _proxySubscribeFormState
        });
    };
    const unregister = (name, options = {})=>{
        for (const fieldName of name ? convertToArrayPayload(name) : _names.mount){
            _names.mount.delete(fieldName);
            _names.array.delete(fieldName);
            if (!options.keepValue) {
                unset(_fields, fieldName);
                unset(_formValues, fieldName);
            }
            !options.keepError && unset(_formState.errors, fieldName);
            !options.keepDirty && unset(_formState.dirtyFields, fieldName);
            !options.keepTouched && unset(_formState.touchedFields, fieldName);
            !options.keepIsValidating && unset(_formState.validatingFields, fieldName);
            !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
        }
        _subjects.state.next({
            values: cloneObject(_formValues)
        });
        _subjects.state.next({
            ..._formState,
            ...!options.keepDirty ? {} : {
                isDirty: _getDirty()
            }
        });
        !options.keepIsValid && _setValid();
    };
    const _setDisabledField = ({ disabled, name })=>{
        if (isBoolean(disabled) && _state.mount || !!disabled || _names.disabled.has(name)) {
            disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
        }
    };
    const register = (name, options = {})=>{
        let field = get(_fields, name);
        const disabledIsDefined = isBoolean(options.disabled) || isBoolean(_options.disabled);
        set(_fields, name, {
            ...field || {},
            _f: {
                ...field && field._f ? field._f : {
                    ref: {
                        name
                    }
                },
                name,
                mount: true,
                ...options
            }
        });
        _names.mount.add(name);
        if (field) {
            _setDisabledField({
                disabled: isBoolean(options.disabled) ? options.disabled : _options.disabled,
                name
            });
        } else {
            updateValidAndValue(name, true, options.value);
        }
        return {
            ...disabledIsDefined ? {
                disabled: options.disabled || _options.disabled
            } : {},
            ..._options.progressive ? {
                required: !!options.required,
                min: getRuleValue(options.min),
                max: getRuleValue(options.max),
                minLength: getRuleValue(options.minLength),
                maxLength: getRuleValue(options.maxLength),
                pattern: getRuleValue(options.pattern)
            } : {},
            name,
            onChange,
            onBlur: onChange,
            ref: (ref)=>{
                if (ref) {
                    register(name, options);
                    field = get(_fields, name);
                    const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll('input,select,textarea')[0] || ref : ref : ref;
                    const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
                    const refs = field._f.refs || [];
                    if (radioOrCheckbox ? refs.find((option)=>option === fieldRef) : fieldRef === field._f.ref) {
                        return;
                    }
                    set(_fields, name, {
                        _f: {
                            ...field._f,
                            ...radioOrCheckbox ? {
                                refs: [
                                    ...refs.filter(live),
                                    fieldRef,
                                    ...Array.isArray(get(_defaultValues, name)) ? [
                                        {}
                                    ] : []
                                ],
                                ref: {
                                    type: fieldRef.type,
                                    name
                                }
                            } : {
                                ref: fieldRef
                            }
                        }
                    });
                    updateValidAndValue(name, false, undefined, fieldRef);
                } else {
                    field = get(_fields, name, {});
                    if (field._f) {
                        field._f.mount = false;
                    }
                    (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
                }
            }
        };
    };
    const _focusError = ()=>_options.shouldFocusError && iterateFieldsByAction(_fields, _focusInput, _names.mount);
    const _disableForm = (disabled)=>{
        if (isBoolean(disabled)) {
            _subjects.state.next({
                disabled
            });
            iterateFieldsByAction(_fields, (ref, name)=>{
                const currentField = get(_fields, name);
                if (currentField) {
                    ref.disabled = currentField._f.disabled || disabled;
                    if (Array.isArray(currentField._f.refs)) {
                        currentField._f.refs.forEach((inputRef)=>{
                            inputRef.disabled = currentField._f.disabled || disabled;
                        });
                    }
                }
            }, 0, false);
        }
    };
    const handleSubmit = (onValid, onInvalid)=>async (e)=>{
            let onValidError = undefined;
            if (e) {
                e.preventDefault && e.preventDefault();
                e.persist && e.persist();
            }
            let fieldValues = cloneObject(_formValues);
            _subjects.state.next({
                isSubmitting: true
            });
            if (_options.resolver) {
                const { errors, values } = await _runSchema();
                _formState.errors = errors;
                fieldValues = cloneObject(values);
            } else {
                await executeBuiltInValidation(_fields);
            }
            if (_names.disabled.size) {
                for (const name of _names.disabled){
                    unset(fieldValues, name);
                }
            }
            unset(_formState.errors, 'root');
            if (isEmptyObject(_formState.errors)) {
                _subjects.state.next({
                    errors: {}
                });
                try {
                    await onValid(fieldValues, e);
                } catch (error) {
                    onValidError = error;
                }
            } else {
                if (onInvalid) {
                    await onInvalid({
                        ..._formState.errors
                    }, e);
                }
                _focusError();
                setTimeout(_focusError);
            }
            _subjects.state.next({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
                submitCount: _formState.submitCount + 1,
                errors: _formState.errors
            });
            if (onValidError) {
                throw onValidError;
            }
        };
    const resetField = (name, options = {})=>{
        if (get(_fields, name)) {
            if (isUndefined(options.defaultValue)) {
                setValue(name, cloneObject(get(_defaultValues, name)));
            } else {
                setValue(name, options.defaultValue);
                set(_defaultValues, name, cloneObject(options.defaultValue));
            }
            if (!options.keepTouched) {
                unset(_formState.touchedFields, name);
            }
            if (!options.keepDirty) {
                unset(_formState.dirtyFields, name);
                _formState.isDirty = options.defaultValue ? _getDirty(name, cloneObject(get(_defaultValues, name))) : _getDirty();
            }
            if (!options.keepError) {
                unset(_formState.errors, name);
                _proxyFormState.isValid && _setValid();
            }
            _subjects.state.next({
                ..._formState
            });
        }
    };
    const _reset = (formValues, keepStateOptions = {})=>{
        const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
        const cloneUpdatedValues = cloneObject(updatedValues);
        const isEmptyResetValues = isEmptyObject(formValues);
        const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
        if (!keepStateOptions.keepDefaultValues) {
            _defaultValues = updatedValues;
        }
        if (!keepStateOptions.keepValues) {
            if (keepStateOptions.keepDirtyValues) {
                const fieldsToCheck = new Set([
                    ..._names.mount,
                    ...Object.keys(getDirtyFields(_defaultValues, _formValues))
                ]);
                for (const fieldName of Array.from(fieldsToCheck)){
                    get(_formState.dirtyFields, fieldName) ? set(values, fieldName, get(_formValues, fieldName)) : setValue(fieldName, get(values, fieldName));
                }
            } else {
                if (isWeb && isUndefined(formValues)) {
                    for (const name of _names.mount){
                        const field = get(_fields, name);
                        if (field && field._f) {
                            const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
                            if (isHTMLElement(fieldReference)) {
                                const form = fieldReference.closest('form');
                                if (form) {
                                    form.reset();
                                    break;
                                }
                            }
                        }
                    }
                }
                if (keepStateOptions.keepFieldsRef) {
                    for (const fieldName of _names.mount){
                        setValue(fieldName, get(values, fieldName));
                    }
                } else {
                    _fields = {};
                }
            }
            _formValues = _options.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneObject(values);
            _subjects.array.next({
                values: {
                    ...values
                }
            });
            _subjects.state.next({
                values: {
                    ...values
                }
            });
        }
        _names = {
            mount: keepStateOptions.keepDirtyValues ? _names.mount : new Set(),
            unMount: new Set(),
            array: new Set(),
            disabled: new Set(),
            watch: new Set(),
            watchAll: false,
            focus: ''
        };
        _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid || !!keepStateOptions.keepDirtyValues || !_options.shouldUnregister && !isEmptyObject(values);
        _state.watch = !!_options.shouldUnregister;
        _subjects.state.next({
            submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
            isDirty: isEmptyResetValues ? false : keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
            isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
            dirtyFields: isEmptyResetValues ? {} : keepStateOptions.keepDirtyValues ? keepStateOptions.keepDefaultValues && _formValues ? getDirtyFields(_defaultValues, _formValues) : _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : keepStateOptions.keepDirty ? _formState.dirtyFields : {},
            touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
            errors: keepStateOptions.keepErrors ? _formState.errors : {},
            isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
            isSubmitting: false,
            defaultValues: _defaultValues
        });
    };
    const reset = (formValues, keepStateOptions)=>_reset(isFunction(formValues) ? formValues(_formValues) : formValues, keepStateOptions);
    const setFocus = (name, options = {})=>{
        const field = get(_fields, name);
        const fieldReference = field && field._f;
        if (fieldReference) {
            const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
            if (fieldRef.focus) {
                fieldRef.focus();
                options.shouldSelect && isFunction(fieldRef.select) && fieldRef.select();
            }
        }
    };
    const _setFormState = (updatedFormState)=>{
        _formState = {
            ..._formState,
            ...updatedFormState
        };
    };
    const _resetDefaultValues = ()=>isFunction(_options.defaultValues) && _options.defaultValues().then((values)=>{
            reset(values, _options.resetOptions);
            _subjects.state.next({
                isLoading: false
            });
        });
    const methods = {
        control: {
            register,
            unregister,
            getFieldState,
            handleSubmit,
            setError,
            _subscribe,
            _runSchema,
            _focusError,
            _getWatch,
            _getDirty,
            _setValid,
            _setFieldArray,
            _setDisabledField,
            _setErrors,
            _getFieldArray,
            _reset,
            _resetDefaultValues,
            _removeUnmounted,
            _disableForm,
            _subjects,
            _proxyFormState,
            get _fields () {
                return _fields;
            },
            get _formValues () {
                return _formValues;
            },
            get _state () {
                return _state;
            },
            set _state (value){
                _state = value;
            },
            get _defaultValues () {
                return _defaultValues;
            },
            get _names () {
                return _names;
            },
            set _names (value){
                _names = value;
            },
            get _formState () {
                return _formState;
            },
            get _options () {
                return _options;
            },
            set _options (value){
                _options = {
                    ..._options,
                    ...value
                };
            }
        },
        subscribe,
        trigger,
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        resetField,
        clearErrors,
        unregister,
        setError,
        setFocus,
        getFieldState
    };
    return {
        ...methods,
        formControl: methods
    };
}
var generateId = ()=>{
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
};
var getFocusFieldName = (name, index, options = {})=>options.shouldFocus || isUndefined(options.shouldFocus) ? options.focusName || `${name}.${isUndefined(options.focusIndex) ? index : options.focusIndex}.` : '';
var appendAt = (data, value1)=>[
        ...data,
        ...convertToArrayPayload(value1)
    ];
var fillEmptyArray = (value1)=>Array.isArray(value1) ? value1.map(()=>undefined) : undefined;
function insert(data, index, value1) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value1),
        ...data.slice(index)
    ];
}
var moveArrayAt = (data, from, to)=>{
    if (!Array.isArray(data)) {
        return [];
    }
    if (isUndefined(data[to])) {
        data[to] = undefined;
    }
    data.splice(to, 0, data.splice(from, 1)[0]);
    return data;
};
var prependAt = (data, value1)=>[
        ...convertToArrayPayload(value1),
        ...convertToArrayPayload(data)
    ];
function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [
        ...data
    ];
    for (const index of indexes){
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index)=>isUndefined(index) ? [] : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b)=>a - b));
var swapArrayAt = (data, indexA, indexB)=>{
    [data[indexA], data[indexB]] = [
        data[indexB],
        data[indexA]
    ];
};
var updateAt = (fieldValues, index, value1)=>{
    fieldValues[index] = value1;
    return fieldValues;
};
/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc. • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn) • [Video](https://youtu.be/4MrbfGSFY2A)
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */ function useFieldArray(props) {
    const methods = useFormContext();
    const { control = methods.control, name, keyName = 'id', shouldUnregister, rules } = props;
    const [fields, setFields] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(control._getFieldArray(name));
    const ids = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(control._getFieldArray(name).map(generateId));
    const _actioned = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    control._names.array.add(name);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "useFieldArray.useMemo": ()=>rules && fields.length >= 0 && control.register(name, rules)
    }["useFieldArray.useMemo"], [
        control,
        name,
        fields.length,
        rules
    ]);
    useIsomorphicLayoutEffect({
        "useFieldArray.useIsomorphicLayoutEffect": ()=>control._subjects.array.subscribe({
                next: {
                    "useFieldArray.useIsomorphicLayoutEffect": ({ values, name: fieldArrayName })=>{
                        if (fieldArrayName === name || !fieldArrayName) {
                            const fieldValues = get(values, name);
                            if (Array.isArray(fieldValues)) {
                                setFields(fieldValues);
                                ids.current = fieldValues.map(generateId);
                            }
                        }
                    }
                }["useFieldArray.useIsomorphicLayoutEffect"]
            }).unsubscribe
    }["useFieldArray.useIsomorphicLayoutEffect"], [
        control,
        name
    ]);
    const updateValues = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "useFieldArray.useCallback[updateValues]": (updatedFieldArrayValues)=>{
            _actioned.current = true;
            control._setFieldArray(name, updatedFieldArrayValues);
        }
    }["useFieldArray.useCallback[updateValues]"], [
        control,
        name
    ]);
    const append = (value1, options)=>{
        const appendValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = appendAt(control._getFieldArray(name), appendValue);
        control._names.focus = getFocusFieldName(name, updatedFieldArrayValues.length - 1, options);
        ids.current = appendAt(ids.current, appendValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, appendAt, {
            argA: fillEmptyArray(value1)
        });
    };
    const prepend = (value1, options)=>{
        const prependValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = prependAt(control._getFieldArray(name), prependValue);
        control._names.focus = getFocusFieldName(name, 0, options);
        ids.current = prependAt(ids.current, prependValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, prependAt, {
            argA: fillEmptyArray(value1)
        });
    };
    const remove = (index)=>{
        const updatedFieldArrayValues = removeArrayAt(control._getFieldArray(name), index);
        ids.current = removeArrayAt(ids.current, index);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        !Array.isArray(get(control._fields, name)) && set(control._fields, name, undefined);
        control._setFieldArray(name, updatedFieldArrayValues, removeArrayAt, {
            argA: index
        });
    };
    const insert$1 = (index, value1, options)=>{
        const insertValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = insert(control._getFieldArray(name), index, insertValue);
        control._names.focus = getFocusFieldName(name, index, options);
        ids.current = insert(ids.current, index, insertValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, insert, {
            argA: index,
            argB: fillEmptyArray(value1)
        });
    };
    const swap = (indexA, indexB)=>{
        const updatedFieldArrayValues = control._getFieldArray(name);
        swapArrayAt(updatedFieldArrayValues, indexA, indexB);
        swapArrayAt(ids.current, indexA, indexB);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, swapArrayAt, {
            argA: indexA,
            argB: indexB
        }, false);
    };
    const move = (from, to)=>{
        const updatedFieldArrayValues = control._getFieldArray(name);
        moveArrayAt(updatedFieldArrayValues, from, to);
        moveArrayAt(ids.current, from, to);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, moveArrayAt, {
            argA: from,
            argB: to
        }, false);
    };
    const update = (index, value1)=>{
        const updateValue = cloneObject(value1);
        const updatedFieldArrayValues = updateAt(control._getFieldArray(name), index, updateValue);
        ids.current = [
            ...updatedFieldArrayValues
        ].map((item, i)=>!item || i === index ? generateId() : ids.current[i]);
        updateValues(updatedFieldArrayValues);
        setFields([
            ...updatedFieldArrayValues
        ]);
        control._setFieldArray(name, updatedFieldArrayValues, updateAt, {
            argA: index,
            argB: updateValue
        }, true, false);
    };
    const replace = (value1)=>{
        const updatedFieldArrayValues = convertToArrayPayload(cloneObject(value1));
        ids.current = updatedFieldArrayValues.map(generateId);
        updateValues([
            ...updatedFieldArrayValues
        ]);
        setFields([
            ...updatedFieldArrayValues
        ]);
        control._setFieldArray(name, [
            ...updatedFieldArrayValues
        ], (data)=>data, {}, true, false);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useFieldArray.useEffect": ()=>{
            control._state.action = false;
            isWatched(name, control._names) && control._subjects.state.next({
                ...control._formState
            });
            if (_actioned.current && (!getValidationModes(control._options.mode).isOnSubmit || control._formState.isSubmitted) && !getValidationModes(control._options.reValidateMode).isOnSubmit) {
                if (control._options.resolver) {
                    control._runSchema([
                        name
                    ]).then({
                        "useFieldArray.useEffect": (result)=>{
                            const error = get(result.errors, name);
                            const existingError = get(control._formState.errors, name);
                            if (existingError ? !error && existingError.type || error && (existingError.type !== error.type || existingError.message !== error.message) : error && error.type) {
                                error ? set(control._formState.errors, name, error) : unset(control._formState.errors, name);
                                control._subjects.state.next({
                                    errors: control._formState.errors
                                });
                            }
                        }
                    }["useFieldArray.useEffect"]);
                } else {
                    const field = get(control._fields, name);
                    if (field && field._f && !(getValidationModes(control._options.reValidateMode).isOnSubmit && getValidationModes(control._options.mode).isOnSubmit)) {
                        validateField(field, control._names.disabled, control._formValues, control._options.criteriaMode === VALIDATION_MODE.all, control._options.shouldUseNativeValidation, true).then({
                            "useFieldArray.useEffect": (error)=>!isEmptyObject(error) && control._subjects.state.next({
                                    errors: updateFieldArrayRootError(control._formState.errors, error, name)
                                })
                        }["useFieldArray.useEffect"]);
                    }
                }
            }
            control._subjects.state.next({
                name,
                values: cloneObject(control._formValues)
            });
            control._names.focus && iterateFieldsByAction(control._fields, {
                "useFieldArray.useEffect": (ref, key)=>{
                    if (control._names.focus && key.startsWith(control._names.focus) && ref.focus) {
                        ref.focus();
                        return 1;
                    }
                    return;
                }
            }["useFieldArray.useEffect"]);
            control._names.focus = '';
            control._setValid();
            _actioned.current = false;
        }
    }["useFieldArray.useEffect"], [
        fields,
        name,
        control
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useFieldArray.useEffect": ()=>{
            !get(control._formValues, name) && control._setFieldArray(name);
            return ({
                "useFieldArray.useEffect": ()=>{
                    const updateMounted = {
                        "useFieldArray.useEffect.updateMounted": (name, value1)=>{
                            const field = get(control._fields, name);
                            if (field && field._f) {
                                field._f.mount = value1;
                            }
                        }
                    }["useFieldArray.useEffect.updateMounted"];
                    control._options.shouldUnregister || shouldUnregister ? control.unregister(name) : updateMounted(name, false);
                }
            })["useFieldArray.useEffect"];
        }
    }["useFieldArray.useEffect"], [
        name,
        control,
        keyName,
        shouldUnregister
    ]);
    return {
        swap: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(swap, [
            updateValues,
            name,
            control
        ]),
        move: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(move, [
            updateValues,
            name,
            control
        ]),
        prepend: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(prepend, [
            updateValues,
            name,
            control
        ]),
        append: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(append, [
            updateValues,
            name,
            control
        ]),
        remove: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(remove, [
            updateValues,
            name,
            control
        ]),
        insert: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(insert$1, [
            updateValues,
            name,
            control
        ]),
        update: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(update, [
            updateValues,
            name,
            control
        ]),
        replace: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(replace, [
            updateValues,
            name,
            control
        ]),
        fields: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
            "useFieldArray.useMemo": ()=>fields.map({
                    "useFieldArray.useMemo": (field, index)=>({
                            ...field,
                            [keyName]: ids.current[index] || generateId()
                        })
                }["useFieldArray.useMemo"])
        }["useFieldArray.useMemo"], [
            fields,
            keyName
        ])
    };
}
/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <button>Submit</button>
 *     </form>
 *   );
 * }
 * ```
 */ function useForm(props = {}) {
    const _formControl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const _values = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const [formState, updateFormState] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        isDirty: false,
        isValidating: false,
        isLoading: isFunction(props.defaultValues),
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: props.errors || {},
        disabled: props.disabled || false,
        isReady: false,
        defaultValues: isFunction(props.defaultValues) ? undefined : props.defaultValues
    });
    if (!_formControl.current) {
        if (props.formControl) {
            _formControl.current = {
                ...props.formControl,
                formState
            };
            if (props.defaultValues && !isFunction(props.defaultValues)) {
                props.formControl.reset(props.defaultValues, props.resetOptions);
            }
        } else {
            const { formControl, ...rest } = createFormControl(props);
            _formControl.current = {
                ...rest,
                formState
            };
        }
    }
    const control = _formControl.current.control;
    control._options = props;
    useIsomorphicLayoutEffect({
        "useForm.useIsomorphicLayoutEffect": ()=>{
            const sub = control._subscribe({
                formState: control._proxyFormState,
                callback: {
                    "useForm.useIsomorphicLayoutEffect.sub": ()=>updateFormState({
                            ...control._formState
                        })
                }["useForm.useIsomorphicLayoutEffect.sub"],
                reRenderRoot: true
            });
            updateFormState({
                "useForm.useIsomorphicLayoutEffect": (data)=>({
                        ...data,
                        isReady: true
                    })
            }["useForm.useIsomorphicLayoutEffect"]);
            control._formState.isReady = true;
            return sub;
        }
    }["useForm.useIsomorphicLayoutEffect"], [
        control
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>control._disableForm(props.disabled)
    }["useForm.useEffect"], [
        control,
        props.disabled
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            if (props.mode) {
                control._options.mode = props.mode;
            }
            if (props.reValidateMode) {
                control._options.reValidateMode = props.reValidateMode;
            }
        }
    }["useForm.useEffect"], [
        control,
        props.mode,
        props.reValidateMode
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            if (props.errors) {
                control._setErrors(props.errors);
                control._focusError();
            }
        }
    }["useForm.useEffect"], [
        control,
        props.errors
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            props.shouldUnregister && control._subjects.state.next({
                values: control._getWatch()
            });
        }
    }["useForm.useEffect"], [
        control,
        props.shouldUnregister
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            if (control._proxyFormState.isDirty) {
                const isDirty = control._getDirty();
                if (isDirty !== formState.isDirty) {
                    control._subjects.state.next({
                        isDirty
                    });
                }
            }
        }
    }["useForm.useEffect"], [
        control,
        formState.isDirty
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            if (props.values && !deepEqual(props.values, _values.current)) {
                control._reset(props.values, {
                    keepFieldsRef: true,
                    ...control._options.resetOptions
                });
                _values.current = props.values;
                updateFormState({
                    "useForm.useEffect": (state)=>({
                            ...state
                        })
                }["useForm.useEffect"]);
            } else {
                control._resetDefaultValues();
            }
        }
    }["useForm.useEffect"], [
        control,
        props.values
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useForm.useEffect": ()=>{
            if (!control._state.mount) {
                control._setValid();
                control._state.mount = true;
            }
            if (control._state.watch) {
                control._state.watch = false;
                control._subjects.state.next({
                    ...control._formState
                });
            }
            control._removeUnmounted();
        }
    }["useForm.useEffect"]);
    _formControl.current.formState = getProxyFormState(formState, control);
    return _formControl.current;
}
/**
 * Watch component that subscribes to form field changes and re-renders when watched fields update.
 *
 * @param control - The form control object from useForm
 * @param names - Array of field names to watch for changes
 * @param render - The function that receives watched values and returns ReactNode
 * @returns The result of calling render function with watched values
 *
 * @example
 * The `Watch` component only re-render when the values of `foo`, `bar`, and `baz.qux` change.
 * The types of `foo`, `bar`, and `baz.qux` are precisely inferred.
 *
 * ```tsx
 * const { control } = useForm();
 *
 * <Watch
 *   control={control}
 *   names={['foo', 'bar', 'baz.qux']}
 *   render={([foo, bar, baz_qux]) => <div>{foo}{bar}{baz_qux}</div>}
 * />
 * ```
 */ const Watch = ({ control, names, render })=>render(useWatch({
        control,
        name: names
    }));
;
 //# sourceMappingURL=index.esm.mjs.map
}),
"[project]/Desktop/coiffeur/node_modules/@radix-ui/react-label/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/coiffeur/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label,
    "Root",
    ()=>Root
]);
// src/label.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-label/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
var NAME = "Label";
var Label = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].label, {
        ...props,
        ref: forwardedRef,
        onMouseDown: (event)=>{
            const target = event.target;
            if (target.closest("button, input, select, textarea")) return;
            props.onMouseDown?.(event);
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
    });
});
Label.displayName = NAME;
var Root = Label;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDownIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
"[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
];
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-left", __iconNode);
;
 //# sourceMappingURL=chevron-left.js.map
}),
"[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeftIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeftIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)");
}),
"[project]/Desktop/coiffeur/node_modules/@date-fns/tz/constants/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The symbol to access the `TZDate`'s function to construct a new instance from
 * the provided value. It helps date-fns to inherit the time zone.
 */ __turbopack_context__.s([
    "constructFromSymbol",
    ()=>constructFromSymbol
]);
const constructFromSymbol = Symbol.for("constructDateFrom");
}),
"[project]/Desktop/coiffeur/node_modules/@date-fns/tz/tzName/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Time zone name format.
 */ /**
 * The function returns the time zone name for the given date in the specified
 * time zone.
 *
 * It uses the `Intl.DateTimeFormat` API and by default outputs the time zone
 * name in a long format, e.g. "Pacific Standard Time" or
 * "Singapore Standard Time".
 *
 * It is possible to specify the format as the third argument using one of the following options
 *
 * - "short": e.g. "EDT" or "GMT+8".
 * - "long": e.g. "Eastern Daylight Time".
 * - "shortGeneric": e.g. "ET" or "Singapore Time".
 * - "longGeneric": e.g. "Eastern Time" or "Singapore Standard Time".
 *
 * These options correspond to TR35 tokens `z..zzz`, `zzzz`, `v`, and `vvvv` respectively: https://www.unicode.org/reports/tr35/tr35-dates.html#dfst-zone
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 * @param date - Date object to get the time zone name for
 * @param format - Optional format of the time zone name. Defaults to "long". Can be "short", "long", "shortGeneric", or "longGeneric".
 *
 * @returns Time zone name (e.g. "Singapore Standard Time")
 */ __turbopack_context__.s([
    "tzName",
    ()=>tzName
]);
function tzName(timeZone, date, format = "long") {
    return new Intl.DateTimeFormat("en-US", {
        // Enforces engine to render the time. Without the option JavaScriptCore omits it.
        hour: "numeric",
        timeZone: timeZone,
        timeZoneName: format
    }).format(date).split(/\s/g) // Format.JS uses non-breaking spaces
    .slice(2) // Skip the hour and AM/PM parts
    .join(" ");
}
}),
"[project]/Desktop/coiffeur/node_modules/@date-fns/tz/tzOffset/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tzOffset",
    ()=>tzOffset
]);
const offsetFormatCache = {};
const offsetCache = {};
function tzOffset(timeZone, date) {
    try {
        const format = offsetFormatCache[timeZone] ||= new Intl.DateTimeFormat("en-US", {
            timeZone,
            timeZoneName: "longOffset"
        }).format;
        const offsetStr = format(date).split("GMT")[1];
        if (offsetStr in offsetCache) return offsetCache[offsetStr];
        return calcOffset(offsetStr, offsetStr.split(":"));
    } catch  {
        // Fallback to manual parsing if the runtime doesn't support ±HH:MM/±HHMM/±HH
        // See: https://github.com/nodejs/node/issues/53419
        if (timeZone in offsetCache) return offsetCache[timeZone];
        const captures = timeZone?.match(offsetRe);
        if (captures) return calcOffset(timeZone, captures.slice(1));
        return NaN;
    }
}
const offsetRe = /([+-]\d\d):?(\d\d)?/;
function calcOffset(cacheStr, values) {
    const hours = +(values[0] || 0);
    const minutes = +(values[1] || 0);
    // Convert seconds to minutes by dividing by 60 to keep the function return in minutes.
    const seconds = +(values[2] || 0) / 60;
    return offsetCache[cacheStr] = hours * 60 + minutes > 0 ? hours * 60 + minutes + seconds : hours * 60 - minutes - seconds;
}
}),
"[project]/Desktop/coiffeur/node_modules/@date-fns/tz/date/mini.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TZDateMini",
    ()=>TZDateMini
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzOffset$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@date-fns/tz/tzOffset/index.js [app-client] (ecmascript)");
;
class TZDateMini extends Date {
    //#region static
    constructor(...args){
        super();
        if (args.length > 1 && typeof args[args.length - 1] === "string") {
            this.timeZone = args.pop();
        }
        this.internal = new Date();
        if (isNaN((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzOffset$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tzOffset"])(this.timeZone, this))) {
            this.setTime(NaN);
        } else {
            if (!args.length) {
                this.setTime(Date.now());
            } else if (typeof args[0] === "number" && (args.length === 1 || args.length === 2 && typeof args[1] !== "number")) {
                this.setTime(args[0]);
            } else if (typeof args[0] === "string") {
                this.setTime(+new Date(args[0]));
            } else if (args[0] instanceof Date) {
                this.setTime(+args[0]);
            } else {
                this.setTime(+new Date(...args));
                adjustToSystemTZ(this, NaN);
                syncToInternal(this);
            }
        }
    }
    static tz(tz, ...args) {
        return args.length ? new TZDateMini(...args, tz) : new TZDateMini(Date.now(), tz);
    }
    //#endregion
    //#region time zone
    withTimeZone(timeZone) {
        return new TZDateMini(+this, timeZone);
    }
    getTimezoneOffset() {
        const offset = -(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzOffset$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tzOffset"])(this.timeZone, this);
        // Remove the seconds offset
        // use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
        return offset > 0 ? Math.floor(offset) : Math.ceil(offset);
    }
    //#endregion
    //#region time
    setTime(time) {
        Date.prototype.setTime.apply(this, arguments);
        syncToInternal(this);
        return +this;
    }
    //#endregion
    //#region date-fns integration
    [Symbol.for("constructDateFrom")](date) {
        return new TZDateMini(+new Date(date), this.timeZone);
    }
}
// Assign getters and setters
const re = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((method)=>{
    if (!re.test(method)) return;
    const utcMethod = method.replace(re, "$1UTC");
    // Filter out methods without UTC counterparts
    if (!TZDateMini.prototype[utcMethod]) return;
    if (method.startsWith("get")) {
        // Delegate to internal date's UTC method
        TZDateMini.prototype[method] = function() {
            return this.internal[utcMethod]();
        };
    } else {
        // Assign regular setter
        TZDateMini.prototype[method] = function() {
            Date.prototype[utcMethod].apply(this.internal, arguments);
            syncFromInternal(this);
            return +this;
        };
        // Assign UTC setter
        TZDateMini.prototype[utcMethod] = function() {
            Date.prototype[utcMethod].apply(this, arguments);
            syncToInternal(this);
            return +this;
        };
    }
});
/**
 * Function syncs time to internal date, applying the time zone offset.
 *
 * @param {Date} date - Date to sync
 */ function syncToInternal(date) {
    date.internal.setTime(+date);
    date.internal.setUTCSeconds(date.internal.getUTCSeconds() - Math.round(-(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzOffset$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tzOffset"])(date.timeZone, date) * 60));
}
/**
 * Function syncs the internal date UTC values to the date. It allows to get
 * accurate timestamp value.
 *
 * @param {Date} date - The date to sync
 */ function syncFromInternal(date) {
    // First we transpose the internal values
    Date.prototype.setFullYear.call(date, date.internal.getUTCFullYear(), date.internal.getUTCMonth(), date.internal.getUTCDate());
    Date.prototype.setHours.call(date, date.internal.getUTCHours(), date.internal.getUTCMinutes(), date.internal.getUTCSeconds(), date.internal.getUTCMilliseconds());
    // Now we have to adjust the date to the system time zone
    adjustToSystemTZ(date);
}
/**
 * Function adjusts the date to the system time zone. It uses the time zone
 * differences to calculate the offset and adjust the date.
 *
 * @param {Date} date - Date to adjust
 */ function adjustToSystemTZ(date) {
    // Save the time zone offset before all the adjustments
    const baseOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzOffset$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tzOffset"])(date.timeZone, date);
    // Remove the seconds offset
    // use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
    const offset = baseOffset > 0 ? Math.floor(baseOffset) : Math.ceil(baseOffset);
    //#region System DST adjustment
    // The biggest problem with using the system time zone is that when we create
    // a date from internal values stored in UTC, the system time zone might end
    // up on the DST hour:
    //
    //   $ TZ=America/New_York node
    //   > new Date(2020, 2, 8, 1).toString()
    //   'Sun Mar 08 2020 01:00:00 GMT-0500 (Eastern Standard Time)'
    //   > new Date(2020, 2, 8, 2).toString()
    //   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
    //   > new Date(2020, 2, 8, 3).toString()
    //   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
    //   > new Date(2020, 2, 8, 4).toString()
    //   'Sun Mar 08 2020 04:00:00 GMT-0400 (Eastern Daylight Time)'
    //
    // Here we get the same hour for both 2 and 3, because the system time zone
    // has DST beginning at 8 March 2020, 2 a.m. and jumps to 3 a.m. So we have
    // to adjust the internal date to reflect that.
    //
    // However we want to adjust only if that's the DST hour the change happenes,
    // not the hour where DST moves to.
    // We calculate the previous hour to see if the time zone offset has changed
    // and we have landed on the DST hour.
    const prevHour = new Date(+date);
    // We use UTC methods here as we don't want to land on the same hour again
    // in case of DST.
    prevHour.setUTCHours(prevHour.getUTCHours() - 1);
    // Calculate if we are on the system DST hour.
    const systemOffset = -new Date(+date).getTimezoneOffset();
    const prevHourSystemOffset = -new Date(+prevHour).getTimezoneOffset();
    const systemDSTChange = systemOffset - prevHourSystemOffset;
    // Detect the DST shift. System DST change will occur both on
    const dstShift = Date.prototype.getHours.apply(date) !== date.internal.getUTCHours();
    // Move the internal date when we are on the system DST hour.
    if (systemDSTChange && dstShift) date.internal.setUTCMinutes(date.internal.getUTCMinutes() + systemDSTChange);
    //#endregion
    //#region System diff adjustment
    // Now we need to adjust the date, since we just applied internal values.
    // We need to calculate the difference between the system and date time zones
    // and apply it to the date.
    const offsetDiff = systemOffset - offset;
    if (offsetDiff) Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + offsetDiff);
    //#endregion
    //#region Seconds System diff adjustment
    const systemDate = new Date(+date);
    // Set the UTC seconds to 0 to isolate the timezone offset in seconds.
    systemDate.setUTCSeconds(0);
    // For negative systemOffset, invert the seconds.
    const systemSecondsOffset = systemOffset > 0 ? systemDate.getSeconds() : (systemDate.getSeconds() - 60) % 60;
    // Calculate the seconds offset based on the timezone offset.
    const secondsOffset = Math.round(-((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzOffset$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tzOffset"])(date.timeZone, date) * 60)) % 60;
    if (secondsOffset || systemSecondsOffset) {
        date.internal.setUTCSeconds(date.internal.getUTCSeconds() + secondsOffset);
        Date.prototype.setUTCSeconds.call(date, Date.prototype.getUTCSeconds.call(date) + secondsOffset + systemSecondsOffset);
    }
    //#endregion
    //#region Post-adjustment DST fix
    const postBaseOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzOffset$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tzOffset"])(date.timeZone, date);
    // Remove the seconds offset
    // use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
    const postOffset = postBaseOffset > 0 ? Math.floor(postBaseOffset) : Math.ceil(postBaseOffset);
    const postSystemOffset = -new Date(+date).getTimezoneOffset();
    const postOffsetDiff = postSystemOffset - postOffset;
    const offsetChanged = postOffset !== offset;
    const postDiff = postOffsetDiff - offsetDiff;
    if (offsetChanged && postDiff) {
        Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + postDiff);
        // Now we need to check if got offset change during the post-adjustment.
        // If so, we also need both dates to reflect that.
        const newBaseOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzOffset$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tzOffset"])(date.timeZone, date);
        // Remove the seconds offset
        // use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
        const newOffset = newBaseOffset > 0 ? Math.floor(newBaseOffset) : Math.ceil(newBaseOffset);
        const offsetChange = postOffset - newOffset;
        if (offsetChange) {
            date.internal.setUTCMinutes(date.internal.getUTCMinutes() + offsetChange);
            Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + offsetChange);
        }
    }
//#endregion
}
}),
"[project]/Desktop/coiffeur/node_modules/@date-fns/tz/date/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TZDate",
    ()=>TZDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzName$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@date-fns/tz/tzName/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$mini$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@date-fns/tz/date/mini.js [app-client] (ecmascript)");
;
;
class TZDate extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$mini$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TZDateMini"] {
    //#region static
    static tz(tz, ...args) {
        return args.length ? new TZDate(...args, tz) : new TZDate(Date.now(), tz);
    }
    //#endregion
    //#region representation
    toISOString() {
        const [sign, hours, minutes] = this.tzComponents();
        const tz = `${sign}${hours}:${minutes}`;
        return this.internal.toISOString().slice(0, -1) + tz;
    }
    toString() {
        // "Tue Aug 13 2024 07:50:19 GMT+0800 (Singapore Standard Time)";
        return `${this.toDateString()} ${this.toTimeString()}`;
    }
    toDateString() {
        // toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
        const [day, date, month, year] = this.internal.toUTCString().split(" ");
        // "Tue Aug 13 2024"
        return `${day?.slice(0, -1)} ${month} ${date} ${year}`;
    }
    toTimeString() {
        // toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
        const time = this.internal.toUTCString().split(" ")[4];
        const [sign, hours, minutes] = this.tzComponents();
        // "07:42:23 GMT+0800 (Singapore Standard Time)"
        return `${time} GMT${sign}${hours}${minutes} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzName$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tzName"])(this.timeZone, this)})`;
    }
    toLocaleString(locales, options) {
        return Date.prototype.toLocaleString.call(this, locales, {
            ...options,
            timeZone: options?.timeZone || this.timeZone
        });
    }
    toLocaleDateString(locales, options) {
        return Date.prototype.toLocaleDateString.call(this, locales, {
            ...options,
            timeZone: options?.timeZone || this.timeZone
        });
    }
    toLocaleTimeString(locales, options) {
        return Date.prototype.toLocaleTimeString.call(this, locales, {
            ...options,
            timeZone: options?.timeZone || this.timeZone
        });
    }
    //#endregion
    //#region private
    tzComponents() {
        const offset = this.getTimezoneOffset();
        const sign = offset > 0 ? "-" : "+";
        const hours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0");
        const minutes = String(Math.abs(offset) % 60).padStart(2, "0");
        return [
            sign,
            hours,
            minutes
        ];
    }
    //#endregion
    withTimeZone(timeZone) {
        return new TZDate(+this, timeZone);
    }
    //#region date-fns integration
    [Symbol.for("constructDateFrom")](date) {
        return new TZDate(+new Date(date), this.timeZone);
    }
}
}),
"[project]/Desktop/coiffeur/node_modules/@date-fns/tz/tz/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tz",
    ()=>tz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@date-fns/tz/date/index.js [app-client] (ecmascript)");
;
const tz = (timeZone)=>(value)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TZDate"].tz(timeZone, +new Date(value));
}),
"[project]/Desktop/coiffeur/node_modules/@date-fns/tz/tzScan/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tzScan",
    ()=>tzScan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzOffset$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@date-fns/tz/tzOffset/index.js [app-client] (ecmascript)");
;
function tzScan(timeZone, interval) {
    const changes = [];
    const monthDate = new Date(interval.start);
    monthDate.setUTCSeconds(0, 0);
    const endDate = new Date(interval.end);
    endDate.setUTCSeconds(0, 0);
    const endMonthTime = +endDate;
    let lastOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzOffset$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tzOffset"])(timeZone, monthDate);
    while(+monthDate < endMonthTime){
        // Month forward
        monthDate.setUTCMonth(monthDate.getUTCMonth() + 1);
        // Find the month where the offset changes
        const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzOffset$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tzOffset"])(timeZone, monthDate);
        if (offset != lastOffset) {
            // Rewind a month back to find the day where the offset changes
            const dayDate = new Date(monthDate);
            dayDate.setUTCMonth(dayDate.getUTCMonth() - 1);
            const endDayTime = +monthDate;
            lastOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzOffset$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tzOffset"])(timeZone, dayDate);
            while(+dayDate < endDayTime){
                // Day forward
                dayDate.setUTCDate(dayDate.getUTCDate() + 1);
                // Find the day where the offset changes
                const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzOffset$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tzOffset"])(timeZone, dayDate);
                if (offset != lastOffset) {
                    // Rewind a day back to find the time where the offset changes
                    const hourDate = new Date(dayDate);
                    hourDate.setUTCDate(hourDate.getUTCDate() - 1);
                    const endHourTime = +dayDate;
                    lastOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzOffset$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tzOffset"])(timeZone, hourDate);
                    while(+hourDate < endHourTime){
                        // Hour forward
                        hourDate.setUTCHours(hourDate.getUTCHours() + 1);
                        // Find the hour where the offset changes
                        const hourOffset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzOffset$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tzOffset"])(timeZone, hourDate);
                        if (hourOffset !== lastOffset) {
                            changes.push({
                                date: new Date(hourDate),
                                change: hourOffset - lastOffset,
                                offset: hourOffset
                            });
                        }
                        lastOffset = hourOffset;
                    }
                }
                lastOffset = offset;
            }
        }
        lastOffset = offset;
    }
    return changes;
}
}),
"[project]/Desktop/coiffeur/node_modules/@date-fns/tz/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$constants$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@date-fns/tz/constants/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@date-fns/tz/date/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$mini$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@date-fns/tz/date/mini.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tz$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@date-fns/tz/tz/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzOffset$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@date-fns/tz/tzOffset/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzScan$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@date-fns/tz/tzScan/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$tzName$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@date-fns/tz/tzName/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/addDays.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDays",
    ()=>addDays,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
function addDays(date, amount, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    if (isNaN(amount)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, NaN);
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    if (!amount) return _date;
    _date.setDate(_date.getDate() + amount);
    return _date;
}
const __TURBOPACK__default__export__ = addDays;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/addMonths.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addMonths",
    ()=>addMonths,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
function addMonths(date, amount, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    if (isNaN(amount)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, NaN);
    if (!amount) {
        // If 0 months, no-op to avoid changing times in the hour before end of DST
        return _date;
    }
    const dayOfMonth = _date.getDate();
    // The JS Date object supports date math by accepting out-of-bounds values for
    // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
    // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
    // want except that dates will wrap around the end of a month, meaning that
    // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
    // we'll default to the end of the desired month by adding 1 to the desired
    // month and using a date of 0 to back up one day to the end of the desired
    // month.
    const endOfDesiredMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, _date.getTime());
    endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
    const daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) {
        // If we're already at the end of the month, then this is the correct date
        // and we're done.
        return endOfDesiredMonth;
    } else {
        // Otherwise, we now know that setting the original day-of-month value won't
        // cause an overflow, so set the desired day-of-month. Note that we can't
        // just set the date of `endOfDesiredMonth` because that object may have had
        // its time changed in the unusual case where where a DST transition was on
        // the last day of the month and its local time was in the hour skipped or
        // repeated next to a DST transition.  So we use `date` instead which is
        // guaranteed to still have the original time.
        _date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
        return _date;
    }
}
const __TURBOPACK__default__export__ = addMonths;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/addWeeks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addWeeks",
    ()=>addWeeks,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/addDays.js [app-client] (ecmascript)");
;
function addWeeks(date, amount, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(date, amount * 7, options);
}
const __TURBOPACK__default__export__ = addWeeks;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/addYears.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addYears",
    ()=>addYears,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/addMonths.js [app-client] (ecmascript)");
;
function addYears(date, amount, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(date, amount * 12, options);
}
const __TURBOPACK__default__export__ = addYears;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/differenceInCalendarMonths.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "differenceInCalendarMonths",
    ()=>differenceInCalendarMonths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/normalizeDates.js [app-client] (ecmascript)");
;
function differenceInCalendarMonths(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
    const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
    return yearsDiff * 12 + monthsDiff;
}
const __TURBOPACK__default__export__ = differenceInCalendarMonths;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/_lib/normalizeInterval.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeInterval",
    ()=>normalizeInterval
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/normalizeDates.js [app-client] (ecmascript)");
;
function normalizeInterval(context, interval) {
    const [start, end] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeDates"])(context, interval.start, interval.end);
    return {
        start,
        end
    };
}
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/eachMonthOfInterval.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "eachMonthOfInterval",
    ()=>eachMonthOfInterval
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/normalizeInterval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
;
;
function eachMonthOfInterval(interval, options) {
    const { start, end } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeInterval"])(options?.in, interval);
    let reversed = +start > +end;
    const endTime = reversed ? +start : +end;
    const date = reversed ? end : start;
    date.setHours(0, 0, 0, 0);
    date.setDate(1);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+date <= endTime){
        dates.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(start, date));
        date.setMonth(date.getMonth() + step);
    }
    return reversed ? dates.reverse() : dates;
}
const __TURBOPACK__default__export__ = eachMonthOfInterval;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/eachYearOfInterval.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "eachYearOfInterval",
    ()=>eachYearOfInterval
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/normalizeInterval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
;
;
function eachYearOfInterval(interval, options) {
    const { start, end } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeInterval"])(options?.in, interval);
    let reversed = +start > +end;
    const endTime = reversed ? +start : +end;
    const date = reversed ? end : start;
    date.setHours(0, 0, 0, 0);
    date.setMonth(0, 1);
    let step = options?.step ?? 1;
    if (!step) return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while(+date <= endTime){
        dates.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(start, date));
        date.setFullYear(date.getFullYear() + step);
    }
    return reversed ? dates.reverse() : dates;
}
const __TURBOPACK__default__export__ = eachYearOfInterval;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/endOfWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfWeek",
    ()=>endOfWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/defaultOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
function endOfWeek(date, options) {
    const defaultOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$defaultOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultOptions"])();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
    _date.setDate(_date.getDate() + diff);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfWeek;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/endOfISOWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfISOWeek",
    ()=>endOfISOWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/endOfWeek.js [app-client] (ecmascript)");
;
function endOfISOWeek(date, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfWeek"])(date, {
        ...options,
        weekStartsOn: 1
    });
}
const __TURBOPACK__default__export__ = endOfISOWeek;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/endOfMonth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfMonth",
    ()=>endOfMonth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function endOfMonth(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const month = _date.getMonth();
    _date.setFullYear(_date.getFullYear(), month + 1, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfMonth;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/endOfYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "endOfYear",
    ()=>endOfYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function endOfYear(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    _date.setFullYear(year + 1, 0, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
const __TURBOPACK__default__export__ = endOfYear;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/getMonth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getMonth",
    ()=>getMonth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function getMonth(date, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in).getMonth();
}
const __TURBOPACK__default__export__ = getMonth;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/getYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getYear",
    ()=>getYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function getYear(date, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in).getFullYear();
}
const __TURBOPACK__default__export__ = getYear;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/isAfter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isAfter",
    ()=>isAfter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function isAfter(date, dateToCompare) {
    return +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date) > +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(dateToCompare);
}
const __TURBOPACK__default__export__ = isAfter;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/isBefore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isBefore",
    ()=>isBefore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function isBefore(date, dateToCompare) {
    return +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date) < +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(dateToCompare);
}
const __TURBOPACK__default__export__ = isBefore;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/isSameDay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isSameDay",
    ()=>isSameDay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/normalizeDates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
;
;
function isSameDay(laterDate, earlierDate, options) {
    const [dateLeft_, dateRight_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    return +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(dateLeft_) === +(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(dateRight_);
}
const __TURBOPACK__default__export__ = isSameDay;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/isSameMonth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isSameMonth",
    ()=>isSameMonth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/normalizeDates.js [app-client] (ecmascript)");
;
function isSameMonth(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}
const __TURBOPACK__default__export__ = isSameMonth;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/isSameYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "isSameYear",
    ()=>isSameYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/_lib/normalizeDates.js [app-client] (ecmascript)");
;
function isSameYear(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    return laterDate_.getFullYear() === earlierDate_.getFullYear();
}
const __TURBOPACK__default__export__ = isSameYear;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/max.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "max",
    ()=>max
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
function max(dates, options) {
    let result;
    let context = options?.in;
    dates.forEach((date)=>{
        // Use the first date object as the context function
        if (!context && typeof date === "object") context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"].bind(null, date);
        const date_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, context);
        if (!result || result < date_ || isNaN(+date_)) result = date_;
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(context, result || NaN);
}
const __TURBOPACK__default__export__ = max;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/min.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "min",
    ()=>min
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
function min(dates, options) {
    let result;
    let context = options?.in;
    dates.forEach((date)=>{
        // Use the first date object as the context function
        if (!context && typeof date === "object") context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"].bind(null, date);
        const date_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, context);
        if (!result || result > date_ || isNaN(+date_)) result = date_;
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(context, result || NaN);
}
const __TURBOPACK__default__export__ = min;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/getDaysInMonth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getDaysInMonth",
    ()=>getDaysInMonth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
function getDaysInMonth(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const monthIndex = _date.getMonth();
    const lastDayOfMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(_date, 0);
    lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
    lastDayOfMonth.setHours(0, 0, 0, 0);
    return lastDayOfMonth.getDate();
}
const __TURBOPACK__default__export__ = getDaysInMonth;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/setMonth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setMonth",
    ()=>setMonth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getDaysInMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/getDaysInMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
;
function setMonth(date, month, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    const year = _date.getFullYear();
    const day = _date.getDate();
    const midMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, 0);
    midMonth.setFullYear(year, month, 15);
    midMonth.setHours(0, 0, 0, 0);
    const daysInMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getDaysInMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDaysInMonth"])(midMonth);
    // Set the earlier date, allows to wrap Jan 31 to Feb 28
    _date.setMonth(month, Math.min(day, daysInMonth));
    return _date;
}
const __TURBOPACK__default__export__ = setMonth;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/setYear.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setYear",
    ()=>setYear
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/constructFrom.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
;
function setYear(date, year, options) {
    const date_ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
    if (isNaN(+date_)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$constructFrom$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["constructFrom"])(options?.in || date, NaN);
    date_.setFullYear(year);
    return date_;
}
const __TURBOPACK__default__export__ = setYear;
}),
"[project]/Desktop/coiffeur/node_modules/date-fns/startOfMonth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "startOfMonth",
    ()=>startOfMonth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
;
function startOfMonth(date, options) {
    const _date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(date, options?.in);
    _date.setDate(1);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
const __TURBOPACK__default__export__ = startOfMonth;
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getBroadcastWeeksInMonth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBroadcastWeeksInMonth",
    ()=>getBroadcastWeeksInMonth
]);
const FIVE_WEEKS = 5;
const FOUR_WEEKS = 4;
function getBroadcastWeeksInMonth(month, dateLib) {
    // Get the first day of the month
    const firstDayOfMonth = dateLib.startOfMonth(month);
    // Get the day of the week for the first day of the month (1-7, where 1 is Monday)
    const firstDayOfWeek = firstDayOfMonth.getDay() > 0 ? firstDayOfMonth.getDay() : 7;
    const broadcastStartDate = dateLib.addDays(month, -firstDayOfWeek + 1);
    const lastDateOfLastWeek = dateLib.addDays(broadcastStartDate, FIVE_WEEKS * 7 - 1);
    const numberOfWeeks = dateLib.getMonth(month) === dateLib.getMonth(lastDateOfLastWeek) ? FIVE_WEEKS : FOUR_WEEKS;
    return numberOfWeeks;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns the start date of the week in the broadcast calendar.
 *
 * The broadcast week starts on Monday. If the first day of the month is not a
 * Monday, this function calculates the previous Monday as the start of the
 * broadcast week.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the start of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The start date of the broadcast week.
 */ __turbopack_context__.s([
    "startOfBroadcastWeek",
    ()=>startOfBroadcastWeek
]);
function startOfBroadcastWeek(date, dateLib) {
    const firstOfMonth = dateLib.startOfMonth(date);
    const dayOfWeek = firstOfMonth.getDay();
    if (dayOfWeek === 1) {
        return firstOfMonth;
    } else if (dayOfWeek === 0) {
        return dateLib.addDays(firstOfMonth, -1 * 6);
    } else {
        return dateLib.addDays(firstOfMonth, -1 * (dayOfWeek - 1));
    }
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/endOfBroadcastWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "endOfBroadcastWeek",
    ()=>endOfBroadcastWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getBroadcastWeeksInMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getBroadcastWeeksInMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$startOfBroadcastWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js [app-client] (ecmascript)");
;
;
function endOfBroadcastWeek(date, dateLib) {
    const startDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$startOfBroadcastWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfBroadcastWeek"])(date, dateLib);
    const numberOfWeeks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getBroadcastWeeksInMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBroadcastWeeksInMonth"])(date, dateLib);
    const endDate = dateLib.addDays(startDate, numberOfWeeks * 7 - 1);
    return endDate;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DateLib",
    ()=>DateLib,
    "dateLib",
    ()=>dateLib,
    "defaultDateLib",
    ()=>defaultDateLib
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@date-fns/tz/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@date-fns/tz/date/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/addDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/addMonths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/addWeeks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$addYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/addYears.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/differenceInCalendarDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/differenceInCalendarMonths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$eachMonthOfInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/eachMonthOfInterval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$eachYearOfInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/eachYearOfInterval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$endOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/endOfISOWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/endOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/endOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$endOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/endOfYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/getISOWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/getMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/getWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/getYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/isAfter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/isBefore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/isDate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/isSameDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$isSameMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/isSameMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$isSameYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/isSameYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/max.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$setMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/setMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$setYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/setYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfISOWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/startOfYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$endOfBroadcastWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/endOfBroadcastWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$startOfBroadcastWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js [app-client] (ecmascript)");
;
;
;
;
;
class DateLib {
    /**
     * Creates an instance of `DateLib`.
     *
     * @param options Configuration options for the date library.
     * @param overrides Custom overrides for the date library functions.
     */ constructor(options, overrides){
        /**
         * Reference to the built-in Date constructor.
         *
         * @deprecated Use `newDate()` or `today()`.
         */ this.Date = Date;
        /**
         * Creates a new `Date` object representing today's date.
         *
         * @since 9.5.0
         * @returns A `Date` object for today's date.
         */ this.today = ()=>{
            if (this.overrides?.today) {
                return this.overrides.today();
            }
            if (this.options.timeZone) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TZDate"].tz(this.options.timeZone);
            }
            return new this.Date();
        };
        /**
         * Creates a new `Date` object with the specified year, month, and day.
         *
         * @since 9.5.0
         * @param year The year.
         * @param monthIndex The month (0-11).
         * @param date The day of the month.
         * @returns A new `Date` object.
         */ this.newDate = (year, monthIndex, date)=>{
            if (this.overrides?.newDate) {
                return this.overrides.newDate(year, monthIndex, date);
            }
            if (this.options.timeZone) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TZDate"](year, monthIndex, date, this.options.timeZone);
            }
            return new Date(year, monthIndex, date);
        };
        /**
         * Adds the specified number of days to the given date.
         *
         * @param date The date to add days to.
         * @param amount The number of days to add.
         * @returns The new date with the days added.
         */ this.addDays = (date, amount)=>{
            return this.overrides?.addDays ? this.overrides.addDays(date, amount) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$addDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDays"])(date, amount);
        };
        /**
         * Adds the specified number of months to the given date.
         *
         * @param date The date to add months to.
         * @param amount The number of months to add.
         * @returns The new date with the months added.
         */ this.addMonths = (date, amount)=>{
            return this.overrides?.addMonths ? this.overrides.addMonths(date, amount) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$addMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMonths"])(date, amount);
        };
        /**
         * Adds the specified number of weeks to the given date.
         *
         * @param date The date to add weeks to.
         * @param amount The number of weeks to add.
         * @returns The new date with the weeks added.
         */ this.addWeeks = (date, amount)=>{
            return this.overrides?.addWeeks ? this.overrides.addWeeks(date, amount) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$addWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addWeeks"])(date, amount);
        };
        /**
         * Adds the specified number of years to the given date.
         *
         * @param date The date to add years to.
         * @param amount The number of years to add.
         * @returns The new date with the years added.
         */ this.addYears = (date, amount)=>{
            return this.overrides?.addYears ? this.overrides.addYears(date, amount) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$addYears$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addYears"])(date, amount);
        };
        /**
         * Returns the number of calendar days between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar days between the dates.
         */ this.differenceInCalendarDays = (dateLeft, dateRight)=>{
            return this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(dateLeft, dateRight) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(dateLeft, dateRight);
        };
        /**
         * Returns the number of calendar months between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar months between the dates.
         */ this.differenceInCalendarMonths = (dateLeft, dateRight)=>{
            return this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(dateLeft, dateRight) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarMonths"])(dateLeft, dateRight);
        };
        /**
         * Returns the months between the given dates.
         *
         * @param interval The interval to get the months for.
         */ this.eachMonthOfInterval = (interval)=>{
            return this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(interval) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$eachMonthOfInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachMonthOfInterval"])(interval);
        };
        /**
         * Returns the years between the given dates.
         *
         * @since 9.11.1
         * @param interval The interval to get the years for.
         * @returns The array of years in the interval.
         */ this.eachYearOfInterval = (interval)=>{
            const years = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(interval) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$eachYearOfInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachYearOfInterval"])(interval);
            // Remove duplicates that may happen across DST transitions (e.g., "America/Sao_Paulo")
            // See https://github.com/date-fns/tz/issues/72
            const uniqueYears = new Set(years.map((d)=>this.getYear(d)));
            if (uniqueYears.size === years.length) {
                // No duplicates, return as is
                return years;
            }
            // Rebuild the array to ensure one date per year
            const yearsArray = [];
            uniqueYears.forEach((y)=>{
                yearsArray.push(new Date(y, 0, 1));
            });
            return yearsArray;
        };
        /**
         * Returns the end of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The end of the broadcast week.
         */ this.endOfBroadcastWeek = (date)=>{
            return this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(date) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$endOfBroadcastWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfBroadcastWeek"])(date, this);
        };
        /**
         * Returns the end of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The end of the ISO week.
         */ this.endOfISOWeek = (date)=>{
            return this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(date) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$endOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfISOWeek"])(date);
        };
        /**
         * Returns the end of the month for the given date.
         *
         * @param date The original date.
         * @returns The end of the month.
         */ this.endOfMonth = (date)=>{
            return this.overrides?.endOfMonth ? this.overrides.endOfMonth(date) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfMonth"])(date);
        };
        /**
         * Returns the end of the week for the given date.
         *
         * @param date The original date.
         * @returns The end of the week.
         */ this.endOfWeek = (date, options)=>{
            return this.overrides?.endOfWeek ? this.overrides.endOfWeek(date, options) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfWeek"])(date, this.options);
        };
        /**
         * Returns the end of the year for the given date.
         *
         * @param date The original date.
         * @returns The end of the year.
         */ this.endOfYear = (date)=>{
            return this.overrides?.endOfYear ? this.overrides.endOfYear(date) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$endOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfYear"])(date);
        };
        /**
         * Formats the given date using the specified format string.
         *
         * @param date The date to format.
         * @param formatStr The format string.
         * @returns The formatted date string.
         */ this.format = (date, formatStr, _options)=>{
            const formatted = this.overrides?.format ? this.overrides.format(date, formatStr, this.options) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, formatStr, this.options);
            if (this.options.numerals && this.options.numerals !== "latn") {
                return this.replaceDigits(formatted);
            }
            return formatted;
        };
        /**
         * Returns the ISO week number for the given date.
         *
         * @param date The date to get the ISO week number for.
         * @returns The ISO week number.
         */ this.getISOWeek = (date)=>{
            return this.overrides?.getISOWeek ? this.overrides.getISOWeek(date) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getISOWeek"])(date);
        };
        /**
         * Returns the month of the given date.
         *
         * @param date The date to get the month for.
         * @returns The month.
         */ this.getMonth = (date, _options)=>{
            return this.overrides?.getMonth ? this.overrides.getMonth(date, this.options) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])(date, this.options);
        };
        /**
         * Returns the year of the given date.
         *
         * @param date The date to get the year for.
         * @returns The year.
         */ this.getYear = (date, _options)=>{
            return this.overrides?.getYear ? this.overrides.getYear(date, this.options) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])(date, this.options);
        };
        /**
         * Returns the local week number for the given date.
         *
         * @param date The date to get the week number for.
         * @returns The week number.
         */ this.getWeek = (date, _options)=>{
            return this.overrides?.getWeek ? this.overrides.getWeek(date, this.options) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$getWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeek"])(date, this.options);
        };
        /**
         * Checks if the first date is after the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is after the second date.
         */ this.isAfter = (date, dateToCompare)=>{
            return this.overrides?.isAfter ? this.overrides.isAfter(date, dateToCompare) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAfter"])(date, dateToCompare);
        };
        /**
         * Checks if the first date is before the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is before the second date.
         */ this.isBefore = (date, dateToCompare)=>{
            return this.overrides?.isBefore ? this.overrides.isBefore(date, dateToCompare) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBefore"])(date, dateToCompare);
        };
        /**
         * Checks if the given value is a Date object.
         *
         * @param value The value to check.
         * @returns True if the value is a Date object.
         */ this.isDate = (value)=>{
            return this.overrides?.isDate ? this.overrides.isDate(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$isDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDate"])(value);
        };
        /**
         * Checks if the given dates are on the same day.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are on the same day.
         */ this.isSameDay = (dateLeft, dateRight)=>{
            return this.overrides?.isSameDay ? this.overrides.isSameDay(dateLeft, dateRight) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameDay"])(dateLeft, dateRight);
        };
        /**
         * Checks if the given dates are in the same month.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same month.
         */ this.isSameMonth = (dateLeft, dateRight)=>{
            return this.overrides?.isSameMonth ? this.overrides.isSameMonth(dateLeft, dateRight) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$isSameMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameMonth"])(dateLeft, dateRight);
        };
        /**
         * Checks if the given dates are in the same year.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same year.
         */ this.isSameYear = (dateLeft, dateRight)=>{
            return this.overrides?.isSameYear ? this.overrides.isSameYear(dateLeft, dateRight) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$isSameYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameYear"])(dateLeft, dateRight);
        };
        /**
         * Returns the latest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The latest date.
         */ this.max = (dates)=>{
            return this.overrides?.max ? this.overrides.max(dates) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$max$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"])(dates);
        };
        /**
         * Returns the earliest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The earliest date.
         */ this.min = (dates)=>{
            return this.overrides?.min ? this.overrides.min(dates) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["min"])(dates);
        };
        /**
         * Sets the month of the given date.
         *
         * @param date The date to set the month on.
         * @param month The month to set (0-11).
         * @returns The new date with the month set.
         */ this.setMonth = (date, month)=>{
            return this.overrides?.setMonth ? this.overrides.setMonth(date, month) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$setMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setMonth"])(date, month);
        };
        /**
         * Sets the year of the given date.
         *
         * @param date The date to set the year on.
         * @param year The year to set.
         * @returns The new date with the year set.
         */ this.setYear = (date, year)=>{
            return this.overrides?.setYear ? this.overrides.setYear(date, year) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$setYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setYear"])(date, year);
        };
        /**
         * Returns the start of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The start of the broadcast week.
         */ this.startOfBroadcastWeek = (date, _dateLib)=>{
            return this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(date, this) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$startOfBroadcastWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfBroadcastWeek"])(date, this);
        };
        /**
         * Returns the start of the day for the given date.
         *
         * @param date The original date.
         * @returns The start of the day.
         */ this.startOfDay = (date)=>{
            return this.overrides?.startOfDay ? this.overrides.startOfDay(date) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(date);
        };
        /**
         * Returns the start of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The start of the ISO week.
         */ this.startOfISOWeek = (date)=>{
            return this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(date) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfISOWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfISOWeek"])(date);
        };
        /**
         * Returns the start of the month for the given date.
         *
         * @param date The original date.
         * @returns The start of the month.
         */ this.startOfMonth = (date)=>{
            return this.overrides?.startOfMonth ? this.overrides.startOfMonth(date) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(date);
        };
        /**
         * Returns the start of the week for the given date.
         *
         * @param date The original date.
         * @returns The start of the week.
         */ this.startOfWeek = (date, _options)=>{
            return this.overrides?.startOfWeek ? this.overrides.startOfWeek(date, this.options) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(date, this.options);
        };
        /**
         * Returns the start of the year for the given date.
         *
         * @param date The original date.
         * @returns The start of the year.
         */ this.startOfYear = (date)=>{
            return this.overrides?.startOfYear ? this.overrides.startOfYear(date) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$startOfYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfYear"])(date);
        };
        this.options = {
            locale: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enUS"],
            ...options
        };
        this.overrides = overrides;
    }
    /**
     * Generates a mapping of Arabic digits (0-9) to the target numbering system
     * digits.
     *
     * @since 9.5.0
     * @returns A record mapping Arabic digits to the target numerals.
     */ getDigitMap() {
        const { numerals = "latn" } = this.options;
        // Use Intl.NumberFormat to create a formatter with the specified numbering system
        const formatter = new Intl.NumberFormat("en-US", {
            numberingSystem: numerals
        });
        // Map Arabic digits (0-9) to the target numerals
        const digitMap = {};
        for(let i = 0; i < 10; i++){
            digitMap[i.toString()] = formatter.format(i);
        }
        return digitMap;
    }
    /**
     * Replaces Arabic digits in a string with the target numbering system digits.
     *
     * @since 9.5.0
     * @param input The string containing Arabic digits.
     * @returns The string with digits replaced.
     */ replaceDigits(input) {
        const digitMap = this.getDigitMap();
        return input.replace(/\d/g, (digit)=>digitMap[digit] || digit);
    }
    /**
     * Formats a number using the configured numbering system.
     *
     * @since 9.5.0
     * @param value The number to format.
     * @returns The formatted number as a string.
     */ formatNumber(value) {
        return this.replaceDigits(value.toString());
    }
    /**
     * Returns the preferred ordering for month and year labels for the current
     * locale.
     */ getMonthYearOrder() {
        const code = this.options.locale?.code;
        if (!code) {
            return "month-first";
        }
        return DateLib.yearFirstLocales.has(code) ? "year-first" : "month-first";
    }
    /**
     * Formats the month/year pair respecting locale conventions.
     *
     * @since 9.11.0
     */ formatMonthYear(date) {
        const { locale, timeZone, numerals } = this.options;
        const localeCode = locale?.code;
        if (localeCode && DateLib.yearFirstLocales.has(localeCode)) {
            try {
                const intl = new Intl.DateTimeFormat(localeCode, {
                    month: "long",
                    year: "numeric",
                    timeZone,
                    numberingSystem: numerals
                });
                const formatted = intl.format(date);
                return formatted;
            } catch  {
            // Fallback to date-fns formatting below.
            }
        }
        const pattern = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
        return this.format(date, pattern);
    }
}
DateLib.yearFirstLocales = new Set([
    "eu",
    "hu",
    "ja",
    "ja-Hira",
    "ja-JP",
    "ko",
    "ko-KR",
    "lt",
    "lt-LT",
    "lv",
    "lv-LV",
    "mn",
    "mn-MN",
    "zh",
    "zh-CN",
    "zh-HK",
    "zh-TW"
]);
;
const defaultDateLib = new DateLib();
const dateLib = defaultDateLib;
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/UI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Enum representing the UI elements composing DayPicker. These elements are
 * mapped to {@link CustomComponents}, {@link ClassNames}, and {@link Styles}.
 *
 * Some elements are extended by flags and modifiers.
 */ __turbopack_context__.s([
    "Animation",
    ()=>Animation,
    "DayFlag",
    ()=>DayFlag,
    "SelectionState",
    ()=>SelectionState,
    "UI",
    ()=>UI
]);
var UI;
(function(UI) {
    /** The root component displaying the months and the navigation bar. */ UI["Root"] = "root";
    /** The Chevron SVG element used by navigation buttons and dropdowns. */ UI["Chevron"] = "chevron";
    /**
     * The grid cell with the day's date. Extended by {@link DayFlag} and
     * {@link SelectionState}.
     */ UI["Day"] = "day";
    /** The button containing the formatted day's date, inside the grid cell. */ UI["DayButton"] = "day_button";
    /** The caption label of the month (when not showing the dropdown navigation). */ UI["CaptionLabel"] = "caption_label";
    /** The container of the dropdown navigation (when enabled). */ UI["Dropdowns"] = "dropdowns";
    /** The dropdown element to select for years and months. */ UI["Dropdown"] = "dropdown";
    /** The container element of the dropdown. */ UI["DropdownRoot"] = "dropdown_root";
    /** The root element of the footer. */ UI["Footer"] = "footer";
    /** The month grid. */ UI["MonthGrid"] = "month_grid";
    /** Contains the dropdown navigation or the caption label. */ UI["MonthCaption"] = "month_caption";
    /** The dropdown with the months. */ UI["MonthsDropdown"] = "months_dropdown";
    /** Wrapper of the month grid. */ UI["Month"] = "month";
    /** The container of the displayed months. */ UI["Months"] = "months";
    /** The navigation bar with the previous and next buttons. */ UI["Nav"] = "nav";
    /**
     * The next month button in the navigation. *
     *
     * @since 9.1.0
     */ UI["NextMonthButton"] = "button_next";
    /**
     * The previous month button in the navigation.
     *
     * @since 9.1.0
     */ UI["PreviousMonthButton"] = "button_previous";
    /** The row containing the week. */ UI["Week"] = "week";
    /** The group of row weeks in a month (`tbody`). */ UI["Weeks"] = "weeks";
    /** The column header with the weekday. */ UI["Weekday"] = "weekday";
    /** The row grouping the weekdays in the column headers. */ UI["Weekdays"] = "weekdays";
    /** The cell containing the week number. */ UI["WeekNumber"] = "week_number";
    /** The cell header of the week numbers column. */ UI["WeekNumberHeader"] = "week_number_header";
    /** The dropdown with the years. */ UI["YearsDropdown"] = "years_dropdown";
})(UI || (UI = {}));
var DayFlag;
(function(DayFlag) {
    /** The day is disabled. */ DayFlag["disabled"] = "disabled";
    /** The day is hidden. */ DayFlag["hidden"] = "hidden";
    /** The day is outside the current month. */ DayFlag["outside"] = "outside";
    /** The day is focused. */ DayFlag["focused"] = "focused";
    /** The day is today. */ DayFlag["today"] = "today";
})(DayFlag || (DayFlag = {}));
var SelectionState;
(function(SelectionState) {
    /** The day is at the end of a selected range. */ SelectionState["range_end"] = "range_end";
    /** The day is at the middle of a selected range. */ SelectionState["range_middle"] = "range_middle";
    /** The day is at the start of a selected range. */ SelectionState["range_start"] = "range_start";
    /** The day is selected. */ SelectionState["selected"] = "selected";
})(SelectionState || (SelectionState = {}));
var Animation;
(function(Animation) {
    /** The entering weeks when they appear before the exiting month. */ Animation["weeks_before_enter"] = "weeks_before_enter";
    /** The exiting weeks when they disappear before the entering month. */ Animation["weeks_before_exit"] = "weeks_before_exit";
    /** The entering weeks when they appear after the exiting month. */ Animation["weeks_after_enter"] = "weeks_after_enter";
    /** The exiting weeks when they disappear after the entering month. */ Animation["weeks_after_exit"] = "weeks_after_exit";
    /** The entering caption when it appears after the exiting month. */ Animation["caption_after_enter"] = "caption_after_enter";
    /** The exiting caption when it disappears after the entering month. */ Animation["caption_after_exit"] = "caption_after_exit";
    /** The entering caption when it appears before the exiting month. */ Animation["caption_before_enter"] = "caption_before_enter";
    /** The exiting caption when it disappears before the entering month. */ Animation["caption_before_exit"] = "caption_before_exit";
})(Animation || (Animation = {}));
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDateInRange",
    ()=>isDateInRange,
    "rangeIncludesDate",
    ()=>rangeIncludesDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
;
function rangeIncludesDate(range, date, excludeEnds = false, dateLib = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultDateLib"]) {
    let { from, to } = range;
    const { differenceInCalendarDays, isSameDay } = dateLib;
    if (from && to) {
        const isRangeInverted = differenceInCalendarDays(to, from) < 0;
        if (isRangeInverted) {
            [from, to] = [
                to,
                from
            ];
        }
        const isInRange = differenceInCalendarDays(date, from) >= (excludeEnds ? 1 : 0) && differenceInCalendarDays(to, date) >= (excludeEnds ? 1 : 0);
        return isInRange;
    }
    if (!excludeEnds && to) {
        return isSameDay(to, date);
    }
    if (!excludeEnds && from) {
        return isSameDay(from, date);
    }
    return false;
}
const isDateInRange = (range, date)=>rangeIncludesDate(range, date, false, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultDateLib"]);
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/typeguards.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Checks if the given value is of type {@link DateInterval}.
 *
 * @param matcher - The value to check.
 * @returns `true` if the value is a {@link DateInterval}, otherwise `false`.
 * @group Utilities
 */ __turbopack_context__.s([
    "isDateAfterType",
    ()=>isDateAfterType,
    "isDateBeforeType",
    ()=>isDateBeforeType,
    "isDateInterval",
    ()=>isDateInterval,
    "isDateRange",
    ()=>isDateRange,
    "isDatesArray",
    ()=>isDatesArray,
    "isDayOfWeekType",
    ()=>isDayOfWeekType
]);
function isDateInterval(matcher) {
    return Boolean(matcher && typeof matcher === "object" && "before" in matcher && "after" in matcher);
}
function isDateRange(value) {
    return Boolean(value && typeof value === "object" && "from" in value);
}
function isDateAfterType(value) {
    return Boolean(value && typeof value === "object" && "after" in value);
}
function isDateBeforeType(value) {
    return Boolean(value && typeof value === "object" && "before" in value);
}
function isDayOfWeekType(value) {
    return Boolean(value && typeof value === "object" && "dayOfWeek" in value);
}
function isDatesArray(value, dateLib) {
    return Array.isArray(value) && value.every(dateLib.isDate);
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dateMatchModifiers",
    ()=>dateMatchModifiers,
    "isMatch",
    ()=>isMatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeIncludesDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$typeguards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/typeguards.js [app-client] (ecmascript)");
;
;
;
function dateMatchModifiers(date, matchers, dateLib = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultDateLib"]) {
    const matchersArr = !Array.isArray(matchers) ? [
        matchers
    ] : matchers;
    const { isSameDay, differenceInCalendarDays, isAfter } = dateLib;
    return matchersArr.some((matcher)=>{
        if (typeof matcher === "boolean") {
            return matcher;
        }
        if (dateLib.isDate(matcher)) {
            return isSameDay(date, matcher);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$typeguards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDatesArray"])(matcher, dateLib)) {
            return matcher.includes(date);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$typeguards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDateRange"])(matcher)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeIncludesDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeIncludesDate"])(matcher, date, false, dateLib);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$typeguards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDayOfWeekType"])(matcher)) {
            if (!Array.isArray(matcher.dayOfWeek)) {
                return matcher.dayOfWeek === date.getDay();
            }
            return matcher.dayOfWeek.includes(date.getDay());
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$typeguards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDateInterval"])(matcher)) {
            const diffBefore = differenceInCalendarDays(matcher.before, date);
            const diffAfter = differenceInCalendarDays(matcher.after, date);
            const isDayBefore = diffBefore > 0;
            const isDayAfter = diffAfter < 0;
            const isClosedInterval = isAfter(matcher.before, matcher.after);
            if (isClosedInterval) {
                return isDayAfter && isDayBefore;
            } else {
                return isDayBefore || isDayAfter;
            }
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$typeguards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDateAfterType"])(matcher)) {
            return differenceInCalendarDays(date, matcher.after) > 0;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$typeguards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDateBeforeType"])(matcher)) {
            return differenceInCalendarDays(matcher.before, date) > 0;
        }
        if (typeof matcher === "function") {
            return matcher(date);
        }
        return false;
    });
}
const isMatch = dateMatchModifiers;
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/createGetModifiers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createGetModifiers",
    ()=>createGetModifiers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/UI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$dateMatchModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js [app-client] (ecmascript)");
;
;
function createGetModifiers(days, props, navStart, navEnd, dateLib) {
    const { disabled, hidden, modifiers, showOutsideDays, broadcastCalendar, today } = props;
    const { isSameDay, isSameMonth, startOfMonth, isBefore, endOfMonth, isAfter } = dateLib;
    const computedNavStart = navStart && startOfMonth(navStart);
    const computedNavEnd = navEnd && endOfMonth(navEnd);
    const internalModifiersMap = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"].focused]: [],
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"].outside]: [],
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"].disabled]: [],
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"].hidden]: [],
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"].today]: []
    };
    const customModifiersMap = {};
    for (const day of days){
        const { date, displayMonth } = day;
        const isOutside = Boolean(displayMonth && !isSameMonth(date, displayMonth));
        const isBeforeNavStart = Boolean(computedNavStart && isBefore(date, computedNavStart));
        const isAfterNavEnd = Boolean(computedNavEnd && isAfter(date, computedNavEnd));
        const isDisabled = Boolean(disabled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$dateMatchModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateMatchModifiers"])(date, disabled, dateLib));
        const isHidden = Boolean(hidden && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$dateMatchModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateMatchModifiers"])(date, hidden, dateLib)) || isBeforeNavStart || isAfterNavEnd || !broadcastCalendar && !showOutsideDays && isOutside || broadcastCalendar && showOutsideDays === false && isOutside;
        const isToday = isSameDay(date, today ?? dateLib.today());
        if (isOutside) internalModifiersMap.outside.push(day);
        if (isDisabled) internalModifiersMap.disabled.push(day);
        if (isHidden) internalModifiersMap.hidden.push(day);
        if (isToday) internalModifiersMap.today.push(day);
        // Add custom modifiers
        if (modifiers) {
            Object.keys(modifiers).forEach((name)=>{
                const modifierValue = modifiers?.[name];
                const isMatch = modifierValue ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$dateMatchModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateMatchModifiers"])(date, modifierValue, dateLib) : false;
                if (!isMatch) return;
                if (customModifiersMap[name]) {
                    customModifiersMap[name].push(day);
                } else {
                    customModifiersMap[name] = [
                        day
                    ];
                }
            });
        }
    }
    return (day)=>{
        // Initialize all the modifiers to false
        const dayFlags = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"].focused]: false,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"].disabled]: false,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"].hidden]: false,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"].outside]: false,
            [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"].today]: false
        };
        const customModifiers = {};
        // Find the modifiers for the given day
        for(const name in internalModifiersMap){
            const days = internalModifiersMap[name];
            dayFlags[name] = days.some((d)=>d === day);
        }
        for(const name in customModifiersMap){
            customModifiers[name] = customModifiersMap[name].some((d)=>d === day);
        }
        return {
            ...dayFlags,
            // custom modifiers should override all the previous ones
            ...customModifiers
        };
    };
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getClassNamesForModifiers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClassNamesForModifiers",
    ()=>getClassNamesForModifiers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/UI.js [app-client] (ecmascript)");
;
function getClassNamesForModifiers(modifiers, classNames, modifiersClassNames = {}) {
    const modifierClassNames = Object.entries(modifiers).filter(([, active])=>active === true).reduce((previousValue, [key])=>{
        if (modifiersClassNames[key]) {
            previousValue.push(modifiersClassNames[key]);
        } else if (classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"][key]]) {
            previousValue.push(classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"][key]]);
        } else if (classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionState"][key]]) {
            previousValue.push(classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionState"][key]]);
        }
        return previousValue;
    }, [
        classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Day]
    ]);
    return modifierClassNames;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/custom-components.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
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
;
;
;
;
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function Button(props) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        ...props
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/CaptionLabel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CaptionLabel",
    ()=>CaptionLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function CaptionLabel(props) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        ...props
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Chevron.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chevron",
    ()=>Chevron
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function Chevron(props) {
    const { size = 24, orientation = "left", className } = props;
    return(// biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: className,
        width: size,
        height: size,
        viewBox: "0 0 24 24"
    }, orientation === "up" && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polygon", {
        points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"
    }), orientation === "down" && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polygon", {
        points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"
    }), orientation === "left" && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polygon", {
        points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"
    }), orientation === "right" && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("polygon", {
        points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"
    })));
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Day.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Day",
    ()=>Day
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function Day(props) {
    const { day, modifiers, ...tdProps } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("td", {
        ...tdProps
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/DayButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DayButton",
    ()=>DayButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function DayButton(props) {
    const { day, modifiers, ...buttonProps } = props;
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "DayButton.useEffect": ()=>{
            if (modifiers.focused) ref.current?.focus();
        }
    }["DayButton.useEffect"], [
        modifiers.focused
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        ref: ref,
        ...buttonProps
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Dropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dropdown",
    ()=>Dropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/UI.js [app-client] (ecmascript)");
;
;
function Dropdown(props) {
    const { options, className, components, classNames, ...selectProps } = props;
    const cssClassSelect = [
        classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Dropdown],
        className
    ].join(" ");
    const selectedOption = options?.find(({ value })=>value === selectProps.value);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        "data-disabled": selectProps.disabled,
        className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].DropdownRoot]
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Select, {
        className: cssClassSelect,
        ...selectProps
    }, options?.map(({ value, label, disabled })=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Option, {
            key: value,
            value: value,
            disabled: disabled
        }, label))), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].CaptionLabel],
        "aria-hidden": true
    }, selectedOption?.label, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Chevron, {
        orientation: "down",
        size: 18,
        className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Chevron]
    })));
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/DropdownNav.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownNav",
    ()=>DropdownNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function DropdownNav(props) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...props
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function Footer(props) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...props
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Month.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Month",
    ()=>Month
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function Month(props) {
    const { calendarMonth, displayIndex, ...divProps } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...divProps
    }, props.children);
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/MonthCaption.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MonthCaption",
    ()=>MonthCaption
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function MonthCaption(props) {
    const { calendarMonth, displayIndex, ...divProps } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...divProps
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/MonthGrid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MonthGrid",
    ()=>MonthGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function MonthGrid(props) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("table", {
        ...props
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Months.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Months",
    ()=>Months
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function Months(props) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...props
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/useDayPicker.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dayPickerContext",
    ()=>dayPickerContext,
    "useDayPicker",
    ()=>useDayPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const dayPickerContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useDayPicker() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(dayPickerContext);
    if (context === undefined) {
        throw new Error("useDayPicker() must be used within a custom component.");
    }
    return context;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MonthsDropdown",
    ()=>MonthsDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useDayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/useDayPicker.js [app-client] (ecmascript)");
;
;
function MonthsDropdown(props) {
    const { components } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useDayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDayPicker"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Dropdown, {
        ...props
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Nav.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/UI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useDayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/useDayPicker.js [app-client] (ecmascript)");
;
;
;
function Nav(props) {
    const { onPreviousClick, onNextClick, previousMonth, nextMonth, ...navProps } = props;
    const { components, classNames, labels: { labelPrevious, labelNext } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useDayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDayPicker"])();
    const handleNextClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Nav.useCallback[handleNextClick]": (e)=>{
            if (nextMonth) {
                onNextClick?.(e);
            }
        }
    }["Nav.useCallback[handleNextClick]"], [
        nextMonth,
        onNextClick
    ]);
    const handlePreviousClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Nav.useCallback[handlePreviousClick]": (e)=>{
            if (previousMonth) {
                onPreviousClick?.(e);
            }
        }
    }["Nav.useCallback[handlePreviousClick]"], [
        previousMonth,
        onPreviousClick
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("nav", {
        ...navProps
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.PreviousMonthButton, {
        type: "button",
        className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].PreviousMonthButton],
        tabIndex: previousMonth ? undefined : -1,
        "aria-disabled": previousMonth ? undefined : true,
        "aria-label": labelPrevious(previousMonth),
        onClick: handlePreviousClick
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Chevron, {
        disabled: previousMonth ? undefined : true,
        className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Chevron],
        orientation: "left"
    })), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.NextMonthButton, {
        type: "button",
        className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].NextMonthButton],
        tabIndex: nextMonth ? undefined : -1,
        "aria-disabled": nextMonth ? undefined : true,
        "aria-label": labelNext(nextMonth),
        onClick: handleNextClick
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Chevron, {
        disabled: nextMonth ? undefined : true,
        orientation: "right",
        className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Chevron]
    })));
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/NextMonthButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextMonthButton",
    ()=>NextMonthButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useDayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/useDayPicker.js [app-client] (ecmascript)");
;
;
function NextMonthButton(props) {
    const { components } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useDayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDayPicker"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Button, {
        ...props
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Option.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Option",
    ()=>Option
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function Option(props) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("option", {
        ...props
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/PreviousMonthButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PreviousMonthButton",
    ()=>PreviousMonthButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useDayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/useDayPicker.js [app-client] (ecmascript)");
;
;
function PreviousMonthButton(props) {
    const { components } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useDayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDayPicker"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Button, {
        ...props
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Root.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function Root(props) {
    const { rootRef, ...rest } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...rest,
        ref: rootRef
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Select.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function Select(props) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("select", {
        ...props
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Week.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Week",
    ()=>Week
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function Week(props) {
    const { week, ...trProps } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("tr", {
        ...trProps
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Weekday.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Weekday",
    ()=>Weekday
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function Weekday(props) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("th", {
        ...props
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Weekdays.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Weekdays",
    ()=>Weekdays
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function Weekdays(props) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("thead", {
        "aria-hidden": true
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("tr", {
        ...props
    }));
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/WeekNumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeekNumber",
    ()=>WeekNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function WeekNumber(props) {
    const { week, ...thProps } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("th", {
        ...thProps
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/WeekNumberHeader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeekNumberHeader",
    ()=>WeekNumberHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function WeekNumberHeader(props) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("th", {
        ...props
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Weeks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Weeks",
    ()=>Weeks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function Weeks(props) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("tbody", {
        ...props
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/YearsDropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "YearsDropdown",
    ()=>YearsDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useDayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/useDayPicker.js [app-client] (ecmascript)");
;
;
function YearsDropdown(props) {
    const { components } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useDayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDayPicker"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Dropdown, {
        ...props
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/custom-components.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"],
    "CaptionLabel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$CaptionLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CaptionLabel"],
    "Chevron",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Chevron$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chevron"],
    "Day",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Day$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Day"],
    "DayButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$DayButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayButton"],
    "Dropdown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dropdown"],
    "DropdownNav",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$DropdownNav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownNav"],
    "Footer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"],
    "Month",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Month$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Month"],
    "MonthCaption",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$MonthCaption$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonthCaption"],
    "MonthGrid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$MonthGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonthGrid"],
    "Months",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Months$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Months"],
    "MonthsDropdown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$MonthsDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MonthsDropdown"],
    "Nav",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Nav"],
    "NextMonthButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$NextMonthButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NextMonthButton"],
    "Option",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Option"],
    "PreviousMonthButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$PreviousMonthButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreviousMonthButton"],
    "Root",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"],
    "Select",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"],
    "Week",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Week$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Week"],
    "WeekNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$WeekNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeekNumber"],
    "WeekNumberHeader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$WeekNumberHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeekNumberHeader"],
    "Weekday",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Weekday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Weekday"],
    "Weekdays",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Weekdays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Weekdays"],
    "Weeks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Weeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Weeks"],
    "YearsDropdown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$YearsDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YearsDropdown"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$custom$2d$components$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/custom-components.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$CaptionLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/CaptionLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Chevron$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Chevron.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Day$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Day.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$DayButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/DayButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Dropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Dropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$DropdownNav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/DropdownNav.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Footer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Month$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Month.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$MonthCaption$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/MonthCaption.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$MonthGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/MonthGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Months$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Months.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$MonthsDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Nav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Nav.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$NextMonthButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/NextMonthButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Option$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Option.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$PreviousMonthButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/PreviousMonthButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Root$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Root.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Week$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Week.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Weekday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Weekday.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Weekdays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Weekdays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$WeekNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/WeekNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$WeekNumberHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/WeekNumberHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$Weeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/Weeks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$YearsDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/YearsDropdown.js [app-client] (ecmascript)");
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getComponents.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getComponents",
    ()=>getComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$custom$2d$components$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/components/custom-components.js [app-client] (ecmascript)");
;
function getComponents(customComponents) {
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$components$2f$custom$2d$components$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
        ...customComponents
    };
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getDataAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Extracts `data-` attributes from the DayPicker props.
 *
 * This function collects all `data-` attributes from the props and adds
 * additional attributes based on the DayPicker configuration.
 *
 * @param props The DayPicker props.
 * @returns An object containing the `data-` attributes.
 */ __turbopack_context__.s([
    "getDataAttributes",
    ()=>getDataAttributes
]);
function getDataAttributes(props) {
    const dataAttributes = {
        "data-mode": props.mode ?? undefined,
        "data-required": "required" in props ? props.required : undefined,
        "data-multiple-months": props.numberOfMonths && props.numberOfMonths > 1 || undefined,
        "data-week-numbers": props.showWeekNumber || undefined,
        "data-broadcast-calendar": props.broadcastCalendar || undefined,
        "data-nav-layout": props.navLayout || undefined
    };
    Object.entries(props).forEach(([key, val])=>{
        if (key.startsWith("data-")) {
            dataAttributes[key] = val;
        }
    });
    return dataAttributes;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultClassNames",
    ()=>getDefaultClassNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/UI.js [app-client] (ecmascript)");
;
function getDefaultClassNames() {
    const classNames = {};
    for(const key in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"]){
        classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"][key]] = `rdp-${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"][key]}`;
    }
    for(const key in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"]){
        classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"][key]] = `rdp-${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"][key]}`;
    }
    for(const key in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionState"]){
        classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionState"][key]] = `rdp-${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionState"][key]}`;
    }
    for(const key in __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"]){
        classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"][key]] = `rdp-${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"][key]}`;
    }
    return classNames;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/formatCaption.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatCaption",
    ()=>formatCaption,
    "formatMonthCaption",
    ()=>formatMonthCaption
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
;
function formatCaption(month, options, dateLib) {
    const lib = dateLib ?? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DateLib"](options);
    return lib.formatMonthYear(month);
}
const formatMonthCaption = formatCaption;
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/formatDay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDay",
    ()=>formatDay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
;
function formatDay(date, options, dateLib) {
    return (dateLib ?? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DateLib"](options)).format(date, "d");
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/formatMonthDropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatMonthDropdown",
    ()=>formatMonthDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
;
function formatMonthDropdown(month, dateLib = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultDateLib"]) {
    return dateLib.format(month, "LLLL");
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/formatWeekdayName.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatWeekdayName",
    ()=>formatWeekdayName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
;
function formatWeekdayName(weekday, options, dateLib) {
    return (dateLib ?? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DateLib"](options)).format(weekday, "cccccc");
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/formatWeekNumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatWeekNumber",
    ()=>formatWeekNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
;
function formatWeekNumber(weekNumber, dateLib = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultDateLib"]) {
    if (weekNumber < 10) {
        return dateLib.formatNumber(`0${weekNumber.toLocaleString()}`);
    }
    return dateLib.formatNumber(`${weekNumber.toLocaleString()}`);
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/formatWeekNumberHeader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Formats the header for the week number column.
 *
 * @defaultValue An empty string `""`.
 * @returns The formatted week number header as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */ __turbopack_context__.s([
    "formatWeekNumberHeader",
    ()=>formatWeekNumberHeader
]);
function formatWeekNumberHeader() {
    return ``;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/formatYearDropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatYearCaption",
    ()=>formatYearCaption,
    "formatYearDropdown",
    ()=>formatYearDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
;
function formatYearDropdown(year, dateLib = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultDateLib"]) {
    return dateLib.format(year, "yyyy");
}
const formatYearCaption = formatYearDropdown;
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatCaption",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$formatCaption$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCaption"],
    "formatDay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$formatDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDay"],
    "formatMonthCaption",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$formatCaption$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMonthCaption"],
    "formatMonthDropdown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$formatMonthDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMonthDropdown"],
    "formatWeekNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$formatWeekNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatWeekNumber"],
    "formatWeekNumberHeader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$formatWeekNumberHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatWeekNumberHeader"],
    "formatWeekdayName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$formatWeekdayName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatWeekdayName"],
    "formatYearCaption",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$formatYearDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatYearCaption"],
    "formatYearDropdown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$formatYearDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatYearDropdown"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$formatCaption$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/formatCaption.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$formatDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/formatDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$formatMonthDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/formatMonthDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$formatWeekdayName$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/formatWeekdayName.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$formatWeekNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/formatWeekNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$formatWeekNumberHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/formatWeekNumberHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$formatYearDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/formatYearDropdown.js [app-client] (ecmascript)");
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getFormatters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFormatters",
    ()=>getFormatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/formatters/index.js [app-client] (ecmascript)");
;
function getFormatters(customFormatters) {
    if (customFormatters?.formatMonthCaption && !customFormatters.formatCaption) {
        customFormatters.formatCaption = customFormatters.formatMonthCaption;
    }
    if (customFormatters?.formatYearCaption && !customFormatters.formatYearDropdown) {
        customFormatters.formatYearDropdown = customFormatters.formatYearCaption;
    }
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$formatters$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
        ...customFormatters
    };
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getMonthOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns the months to show in the dropdown.
 *
 * This function generates a list of months for the current year, formatted
 * using the provided formatter, and determines whether each month should be
 * disabled based on the navigation range.
 *
 * @param displayMonth The currently displayed month.
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the month labels.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dropdown options representing the months, or `undefined`
 *   if no months are available.
 */ __turbopack_context__.s([
    "getMonthOptions",
    ()=>getMonthOptions
]);
function getMonthOptions(displayMonth, navStart, navEnd, formatters, dateLib) {
    const { startOfMonth, startOfYear, endOfYear, eachMonthOfInterval, getMonth } = dateLib;
    const months = eachMonthOfInterval({
        start: startOfYear(displayMonth),
        end: endOfYear(displayMonth)
    });
    const options = months.map((month)=>{
        const label = formatters.formatMonthDropdown(month, dateLib);
        const value = getMonth(month);
        const disabled = navStart && month < startOfMonth(navStart) || navEnd && month > startOfMonth(navEnd) || false;
        return {
            value,
            label,
            disabled
        };
    });
    return options;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getStyleForModifiers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStyleForModifiers",
    ()=>getStyleForModifiers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/UI.js [app-client] (ecmascript)");
;
function getStyleForModifiers(dayModifiers, styles = {}, modifiersStyles = {}) {
    let style = {
        ...styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Day]
    };
    Object.entries(dayModifiers).filter(([, active])=>active === true).forEach(([modifier])=>{
        style = {
            ...style,
            ...modifiersStyles?.[modifier]
        };
    });
    return style;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getWeekdays.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generates a series of 7 days, starting from the beginning of the week, to use
 * for formatting weekday names (e.g., Monday, Tuesday, etc.).
 *
 * @param dateLib The date library to use for date manipulation.
 * @param ISOWeek Whether to use ISO week numbering (weeks start on Monday).
 * @param broadcastCalendar Whether to use the broadcast calendar (weeks start
 *   on Monday, but may include adjustments for broadcast-specific rules).
 * @returns An array of 7 dates representing the weekdays.
 */ __turbopack_context__.s([
    "getWeekdays",
    ()=>getWeekdays
]);
function getWeekdays(dateLib, ISOWeek, broadcastCalendar) {
    const today = dateLib.today();
    const start = broadcastCalendar ? dateLib.startOfBroadcastWeek(today, dateLib) : ISOWeek ? dateLib.startOfISOWeek(today) : dateLib.startOfWeek(today);
    const days = [];
    for(let i = 0; i < 7; i++){
        const day = dateLib.addDays(start, i);
        days.push(day);
    }
    return days;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getYearOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns the years to display in the dropdown.
 *
 * This function generates a list of years between the navigation start and end
 * dates, formatted using the provided formatter.
 *
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the year labels.
 * @param dateLib The date library to use for date manipulation.
 * @param reverse If true, reverses the order of the years (descending).
 * @returns An array of dropdown options representing the years, or `undefined`
 *   if `navStart` or `navEnd` is not provided.
 */ __turbopack_context__.s([
    "getYearOptions",
    ()=>getYearOptions
]);
function getYearOptions(navStart, navEnd, formatters, dateLib, reverse = false) {
    if (!navStart) return undefined;
    if (!navEnd) return undefined;
    const { startOfYear, endOfYear, eachYearOfInterval, getYear } = dateLib;
    const firstNavYear = startOfYear(navStart);
    const lastNavYear = endOfYear(navEnd);
    const years = eachYearOfInterval({
        start: firstNavYear,
        end: lastNavYear
    });
    if (reverse) years.reverse();
    return years.map((year)=>{
        const label = formatters.formatYearDropdown(year, dateLib);
        return {
            value: getYear(year),
            label,
            disabled: false
        };
    });
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
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
;
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelDayButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "labelDay",
    ()=>labelDay,
    "labelDayButton",
    ()=>labelDayButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
;
function labelDayButton(date, modifiers, options, dateLib) {
    let label = (dateLib ?? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DateLib"](options)).format(date, "PPPP");
    if (modifiers.today) label = `Today, ${label}`;
    if (modifiers.selected) label = `${label}, selected`;
    return label;
}
const labelDay = labelDayButton;
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelGrid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "labelCaption",
    ()=>labelCaption,
    "labelGrid",
    ()=>labelGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
;
function labelGrid(date, options, dateLib) {
    const lib = dateLib ?? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DateLib"](options);
    return lib.formatMonthYear(date);
}
const labelCaption = labelGrid;
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelGridcell.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "labelGridcell",
    ()=>labelGridcell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
;
function labelGridcell(date, modifiers, options, dateLib) {
    let label = (dateLib ?? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DateLib"](options)).format(date, "PPPP");
    if (modifiers?.today) {
        label = `Today, ${label}`;
    }
    return label;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelMonthDropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generates the ARIA label for the months dropdown.
 *
 * @defaultValue `"Choose the Month"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the months dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */ __turbopack_context__.s([
    "labelMonthDropdown",
    ()=>labelMonthDropdown
]);
function labelMonthDropdown(_options) {
    return "Choose the Month";
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelNav.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generates the ARIA label for the navigation toolbar.
 *
 * @defaultValue `""`
 * @returns The ARIA label for the navigation toolbar.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */ __turbopack_context__.s([
    "labelNav",
    ()=>labelNav
]);
function labelNav() {
    return "";
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelNext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generates the ARIA label for the "next month" button.
 *
 * @defaultValue `"Go to the Next Month"`
 * @param month - The date representing the next month, or `undefined` if there
 *   is no next month.
 * @returns The ARIA label for the "next month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */ __turbopack_context__.s([
    "labelNext",
    ()=>labelNext
]);
function labelNext(_month) {
    return "Go to the Next Month";
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelPrevious.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generates the ARIA label for the "previous month" button.
 *
 * @defaultValue `"Go to the Previous Month"`
 * @param month - The date representing the previous month, or `undefined` if
 *   there is no previous month.
 * @returns The ARIA label for the "previous month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */ __turbopack_context__.s([
    "labelPrevious",
    ()=>labelPrevious
]);
function labelPrevious(_month) {
    return "Go to the Previous Month";
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelWeekday.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "labelWeekday",
    ()=>labelWeekday
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
;
function labelWeekday(date, options, dateLib) {
    return (dateLib ?? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DateLib"](options)).format(date, "cccc");
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelWeekNumber.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generates the ARIA label for the week number cell (the first cell in a row).
 *
 * @defaultValue `Week ${weekNumber}`
 * @param weekNumber - The number of the week.
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */ __turbopack_context__.s([
    "labelWeekNumber",
    ()=>labelWeekNumber
]);
function labelWeekNumber(weekNumber, _options) {
    return `Week ${weekNumber}`;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelWeekNumberHeader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generates the ARIA label for the week number header element.
 *
 * @defaultValue `"Week Number"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */ __turbopack_context__.s([
    "labelWeekNumberHeader",
    ()=>labelWeekNumberHeader
]);
function labelWeekNumberHeader(_options) {
    return "Week Number";
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelYearDropdown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Generates the ARIA label for the years dropdown.
 *
 * @defaultValue `"Choose the Year"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the years dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */ __turbopack_context__.s([
    "labelYearDropdown",
    ()=>labelYearDropdown
]);
function labelYearDropdown(_options) {
    return "Choose the Year";
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "labelCaption",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelCaption"],
    "labelDay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelDayButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelDay"],
    "labelDayButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelDayButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelDayButton"],
    "labelGrid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelGrid"],
    "labelGridcell",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelGridcell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelGridcell"],
    "labelMonthDropdown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelMonthDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelMonthDropdown"],
    "labelNav",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelNav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelNav"],
    "labelNext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelNext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelNext"],
    "labelPrevious",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelPrevious$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelPrevious"],
    "labelWeekNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelWeekNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelWeekNumber"],
    "labelWeekNumberHeader",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelWeekNumberHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelWeekNumberHeader"],
    "labelWeekday",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelWeekday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelWeekday"],
    "labelYearDropdown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelYearDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelYearDropdown"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelDayButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelDayButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelGridcell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelGridcell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelMonthDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelMonthDropdown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelNav$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelNav.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelNext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelNext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelPrevious$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelPrevious.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelWeekday$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelWeekday.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelWeekNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelWeekNumber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelWeekNumberHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelWeekNumberHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$labelYearDropdown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/labelYearDropdown.js [app-client] (ecmascript)");
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/useAnimation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimation",
    ()=>useAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/UI.js [app-client] (ecmascript)");
;
;
const asHtmlElement = (element)=>{
    if (element instanceof HTMLElement) return element;
    return null;
};
const queryMonthEls = (element)=>[
        ...element.querySelectorAll("[data-animated-month]") ?? []
    ];
const queryMonthEl = (element)=>asHtmlElement(element.querySelector("[data-animated-month]"));
const queryCaptionEl = (element)=>asHtmlElement(element.querySelector("[data-animated-caption]"));
const queryWeeksEl = (element)=>asHtmlElement(element.querySelector("[data-animated-weeks]"));
const queryNavEl = (element)=>asHtmlElement(element.querySelector("[data-animated-nav]"));
const queryWeekdaysEl = (element)=>asHtmlElement(element.querySelector("[data-animated-weekdays]"));
function useAnimation(rootElRef, enabled, { classNames, months, focused, dateLib }) {
    const previousRootElSnapshotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousMonthsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(months);
    const animatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useAnimation.useLayoutEffect": ()=>{
            // get previous months before updating the previous months ref
            const previousMonths = previousMonthsRef.current;
            // update previous months ref for next effect trigger
            previousMonthsRef.current = months;
            if (!enabled || !rootElRef.current || // safety check because the ref can be set to anything by consumers
            !(rootElRef.current instanceof HTMLElement) || // validation required for the animation to work as expected
            months.length === 0 || previousMonths.length === 0 || months.length !== previousMonths.length) {
                return;
            }
            const isSameMonth = dateLib.isSameMonth(months[0].date, previousMonths[0].date);
            const isAfterPreviousMonth = dateLib.isAfter(months[0].date, previousMonths[0].date);
            const captionAnimationClass = isAfterPreviousMonth ? classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].caption_after_enter] : classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].caption_before_enter];
            const weeksAnimationClass = isAfterPreviousMonth ? classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].weeks_after_enter] : classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].weeks_before_enter];
            // get previous root element snapshot before updating the snapshot ref
            const previousRootElSnapshot = previousRootElSnapshotRef.current;
            // update snapshot for next effect trigger
            const rootElSnapshot = rootElRef.current.cloneNode(true);
            if (rootElSnapshot instanceof HTMLElement) {
                // if this effect is triggered while animating, we need to clean up the new root snapshot
                // to put it in the same state as when not animating, to correctly animate the next month change
                const currentMonthElsSnapshot = queryMonthEls(rootElSnapshot);
                currentMonthElsSnapshot.forEach({
                    "useAnimation.useLayoutEffect": (currentMonthElSnapshot)=>{
                        if (!(currentMonthElSnapshot instanceof HTMLElement)) return;
                        // remove the old month snapshots from the new root snapshot
                        const previousMonthElSnapshot = queryMonthEl(currentMonthElSnapshot);
                        if (previousMonthElSnapshot && currentMonthElSnapshot.contains(previousMonthElSnapshot)) {
                            currentMonthElSnapshot.removeChild(previousMonthElSnapshot);
                        }
                        // remove animation classes from the new month snapshots
                        const captionEl = queryCaptionEl(currentMonthElSnapshot);
                        if (captionEl) {
                            captionEl.classList.remove(captionAnimationClass);
                        }
                        const weeksEl = queryWeeksEl(currentMonthElSnapshot);
                        if (weeksEl) {
                            weeksEl.classList.remove(weeksAnimationClass);
                        }
                    }
                }["useAnimation.useLayoutEffect"]);
                previousRootElSnapshotRef.current = rootElSnapshot;
            } else {
                previousRootElSnapshotRef.current = null;
            }
            if (animatingRef.current || isSameMonth || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
            focused) {
                return;
            }
            const previousMonthEls = previousRootElSnapshot instanceof HTMLElement ? queryMonthEls(previousRootElSnapshot) : [];
            const currentMonthEls = queryMonthEls(rootElRef.current);
            if (currentMonthEls?.every({
                "useAnimation.useLayoutEffect": (el)=>el instanceof HTMLElement
            }["useAnimation.useLayoutEffect"]) && previousMonthEls && previousMonthEls.every({
                "useAnimation.useLayoutEffect": (el)=>el instanceof HTMLElement
            }["useAnimation.useLayoutEffect"])) {
                animatingRef.current = true;
                const cleanUpFunctions = [];
                // set isolation to isolate to isolate the stacking context during animation
                rootElRef.current.style.isolation = "isolate";
                // set z-index to 1 to ensure the nav is clickable over the other elements being animated
                const navEl = queryNavEl(rootElRef.current);
                if (navEl) {
                    navEl.style.zIndex = "1";
                }
                currentMonthEls.forEach({
                    "useAnimation.useLayoutEffect": (currentMonthEl, index)=>{
                        const previousMonthEl = previousMonthEls[index];
                        if (!previousMonthEl) {
                            return;
                        }
                        // animate new displayed month
                        currentMonthEl.style.position = "relative";
                        currentMonthEl.style.overflow = "hidden";
                        const captionEl = queryCaptionEl(currentMonthEl);
                        if (captionEl) {
                            captionEl.classList.add(captionAnimationClass);
                        }
                        const weeksEl = queryWeeksEl(currentMonthEl);
                        if (weeksEl) {
                            weeksEl.classList.add(weeksAnimationClass);
                        }
                        // animate new displayed month end
                        const cleanUp = {
                            "useAnimation.useLayoutEffect.cleanUp": ()=>{
                                animatingRef.current = false;
                                if (rootElRef.current) {
                                    rootElRef.current.style.isolation = "";
                                }
                                if (navEl) {
                                    navEl.style.zIndex = "";
                                }
                                if (captionEl) {
                                    captionEl.classList.remove(captionAnimationClass);
                                }
                                if (weeksEl) {
                                    weeksEl.classList.remove(weeksAnimationClass);
                                }
                                currentMonthEl.style.position = "";
                                currentMonthEl.style.overflow = "";
                                if (currentMonthEl.contains(previousMonthEl)) {
                                    currentMonthEl.removeChild(previousMonthEl);
                                }
                            }
                        }["useAnimation.useLayoutEffect.cleanUp"];
                        cleanUpFunctions.push(cleanUp);
                        // animate old displayed month
                        previousMonthEl.style.pointerEvents = "none";
                        previousMonthEl.style.position = "absolute";
                        previousMonthEl.style.overflow = "hidden";
                        previousMonthEl.setAttribute("aria-hidden", "true");
                        // hide the weekdays container of the old month and only the new one
                        const previousWeekdaysEl = queryWeekdaysEl(previousMonthEl);
                        if (previousWeekdaysEl) {
                            previousWeekdaysEl.style.opacity = "0";
                        }
                        const previousCaptionEl = queryCaptionEl(previousMonthEl);
                        if (previousCaptionEl) {
                            previousCaptionEl.classList.add(isAfterPreviousMonth ? classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].caption_before_exit] : classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].caption_after_exit]);
                            previousCaptionEl.addEventListener("animationend", cleanUp);
                        }
                        const previousWeeksEl = queryWeeksEl(previousMonthEl);
                        if (previousWeeksEl) {
                            previousWeeksEl.classList.add(isAfterPreviousMonth ? classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].weeks_before_exit] : classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Animation"].weeks_after_exit]);
                        }
                        currentMonthEl.insertBefore(previousMonthEl, currentMonthEl.firstChild);
                    }
                }["useAnimation.useLayoutEffect"]);
            }
        }
    }["useAnimation.useLayoutEffect"]);
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getDates.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns all the dates to display in the calendar.
 *
 * This function calculates the range of dates to display based on the provided
 * display months, constraints, and calendar configuration.
 *
 * @param displayMonths The months to display in the calendar.
 * @param maxDate The maximum date to include in the range.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates to display in the calendar.
 */ __turbopack_context__.s([
    "getDates",
    ()=>getDates
]);
function getDates(displayMonths, maxDate, props, dateLib) {
    const firstMonth = displayMonths[0];
    const lastMonth = displayMonths[displayMonths.length - 1];
    const { ISOWeek, fixedWeeks, broadcastCalendar } = props ?? {};
    const { addDays, differenceInCalendarDays, differenceInCalendarMonths, endOfBroadcastWeek, endOfISOWeek, endOfMonth, endOfWeek, isAfter, startOfBroadcastWeek, startOfISOWeek, startOfWeek } = dateLib;
    const startWeekFirstDate = broadcastCalendar ? startOfBroadcastWeek(firstMonth, dateLib) : ISOWeek ? startOfISOWeek(firstMonth) : startOfWeek(firstMonth);
    const endWeekLastDate = broadcastCalendar ? endOfBroadcastWeek(lastMonth) : ISOWeek ? endOfISOWeek(endOfMonth(lastMonth)) : endOfWeek(endOfMonth(lastMonth));
    const nOfDays = differenceInCalendarDays(endWeekLastDate, startWeekFirstDate);
    const nOfMonths = differenceInCalendarMonths(lastMonth, firstMonth) + 1;
    const dates = [];
    for(let i = 0; i <= nOfDays; i++){
        const date = addDays(startWeekFirstDate, i);
        if (maxDate && isAfter(date, maxDate)) {
            break;
        }
        dates.push(date);
    }
    // If fixed weeks is enabled, add the extra dates to the array
    const nrOfDaysWithFixedWeeks = broadcastCalendar ? 35 : 42;
    const extraDates = nrOfDaysWithFixedWeeks * nOfMonths;
    if (fixedWeeks && dates.length < extraDates) {
        const daysToAdd = extraDates - dates.length;
        for(let i = 0; i < daysToAdd; i++){
            const date = addDays(dates[dates.length - 1], 1);
            dates.push(date);
        }
    }
    return dates;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getDays.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns all the days belonging to the calendar by merging the days in the
 * weeks for each month.
 *
 * @param calendarMonths The array of calendar months.
 * @returns An array of `CalendarDay` objects representing all the days in the
 *   calendar.
 */ __turbopack_context__.s([
    "getDays",
    ()=>getDays
]);
function getDays(calendarMonths) {
    const initialDays = [];
    return calendarMonths.reduce((days, month)=>{
        const weekDays = month.weeks.reduce((weekDays, week)=>{
            return weekDays.concat(week.days.slice());
        }, initialDays.slice());
        return days.concat(weekDays.slice());
    }, initialDays.slice());
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getDisplayMonths.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns the months to display in the calendar.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including `numberOfMonths`.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates representing the months to display.
 */ __turbopack_context__.s([
    "getDisplayMonths",
    ()=>getDisplayMonths
]);
function getDisplayMonths(firstDisplayedMonth, calendarEndMonth, props, dateLib) {
    const { numberOfMonths = 1 } = props;
    const months = [];
    for(let i = 0; i < numberOfMonths; i++){
        const month = dateLib.addMonths(firstDisplayedMonth, i);
        if (calendarEndMonth && month > calendarEndMonth) {
            break;
        }
        months.push(month);
    }
    return months;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getInitialMonth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Determines the initial month to display in the calendar based on the provided
 * props.
 *
 * This function calculates the starting month, considering constraints such as
 * `startMonth`, `endMonth`, and the number of months to display.
 *
 * @param props The DayPicker props, including navigation and date constraints.
 * @param dateLib The date library to use for date manipulation.
 * @returns The initial month to display.
 */ __turbopack_context__.s([
    "getInitialMonth",
    ()=>getInitialMonth
]);
function getInitialMonth(props, navStart, navEnd, dateLib) {
    const { month, defaultMonth, today = dateLib.today(), numberOfMonths = 1 } = props;
    let initialMonth = month || defaultMonth || today;
    const { differenceInCalendarMonths, addMonths, startOfMonth } = dateLib;
    if (navEnd && differenceInCalendarMonths(navEnd, initialMonth) < numberOfMonths - 1) {
        const offset = -1 * (numberOfMonths - 1);
        initialMonth = addMonths(navEnd, offset);
    }
    if (navStart && differenceInCalendarMonths(initialMonth, navStart) < 0) {
        initialMonth = navStart;
    }
    return startOfMonth(initialMonth);
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/CalendarDay.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarDay",
    ()=>CalendarDay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
;
class CalendarDay {
    constructor(date, displayMonth, dateLib = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultDateLib"]){
        this.date = date;
        this.displayMonth = displayMonth;
        this.outside = Boolean(displayMonth && !dateLib.isSameMonth(date, displayMonth));
        this.dateLib = dateLib;
    }
    /**
     * Checks if this day is equal to another `CalendarDay`, considering both the
     * date and the displayed month.
     *
     * @param day The `CalendarDay` to compare with.
     * @returns `true` if the days are equal, otherwise `false`.
     */ isEqualTo(day) {
        return this.dateLib.isSameDay(day.date, this.date) && this.dateLib.isSameMonth(day.displayMonth, this.displayMonth);
    }
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/CalendarMonth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Represents a month in a calendar year.
 *
 * A `CalendarMonth` contains the weeks within the month and the date of the
 * month.
 */ __turbopack_context__.s([
    "CalendarMonth",
    ()=>CalendarMonth
]);
class CalendarMonth {
    constructor(month, weeks){
        this.date = month;
        this.weeks = weeks;
    }
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/CalendarWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Represents a week in a calendar month.
 *
 * A `CalendarWeek` contains the days within the week and the week number.
 */ __turbopack_context__.s([
    "CalendarWeek",
    ()=>CalendarWeek
]);
class CalendarWeek {
    constructor(weekNumber, days){
        this.days = days;
        this.weekNumber = weekNumber;
    }
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getMonths.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMonths",
    ()=>getMonths
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$CalendarDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/CalendarDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$CalendarMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/CalendarMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$CalendarWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/CalendarWeek.js [app-client] (ecmascript)");
;
function getMonths(displayMonths, dates, props, dateLib) {
    const { addDays, endOfBroadcastWeek, endOfISOWeek, endOfMonth, endOfWeek, getISOWeek, getWeek, startOfBroadcastWeek, startOfISOWeek, startOfWeek } = dateLib;
    const dayPickerMonths = displayMonths.reduce((months, month)=>{
        const firstDateOfFirstWeek = props.broadcastCalendar ? startOfBroadcastWeek(month, dateLib) : props.ISOWeek ? startOfISOWeek(month) : startOfWeek(month);
        const lastDateOfLastWeek = props.broadcastCalendar ? endOfBroadcastWeek(month) : props.ISOWeek ? endOfISOWeek(endOfMonth(month)) : endOfWeek(endOfMonth(month));
        /** The dates to display in the month. */ const monthDates = dates.filter((date)=>{
            return date >= firstDateOfFirstWeek && date <= lastDateOfLastWeek;
        });
        const nrOfDaysWithFixedWeeks = props.broadcastCalendar ? 35 : 42;
        if (props.fixedWeeks && monthDates.length < nrOfDaysWithFixedWeeks) {
            const extraDates = dates.filter((date)=>{
                const daysToAdd = nrOfDaysWithFixedWeeks - monthDates.length;
                return date > lastDateOfLastWeek && date <= addDays(lastDateOfLastWeek, daysToAdd);
            });
            monthDates.push(...extraDates);
        }
        const weeks = monthDates.reduce((weeks, date)=>{
            const weekNumber = props.ISOWeek ? getISOWeek(date) : getWeek(date);
            const week = weeks.find((week)=>week.weekNumber === weekNumber);
            const day = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$CalendarDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarDay"](date, month, dateLib);
            if (!week) {
                weeks.push(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$CalendarWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarWeek"](weekNumber, [
                    day
                ]));
            } else {
                week.days.push(day);
            }
            return weeks;
        }, []);
        const dayPickerMonth = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$CalendarMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarMonth"](month, weeks);
        months.push(dayPickerMonth);
        return months;
    }, []);
    if (!props.reverseMonths) {
        return dayPickerMonths;
    } else {
        return dayPickerMonths.reverse();
    }
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getNavMonth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns the start and end months for calendar navigation.
 *
 * @param props The DayPicker props, including navigation and layout options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A tuple containing the start and end months for navigation.
 */ __turbopack_context__.s([
    "getNavMonths",
    ()=>getNavMonths
]);
function getNavMonths(props, dateLib) {
    let { startMonth, endMonth } = props;
    const { startOfYear, startOfDay, startOfMonth, endOfMonth, addYears, endOfYear, newDate, today } = dateLib;
    // Handle deprecated code
    const { fromYear, toYear, fromMonth, toMonth } = props;
    if (!startMonth && fromMonth) {
        startMonth = fromMonth;
    }
    if (!startMonth && fromYear) {
        startMonth = dateLib.newDate(fromYear, 0, 1);
    }
    if (!endMonth && toMonth) {
        endMonth = toMonth;
    }
    if (!endMonth && toYear) {
        endMonth = newDate(toYear, 11, 31);
    }
    const hasYearDropdown = props.captionLayout === "dropdown" || props.captionLayout === "dropdown-years";
    if (startMonth) {
        startMonth = startOfMonth(startMonth);
    } else if (fromYear) {
        startMonth = newDate(fromYear, 0, 1);
    } else if (!startMonth && hasYearDropdown) {
        startMonth = startOfYear(addYears(props.today ?? today(), -100));
    }
    if (endMonth) {
        endMonth = endOfMonth(endMonth);
    } else if (toYear) {
        endMonth = newDate(toYear, 11, 31);
    } else if (!endMonth && hasYearDropdown) {
        endMonth = endOfYear(props.today ?? today());
    }
    return [
        startMonth ? startOfDay(startMonth) : startMonth,
        endMonth ? startOfDay(endMonth) : endMonth
    ];
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getNextMonth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns the next month the user can navigate to, based on the given options.
 *
 * The next month is not always the next calendar month:
 *
 * - If it is after the `calendarEndMonth`, it returns `undefined`.
 * - If paged navigation is enabled, it skips forward by the number of displayed
 *   months.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param options Navigation options, including `numberOfMonths` and
 *   `pagedNavigation`.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next month, or `undefined` if navigation is not possible.
 */ __turbopack_context__.s([
    "getNextMonth",
    ()=>getNextMonth
]);
function getNextMonth(firstDisplayedMonth, calendarEndMonth, options, dateLib) {
    if (options.disableNavigation) {
        return undefined;
    }
    const { pagedNavigation, numberOfMonths = 1 } = options;
    const { startOfMonth, addMonths, differenceInCalendarMonths } = dateLib;
    const offset = pagedNavigation ? numberOfMonths : 1;
    const month = startOfMonth(firstDisplayedMonth);
    if (!calendarEndMonth) {
        return addMonths(month, offset);
    }
    const monthsDiff = differenceInCalendarMonths(calendarEndMonth, firstDisplayedMonth);
    if (monthsDiff < numberOfMonths) {
        return undefined;
    }
    return addMonths(month, offset);
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getPreviousMonth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns the previous month the user can navigate to, based on the given
 * options.
 *
 * The previous month is not always the previous calendar month:
 *
 * - If it is before the `calendarStartMonth`, it returns `undefined`.
 * - If paged navigation is enabled, it skips back by the number of displayed
 *   months.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarStartMonth The earliest month the user can navigate to.
 * @param options Navigation options, including `numberOfMonths` and
 *   `pagedNavigation`.
 * @param dateLib The date library to use for date manipulation.
 * @returns The previous month, or `undefined` if navigation is not possible.
 */ __turbopack_context__.s([
    "getPreviousMonth",
    ()=>getPreviousMonth
]);
function getPreviousMonth(firstDisplayedMonth, calendarStartMonth, options, dateLib) {
    if (options.disableNavigation) {
        return undefined;
    }
    const { pagedNavigation, numberOfMonths } = options;
    const { startOfMonth, addMonths, differenceInCalendarMonths } = dateLib;
    const offset = pagedNavigation ? numberOfMonths ?? 1 : 1;
    const month = startOfMonth(firstDisplayedMonth);
    if (!calendarStartMonth) {
        return addMonths(month, -offset);
    }
    const monthsDiff = differenceInCalendarMonths(month, calendarStartMonth);
    if (monthsDiff <= 0) {
        return undefined;
    }
    return addMonths(month, -offset);
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getWeeks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns an array of calendar weeks from an array of calendar months.
 *
 * @param months The array of calendar months.
 * @returns An array of calendar weeks.
 */ __turbopack_context__.s([
    "getWeeks",
    ()=>getWeeks
]);
function getWeeks(months) {
    const initialWeeks = [];
    return months.reduce((weeks, month)=>{
        return weeks.concat(month.weeks.slice());
    }, initialWeeks.slice());
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useControlledValue",
    ()=>useControlledValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useControlledValue(defaultValue, controlledValue) {
    const [uncontrolledValue, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue);
    const value = controlledValue === undefined ? uncontrolledValue : controlledValue;
    return [
        value,
        setValue
    ];
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/useCalendar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCalendar",
    ()=>useCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getDates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getDisplayMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getDisplayMonths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getInitialMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getInitialMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getMonths.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getNavMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getNavMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getNextMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getNextMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getPreviousMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getPreviousMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getWeeks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$useControlledValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js [app-client] (ecmascript)");
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
function useCalendar(props, dateLib) {
    const [navStart, navEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getNavMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavMonths"])(props, dateLib);
    const { startOfMonth, endOfMonth } = dateLib;
    const initialMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getInitialMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitialMonth"])(props, navStart, navEnd, dateLib);
    const [firstMonth, setFirstMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$useControlledValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlledValue"])(initialMonth, // initialMonth is always computed from props.month if provided
    props.month ? initialMonth : undefined);
    // biome-ignore lint/correctness/useExhaustiveDependencies: change the initial month when the time zone changes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCalendar.useEffect": ()=>{
            const newInitialMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getInitialMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitialMonth"])(props, navStart, navEnd, dateLib);
            setFirstMonth(newInitialMonth);
        }
    }["useCalendar.useEffect"], [
        props.timeZone
    ]);
    /** The months displayed in the calendar. */ const displayMonths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getDisplayMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDisplayMonths"])(firstMonth, navEnd, props, dateLib);
    /** The dates displayed in the calendar. */ const dates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDates"])(displayMonths, props.endMonth ? endOfMonth(props.endMonth) : undefined, props, dateLib);
    /** The Months displayed in the calendar. */ const months = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getMonths$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonths"])(displayMonths, dates, props, dateLib);
    /** The Weeks displayed in the calendar. */ const weeks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeeks"])(months);
    /** The Days displayed in the calendar. */ const days = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDays"])(months);
    const previousMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getPreviousMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviousMonth"])(firstMonth, navStart, props, dateLib);
    const nextMonth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getNextMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextMonth"])(firstMonth, navEnd, props, dateLib);
    const { disableNavigation, onMonthChange } = props;
    const isDayInCalendar = (day)=>weeks.some((week)=>week.days.some((d)=>d.isEqualTo(day)));
    const goToMonth = (date)=>{
        if (disableNavigation) {
            return;
        }
        let newMonth = startOfMonth(date);
        // if month is before start, use the first month instead
        if (navStart && newMonth < startOfMonth(navStart)) {
            newMonth = startOfMonth(navStart);
        }
        // if month is after endMonth, use the last month instead
        if (navEnd && newMonth > startOfMonth(navEnd)) {
            newMonth = startOfMonth(navEnd);
        }
        setFirstMonth(newMonth);
        onMonthChange?.(newMonth);
    };
    const goToDay = (day)=>{
        // is this check necessary?
        if (isDayInCalendar(day)) {
            return;
        }
        goToMonth(day.date);
    };
    const calendar = {
        months,
        weeks,
        days,
        navStart,
        navEnd,
        previousMonth,
        nextMonth,
        goToMonth,
        goToDay
    };
    return calendar;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/calculateFocusTarget.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateFocusTarget",
    ()=>calculateFocusTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/UI.js [app-client] (ecmascript)");
;
var FocusTargetPriority;
(function(FocusTargetPriority) {
    FocusTargetPriority[FocusTargetPriority["Today"] = 0] = "Today";
    FocusTargetPriority[FocusTargetPriority["Selected"] = 1] = "Selected";
    FocusTargetPriority[FocusTargetPriority["LastFocused"] = 2] = "LastFocused";
    FocusTargetPriority[FocusTargetPriority["FocusedModifier"] = 3] = "FocusedModifier";
})(FocusTargetPriority || (FocusTargetPriority = {}));
/**
 * Determines if a day is focusable based on its modifiers.
 *
 * A day is considered focusable if it is not disabled, hidden, or outside the
 * displayed month.
 *
 * @param modifiers The modifiers applied to the day.
 * @returns `true` if the day is focusable, otherwise `false`.
 */ function isFocusableDay(modifiers) {
    return !modifiers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"].disabled] && !modifiers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"].hidden] && !modifiers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"].outside];
}
function calculateFocusTarget(days, getModifiers, isSelected, lastFocused) {
    let focusTarget;
    let foundFocusTargetPriority = -1;
    for (const day of days){
        const modifiers = getModifiers(day);
        if (isFocusableDay(modifiers)) {
            if (modifiers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"].focused] && foundFocusTargetPriority < FocusTargetPriority.FocusedModifier) {
                focusTarget = day;
                foundFocusTargetPriority = FocusTargetPriority.FocusedModifier;
            } else if (lastFocused?.isEqualTo(day) && foundFocusTargetPriority < FocusTargetPriority.LastFocused) {
                focusTarget = day;
                foundFocusTargetPriority = FocusTargetPriority.LastFocused;
            } else if (isSelected(day.date) && foundFocusTargetPriority < FocusTargetPriority.Selected) {
                focusTarget = day;
                foundFocusTargetPriority = FocusTargetPriority.Selected;
            } else if (modifiers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"].today] && foundFocusTargetPriority < FocusTargetPriority.Today) {
                focusTarget = day;
                foundFocusTargetPriority = FocusTargetPriority.Today;
            }
        }
    }
    if (!focusTarget) {
        // Return the first day that is focusable
        focusTarget = days.find((day)=>isFocusableDay(getModifiers(day)));
    }
    return focusTarget;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getFocusableDate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Calculates the next date that should be focused in the calendar.
 *
 * This function determines the next focusable date based on the movement
 * direction, constraints, and calendar configuration.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDate The reference date from which to calculate the next focusable
 *   date.
 * @param navStart The earliest date the user can navigate to.
 * @param navEnd The latest date the user can navigate to.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next focusable date.
 */ __turbopack_context__.s([
    "getFocusableDate",
    ()=>getFocusableDate
]);
function getFocusableDate(moveBy, moveDir, refDate, navStart, navEnd, props, dateLib) {
    const { ISOWeek, broadcastCalendar } = props;
    const { addDays, addMonths, addWeeks, addYears, endOfBroadcastWeek, endOfISOWeek, endOfWeek, max, min, startOfBroadcastWeek, startOfISOWeek, startOfWeek } = dateLib;
    const moveFns = {
        day: addDays,
        week: addWeeks,
        month: addMonths,
        year: addYears,
        startOfWeek: (date)=>broadcastCalendar ? startOfBroadcastWeek(date, dateLib) : ISOWeek ? startOfISOWeek(date) : startOfWeek(date),
        endOfWeek: (date)=>broadcastCalendar ? endOfBroadcastWeek(date) : ISOWeek ? endOfISOWeek(date) : endOfWeek(date)
    };
    let focusableDate = moveFns[moveBy](refDate, moveDir === "after" ? 1 : -1);
    if (moveDir === "before" && navStart) {
        focusableDate = max([
            navStart,
            focusableDate
        ]);
    } else if (moveDir === "after" && navEnd) {
        focusableDate = min([
            navEnd,
            focusableDate
        ]);
    }
    return focusableDate;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getNextFocus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNextFocus",
    ()=>getNextFocus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$CalendarDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/CalendarDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$dateMatchModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getFocusableDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getFocusableDate.js [app-client] (ecmascript)");
;
;
;
function getNextFocus(moveBy, moveDir, refDay, calendarStartMonth, calendarEndMonth, props, dateLib, attempt = 0) {
    if (attempt > 365) {
        // Limit the recursion to 365 attempts
        return undefined;
    }
    const focusableDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getFocusableDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFocusableDate"])(moveBy, moveDir, refDay.date, calendarStartMonth, calendarEndMonth, props, dateLib);
    const isDisabled = Boolean(props.disabled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$dateMatchModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateMatchModifiers"])(focusableDate, props.disabled, dateLib));
    const isHidden = Boolean(props.hidden && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$dateMatchModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateMatchModifiers"])(focusableDate, props.hidden, dateLib));
    const targetMonth = focusableDate;
    const focusDay = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$CalendarDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarDay"](focusableDate, targetMonth, dateLib);
    if (!isDisabled && !isHidden) {
        return focusDay;
    }
    // Recursively attempt to find the next focusable date
    return getNextFocus(moveBy, moveDir, focusDay, calendarStartMonth, calendarEndMonth, props, dateLib, attempt + 1);
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/useFocus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFocus",
    ()=>useFocus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$calculateFocusTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/calculateFocusTarget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getNextFocus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getNextFocus.js [app-client] (ecmascript)");
;
;
;
function useFocus(props, calendar, getModifiers, isSelected, dateLib) {
    const { autoFocus } = props;
    const [lastFocused, setLastFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const focusTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$calculateFocusTarget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateFocusTarget"])(calendar.days, getModifiers, isSelected || (()=>false), lastFocused);
    const [focusedDay, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(autoFocus ? focusTarget : undefined);
    const blur = ()=>{
        setLastFocused(focusedDay);
        setFocused(undefined);
    };
    const moveFocus = (moveBy, moveDir)=>{
        if (!focusedDay) return;
        const nextFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getNextFocus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNextFocus"])(moveBy, moveDir, focusedDay, calendar.navStart, calendar.navEnd, props, dateLib);
        if (!nextFocus) return;
        if (props.disableNavigation) {
            const isNextInCalendar = calendar.days.some((day)=>day.isEqualTo(nextFocus));
            if (!isNextInCalendar) {
                return;
            }
        }
        calendar.goToDay(nextFocus);
        setFocused(nextFocus);
    };
    const isFocusTarget = (day)=>{
        return Boolean(focusTarget?.isEqualTo(day));
    };
    const useFocus = {
        isFocusTarget,
        setFocused,
        focused: focusedDay,
        blur,
        moveFocus
    };
    return useFocus;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/selection/useMulti.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMulti",
    ()=>useMulti
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$useControlledValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js [app-client] (ecmascript)");
;
function useMulti(props, dateLib) {
    const { selected: initiallySelected, required, onSelect } = props;
    const [internallySelected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$useControlledValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlledValue"])(initiallySelected, onSelect ? initiallySelected : undefined);
    const selected = !onSelect ? internallySelected : initiallySelected;
    const { isSameDay } = dateLib;
    const isSelected = (date)=>{
        return selected?.some((d)=>isSameDay(d, date)) ?? false;
    };
    const { min, max } = props;
    const select = (triggerDate, modifiers, e)=>{
        let newDates = [
            ...selected ?? []
        ];
        if (isSelected(triggerDate)) {
            if (selected?.length === min) {
                // Min value reached, do nothing
                return;
            }
            if (required && selected?.length === 1) {
                // Required value already selected do nothing
                return;
            }
            newDates = selected?.filter((d)=>!isSameDay(d, triggerDate));
        } else {
            if (selected?.length === max) {
                // Max value reached, reset the selection to date
                newDates = [
                    triggerDate
                ];
            } else {
                // Add the date to the selection
                newDates = [
                    ...newDates,
                    triggerDate
                ];
            }
        }
        if (!onSelect) {
            setSelected(newDates);
        }
        onSelect?.(newDates, triggerDate, modifiers, e);
        return newDates;
    };
    return {
        selected,
        select,
        isSelected
    };
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/addToRange.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToRange",
    ()=>addToRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
;
function addToRange(date, initialRange, min = 0, max = 0, required = false, dateLib = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultDateLib"]) {
    const { from, to } = initialRange || {};
    const { isSameDay, isAfter, isBefore } = dateLib;
    let range;
    if (!from && !to) {
        // the range is empty, add the date
        range = {
            from: date,
            to: min > 0 ? undefined : date
        };
    } else if (from && !to) {
        // adding date to an incomplete range
        if (isSameDay(from, date)) {
            // adding a date equal to the start of the range
            if (min === 0) {
                range = {
                    from,
                    to: date
                };
            } else if (required) {
                range = {
                    from,
                    to: undefined
                };
            } else {
                range = undefined;
            }
        } else if (isBefore(date, from)) {
            // adding a date before the start of the range
            range = {
                from: date,
                to: from
            };
        } else {
            // adding a date after the start of the range
            range = {
                from,
                to: date
            };
        }
    } else if (from && to) {
        // adding date to a complete range
        if (isSameDay(from, date) && isSameDay(to, date)) {
            // adding a date that is equal to both start and end of the range
            if (required) {
                range = {
                    from,
                    to
                };
            } else {
                range = undefined;
            }
        } else if (isSameDay(from, date)) {
            // adding a date equal to the the start of the range
            range = {
                from,
                to: min > 0 ? undefined : date
            };
        } else if (isSameDay(to, date)) {
            // adding a dare equal to the end of the range
            range = {
                from: date,
                to: min > 0 ? undefined : date
            };
        } else if (isBefore(date, from)) {
            // adding a date before the start of the range
            range = {
                from: date,
                to: to
            };
        } else if (isAfter(date, from)) {
            // adding a date after the start of the range
            range = {
                from,
                to: date
            };
        } else if (isAfter(date, to)) {
            // adding a date after the end of the range
            range = {
                from,
                to: date
            };
        } else {
            throw new Error("Invalid range");
        }
    }
    // check for min / max
    if (range?.from && range?.to) {
        const diff = dateLib.differenceInCalendarDays(range.to, range.from);
        if (max > 0 && diff > max) {
            range = {
                from: date,
                to: undefined
            };
        } else if (min > 1 && diff < min) {
            range = {
                from: date,
                to: undefined
            };
        }
    }
    return range;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/rangeContainsDayOfWeek.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rangeContainsDayOfWeek",
    ()=>rangeContainsDayOfWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
;
function rangeContainsDayOfWeek(range, dayOfWeek, dateLib = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultDateLib"]) {
    const dayOfWeekArr = !Array.isArray(dayOfWeek) ? [
        dayOfWeek
    ] : dayOfWeek;
    let date = range.from;
    const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);
    // iterate at maximum one week or the total days if the range is shorter than one week
    const totalDaysLimit = Math.min(totalDays, 6);
    for(let i = 0; i <= totalDaysLimit; i++){
        if (dayOfWeekArr.includes(date.getDay())) {
            return true;
        }
        date = dateLib.addDays(date, 1);
    }
    return false;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/rangeOverlaps.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rangeOverlaps",
    ()=>rangeOverlaps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeIncludesDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js [app-client] (ecmascript)");
;
;
function rangeOverlaps(rangeLeft, rangeRight, dateLib = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultDateLib"]) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeIncludesDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeIncludesDate"])(rangeLeft, rangeRight.from, false, dateLib) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeIncludesDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeIncludesDate"])(rangeLeft, rangeRight.to, false, dateLib) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeIncludesDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeIncludesDate"])(rangeRight, rangeLeft.from, false, dateLib) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeIncludesDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeIncludesDate"])(rangeRight, rangeLeft.to, false, dateLib);
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/rangeContainsModifiers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rangeContainsModifiers",
    ()=>rangeContainsModifiers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$dateMatchModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeContainsDayOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/rangeContainsDayOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeIncludesDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeOverlaps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/rangeOverlaps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$typeguards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/typeguards.js [app-client] (ecmascript)");
;
;
;
;
;
;
function rangeContainsModifiers(range, modifiers, dateLib = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultDateLib"]) {
    const matchers = Array.isArray(modifiers) ? modifiers : [
        modifiers
    ];
    // Defer function matchers evaluation as they are the least performant.
    const nonFunctionMatchers = matchers.filter((matcher)=>typeof matcher !== "function");
    const nonFunctionMatchersResult = nonFunctionMatchers.some((matcher)=>{
        if (typeof matcher === "boolean") return matcher;
        if (dateLib.isDate(matcher)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeIncludesDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeIncludesDate"])(range, matcher, false, dateLib);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$typeguards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDatesArray"])(matcher, dateLib)) {
            return matcher.some((date)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeIncludesDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeIncludesDate"])(range, date, false, dateLib));
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$typeguards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDateRange"])(matcher)) {
            if (matcher.from && matcher.to) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeOverlaps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeOverlaps"])(range, {
                    from: matcher.from,
                    to: matcher.to
                }, dateLib);
            }
            return false;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$typeguards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDayOfWeekType"])(matcher)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeContainsDayOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeContainsDayOfWeek"])(range, matcher.dayOfWeek, dateLib);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$typeguards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDateInterval"])(matcher)) {
            const isClosedInterval = dateLib.isAfter(matcher.before, matcher.after);
            if (isClosedInterval) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeOverlaps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeOverlaps"])(range, {
                    from: dateLib.addDays(matcher.after, 1),
                    to: dateLib.addDays(matcher.before, -1)
                }, dateLib);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$dateMatchModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateMatchModifiers"])(range.from, matcher, dateLib) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$dateMatchModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateMatchModifiers"])(range.to, matcher, dateLib);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$typeguards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDateAfterType"])(matcher) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$typeguards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDateBeforeType"])(matcher)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$dateMatchModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateMatchModifiers"])(range.from, matcher, dateLib) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$dateMatchModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateMatchModifiers"])(range.to, matcher, dateLib);
        }
        return false;
    });
    if (nonFunctionMatchersResult) {
        return true;
    }
    const functionMatchers = matchers.filter((matcher)=>typeof matcher === "function");
    if (functionMatchers.length) {
        let date = range.from;
        const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);
        for(let i = 0; i <= totalDays; i++){
            if (functionMatchers.some((matcher)=>matcher(date))) {
                return true;
            }
            date = dateLib.addDays(date, 1);
        }
    }
    return false;
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/selection/useRange.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRange",
    ()=>useRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$useControlledValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$addToRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/addToRange.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeContainsModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/rangeContainsModifiers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeIncludesDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js [app-client] (ecmascript)");
;
;
;
function useRange(props, dateLib) {
    const { disabled, excludeDisabled, selected: initiallySelected, required, onSelect } = props;
    const [internallySelected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$useControlledValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlledValue"])(initiallySelected, onSelect ? initiallySelected : undefined);
    const selected = !onSelect ? internallySelected : initiallySelected;
    const isSelected = (date)=>selected && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeIncludesDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeIncludesDate"])(selected, date, false, dateLib);
    const select = (triggerDate, modifiers, e)=>{
        const { min, max } = props;
        const newRange = triggerDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$addToRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToRange"])(triggerDate, selected, min, max, required, dateLib) : undefined;
        if (excludeDisabled && disabled && newRange?.from && newRange.to) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeContainsModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeContainsModifiers"])({
                from: newRange.from,
                to: newRange.to
            }, disabled, dateLib)) {
                // if a disabled days is found, the range is reset
                newRange.from = triggerDate;
                newRange.to = undefined;
            }
        }
        if (!onSelect) {
            setSelected(newRange);
        }
        onSelect?.(newRange, triggerDate, modifiers, e);
        return newRange;
    };
    return {
        selected,
        select,
        isSelected
    };
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/selection/useSingle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSingle",
    ()=>useSingle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$useControlledValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js [app-client] (ecmascript)");
;
function useSingle(props, dateLib) {
    const { selected: initiallySelected, required, onSelect } = props;
    const [internallySelected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$useControlledValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControlledValue"])(initiallySelected, onSelect ? initiallySelected : undefined);
    const selected = !onSelect ? internallySelected : initiallySelected;
    const { isSameDay } = dateLib;
    const isSelected = (compareDate)=>{
        return selected ? isSameDay(selected, compareDate) : false;
    };
    const select = (triggerDate, modifiers, e)=>{
        let newDate = triggerDate;
        if (!required && selected && selected && isSameDay(triggerDate, selected)) {
            // If the date is the same, clear the selection.
            newDate = undefined;
        }
        if (!onSelect) {
            setSelected(newDate);
        }
        if (required) {
            onSelect?.(newDate, triggerDate, modifiers, e);
        } else {
            onSelect?.(newDate, triggerDate, modifiers, e);
        }
        return newDate;
    };
    return {
        selected,
        select,
        isSelected
    };
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/useSelection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSelection",
    ()=>useSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$selection$2f$useMulti$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/selection/useMulti.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$selection$2f$useRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/selection/useRange.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$selection$2f$useSingle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/selection/useSingle.js [app-client] (ecmascript)");
;
;
;
function useSelection(props, dateLib) {
    const single = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$selection$2f$useSingle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSingle"])(props, dateLib);
    const multi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$selection$2f$useMulti$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMulti"])(props, dateLib);
    const range = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$selection$2f$useRange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRange"])(props, dateLib);
    switch(props.mode){
        case "single":
            return single;
        case "multiple":
            return multi;
        case "range":
            return range;
        default:
            return undefined;
    }
}
}),
"[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/DayPicker.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DayPicker",
    ()=>DayPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@date-fns/tz/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@date-fns/tz/date/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/classes/DateLib.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/date-fns/locale/en-US.js [app-client] (ecmascript) <export enUS as defaultLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$createGetModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/createGetModifiers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getClassNamesForModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getClassNamesForModifiers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getComponents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getComponents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getDataAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getDefaultClassNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getFormatters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getMonthOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getMonthOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getStyleForModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getStyleForModifiers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getWeekdays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getWeekdays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getYearOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/helpers/getYearOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/labels/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/UI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/useAnimation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useCalendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/useCalendar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useDayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/useDayPicker.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useFocus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/useFocus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useSelection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/useSelection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeIncludesDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$typeguards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-day-picker/dist/esm/utils/typeguards.js [app-client] (ecmascript)");
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
function DayPicker(initialProps) {
    let props = initialProps;
    if (props.timeZone) {
        props = {
            ...initialProps
        };
        if (props.today) {
            props.today = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TZDate"](props.today, props.timeZone);
        }
        if (props.month) {
            props.month = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TZDate"](props.month, props.timeZone);
        }
        if (props.defaultMonth) {
            props.defaultMonth = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TZDate"](props.defaultMonth, props.timeZone);
        }
        if (props.startMonth) {
            props.startMonth = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TZDate"](props.startMonth, props.timeZone);
        }
        if (props.endMonth) {
            props.endMonth = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TZDate"](props.endMonth, props.timeZone);
        }
        if (props.mode === "single" && props.selected) {
            props.selected = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TZDate"](props.selected, props.timeZone);
        } else if (props.mode === "multiple" && props.selected) {
            props.selected = props.selected?.map((date)=>new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TZDate"](date, props.timeZone));
        } else if (props.mode === "range" && props.selected) {
            props.selected = {
                from: props.selected.from ? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TZDate"](props.selected.from, props.timeZone) : undefined,
                to: props.selected.to ? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$date$2d$fns$2f$tz$2f$date$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TZDate"](props.selected.to, props.timeZone) : undefined
            };
        }
    }
    const { components, formatters, labels, dateLib, locale, classNames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DayPicker.useMemo": ()=>{
            const locale = {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$date$2d$fns$2f$locale$2f$en$2d$US$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__enUS__as__defaultLocale$3e$__["defaultLocale"],
                ...props.locale
            };
            const dateLib = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$classes$2f$DateLib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DateLib"]({
                locale,
                weekStartsOn: props.broadcastCalendar ? 1 : props.weekStartsOn,
                firstWeekContainsDate: props.firstWeekContainsDate,
                useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
                useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
                timeZone: props.timeZone,
                numerals: props.numerals
            }, props.dateLib);
            return {
                dateLib,
                components: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getComponents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getComponents"])(props.components),
                formatters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getFormatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFormatters"])(props.formatters),
                labels: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$labels$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__,
                    ...props.labels
                },
                locale,
                classNames: {
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getDefaultClassNames$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultClassNames"])(),
                    ...props.classNames
                }
            };
        }
    }["DayPicker.useMemo"], [
        props.locale,
        props.broadcastCalendar,
        props.weekStartsOn,
        props.firstWeekContainsDate,
        props.useAdditionalWeekYearTokens,
        props.useAdditionalDayOfYearTokens,
        props.timeZone,
        props.numerals,
        props.dateLib,
        props.components,
        props.formatters,
        props.labels,
        props.classNames
    ]);
    const { captionLayout, mode, navLayout, numberOfMonths = 1, onDayBlur, onDayClick, onDayFocus, onDayKeyDown, onDayMouseEnter, onDayMouseLeave, onNextClick, onPrevClick, showWeekNumber, styles } = props;
    const { formatCaption, formatDay, formatMonthDropdown, formatWeekNumber, formatWeekNumberHeader, formatWeekdayName, formatYearDropdown } = formatters;
    const calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useCalendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCalendar"])(props, dateLib);
    const { days, months, navStart, navEnd, previousMonth, nextMonth, goToMonth } = calendar;
    const getModifiers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$createGetModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGetModifiers"])(days, props, navStart, navEnd, dateLib);
    const { isSelected, select, selected: selectedValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useSelection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelection"])(props, dateLib) ?? {};
    const { blur, focused, isFocusTarget, moveFocus, setFocused } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useFocus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocus"])(props, calendar, getModifiers, isSelected ?? ({
        "DayPicker.useFocus": ()=>false
    })["DayPicker.useFocus"], dateLib);
    const { labelDayButton, labelGridcell, labelGrid, labelMonthDropdown, labelNav, labelPrevious, labelNext, labelWeekday, labelWeekNumber, labelWeekNumberHeader, labelYearDropdown } = labels;
    const weekdays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DayPicker.useMemo[weekdays]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getWeekdays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeekdays"])(dateLib, props.ISOWeek)
    }["DayPicker.useMemo[weekdays]"], [
        dateLib,
        props.ISOWeek
    ]);
    const isInteractive = mode !== undefined || onDayClick !== undefined;
    const handlePreviousClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DayPicker.useCallback[handlePreviousClick]": ()=>{
            if (!previousMonth) return;
            goToMonth(previousMonth);
            onPrevClick?.(previousMonth);
        }
    }["DayPicker.useCallback[handlePreviousClick]"], [
        previousMonth,
        goToMonth,
        onPrevClick
    ]);
    const handleNextClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DayPicker.useCallback[handleNextClick]": ()=>{
            if (!nextMonth) return;
            goToMonth(nextMonth);
            onNextClick?.(nextMonth);
        }
    }["DayPicker.useCallback[handleNextClick]"], [
        goToMonth,
        nextMonth,
        onNextClick
    ]);
    const handleDayClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DayPicker.useCallback[handleDayClick]": (day, m)=>({
                "DayPicker.useCallback[handleDayClick]": (e)=>{
                    e.preventDefault();
                    e.stopPropagation();
                    setFocused(day);
                    select?.(day.date, m, e);
                    onDayClick?.(day.date, m, e);
                }
            })["DayPicker.useCallback[handleDayClick]"]
    }["DayPicker.useCallback[handleDayClick]"], [
        select,
        onDayClick,
        setFocused
    ]);
    const handleDayFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DayPicker.useCallback[handleDayFocus]": (day, m)=>({
                "DayPicker.useCallback[handleDayFocus]": (e)=>{
                    setFocused(day);
                    onDayFocus?.(day.date, m, e);
                }
            })["DayPicker.useCallback[handleDayFocus]"]
    }["DayPicker.useCallback[handleDayFocus]"], [
        onDayFocus,
        setFocused
    ]);
    const handleDayBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DayPicker.useCallback[handleDayBlur]": (day, m)=>({
                "DayPicker.useCallback[handleDayBlur]": (e)=>{
                    blur();
                    onDayBlur?.(day.date, m, e);
                }
            })["DayPicker.useCallback[handleDayBlur]"]
    }["DayPicker.useCallback[handleDayBlur]"], [
        blur,
        onDayBlur
    ]);
    const handleDayKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DayPicker.useCallback[handleDayKeyDown]": (day, modifiers)=>({
                "DayPicker.useCallback[handleDayKeyDown]": (e)=>{
                    const keyMap = {
                        ArrowLeft: [
                            e.shiftKey ? "month" : "day",
                            props.dir === "rtl" ? "after" : "before"
                        ],
                        ArrowRight: [
                            e.shiftKey ? "month" : "day",
                            props.dir === "rtl" ? "before" : "after"
                        ],
                        ArrowDown: [
                            e.shiftKey ? "year" : "week",
                            "after"
                        ],
                        ArrowUp: [
                            e.shiftKey ? "year" : "week",
                            "before"
                        ],
                        PageUp: [
                            e.shiftKey ? "year" : "month",
                            "before"
                        ],
                        PageDown: [
                            e.shiftKey ? "year" : "month",
                            "after"
                        ],
                        Home: [
                            "startOfWeek",
                            "before"
                        ],
                        End: [
                            "endOfWeek",
                            "after"
                        ]
                    };
                    if (keyMap[e.key]) {
                        e.preventDefault();
                        e.stopPropagation();
                        const [moveBy, moveDir] = keyMap[e.key];
                        moveFocus(moveBy, moveDir);
                    }
                    onDayKeyDown?.(day.date, modifiers, e);
                }
            })["DayPicker.useCallback[handleDayKeyDown]"]
    }["DayPicker.useCallback[handleDayKeyDown]"], [
        moveFocus,
        onDayKeyDown,
        props.dir
    ]);
    const handleDayMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DayPicker.useCallback[handleDayMouseEnter]": (day, modifiers)=>({
                "DayPicker.useCallback[handleDayMouseEnter]": (e)=>{
                    onDayMouseEnter?.(day.date, modifiers, e);
                }
            })["DayPicker.useCallback[handleDayMouseEnter]"]
    }["DayPicker.useCallback[handleDayMouseEnter]"], [
        onDayMouseEnter
    ]);
    const handleDayMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DayPicker.useCallback[handleDayMouseLeave]": (day, modifiers)=>({
                "DayPicker.useCallback[handleDayMouseLeave]": (e)=>{
                    onDayMouseLeave?.(day.date, modifiers, e);
                }
            })["DayPicker.useCallback[handleDayMouseLeave]"]
    }["DayPicker.useCallback[handleDayMouseLeave]"], [
        onDayMouseLeave
    ]);
    const handleMonthChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DayPicker.useCallback[handleMonthChange]": (date)=>({
                "DayPicker.useCallback[handleMonthChange]": (e)=>{
                    const selectedMonth = Number(e.target.value);
                    const month = dateLib.setMonth(dateLib.startOfMonth(date), selectedMonth);
                    goToMonth(month);
                }
            })["DayPicker.useCallback[handleMonthChange]"]
    }["DayPicker.useCallback[handleMonthChange]"], [
        dateLib,
        goToMonth
    ]);
    const handleYearChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DayPicker.useCallback[handleYearChange]": (date)=>({
                "DayPicker.useCallback[handleYearChange]": (e)=>{
                    const selectedYear = Number(e.target.value);
                    const month = dateLib.setYear(dateLib.startOfMonth(date), selectedYear);
                    goToMonth(month);
                }
            })["DayPicker.useCallback[handleYearChange]"]
    }["DayPicker.useCallback[handleYearChange]"], [
        dateLib,
        goToMonth
    ]);
    const { className, style } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DayPicker.useMemo": ()=>({
                className: [
                    classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Root],
                    props.className
                ].filter(Boolean).join(" "),
                style: {
                    ...styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Root],
                    ...props.style
                }
            })
    }["DayPicker.useMemo"], [
        classNames,
        props.className,
        props.style,
        styles
    ]);
    const dataAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getDataAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDataAttributes"])(props);
    const rootElRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useAnimation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])(rootElRef, Boolean(props.animate), {
        classNames,
        months,
        focused,
        dateLib
    });
    const contextValue = {
        dayPickerProps: props,
        selected: selectedValue,
        select: select,
        isSelected,
        months,
        nextMonth,
        previousMonth,
        goToMonth,
        getModifiers,
        components,
        classNames,
        styles,
        labels,
        formatters
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$useDayPicker$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dayPickerContext"].Provider, {
        value: contextValue
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Root, {
        rootRef: props.animate ? rootElRef : undefined,
        className: className,
        style: style,
        dir: props.dir,
        id: props.id,
        lang: props.lang,
        nonce: props.nonce,
        title: props.title,
        role: props.role,
        "aria-label": props["aria-label"],
        "aria-labelledby": props["aria-labelledby"],
        ...dataAttributes
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Months, {
        className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Months],
        style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Months]
    }, !props.hideNavigation && !navLayout && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Nav, {
        "data-animated-nav": props.animate ? "true" : undefined,
        className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Nav],
        style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Nav],
        "aria-label": labelNav(),
        onPreviousClick: handlePreviousClick,
        onNextClick: handleNextClick,
        previousMonth: previousMonth,
        nextMonth: nextMonth
    }), months.map((calendarMonth, displayIndex)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Month, {
            "data-animated-month": props.animate ? "true" : undefined,
            className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Month],
            style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: displayIndex,
            displayIndex: displayIndex,
            calendarMonth: calendarMonth
        }, navLayout === "around" && !props.hideNavigation && displayIndex === 0 && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.PreviousMonthButton, {
            type: "button",
            className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].PreviousMonthButton],
            tabIndex: previousMonth ? undefined : -1,
            "aria-disabled": previousMonth ? undefined : true,
            "aria-label": labelPrevious(previousMonth),
            onClick: handlePreviousClick,
            "data-animated-button": props.animate ? "true" : undefined
        }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Chevron, {
            disabled: previousMonth ? undefined : true,
            className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Chevron],
            orientation: props.dir === "rtl" ? "right" : "left"
        })), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.MonthCaption, {
            "data-animated-caption": props.animate ? "true" : undefined,
            className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].MonthCaption],
            style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].MonthCaption],
            calendarMonth: calendarMonth,
            displayIndex: displayIndex
        }, captionLayout?.startsWith("dropdown") ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.DropdownNav, {
            className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Dropdowns],
            style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Dropdowns]
        }, (()=>{
            const monthControl = captionLayout === "dropdown" || captionLayout === "dropdown-months" ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.MonthsDropdown, {
                key: "month",
                className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].MonthsDropdown],
                "aria-label": labelMonthDropdown(),
                classNames: classNames,
                components: components,
                disabled: Boolean(props.disableNavigation),
                onChange: handleMonthChange(calendarMonth.date),
                options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getMonthOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonthOptions"])(calendarMonth.date, navStart, navEnd, formatters, dateLib),
                style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Dropdown],
                value: dateLib.getMonth(calendarMonth.date)
            }) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                key: "month"
            }, formatMonthDropdown(calendarMonth.date, dateLib));
            const yearControl = captionLayout === "dropdown" || captionLayout === "dropdown-years" ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.YearsDropdown, {
                key: "year",
                className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].YearsDropdown],
                "aria-label": labelYearDropdown(dateLib.options),
                classNames: classNames,
                components: components,
                disabled: Boolean(props.disableNavigation),
                onChange: handleYearChange(calendarMonth.date),
                options: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getYearOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYearOptions"])(navStart, navEnd, formatters, dateLib, Boolean(props.reverseYears)),
                style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Dropdown],
                value: dateLib.getYear(calendarMonth.date)
            }) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
                key: "year"
            }, formatYearDropdown(calendarMonth.date, dateLib));
            const controls = dateLib.getMonthYearOrder() === "year-first" ? [
                yearControl,
                monthControl
            ] : [
                monthControl,
                yearControl
            ];
            return controls;
        })(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            role: "status",
            "aria-live": "polite",
            style: {
                border: 0,
                clip: "rect(0 0 0 0)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: "1px",
                whiteSpace: "nowrap",
                wordWrap: "normal"
            }
        }, formatCaption(calendarMonth.date, dateLib.options, dateLib))) : // biome-ignore lint/a11y/useSemanticElements: breaking change
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.CaptionLabel, {
            className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].CaptionLabel],
            role: "status",
            "aria-live": "polite"
        }, formatCaption(calendarMonth.date, dateLib.options, dateLib))), navLayout === "around" && !props.hideNavigation && displayIndex === numberOfMonths - 1 && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.NextMonthButton, {
            type: "button",
            className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].NextMonthButton],
            tabIndex: nextMonth ? undefined : -1,
            "aria-disabled": nextMonth ? undefined : true,
            "aria-label": labelNext(nextMonth),
            onClick: handleNextClick,
            "data-animated-button": props.animate ? "true" : undefined
        }, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Chevron, {
            disabled: nextMonth ? undefined : true,
            className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Chevron],
            orientation: props.dir === "rtl" ? "left" : "right"
        })), displayIndex === numberOfMonths - 1 && navLayout === "after" && !props.hideNavigation && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Nav, {
            "data-animated-nav": props.animate ? "true" : undefined,
            className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Nav],
            style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Nav],
            "aria-label": labelNav(),
            onPreviousClick: handlePreviousClick,
            onNextClick: handleNextClick,
            previousMonth: previousMonth,
            nextMonth: nextMonth
        }), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.MonthGrid, {
            role: "grid",
            "aria-multiselectable": mode === "multiple" || mode === "range",
            "aria-label": labelGrid(calendarMonth.date, dateLib.options, dateLib) || undefined,
            className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].MonthGrid],
            style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].MonthGrid]
        }, !props.hideWeekdays && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Weekdays, {
            "data-animated-weekdays": props.animate ? "true" : undefined,
            className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Weekdays],
            style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Weekdays]
        }, showWeekNumber && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.WeekNumberHeader, {
            "aria-label": labelWeekNumberHeader(dateLib.options),
            className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].WeekNumberHeader],
            style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].WeekNumberHeader],
            scope: "col"
        }, formatWeekNumberHeader()), weekdays.map((weekday)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Weekday, {
                "aria-label": labelWeekday(weekday, dateLib.options, dateLib),
                className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Weekday],
                key: String(weekday),
                style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Weekday],
                scope: "col"
            }, formatWeekdayName(weekday, dateLib.options, dateLib)))), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Weeks, {
            "data-animated-weeks": props.animate ? "true" : undefined,
            className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Weeks],
            style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Weeks]
        }, calendarMonth.weeks.map((week)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Week, {
                className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Week],
                key: week.weekNumber,
                style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Week],
                week: week
            }, showWeekNumber && // biome-ignore lint/a11y/useSemanticElements: react component
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.WeekNumber, {
                week: week,
                style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].WeekNumber],
                "aria-label": labelWeekNumber(week.weekNumber, {
                    locale
                }),
                className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].WeekNumber],
                scope: "row",
                role: "rowheader"
            }, formatWeekNumber(week.weekNumber, dateLib)), week.days.map((day)=>{
                const { date } = day;
                const modifiers = getModifiers(day);
                modifiers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DayFlag"].focused] = !modifiers.hidden && Boolean(focused?.isEqualTo(day));
                modifiers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionState"].selected] = isSelected?.(date) || modifiers.selected;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$typeguards$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDateRange"])(selectedValue)) {
                    // add range modifiers
                    const { from, to } = selectedValue;
                    modifiers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionState"].range_start] = Boolean(from && to && dateLib.isSameDay(date, from));
                    modifiers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionState"].range_end] = Boolean(from && to && dateLib.isSameDay(date, to));
                    modifiers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectionState"].range_middle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$utils$2f$rangeIncludesDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rangeIncludesDate"])(selectedValue, date, true, dateLib);
                }
                const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getStyleForModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleForModifiers"])(modifiers, styles, props.modifiersStyles);
                const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$helpers$2f$getClassNamesForModifiers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClassNamesForModifiers"])(modifiers, classNames, props.modifiersClassNames);
                const ariaLabel = !isInteractive && !modifiers.hidden ? labelGridcell(date, modifiers, dateLib.options, dateLib) : undefined;
                return(// biome-ignore lint/a11y/useSemanticElements: react component
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Day, {
                    key: `${dateLib.format(date, "yyyy-MM-dd")}_${dateLib.format(day.displayMonth, "yyyy-MM")}`,
                    day: day,
                    modifiers: modifiers,
                    className: className.join(" "),
                    style: style,
                    role: "gridcell",
                    "aria-selected": modifiers.selected || undefined,
                    "aria-label": ariaLabel,
                    "data-day": dateLib.format(date, "yyyy-MM-dd"),
                    "data-month": day.outside ? dateLib.format(date, "yyyy-MM") : undefined,
                    "data-selected": modifiers.selected || undefined,
                    "data-disabled": modifiers.disabled || undefined,
                    "data-hidden": modifiers.hidden || undefined,
                    "data-outside": day.outside || undefined,
                    "data-focused": modifiers.focused || undefined,
                    "data-today": modifiers.today || undefined
                }, !modifiers.hidden && isInteractive ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.DayButton, {
                    className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].DayButton],
                    style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].DayButton],
                    type: "button",
                    day: day,
                    modifiers: modifiers,
                    disabled: modifiers.disabled || undefined,
                    tabIndex: isFocusTarget(day) ? 0 : -1,
                    "aria-label": labelDayButton(date, modifiers, dateLib.options, dateLib),
                    onClick: handleDayClick(day, modifiers),
                    onBlur: handleDayBlur(day, modifiers),
                    onFocus: handleDayFocus(day, modifiers),
                    onKeyDown: handleDayKeyDown(day, modifiers),
                    onMouseEnter: handleDayMouseEnter(day, modifiers),
                    onMouseLeave: handleDayMouseLeave(day, modifiers)
                }, formatDay(date, dateLib.options, dateLib)) : !modifiers.hidden && formatDay(day.date, dateLib.options, dateLib)));
            }));
        }))));
    })), props.footer && // biome-ignore lint/a11y/useSemanticElements: react component
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(components.Footer, {
        className: classNames[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Footer],
        style: styles?.[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$day$2d$picker$2f$dist$2f$esm$2f$UI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI"].Footer],
        role: "status",
        "aria-live": "polite"
    }, props.footer)));
}
}),
"[project]/Desktop/coiffeur/node_modules/@radix-ui/react-popover/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Slot,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable,
    "createSlot",
    ()=>createSlot,
    "createSlottable",
    ()=>createSlottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = ({ children })=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        });
    };
    Slottable2.displayName = `${ownerName}.Slottable`;
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/coiffeur/node_modules/@radix-ui/react-popover/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-popover/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/coiffeur/node_modules/@radix-ui/react-popover/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Anchor",
    ()=>Anchor2,
    "Arrow",
    ()=>Arrow2,
    "Close",
    ()=>Close,
    "Content",
    ()=>Content2,
    "Popover",
    ()=>Popover,
    "PopoverAnchor",
    ()=>PopoverAnchor,
    "PopoverArrow",
    ()=>PopoverArrow,
    "PopoverClose",
    ()=>PopoverClose,
    "PopoverContent",
    ()=>PopoverContent,
    "PopoverPortal",
    ()=>PopoverPortal,
    "PopoverTrigger",
    ()=>PopoverTrigger,
    "Portal",
    ()=>Portal,
    "Root",
    ()=>Root2,
    "Trigger",
    ()=>Trigger,
    "createPopoverScope",
    ()=>createPopoverScope
]);
// src/popover.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-popper/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-portal/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-popover/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-popover/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/aria-hidden/dist/es2015/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript) <export default as RemoveScroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
var POPOVER_NAME = "Popover";
var [createPopoverContext, createPopoverScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(POPOVER_NAME, [
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPopperScope"]
]);
var usePopperScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPopperScope"])();
var [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME);
var Popover = (props)=>{
    const { __scopePopover, children, open: openProp, defaultOpen, onOpenChange, modal = false } = props;
    const popperScope = usePopperScope(__scopePopover);
    const triggerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [hasCustomAnchor, setHasCustomAnchor] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: onOpenChange,
        caller: POPOVER_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ...popperScope,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopoverProvider, {
            scope: __scopePopover,
            contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
            triggerRef,
            open,
            onOpenChange: setOpen,
            onOpenToggle: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
                "Popover.useCallback": ()=>setOpen({
                        "Popover.useCallback": (prevOpen)=>!prevOpen
                    }["Popover.useCallback"])
            }["Popover.useCallback"], [
                setOpen
            ]),
            hasCustomAnchor,
            onCustomAnchorAdd: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
                "Popover.useCallback": ()=>setHasCustomAnchor(true)
            }["Popover.useCallback"], []),
            onCustomAnchorRemove: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
                "Popover.useCallback": ()=>setHasCustomAnchor(false)
            }["Popover.useCallback"], []),
            modal,
            children
        })
    });
};
Popover.displayName = POPOVER_NAME;
var ANCHOR_NAME = "PopoverAnchor";
var PopoverAnchor = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopover, ...anchorProps } = props;
    const context = usePopoverContext(ANCHOR_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PopoverAnchor.useEffect": ()=>{
            onCustomAnchorAdd();
            return ({
                "PopoverAnchor.useEffect": ()=>onCustomAnchorRemove()
            })["PopoverAnchor.useEffect"];
        }
    }["PopoverAnchor.useEffect"], [
        onCustomAnchorAdd,
        onCustomAnchorRemove
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
        ...popperScope,
        ...anchorProps,
        ref: forwardedRef
    });
});
PopoverAnchor.displayName = ANCHOR_NAME;
var TRIGGER_NAME = "PopoverTrigger";
var PopoverTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopover, ...triggerProps } = props;
    const context = usePopoverContext(TRIGGER_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    const composedTriggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.triggerRef);
    const trigger = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, context.onOpenToggle)
    });
    return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Anchor"], {
        asChild: true,
        ...popperScope,
        children: trigger
    });
});
PopoverTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "PopoverPortal";
var [PortalProvider, usePortalContext] = createPopoverContext(PORTAL_NAME, {
    forceMount: void 0
});
var PopoverPortal = (props)=>{
    const { __scopePopover, forceMount, children, container } = props;
    const context = usePopoverContext(PORTAL_NAME, __scopePopover);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PortalProvider, {
        scope: __scopePopover,
        forceMount,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$portal$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                asChild: true,
                container,
                children
            })
        })
    });
};
PopoverPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "PopoverContent";
var PopoverContent = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopePopover);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: context.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopoverContentModal, {
            ...contentProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopoverContentNonModal, {
            ...contentProps,
            ref: forwardedRef
        })
    });
});
PopoverContent.displayName = CONTENT_NAME;
var Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])("PopoverContent.RemoveScroll");
var PopoverContentModal = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const contentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, contentRef);
    const isRightClickOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "PopoverContentModal.useEffect": ()=>{
            const content = contentRef.current;
            if (content) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$aria$2d$hidden$2f$dist$2f$es2015$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hideOthers"])(content);
        }
    }["PopoverContentModal.useEffect"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$react$2d$remove$2d$scroll$2f$dist$2f$es2015$2f$Combination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RemoveScroll$3e$__["RemoveScroll"], {
        as: Slot,
        allowPinchZoom: true,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopoverContentImpl, {
            ...props,
            ref: composedRefs,
            trapFocus: context.open,
            disableOutsidePointerEvents: true,
            onCloseAutoFocus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onCloseAutoFocus, (event)=>{
                event.preventDefault();
                if (!isRightClickOutsideRef.current) context.triggerRef.current?.focus();
            }),
            onPointerDownOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownOutside, (event)=>{
                const originalEvent = event.detail.originalEvent;
                const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
                const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
                isRightClickOutsideRef.current = isRightClick;
            }, {
                checkForDefaultPrevented: false
            }),
            onFocusOutside: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onFocusOutside, (event)=>event.preventDefault(), {
                checkForDefaultPrevented: false
            })
        })
    });
});
var PopoverContentNonModal = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = usePopoverContext(CONTENT_NAME, props.__scopePopover);
    const hasInteractedOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    const hasPointerDownOutsideRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopoverContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            props.onCloseAutoFocus?.(event);
            if (!event.defaultPrevented) {
                if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            props.onInteractOutside?.(event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === "pointerdown") {
                    hasPointerDownOutsideRef.current = true;
                }
            }
            const target = event.target;
            const targetIsTrigger = context.triggerRef.current?.contains(target);
            if (targetIsTrigger) event.preventDefault();
            if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
                event.preventDefault();
            }
        }
    });
});
var PopoverContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopover, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, ...contentProps } = props;
    const context = usePopoverContext(CONTENT_NAME, __scopePopover);
    const popperScope = usePopperScope(__scopePopover);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$guards$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusGuards"])();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$focus$2d$scope$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusScope"], {
        asChild: true,
        loop: true,
        trapped: trapFocus,
        onMountAutoFocus: onOpenAutoFocus,
        onUnmountAutoFocus: onCloseAutoFocus,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dismissable$2d$layer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DismissableLayer"], {
            asChild: true,
            disableOutsidePointerEvents,
            onInteractOutside,
            onEscapeKeyDown,
            onPointerDownOutside,
            onFocusOutside,
            onDismiss: ()=>context.onOpenChange(false),
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-state": getState(context.open),
                role: "dialog",
                id: context.contentId,
                ...popperScope,
                ...contentProps,
                ref: forwardedRef,
                style: {
                    ...contentProps.style,
                    // re-namespace exposed content custom properties
                    ...{
                        "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                }
            })
        })
    });
});
var CLOSE_NAME = "PopoverClose";
var PopoverClose = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopover, ...closeProps } = props;
    const context = usePopoverContext(CLOSE_NAME, __scopePopover);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popover$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, ()=>context.onOpenChange(false))
    });
});
PopoverClose.displayName = CLOSE_NAME;
var ARROW_NAME = "PopoverArrow";
var PopoverArrow = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopePopover, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopePopover);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$popper$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
        ...popperScope,
        ...arrowProps,
        ref: forwardedRef
    });
});
PopoverArrow.displayName = ARROW_NAME;
function getState(open) {
    return open ? "open" : "closed";
}
var Root2 = Popover;
var Anchor2 = PopoverAnchor;
var Trigger = PopoverTrigger;
var Portal = PopoverPortal;
var Content2 = PopoverContent;
var Close = PopoverClose;
var Arrow2 = PopoverArrow;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Calendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
];
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("calendar", __iconNode);
;
 //# sourceMappingURL=calendar.js.map
}),
"[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)");
}),
"[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("search", __iconNode);
;
 //# sourceMappingURL=search.js.map
}),
"[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
"[project]/Desktop/coiffeur/node_modules/@radix-ui/react-scroll-area/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Slot,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable,
    "createSlot",
    ()=>createSlot,
    "createSlottable",
    ()=>createSlottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"]) {
                props2.ref = forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef;
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, props2);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = ({ children })=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children
        });
    };
    Slottable2.displayName = `${ownerName}.Slottable`;
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/coiffeur/node_modules/@radix-ui/react-scroll-area/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-scroll-area/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlot"])(`Primitive.${node}`);
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/coiffeur/node_modules/@radix-ui/number/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/core/number/src/number.ts
__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
function clamp(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/coiffeur/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Corner",
    ()=>Corner,
    "Root",
    ()=>Root,
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollAreaCorner",
    ()=>ScrollAreaCorner,
    "ScrollAreaScrollbar",
    ()=>ScrollAreaScrollbar,
    "ScrollAreaThumb",
    ()=>ScrollAreaThumb,
    "ScrollAreaViewport",
    ()=>ScrollAreaViewport,
    "Scrollbar",
    ()=>Scrollbar,
    "Thumb",
    ()=>Thumb,
    "Viewport",
    ()=>Viewport,
    "createScrollAreaScope",
    ()=>createScrollAreaScope
]);
// src/scroll-area.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-scroll-area/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-direction/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/number/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
// src/scroll-area.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
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
function useStateMachine(initialState, machine) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"]({
        "useStateMachine.useReducer": (state, event)=>{
            const nextState = machine[state][event];
            return nextState ?? state;
        }
    }["useStateMachine.useReducer"], initialState);
}
;
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext, createScrollAreaScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, type = "hover", dir, scrollHideDelay = 600, ...scrollAreaProps } = props;
    const [scrollArea, setScrollArea] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [viewport, setViewport] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [scrollbarX, setScrollbarX] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [scrollbarY, setScrollbarY] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [cornerWidth, setCornerWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [cornerHeight, setCornerHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "ScrollArea.useComposedRefs[composedRefs]": (node)=>setScrollArea(node)
    }["ScrollArea.useComposedRefs[composedRefs]"]);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaProvider, {
        scope: __scopeScrollArea,
        type,
        dir: direction,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
            dir: direction,
            ...scrollAreaProps,
            ref: composedRefs,
            style: {
                position: "relative",
                // Pass corner sizes as CSS vars to reduce re-renders of context consumers
                ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
                ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
                ...props.style
            }
        })
    });
});
ScrollArea.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport";
var ScrollAreaViewport = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
    const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, context.onViewportChange);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
                },
                nonce
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
                "data-radix-scroll-area-viewport": "",
                ...viewportProps,
                ref: composedRefs,
                style: {
                    /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */ overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
                    overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
                    ...props.style
                },
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    ref: context.onContentChange,
                    style: {
                        minWidth: "100%",
                        display: "table"
                    },
                    children
                })
            })
        ]
    });
});
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ScrollAreaScrollbar.useEffect": ()=>{
            isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
            return ({
                "ScrollAreaScrollbar.useEffect": ()=>{
                    isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
                }
            })["ScrollAreaScrollbar.useEffect"];
        }
    }["ScrollAreaScrollbar.useEffect"], [
        isHorizontal,
        onScrollbarXEnabledChange,
        onScrollbarYEnabledChange
    ]);
    return context.type === "hover" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarHover, {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "scroll" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarScroll, {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "auto" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarAuto, {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "always" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarVisible, {
        ...scrollbarProps,
        ref: forwardedRef
    }) : null;
});
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ScrollAreaScrollbarHover.useEffect": ()=>{
            const scrollArea = context.scrollArea;
            let hideTimer = 0;
            if (scrollArea) {
                const handlePointerEnter = {
                    "ScrollAreaScrollbarHover.useEffect.handlePointerEnter": ()=>{
                        window.clearTimeout(hideTimer);
                        setVisible(true);
                    }
                }["ScrollAreaScrollbarHover.useEffect.handlePointerEnter"];
                const handlePointerLeave = {
                    "ScrollAreaScrollbarHover.useEffect.handlePointerLeave": ()=>{
                        hideTimer = window.setTimeout({
                            "ScrollAreaScrollbarHover.useEffect.handlePointerLeave": ()=>setVisible(false)
                        }["ScrollAreaScrollbarHover.useEffect.handlePointerLeave"], context.scrollHideDelay);
                    }
                }["ScrollAreaScrollbarHover.useEffect.handlePointerLeave"];
                scrollArea.addEventListener("pointerenter", handlePointerEnter);
                scrollArea.addEventListener("pointerleave", handlePointerLeave);
                return ({
                    "ScrollAreaScrollbarHover.useEffect": ()=>{
                        window.clearTimeout(hideTimer);
                        scrollArea.removeEventListener("pointerenter", handlePointerEnter);
                        scrollArea.removeEventListener("pointerleave", handlePointerLeave);
                    }
                })["ScrollAreaScrollbarHover.useEffect"];
            }
        }
    }["ScrollAreaScrollbarHover.useEffect"], [
        context.scrollArea,
        context.scrollHideDelay
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || visible,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarAuto, {
            "data-state": visible ? "visible" : "hidden",
            ...scrollbarProps,
            ref: forwardedRef
        })
    });
});
var ScrollAreaScrollbarScroll = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const isHorizontal = props.orientation === "horizontal";
    const debounceScrollEnd = useDebounceCallback({
        "ScrollAreaScrollbarScroll.useDebounceCallback[debounceScrollEnd]": ()=>send("SCROLL_END")
    }["ScrollAreaScrollbarScroll.useDebounceCallback[debounceScrollEnd]"], 100);
    const [state, send] = useStateMachine("hidden", {
        hidden: {
            SCROLL: "scrolling"
        },
        scrolling: {
            SCROLL_END: "idle",
            POINTER_ENTER: "interacting"
        },
        interacting: {
            SCROLL: "interacting",
            POINTER_LEAVE: "idle"
        },
        idle: {
            HIDE: "hidden",
            SCROLL: "scrolling",
            POINTER_ENTER: "interacting"
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ScrollAreaScrollbarScroll.useEffect": ()=>{
            if (state === "idle") {
                const hideTimer = window.setTimeout({
                    "ScrollAreaScrollbarScroll.useEffect.hideTimer": ()=>send("HIDE")
                }["ScrollAreaScrollbarScroll.useEffect.hideTimer"], context.scrollHideDelay);
                return ({
                    "ScrollAreaScrollbarScroll.useEffect": ()=>window.clearTimeout(hideTimer)
                })["ScrollAreaScrollbarScroll.useEffect"];
            }
        }
    }["ScrollAreaScrollbarScroll.useEffect"], [
        state,
        context.scrollHideDelay,
        send
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ScrollAreaScrollbarScroll.useEffect": ()=>{
            const viewport = context.viewport;
            const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
            if (viewport) {
                let prevScrollPos = viewport[scrollDirection];
                const handleScroll = {
                    "ScrollAreaScrollbarScroll.useEffect.handleScroll": ()=>{
                        const scrollPos = viewport[scrollDirection];
                        const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
                        if (hasScrollInDirectionChanged) {
                            send("SCROLL");
                            debounceScrollEnd();
                        }
                        prevScrollPos = scrollPos;
                    }
                }["ScrollAreaScrollbarScroll.useEffect.handleScroll"];
                viewport.addEventListener("scroll", handleScroll);
                return ({
                    "ScrollAreaScrollbarScroll.useEffect": ()=>viewport.removeEventListener("scroll", handleScroll)
                })["ScrollAreaScrollbarScroll.useEffect"];
            }
        }
    }["ScrollAreaScrollbarScroll.useEffect"], [
        context.viewport,
        isHorizontal,
        send,
        debounceScrollEnd
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || state !== "hidden",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarVisible, {
            "data-state": state === "hidden" ? "hidden" : "visible",
            ...scrollbarProps,
            ref: forwardedRef,
            onPointerEnter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerEnter, ()=>send("POINTER_ENTER")),
            onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, ()=>send("POINTER_LEAVE"))
        })
    });
});
var ScrollAreaScrollbarAuto = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { forceMount, ...scrollbarProps } = props;
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const isHorizontal = props.orientation === "horizontal";
    const handleResize = useDebounceCallback({
        "ScrollAreaScrollbarAuto.useDebounceCallback[handleResize]": ()=>{
            if (context.viewport) {
                const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
                const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
                setVisible(isHorizontal ? isOverflowX : isOverflowY);
            }
        }
    }["ScrollAreaScrollbarAuto.useDebounceCallback[handleResize]"], 10);
    useResizeObserver(context.viewport, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || visible,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarVisible, {
            "data-state": visible ? "visible" : "hidden",
            ...scrollbarProps,
            ref: forwardedRef
        })
    });
});
var ScrollAreaScrollbarVisible = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { orientation = "vertical", ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const thumbRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const pointerOffsetRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const [sizes, setSizes] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        content: 0,
        viewport: 0,
        scrollbar: {
            size: 0,
            paddingStart: 0,
            paddingEnd: 0
        }
    });
    const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
    const commonProps = {
        ...scrollbarProps,
        sizes,
        onSizesChange: setSizes,
        hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
        onThumbChange: (thumb)=>thumbRef.current = thumb,
        onThumbPointerUp: ()=>pointerOffsetRef.current = 0,
        onThumbPointerDown: (pointerPos)=>pointerOffsetRef.current = pointerPos
    };
    function getScrollPosition(pointerPos, dir) {
        return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
    }
    if (orientation === "horizontal") {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarX, {
            ...commonProps,
            ref: forwardedRef,
            onThumbPositionChange: ()=>{
                if (context.viewport && thumbRef.current) {
                    const scrollPos = context.viewport.scrollLeft;
                    const offset = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
                    thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
                }
            },
            onWheelScroll: (scrollPos)=>{
                if (context.viewport) context.viewport.scrollLeft = scrollPos;
            },
            onDragScroll: (pointerPos)=>{
                if (context.viewport) {
                    context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
                }
            }
        });
    }
    if (orientation === "vertical") {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarY, {
            ...commonProps,
            ref: forwardedRef,
            onThumbPositionChange: ()=>{
                if (context.viewport && thumbRef.current) {
                    const scrollPos = context.viewport.scrollTop;
                    const offset = getThumbOffsetFromScroll(scrollPos, sizes);
                    thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
                }
            },
            onWheelScroll: (scrollPos)=>{
                if (context.viewport) context.viewport.scrollTop = scrollPos;
            },
            onDragScroll: (pointerPos)=>{
                if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
            }
        });
    }
    return null;
});
var ScrollAreaScrollbarX = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { sizes, onSizesChange, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, context.onScrollbarXChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ScrollAreaScrollbarX.useEffect": ()=>{
            if (ref.current) setComputedStyle(getComputedStyle(ref.current));
        }
    }["ScrollAreaScrollbarX.useEffect"], [
        ref
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarImpl, {
        "data-orientation": "horizontal",
        ...scrollbarProps,
        ref: composeRefs,
        sizes,
        style: {
            bottom: 0,
            left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            ["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
            ...props.style
        },
        onThumbPointerDown: (pointerPos)=>props.onThumbPointerDown(pointerPos.x),
        onDragScroll: (pointerPos)=>props.onDragScroll(pointerPos.x),
        onWheelScroll: (event, maxScrollPos)=>{
            if (context.viewport) {
                const scrollPos = context.viewport.scrollLeft + event.deltaX;
                props.onWheelScroll(scrollPos);
                if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
                    event.preventDefault();
                }
            }
        },
        onResize: ()=>{
            if (ref.current && context.viewport && computedStyle) {
                onSizesChange({
                    content: context.viewport.scrollWidth,
                    viewport: context.viewport.offsetWidth,
                    scrollbar: {
                        size: ref.current.clientWidth,
                        paddingStart: toInt(computedStyle.paddingLeft),
                        paddingEnd: toInt(computedStyle.paddingRight)
                    }
                });
            }
        }
    });
});
var ScrollAreaScrollbarY = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { sizes, onSizesChange, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, context.onScrollbarYChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ScrollAreaScrollbarY.useEffect": ()=>{
            if (ref.current) setComputedStyle(getComputedStyle(ref.current));
        }
    }["ScrollAreaScrollbarY.useEffect"], [
        ref
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarImpl, {
        "data-orientation": "vertical",
        ...scrollbarProps,
        ref: composeRefs,
        sizes,
        style: {
            top: 0,
            right: context.dir === "ltr" ? 0 : void 0,
            left: context.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            ["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
            ...props.style
        },
        onThumbPointerDown: (pointerPos)=>props.onThumbPointerDown(pointerPos.y),
        onDragScroll: (pointerPos)=>props.onDragScroll(pointerPos.y),
        onWheelScroll: (event, maxScrollPos)=>{
            if (context.viewport) {
                const scrollPos = context.viewport.scrollTop + event.deltaY;
                props.onWheelScroll(scrollPos);
                if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
                    event.preventDefault();
                }
            }
        },
        onResize: ()=>{
            if (ref.current && context.viewport && computedStyle) {
                onSizesChange({
                    content: context.viewport.scrollHeight,
                    viewport: context.viewport.offsetHeight,
                    scrollbar: {
                        size: ref.current.clientHeight,
                        paddingStart: toInt(computedStyle.paddingTop),
                        paddingEnd: toInt(computedStyle.paddingBottom)
                    }
                });
            }
        }
    });
});
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, sizes, hasThumb, onThumbChange, onThumbPointerUp, onThumbPointerDown, onThumbPositionChange, onDragScroll, onWheelScroll, onResize, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
    const [scrollbar, setScrollbar] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "ScrollAreaScrollbarImpl.useComposedRefs[composeRefs]": (node)=>setScrollbar(node)
    }["ScrollAreaScrollbarImpl.useComposedRefs[composeRefs]"]);
    const rectRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const prevWebkitUserSelectRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]("");
    const viewport = context.viewport;
    const maxScrollPos = sizes.content - sizes.viewport;
    const handleWheelScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onWheelScroll);
    const handleThumbPositionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbPositionChange);
    const handleResize = useDebounceCallback(onResize, 10);
    function handleDragScroll(event) {
        if (rectRef.current) {
            const x = event.clientX - rectRef.current.left;
            const y = event.clientY - rectRef.current.top;
            onDragScroll({
                x,
                y
            });
        }
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ScrollAreaScrollbarImpl.useEffect": ()=>{
            const handleWheel = {
                "ScrollAreaScrollbarImpl.useEffect.handleWheel": (event)=>{
                    const element = event.target;
                    const isScrollbarWheel = scrollbar?.contains(element);
                    if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
                }
            }["ScrollAreaScrollbarImpl.useEffect.handleWheel"];
            document.addEventListener("wheel", handleWheel, {
                passive: false
            });
            return ({
                "ScrollAreaScrollbarImpl.useEffect": ()=>document.removeEventListener("wheel", handleWheel, {
                        passive: false
                    })
            })["ScrollAreaScrollbarImpl.useEffect"];
        }
    }["ScrollAreaScrollbarImpl.useEffect"], [
        viewport,
        scrollbar,
        maxScrollPos,
        handleWheelScroll
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](handleThumbPositionChange, [
        sizes,
        handleThumbPositionChange
    ]);
    useResizeObserver(scrollbar, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollbarProvider, {
        scope: __scopeScrollArea,
        scrollbar,
        hasThumb,
        onThumbChange: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbChange),
        onThumbPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbPointerUp),
        onThumbPositionChange: handleThumbPositionChange,
        onThumbPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbPointerDown),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
            ...scrollbarProps,
            ref: composeRefs,
            style: {
                position: "absolute",
                ...scrollbarProps.style
            },
            onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDown, (event)=>{
                const mainPointer = 0;
                if (event.button === mainPointer) {
                    const element = event.target;
                    element.setPointerCapture(event.pointerId);
                    rectRef.current = scrollbar.getBoundingClientRect();
                    prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
                    document.body.style.webkitUserSelect = "none";
                    if (context.viewport) context.viewport.style.scrollBehavior = "auto";
                    handleDragScroll(event);
                }
            }),
            onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, handleDragScroll),
            onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerUp, (event)=>{
                const element = event.target;
                if (element.hasPointerCapture(event.pointerId)) {
                    element.releasePointerCapture(event.pointerId);
                }
                document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
                if (context.viewport) context.viewport.style.scrollBehavior = "";
                rectRef.current = null;
            })
        })
    });
});
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || scrollbarContext.hasThumb,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaThumbImpl, {
            ref: forwardedRef,
            ...thumbProps
        })
    });
});
var ScrollAreaThumbImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, style, ...thumbProps } = props;
    const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
    const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, {
        "ScrollAreaThumbImpl.useComposedRefs[composedRef]": (node)=>scrollbarContext.onThumbChange(node)
    }["ScrollAreaThumbImpl.useComposedRefs[composedRef]"]);
    const removeUnlinkedScrollListenerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    const debounceScrollEnd = useDebounceCallback({
        "ScrollAreaThumbImpl.useDebounceCallback[debounceScrollEnd]": ()=>{
            if (removeUnlinkedScrollListenerRef.current) {
                removeUnlinkedScrollListenerRef.current();
                removeUnlinkedScrollListenerRef.current = void 0;
            }
        }
    }["ScrollAreaThumbImpl.useDebounceCallback[debounceScrollEnd]"], 100);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ScrollAreaThumbImpl.useEffect": ()=>{
            const viewport = scrollAreaContext.viewport;
            if (viewport) {
                const handleScroll = {
                    "ScrollAreaThumbImpl.useEffect.handleScroll": ()=>{
                        debounceScrollEnd();
                        if (!removeUnlinkedScrollListenerRef.current) {
                            const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
                            removeUnlinkedScrollListenerRef.current = listener;
                            onThumbPositionChange();
                        }
                    }
                }["ScrollAreaThumbImpl.useEffect.handleScroll"];
                onThumbPositionChange();
                viewport.addEventListener("scroll", handleScroll);
                return ({
                    "ScrollAreaThumbImpl.useEffect": ()=>viewport.removeEventListener("scroll", handleScroll)
                })["ScrollAreaThumbImpl.useEffect"];
            }
        }
    }["ScrollAreaThumbImpl.useEffect"], [
        scrollAreaContext.viewport,
        debounceScrollEnd,
        onThumbPositionChange
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
        ...thumbProps,
        ref: composedRef,
        style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...style
        },
        onPointerDownCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownCapture, (event)=>{
            const thumb = event.target;
            const thumbRect = thumb.getBoundingClientRect();
            const x = event.clientX - thumbRect.left;
            const y = event.clientY - thumbRect.top;
            scrollbarContext.onThumbPointerDown({
                x,
                y
            });
        }),
        onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerUp, scrollbarContext.onThumbPointerUp)
    });
});
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
    return hasCorner ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaCornerImpl, {
        ...props,
        ref: forwardedRef
    }) : null;
});
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, ...cornerProps } = props;
    const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
    const [width, setWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const [height, setHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](0);
    const hasSize = Boolean(width && height);
    useResizeObserver(context.scrollbarX, {
        "ScrollAreaCornerImpl.useResizeObserver": ()=>{
            const height2 = context.scrollbarX?.offsetHeight || 0;
            context.onCornerHeightChange(height2);
            setHeight(height2);
        }
    }["ScrollAreaCornerImpl.useResizeObserver"]);
    useResizeObserver(context.scrollbarY, {
        "ScrollAreaCornerImpl.useResizeObserver": ()=>{
            const width2 = context.scrollbarY?.offsetWidth || 0;
            context.onCornerWidthChange(width2);
            setWidth(width2);
        }
    }["ScrollAreaCornerImpl.useResizeObserver"]);
    return hasSize ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...cornerProps,
        ref: forwardedRef,
        style: {
            width,
            height,
            position: "absolute",
            right: context.dir === "ltr" ? 0 : void 0,
            left: context.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...props.style
        }
    }) : null;
});
function toInt(value) {
    return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
    const ratio = viewportSize / contentSize;
    return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
    const ratio = getThumbRatio(sizes.viewport, sizes.content);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
    return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
    const thumbSizePx = getThumbSize(sizes);
    const thumbCenter = thumbSizePx / 2;
    const offset = pointerOffset || thumbCenter;
    const thumbOffsetFromEnd = thumbSizePx - offset;
    const minPointerPos = sizes.scrollbar.paddingStart + offset;
    const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
    const maxScrollPos = sizes.content - sizes.viewport;
    const scrollRange = dir === "ltr" ? [
        0,
        maxScrollPos
    ] : [
        maxScrollPos * -1,
        0
    ];
    const interpolate = linearScale([
        minPointerPos,
        maxPointerPos
    ], scrollRange);
    return interpolate(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
    const thumbSizePx = getThumbSize(sizes);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const scrollbar = sizes.scrollbar.size - scrollbarPadding;
    const maxScrollPos = sizes.content - sizes.viewport;
    const maxThumbPos = scrollbar - thumbSizePx;
    const scrollClampRange = dir === "ltr" ? [
        0,
        maxScrollPos
    ] : [
        maxScrollPos * -1,
        0
    ];
    const scrollWithoutMomentum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp"])(scrollPos, scrollClampRange);
    const interpolate = linearScale([
        0,
        maxScrollPos
    ], [
        0,
        maxThumbPos
    ]);
    return interpolate(scrollWithoutMomentum);
}
function linearScale(input, output) {
    return (value)=>{
        if (input[0] === input[1] || output[0] === output[1]) return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
    };
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
    return scrollPos > 0 && scrollPos < maxScrollPos;
}
var addUnlinkedScrollListener = (node, handler = ()=>{})=>{
    let prevPosition = {
        left: node.scrollLeft,
        top: node.scrollTop
    };
    let rAF = 0;
    (function loop() {
        const position = {
            left: node.scrollLeft,
            top: node.scrollTop
        };
        const isHorizontalScroll = prevPosition.left !== position.left;
        const isVerticalScroll = prevPosition.top !== position.top;
        if (isHorizontalScroll || isVerticalScroll) handler();
        prevPosition = position;
        rAF = window.requestAnimationFrame(loop);
    })();
    return ()=>window.cancelAnimationFrame(rAF);
};
function useDebounceCallback(callback, delay) {
    const handleCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(callback);
    const debounceTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useDebounceCallback.useEffect": ()=>({
                "useDebounceCallback.useEffect": ()=>window.clearTimeout(debounceTimerRef.current)
            })["useDebounceCallback.useEffect"]
    }["useDebounceCallback.useEffect"], []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useDebounceCallback.useCallback": ()=>{
            window.clearTimeout(debounceTimerRef.current);
            debounceTimerRef.current = window.setTimeout(handleCallback, delay);
        }
    }["useDebounceCallback.useCallback"], [
        handleCallback,
        delay
    ]);
}
function useResizeObserver(element, onResize) {
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onResize);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useResizeObserver.useLayoutEffect": ()=>{
            let rAF = 0;
            if (element) {
                const resizeObserver = new ResizeObserver({
                    "useResizeObserver.useLayoutEffect": ()=>{
                        cancelAnimationFrame(rAF);
                        rAF = window.requestAnimationFrame(handleResize);
                    }
                }["useResizeObserver.useLayoutEffect"]);
                resizeObserver.observe(element);
                return ({
                    "useResizeObserver.useLayoutEffect": ()=>{
                        window.cancelAnimationFrame(rAF);
                        resizeObserver.unobserve(element);
                    }
                })["useResizeObserver.useLayoutEffect"];
            }
        }
    }["useResizeObserver.useLayoutEffect"], [
        element,
        handleResize
    ]);
}
var Root = ScrollArea;
var Viewport = ScrollAreaViewport;
var Scrollbar = ScrollAreaScrollbar;
var Thumb = ScrollAreaThumb;
var Corner = ScrollAreaCorner;
;
 //# sourceMappingURL=index.mjs.map
}),
]);

//# sourceMappingURL=2ae5e_ca573e9c._.js.map