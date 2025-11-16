import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { useState } from "react";

type BarberShop = {
  id: string;
  name: string;
  ownerName: string;
  registeredAt: string;
  phoneNumber: string;
  address: string;
  weekdayHours: string;
  weekendHours: string;
  services: string[];
};
interface BarberTabProps {
  barberShops: BarberShop[];
}

function BarberTab({ barberShops }: BarberTabProps) {
  const [selectedShopId, setSelectedShopId] = useState<string>(
    barberShops[0]?.id
  );
  const selectedShop = barberShops.find((s) => s.id === selectedShopId);
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Shop Name</TableHead>
              <TableHead>Shop Owner</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {barberShops.map((shop) => {
              const isActive = shop.id === selectedShopId;
              return (
                <TableRow
                  key={shop.id}
                  className={
                    isActive
                      ? "bg-primary/10 dark:bg-primary/20"
                      : "cursor-pointer hover:bg-muted/60"
                  }
                  onClick={() => setSelectedShopId(shop.id)}
                >
                  <TableCell className="whitespace-nowrap text-sm font-semibold">
                    <span
                      className={isActive ? "text-primary" : "text-foreground"}
                    >
                      {shop.name}
                    </span>
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                    {shop.ownerName}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-right text-sm">
                    <div className="flex items-center justify-end gap-3">
                      {/* <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1 text-primary"
                      >
                        <Edit2 className="h-4 w-4" />
                        <span className="text-xs">Update</span>
                      </Button> */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1 text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="text-xs">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {selectedShop && (
        <div className="rounded-lg border bg-muted/40 p-6">
          <div className="mb-6 flex flex-col gap-2 border-b pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold">
                {selectedShop.name} – Shop Details
              </h3>
              <p className="text-sm text-muted-foreground">
                Registration date: {selectedShop.registeredAt}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Shop info */}
            <section>
              <h4 className="mb-2 text-base font-semibold">Shop Information</h4>
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-sm md:grid-cols-2">
                <div>
                  <p className="text-muted-foreground">Shop Name</p>
                  <p className="font-medium">{selectedShop.name}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Shop Owner</p>
                  <p className="font-medium">{selectedShop.ownerName}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Phone Number</p>
                  <p className="font-medium">{selectedShop.phoneNumber}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Address</p>
                  <p className="font-medium">{selectedShop.address}</p>
                </div>
              </div>
            </section>

            {/* Working hours */}
            <section>
              <h4 className="mb-2 text-base font-semibold">Working Hours</h4>
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-sm md:grid-cols-2">
                <div>
                  <p className="text-muted-foreground">Weekdays</p>
                  <p className="font-medium">{selectedShop.weekdayHours}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Weekends</p>
                  <p className="font-medium">{selectedShop.weekendHours}</p>
                </div>
              </div>
            </section>

            {/* Services */}
            <section>
              <h4 className="mb-2 text-base font-semibold">Services</h4>
              <div className="flex flex-wrap gap-2">
                {selectedShop.services.map((service) => (
                  <Badge
                    key={service}
                    variant="outline"
                    className="rounded-full text-xs font-medium"
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default BarberTab;
