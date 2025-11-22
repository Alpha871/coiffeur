import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

import arcjet, {
  BotOptions,
  detectBot,
  EmailOptions,
  protectSignup,
  shield,
  slidingWindow,
  SlidingWindowRateLimitOptions,
} from "@arcjet/next";

export const authHandler = toNextJsHandler(auth);
export const { GET, POST } = authHandler;

// const aj = arcjet({
//   key: process.env.ARCJET_API_KEY!,
//   characteristics: ["userIdOrIp"],
//   rules: [shield({ mode: "LIVE" })],
// });

// const botSettings = {
//   mode: "LIVE",
//   allow: ["STRIPE_WEBHOOK"],
// } satisfies BotOptions;
// const restrictiveRateLimitSettings = {
//   mode: "LIVE",
//   max: 10,
//   interval: "10m",
// } satisfies SlidingWindowRateLimitOptions<[]>;
// const laxRateLimitSettings = {
//   mode: "LIVE",
//   max: 60,
//   interval: "1m",
// } satisfies SlidingWindowRateLimitOptions<[]>;
// const emailSettings = {
//   mode: "LIVE",
//   block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
// } satisfies EmailOptions;

// export async function POST(request: Request) {
//   return authHandler.POST(request);
// }
