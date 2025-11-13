import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import { Carousel, CarouselContent } from "../ui/carousel";
import { cn } from "@/lib/utils";

export function SmartCarousel({
  wheel = false,
  className,
  children,
}: {
  wheel?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Carousel
      className={cn(className, "overscroll-x-contain")}
      opts={{
        align: "center",
        dragFree: true, // optional: but most stable
      }}
      plugins={
        wheel
          ? [
              WheelGesturesPlugin({
                forceWheelAxis: "x",
              }),
            ]
          : undefined
      }
    >
      <CarouselContent className="-ml-3 touch-pan-y">
        {children}
      </CarouselContent>
    </Carousel>
  );
}
