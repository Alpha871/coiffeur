"use client";

import { Search, SlidersHorizontal, ArrowUpDown, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { SmartCarousel } from "@/components/common/smart-carousel";
import {
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";

type Salon = {
  id: string;
  name: string;
  address: string;
  image: string;
  rating: number;
  tags: string[];
};

const salons: Salon[] = [
  {
    id: "modern-cut",
    name: "The Modern Cut",
    address: "123 Main St, Anytown",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAr5JSynD1r-LHv1Zj1ZYg-fnDkl12d2uC9FM0bZOnuYGHRU2_9v9-SCwh2tt3nN8aAHDJ7uyyE_6UFns4nlX0px3KEH0a8po93wW37QVEmXq1vQP7hTAdKbR8NWapsVnzFqixyh2ZYEXnzzBymi5ntTog9I6kBBxcZNv1fz-n1oFKLhfvhWLfGwOVFsVw1SYHmyJM1V_v-YWn9KLNQI9SqFAz_JVU8t9hWEb54EEoGSNUnpdjeUqmYwUuU7gAmSovKVzFjnvgfiwQ",
    rating: 4.8,
    tags: ["Haircut", "Beard Trim", "Shave"],
  },
  {
    id: "chic-shears",
    name: "Chic Shears",
    address: "456 Oak Ave, Sometown",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaXYkTtVzFz8Pp6wAhjTT-oy5WuEvJC3a2Gx0RBsoAggSEntXpYlOdYwwtdlaVFbljLKMHmcxqob_rW4novTRfa1dUJKKHC0Ov892n6BiED2uoolo3g9L4sCXDQelZwE_AMZb6hpwWHcOCdvxEHm7oVGpS0ht-h4nEqMpWLVd2cwH5HhbKzx3pCRsdckRERwQlqxC6jm8lJsqfHXpG7LmXs08CyQFkmcfYTaQPoyVP0nwa4PsO4eT03HKvZmkxNmmG2Lft0i2fNIo",
    rating: 4.9,
    tags: ["Styling", "Coloring", "Extensions"],
  },
  {
    id: "dapper-den",
    name: "The Dapper Den",
    address: "789 Pine Ln, Villagetown",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEf8YJVvYAvgJmlp5zvWV1LWJyDP_2D0WYv4nnEVM3ofITDrkuUKouQRqLaca6rS2lniRemh5XExKikoUWn3xOZUTJLXMlPTF1_VnJ612bBn8b-QBG5jxhZiCmwXpNR2qMW0z8J520RQP6Ri2Bns22ZiXsjQZk4fChqs9wczf9jVCif3Pp10ULhrF_yCv9qlUOOxSOuPac-Rw2BjLrrMcrnzbdaD9H6dxQPvqF_ZopoGIHGopjt9F6IMQjvO4mPKVIzkDX8jJj1aY",
    rating: 4.7,
    tags: ["Classic Cut", "Hot Towel Shave"],
  },
  {
    id: "curl-up-dye",
    name: "Curl Up & Dye",
    address: "101 Maple Rd, Cityville",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhL--XWbawHCNwtkXYpXNtnkvbW4hItw2MUIzB4_M4S6jYtn8krnMWDQOlYWmgNZxpFg3fTRRbIae9WVT1onmVEdYV2wfLqVZELD8nUMzmp4BLgFrcDyIJVVr0ZM8aGoF3x4adPOqzrVo4Diwi1o23BR0XPrRVGJ9Lu3lkKBUVN2YSFVMmOYAmRYwgPIOa5t_DlDyG5XDg6KF6vcGLUA1D4A_5EyF-YzGcORciFCpOChRpR0KMQ3AR678EA0uVz7jkOoA7flg0Uxc",
    rating: 5.0,
    tags: ["Perm", "Balayage", "Keratin"],
  },
];

export default function BrowseSalonsPage() {
  const session = useSession();

  if (!session || !session.data?.user) redirect("/authentication");

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
                    {salons.map((salon) => (
                      <CarouselItem
                        key={salon.id}
                        className="pl-2 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                      >
                        <Link
                          href="#"
                          className="group block transition-all duration-300"
                        >
                          <Card className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-[#234836] bg-white dark:bg-[#193326] group-hover:shadow-lg dark:group-hover:border-primary/50">
                            <div className="relative h-40 w-full">
                              <Image
                                src={salon.image}
                                alt={`${salon.name} salon interior`}
                                fill
                                className="object-cover"
                                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                              />
                            </div>

                            <CardContent className="flex flex-1 flex-col gap-4 p-4">
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex flex-col">
                                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                    {salon.name}
                                  </h3>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {salon.address}
                                  </p>
                                </div>
                                <div className="flex items-center gap-1 rounded-full bg-primary/10 dark:bg-primary/20 px-2 py-1 text-xs font-bold text-primary">
                                  <Star className="h-3.5 w-3.5 text-primary fill-primary" />
                                  <span>{salon.rating.toFixed(1)}</span>
                                </div>
                              </div>

                              <div className="mt-auto flex flex-wrap gap-2">
                                {salon.tags.map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="outline"
                                    className="rounded-full bg-gray-100 dark:bg-[#234836] border-none text-xs text-gray-600 dark:text-gray-300 px-2 py-1"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
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
