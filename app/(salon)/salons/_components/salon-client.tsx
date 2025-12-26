"use client";

import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { SmartCarousel } from "@/components/common/smart-carousel";
import {
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { SalonListItem } from "@/actions/salon-actions";
import { SalonItem } from "./salon-item";

type Salon = {
  id: string;
  name: string;
  address: string;
  image: string;
  rating: number;
  tags: string[];
};

export default function SalonPageClient({ salons }: { salons: SalonListItem }) {
  const salonItems: Salon[] = salons.map((salon, index) => ({
    id: salon.id,
    name: salon.name,
    address: salon.address,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAr5JSynD1r-LHv1Zj1ZYg-fnDkl12d2uC9FM0bZOnuYGHRU2_9v9-SCwh2tt3nN8aAHDJ7uyyE_6UFns4nlX0px3KEH0a8po93wW37QVEmXq1vQP7hTAdKbR8NWapsVnzFqixyh2ZYEXnzzBymi5ntTog9I6kBBxcZNv1fz-n1oFKLhfvhWLfGwOVFsVw1SYHmyJM1V_v-YWn9KLNQI9SqFAz_JVU8t9hWEb54EEoGSNUnpdjeUqmYwUuU7gAmSovKVzFjnvgfiwQ",

    // salon.organization?.logo,
    rating: `4.${6 + index}` as unknown as number,
    tags: salon.salonServices
      .slice(0, 3)
      .map((service) => service.service.name),
  }));

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-20 lg:px-40 py-5">
            <div className="flex w-full max-w-7xl flex-1 flex-col">
              {/* Main content */}
              <main className="w-full py-10 px-4 md:px-10">
                {/* Heading + search/filters */}
                <section className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Find your next style
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                      Browse top-rated salons and barbershops near you.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {/* Search input */}
                    <div className="relative md:col-span-2">
                      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Search by name, service, or location"
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#193326] py-2 pl-10 pr-4 text-sm focus-visible:ring-primary"
                      />
                    </div>

                    {/* Filters / Sort buttons */}
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#193326] text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#234836]"
                      >
                        <SlidersHorizontal className="h-4 w-4" />
                        <span>Filters</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#193326] text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#234836]"
                      >
                        <ArrowUpDown className="h-4 w-4" />
                        <span>Sort By</span>
                      </Button>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Showing {salons.length} results
                  </p>
                </section>

                {/* Salon cards */}
                <section className="mt-8">
                  <SmartCarousel className="w-full overflow-visible">
                    {/* <CarouselContent className="-ml-2"> */}
                    {salonItems.map((salon) => (
                      <CarouselItem
                        key={salon.id}
                        className="pl-2 basis-full sm:basis-1/3 "
                      >
                        <SalonItem salon={salon} />
                      </CarouselItem>
                    ))}
                    {/* </CarouselContent> */}

                    <CarouselPrevious />
                    <CarouselNext />
                  </SmartCarousel>
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
