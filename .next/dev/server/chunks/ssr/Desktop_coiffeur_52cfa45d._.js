module.exports = [
"[project]/Desktop/coiffeur/oop/infrastructure/appointment-repository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"005ce6c1bf7ec1162bc97dac46e993ade431eaaf78":"getAllAppointments","400d03ae9c57a79780b70a2979c9228064247d6ffe":"bookAppointment","40ae9b6fa5f9bdc61ce7783d3611edf66af2f5283e":"getAppointmentsByMemberId","6023bd6c1aab28d00c21b6f6b0dc3f9d32e17f365d":"CancelAppointment","602e1a84d6cac0812934b05dfe54437196c9537bb5":"ApproveAppointment","6058b7a23f0998407e3e5bc44608f216bd6150d781":"CompleteAppointment","6066c08be9a33c53d1c44b8ef25a965f1a025ca7bb":"rescheduleAppointment","60c3e51dd5d1ef5e6e42f6cbbad7453157d3fea558":"RejectAppointment","7002b1bd7af5201e00fabf9aeedf6723487be86e23":"updateBookedAppointment"},"",""] */ __turbopack_context__.s([
    "ApproveAppointment",
    ()=>ApproveAppointment,
    "CancelAppointment",
    ()=>CancelAppointment,
    "CompleteAppointment",
    ()=>CompleteAppointment,
    "RejectAppointment",
    ()=>RejectAppointment,
    "bookAppointment",
    ()=>bookAppointment,
    "getAllAppointments",
    ()=>getAllAppointments,
    "getAppointmentsByMemberId",
    ()=>getAppointmentsByMemberId,
    "rescheduleAppointment",
    ()=>rescheduleAppointment,
    "updateBookedAppointment",
    ()=>updateBookedAppointment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/generated/prisma/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/lib/utils.ts [app-rsc] (ecmascript)");
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
;
;
async function getAllAppointments() {
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.getSession({
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])()
    });
    if (!session) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/authentication");
    }
    const appointments = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appointment.findMany({
        orderBy: {
            startsAt: "asc"
        },
        include: {
            customer: {
                include: {
                    user: true
                }
            },
            member: {
                include: {
                    user: true
                }
            },
            service: true
        }
    });
    return appointments;
}
async function CompleteAppointment(appointmentId, salonId) {
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.getSession({
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])()
    });
    if (!session) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/authentication");
    }
    const appointment = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appointment.update({
        where: {
            id: appointmentId
        },
        data: {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppointmentStatus"].COMPLETED
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/worker/" + salonId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/profil/" + session.user.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/book-appointment/" + salonId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/salon/" + salonId + "/appointments");
    return appointment;
}
async function ApproveAppointment(appointmentId, salonId) {
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.getSession({
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])()
    });
    if (!session) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/authentication");
    }
    const appointment = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appointment.update({
        where: {
            id: appointmentId
        },
        data: {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppointmentStatus"].APPROVED
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/worker/" + salonId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/profil/" + session.user.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/book-appointment/" + salonId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/salon/" + salonId + "/appointments");
    return appointment;
}
async function RejectAppointment(appointmentId, salonId) {
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.getSession({
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])()
    });
    if (!session) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/authentication");
    }
    const appointment = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appointment.update({
        where: {
            id: appointmentId
        },
        data: {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppointmentStatus"].REJECTED
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/worker/" + salonId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/profil/" + session.user.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/book-appointment/" + salonId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/salon/" + salonId + "/appointments");
    return appointment;
}
async function CancelAppointment(appointmentId, salonId) {
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.getSession({
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])()
    });
    if (!session) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/authentication");
    }
    const appointment = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appointment.update({
        where: {
            id: appointmentId
        },
        data: {
            status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppointmentStatus"].CANCELLED
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/worker/" + salonId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/profil/" + session.user.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/book-appointment/" + salonId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/salon/" + salonId + "/appointments");
    return appointment;
}
async function getAppointmentsByMemberId(memberId) {
    const appointments = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appointment.findMany({
        where: {
            memberId: memberId
        },
        orderBy: {
            startsAt: "asc"
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/worker/" + memberId);
    return appointments;
}
async function bookAppointment(data) {
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.getSession({
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])()
    });
    if (!session || !session.user) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/authentication?callbackUrl=" + encodeURIComponent("/salons"));
    }
    if (!data.salonId || !data.memberId) {
        throw new Error("Missing required appointment information.");
    }
    const userId = session.user.id;
    let customerId = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].customer.findUnique({
        where: {
            userId: userId
        },
        select: {
            id: true
        }
    }).then((customer)=>customer?.id);
    if (!customerId) {
        customerId = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].customer.create({
            data: {
                userId: userId
            }
        }).then((customer)=>customer.id);
    }
    const appointmentStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringToTime"])(data.time, data.date);
    const appointmentEnd = new Date(new Date(appointmentStart).getTime() + (data.duration ? data.duration * 60000 : 0));
    const existingAppointment = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appointment.findFirst({
        where: {
            memberId: data.memberId,
            startsAt: {
                equals: appointmentStart
            },
            endsAt: {
                equals: appointmentEnd
            },
            status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppointmentStatus"].APPROVED
        }
    });
    if (existingAppointment) {
        return {
            success: false,
            message: "Time slot already booked."
        };
    }
    const appointment = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appointment.create({
        data: {
            memberId: data.memberId,
            serviceId: data.serviceId,
            customerId: customerId,
            startsAt: appointmentStart,
            endsAt: appointmentEnd,
            notes: data.notes || "",
            salonId: data.salonId,
            duration: data.duration || 30,
            price: data.price || 0
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/book-appointment/${data.salonId}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/profil/${userId}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/salon/" + data.salonId + "/appointments");
    return {
        success: true,
        appointment
    };
}
async function rescheduleAppointment(appointmentId, data) {
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.getSession({
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])()
    });
    if (!session) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/authentication");
    }
    const appointmentStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringToTime"])(data.time, data.date);
    const appointmentEnd = new Date(new Date(appointmentStart).getTime() + (data.duration ? data.duration * 60000 : 0)).toISOString();
    const existingAppointment = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appointment.findFirst({
        where: {
            memberId: data.memberId,
            startsAt: {
                equals: appointmentStart
            },
            endsAt: {
                equals: appointmentEnd
            },
            status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppointmentStatus"].APPROVED
        }
    });
    if (existingAppointment) {
        throw new Error("Time slot already booked.");
    }
    const appointment = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appointment.update({
        where: {
            id: appointmentId
        },
        data: {
            startsAt: appointmentStart,
            endsAt: appointmentEnd
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/profil/" + session.user.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/book-appointment/${data.salonId}`);
    return appointment;
}
async function updateBookedAppointment(appointmentId, data, salonId) {
    const session = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"].api.getSession({
        headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])()
    });
    if (!session || !session.user) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/authentication?callbackUrl=" + encodeURIComponent("/salons"));
    }
    // if (!data.salonId || !data.memberId) {
    //   throw new Error("Missing required appointment information.");
    // }
    const userId = session.user.id;
    const updatedValues = Object.fromEntries(Object.entries({
        memberId: data.memberId,
        serviceId: data.serviceId,
        startsAt: data.date,
        endsAt: data.time,
        notes: data.notes,
        salonId: data.salonId,
        duration: data.duration,
        price: data.price
    }).filter(([_, value])=>value !== undefined));
    console.log({
        updatedValues
    });
    const appointment = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].appointment.update({
        where: {
            id: appointmentId
        },
        data: {
            ...updatedValues
        }
    });
    console.log("salon id", salonId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/book-appointment/${data.salonId}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/profil/${userId}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/salon/${salonId}/appointments`);
    return {
        success: true,
        appointment
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAllAppointments,
    CompleteAppointment,
    ApproveAppointment,
    RejectAppointment,
    CancelAppointment,
    getAppointmentsByMemberId,
    bookAppointment,
    rescheduleAppointment,
    updateBookedAppointment
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllAppointments, "005ce6c1bf7ec1162bc97dac46e993ade431eaaf78", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(CompleteAppointment, "6058b7a23f0998407e3e5bc44608f216bd6150d781", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(ApproveAppointment, "602e1a84d6cac0812934b05dfe54437196c9537bb5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(RejectAppointment, "60c3e51dd5d1ef5e6e42f6cbbad7453157d3fea558", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(CancelAppointment, "6023bd6c1aab28d00c21b6f6b0dc3f9d32e17f365d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAppointmentsByMemberId, "40ae9b6fa5f9bdc61ce7783d3611edf66af2f5283e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(bookAppointment, "400d03ae9c57a79780b70a2979c9228064247d6ffe", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(rescheduleAppointment, "6066c08be9a33c53d1c44b8ef25a965f1a025ca7bb", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBookedAppointment, "7002b1bd7af5201e00fabf9aeedf6723487be86e23", null);
}),
"[project]/Desktop/coiffeur/.next-internal/server/app/(salon)/salon/[id]/appointments/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/coiffeur/oop/infrastructure/salon-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Desktop/coiffeur/oop/infrastructure/appointment-repository.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/oop/infrastructure/salon-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$appointment$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/oop/infrastructure/appointment-repository.ts [app-rsc] (ecmascript)");
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
;
;
;
;
;
}),
"[project]/Desktop/coiffeur/.next-internal/server/app/(salon)/salon/[id]/appointments/page/actions.js { ACTIONS_MODULE0 => \"[project]/Desktop/coiffeur/oop/infrastructure/salon-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Desktop/coiffeur/oop/infrastructure/appointment-repository.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00347034f0a35de1389806c1045a1aece406516d07",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllSalons"],
    "0034edf1296dfde36f541fa6241442ad02c0fa98d0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllSalonsForCurrentUser"],
    "00415d66b6bd131e1f8820179496ad5e4ee891f441",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSalonByUserId"],
    "005ce6c1bf7ec1162bc97dac46e993ade431eaaf78",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$appointment$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllAppointments"],
    "007eacf23b4c6e01519572343b98f56e61da5ade29",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCompleteSalons"],
    "00afed06713e6475cbd7684ba5fff2b3974f667fff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPendingSalonRequests"],
    "400d03ae9c57a79780b70a2979c9228064247d6ffe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$appointment$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bookAppointment"],
    "40331dbbf71ca0eb27c668241b4125062ea18eaab6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DeleteSalonById"],
    "405829561ee014ba9cea6f894f080211fc6817a120",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requestSalon"],
    "405be565189fbb351b7660673726adce92467bec28",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["approveSalonRequest"],
    "408b093e811cfea011251fd42c69e80f11b0549780",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSalonByIdwithUserId"],
    "4094d41623d3b7e6f0f9bc722e90295ce007f3966c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSalonById"],
    "40ae9b6fa5f9bdc61ce7783d3611edf66af2f5283e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$appointment$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAppointmentsByMemberId"],
    "600113378dc2f89a594e03699717dc337188d2832d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateStaffMemberHours"],
    "6004c32fd04750f00ddb0b561775356f58817a7f4c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateSalon"],
    "600c856b6937340f7017b93f6140070e1872531700",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateSalonOpeningHours"],
    "6023bd6c1aab28d00c21b6f6b0dc3f9d32e17f365d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$appointment$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CancelAppointment"],
    "602e1a84d6cac0812934b05dfe54437196c9537bb5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$appointment$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ApproveAppointment"],
    "6058b7a23f0998407e3e5bc44608f216bd6150d781",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$appointment$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CompleteAppointment"],
    "6066c08be9a33c53d1c44b8ef25a965f1a025ca7bb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$appointment$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rescheduleAppointment"],
    "608a31b425e4efebc863d001b6a44b11e36a1ed5c6",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rejectSalonRequest"],
    "60b49318f31ee3fdfb3f63e8d9283ad52937ecc767",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ActiveCurrentSalonOrganizationId"],
    "60c3e51dd5d1ef5e6e42f6cbbad7453157d3fea558",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$appointment$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RejectAppointment"],
    "7002b1bd7af5201e00fabf9aeedf6723487be86e23",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$appointment$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBookedAppointment"],
    "7f47780fd17797dde366f3417657d2e6c4bf4aee04",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateSalonOrganizationId"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f2e$next$2d$internal$2f$server$2f$app$2f28$salon$292f$salon$2f5b$id$5d2f$appointments$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$appointment$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Desktop/coiffeur/.next-internal/server/app/(salon)/salon/[id]/appointments/page/actions.js { ACTIONS_MODULE0 => "[project]/Desktop/coiffeur/oop/infrastructure/salon-actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Desktop/coiffeur/oop/infrastructure/appointment-repository.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$salon$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/oop/infrastructure/salon-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$coiffeur$2f$oop$2f$infrastructure$2f$appointment$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/coiffeur/oop/infrastructure/appointment-repository.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Desktop_coiffeur_52cfa45d._.js.map