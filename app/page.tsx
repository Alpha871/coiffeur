import { CalendarDays, Users, CreditCard, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

import { getSalonByUserId } from "@/oop/infrastructure/salon-actions";
import { CreationStatus } from "@/generated/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import HeroSection from "@/components/common/hero-section";
import { getMemberByUserId } from "@/oop/infrastructure/user-action";

const HERO_BG =
  "linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaXYkTtVzFz8Pp6wAhjTT-oy5WuEvJC3a2Gx0RBsoAggSEntXpYlOdYwwtdlaVFbljLKMHmcxqob_rW4novTRfa1dUJKKHC0Ov892n6BiED2uoolo3g9L4sCXDQelZwE_AMZb6hpwWHcOCdvxEHm7oVGpS0ht-h4nEqMpWLVd2cwH5HhbKzx3pCRsdckRERwQlqxC6jm8lJsqfHXpG7LmXs08CyQFkmcfYTaQPoyVP0nwa4PsO4eT03HKvZmkxNmmG2Lft0i2fNIo')";

const testimonials = [
  {
    id: 1,
    quote: '"The best booking experience!"',
    name: "Jessica L., Customer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDi-1K1pRduIxbAkfs505UaPwtDUCcRhCUE3jG0Aqb6BpyL_2R6xT-BKyh14zqGulj9j22cT1wZi0eR5vZR8h1X8KbIZ6QQRd8MB2xvafmfYPQy20xWL6FKIIaDhJikVhavuZMjeE7dAzLGa9u50G1sDy-36ywzgZvlYXRmI2R-dksG4yKDqqCRxKBxK3L2vUaCtGduvrwX02yRr7KsVbb_OyKw1g0xcGg6JCzzzhZb0c5_lzhwesaoLRMNvejNshYrpz0--H22NXY",
  },
  {
    id: 2,
    quote: '"My business has grown so much!"',
    name: "David C., Salon Owner",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD9mOQWRrXpmkbZtU7j078Bo52p512BR6XbR-nRquI2fzWpTH8SvxHPO5p4iHUVgZt7klQqzRwIemTy71-eDY-Elh1TMkJWOntCFAd_cEc2wKxPMIT3WBXS6uRjqcFqbVWu-a_2hMouh-EiU9yhdRQsqqQsobJIf8k_6Au8p4ug8V_W7ee4F9kbsbpLvzag6MGYRwUCMPDVRcSWHNdDz91NeQTPpMPHbI3Yx7JAx9hFU7NdK0mcdxUuQHVZz728JK9ow4DHrk5lLh4",
  },
  {
    id: 3,
    quote: '"I found my favorite barber here!"',
    name: "Mike R., Customer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6_tHBWE7trImd3z0_KKOl5FqJtV9-y_TpWZwJaZdeYKqrvs1h2U8CeuGkMkiImDXIAfW0PNDXQgWPdGUMe3FaumHRhY0rw4DfcaK46ZWXlxWV0KGtteeTe3JPc_wB9JrgS1gLswPEPOVITvDGx7B_gVLCf0x2psT23L5_9fRXmKdIo3YcPn_d5s044f-MqfEtHi1NMej14ZL7Xjt46nbSdjNvzDp8odd83rJBZd3YWlrtP9GbkMPCogiu4GW-VkbUnU3e-yXYz1E",
  },
];

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    const member = await getMemberByUserId(session.user.id);
    if (member?.role === "member") {
      return redirect(`/worker/${member.id}`);
    }

    if (
      member?.role === "owner" &&
      member.organization?.salon &&
      member.organization.salon.creationStatus === CreationStatus.COMPLETED
    ) {
      return redirect(`/salon/${member.organization.salon.id}/dashboard`);
    }
  }

  const salon = await getSalonByUserId();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen text-gray-800 dark:text-gray-200 font-display">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-20 lg:px-40 py-5">
            <div className="flex max-w-[960px] flex-1 flex-col">
              <main className="w-full">
                {/* Hero Section */}
                <section className="py-10 md:py-20">
                  <div className="@container">
                    <div className="@[480px]:p-4">
                      <div
                        className="flex min-h-[480px] flex-col gap-6 @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 text-center bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: HERO_BG }}
                        aria-label="Stylish salon interior with modern chairs and mirrors"
                      >
                        <div className="flex flex-col gap-2">
                          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-3xl">
                            Style, Simplified. The Future of Salon Booking is
                            Here.
                          </h1>
                          <h2 className="text-gray-200 text-sm @[480px]:text-base max-w-2xl mx-auto">
                            Connect with top-rated barbers and salons, or manage
                            your own shop with our all-in-one platform.
                          </h2>
                        </div>

                        <HeroSection
                          salonId={salon?.id}
                          salonCreationStatus={salon?.creationStatus}
                        />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Feature Section */}
                <section className="flex flex-col gap-10 px-4 py-10 @container">
                  <div className="flex flex-col gap-4 text-center">
                    <h2 className="text-gray-900 dark:text-white text-[32px] @[480px]:text-4xl font-bold @[480px]:font-black leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto">
                      Why You&rsquo;ll Love Us
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-base max-w-[720px] mx-auto">
                      Discover the benefits for both customers and salon owners.
                    </p>
                  </div>

                  <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                    <Card className="border-gray-200 dark:border-[#32674d] bg-white dark:bg-[#193326]">
                      <CardHeader className="flex flex-row items-start gap-3 pb-3">
                        <div className="text-primary">
                          <CalendarDays className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <CardTitle className="text-base font-bold">
                            Easy Booking
                          </CardTitle>
                          <CardDescription className="text-sm text-gray-500 dark:text-[#92c9ad]">
                            Find and book your next appointment in just a few
                            taps.
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>

                    <Card className="border-gray-200 dark:border-[#32674d] bg-white dark:bg-[#193326]">
                      <CardHeader className="flex flex-row items-start gap-3 pb-3">
                        <div className="text-primary">
                          <Users className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <CardTitle className="text-base font-bold">
                            Staff Management
                          </CardTitle>
                          <CardDescription className="text-sm text-gray-500 dark:text-[#92c9ad]">
                            Effortlessly manage schedules, services, and staff
                            performance.
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>

                    <Card className="border-gray-200 dark:border-[#32674d] bg-white dark:bg-[#193326]">
                      <CardHeader className="flex flex-row items-start gap-3 pb-3">
                        <div className="text-primary">
                          <CreditCard className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <CardTitle className="text-base font-bold">
                            Online Payments
                          </CardTitle>
                          <CardDescription className="text-sm text-gray-500 dark:text-[#92c9ad]">
                            Secure and seamless transactions for appointments
                            and services.
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>

                    <Card className="border-gray-200 dark:border-[#32674d] bg-white dark:bg-[#193326]">
                      <CardHeader className="flex flex-row items-start gap-3 pb-3">
                        <div className="text-primary">
                          <TrendingUp className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <CardTitle className="text-base font-bold">
                            Grow Your Clientele
                          </CardTitle>
                          <CardDescription className="text-sm text-gray-500 dark:text-[#92c9ad]">
                            Increase your visibility and attract new customers
                            to your salon.
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-10">
                  <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">
                    What Our Users Say
                  </h2>

                  <ScrollArea className="w-full">
                    <div className="flex items-stretch gap-4 p-4 min-w-full">
                      {testimonials.map((item) => (
                        <Card
                          key={item.id}
                          className="flex min-w-64 flex-1 flex-col gap-4 border-none bg-transparent shadow-none"
                        >
                          <div
                            className="w-full aspect-square rounded-xl bg-cover bg-center"
                            style={{ backgroundImage: `url("${item.image}")` }}
                            aria-label={item.name}
                          />
                          <CardContent className="p-0">
                            <p className="text-base font-medium text-gray-800 dark:text-white">
                              {item.quote}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-[#92c9ad]">
                              {item.name}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
