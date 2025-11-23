"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { CreationStatus } from "@/generated/prisma";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

interface HeroSectionProps {
  salonId?: string;
  salonCreationStatus?: string;
}

function HeroSection({ salonId, salonCreationStatus }: HeroSectionProps) {
  const session = useSession();

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Button className=" h-10 px-4 @[480px]:h-12 @[480px]:px-5 rounded-xl bg-primary text-background-dark text-sm @[480px]:text-base font-bold tracking-[0.015em]">
        <Link href={"/salons"} className="cursor-pointer">
          Book Appointments
        </Link>
      </Button>
      <Button
        variant="outline"
        className="h-10 px-4 @[480px]:h-12 @[480px]:px-5 rounded-xl border border-white/20 bg-white/10 dark:bg-[#234836] text-white text-sm @[480px]:text-base font-bold tracking-[0.015em]"
      >
        {salonCreationStatus === CreationStatus.CANCELLED ||
        salonCreationStatus === CreationStatus.PENDING ||
        salonCreationStatus === CreationStatus.APPROVED ? (
          <Link
            href={`/request-salon-management/${salonId}`}
            className="cursor-pointer"
          >
            Check Application Status
          </Link>
        ) : salonCreationStatus === CreationStatus.COMPLETED ? (
          <Link href={`/salon/${salonId}/dashboard`} className="cursor-pointer">
            Go to My Salon Page
          </Link>
        ) : (
          <Link href={"/request-salon"} className="cursor-pointer">
            Create Your Own Salon
          </Link>
        )}
      </Button>
    </div>
  );
}

export default HeroSection;
