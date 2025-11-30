import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Salon = {
  id: string;
  name: string;
  address: string;
  image: string;
  rating: number;
  tags: string[];
};

export function SalonItem({ salon }: { salon: Salon }) {
  return (
    <Link
      href={`/book-appointment/${salon.id}`}
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
              <span>{salon.rating}</span>
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
  );
}
