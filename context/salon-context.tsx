import { getSalonById } from "@/actions/salon-actions";
import { createContext, useContext, ReactNode, useState } from "react";

type Salon = Awaited<ReturnType<typeof getSalonById>>;

interface SalonContextType {
  salon: Salon;
  setSalon: (salon: Salon) => void;
}

const SalonContext = createContext<SalonContextType | undefined>(undefined);

export function SalonProvider({ children }: { children: ReactNode }) {
  const [salon, setSalon] = useState<Salon | null>(null);

  return (
    <SalonContext.Provider value={{ salon, setSalon }}>
      {children}
    </SalonContext.Provider>
  );
}

export function useSalonContext() {
  const context = useContext(SalonContext);
  if (!context) {
    throw new Error("useSalonContext must be used within SalonProvider");
  }
  return context;
}
