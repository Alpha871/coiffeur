module.exports = [
"[project]/Desktop/coiffeur/oop/infrastructure/service-action.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4039873b9bd7a386831d668514b2411de4d12a6e5a":"deleteServiceById","4067b7fdad1a23874c52db82f69fec481068231829":"getAllSalonServices","4096977471ec817210aa225ab4f09296b458cb02d3":"getSalonServiceById","7f13c477e6c9f3c6814d9178191a127e1fdd6d3aee":"addService","7f165be7363eca5915d4e13a215fa5d271ee16b52c":"editService"},"",""] */ __turbopack_context__.s([
    "addService",
    ()=>addService,
    "deleteServiceById",
    ()=>deleteServiceById,
    "editService",
    ()=>editService,
    "getAllSalonServices",
    ()=>getAllSalonServices,
    "getSalonServiceById",
    ()=>getSalonServiceById
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function addService(salonId, name, category, durationMin, price, description, image) {
    const newService = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].salonService.create({
        data: {
            salon: {
                connect: {
                    id: salonId
                }
            },
            service: {
                create: {
                    name,
                    category: category.toUpperCase(),
                    durationMin,
                    price,
                    description,
                    image
                }
            }
        },
        include: {
            service: true,
            salon: true
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/salon/${salonId}/services`);
    return newService;
}
async function editService(serviceId, name, category, durationMin, price, description, image) {
    const updatedService = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].salonService.update({
        where: {
            id: serviceId
        },
        data: {
            service: {
                update: {
                    name,
                    category: category?.toUpperCase(),
                    durationMin,
                    price,
                    description,
                    image
                }
            }
        },
        include: {
            salon: true,
            service: true
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/salon/${updatedService.salonId}/services`);
    return updatedService;
}
async function deleteServiceById(serviceId) {
    const deletedService = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].salonService.delete({
        where: {
            id: serviceId
        },
        include: {
            salon: true,
            service: true
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/salon/${deletedService.salonId}/services`);
    return deletedService;
}
async function getSalonServiceById(serviceId) {
    const salonService = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].salonService.findUnique({
        where: {
            id: serviceId
        },
        include: {
            service: true
        }
    });
    return salonService;
}
async function getAllSalonServices(salonId) {
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.getSession({
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])()
    });
    if (!session?.user) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/authenticate  ");
    }
    const salonServices = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].salonService.findMany({
        where: {
            salonId
        },
        include: {
            service: true
        },
        orderBy: {
            createdAt: "asc"
        }
    });
    return salonServices;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addService,
    editService,
    deleteServiceById,
    getSalonServiceById,
    getAllSalonServices
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addService, "7f13c477e6c9f3c6814d9178191a127e1fdd6d3aee", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(editService, "7f165be7363eca5915d4e13a215fa5d271ee16b52c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteServiceById, "4039873b9bd7a386831d668514b2411de4d12a6e5a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getSalonServiceById, "4096977471ec817210aa225ab4f09296b458cb02d3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllSalonServices, "4067b7fdad1a23874c52db82f69fec481068231829", null);
}),
"[project]/Desktop/coiffeur/.next-internal/server/app/(salon)/salon/[id]/services/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/coiffeur/oop/infrastructure/service-action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$service$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/oop/infrastructure/service-action.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
}),
"[project]/Desktop/coiffeur/.next-internal/server/app/(salon)/salon/[id]/services/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/coiffeur/oop/infrastructure/service-action.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4039873b9bd7a386831d668514b2411de4d12a6e5a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$service$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteServiceById"],
    "4067b7fdad1a23874c52db82f69fec481068231829",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$service$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllSalonServices"],
    "4096977471ec817210aa225ab4f09296b458cb02d3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$service$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSalonServiceById"],
    "7f13c477e6c9f3c6814d9178191a127e1fdd6d3aee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$service$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addService"],
    "7f165be7363eca5915d4e13a215fa5d271ee16b52c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$service$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["editService"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f2e$next$2d$internal$2f$server$2f$app$2f28$salon$292f$salon$2f5b$id$5d2f$services$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$service$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Desktop/coiffeur/.next-internal/server/app/(salon)/salon/[id]/services/page/actions.js { ACTIONS_MODULE0 => "[project]/Desktop/coiffeur/oop/infrastructure/service-action.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$service$2d$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/oop/infrastructure/service-action.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Desktop_coiffeur_22833325._.js.map