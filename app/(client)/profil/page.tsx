"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

import { ApptCardInfo } from "@/components/dashboard/appt-card";
import { EmptyHistory } from "@/components/dashboard/empty-history";
import { InfoRow } from "@/components/dashboard/info-row";
import { Clock10 } from "lucide-react";
import Link from "next/link";
import Modal from "@/components/common/modal";
import { UserForm } from "@/components/profil/user-form";

export default function CustomerProfile() {
  const [tab, setTab] = useState("upcoming");
  const [reminders, setReminders] = React.useState(true);
  const [editModalOpen, setEditModalOpen] = React.useState(false);

  return (
    <>
      <Modal
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        title="Edit Profile"
        size="md"
      >
        <UserForm />
      </Modal>

      <div className="font-display bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark min-h-screen">
        <main className="flex-1">
          <div className="mx-auto max-w-5xl px-4 py-10">
            <Card className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-md">
              <CardContent className="p-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24 ring-2 ring-primary/20">
                    <AvatarImage
                      alt="Alex Doe"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA439-i7Rei0t2KR5mOYhI7zbHcXBMdtkmr5uczQROLo-Suph-RVQ8LXFJw5FqJDi4y03ASO7zMox3M9-KFdY3eBMKt3tmysqhitta-Z0SwmiuRSsVV3SsjS3JOaVAM2lbw-FhQ3vjk8Pd4V0UyKvT19AqVyqnjMuY0CF-l2QioVQlqhtxC76P3Gj0-kcC8ZqFysOdAXSyJm25xnCiQCJMPFMZ4c6azK_LDs8_qcmE3JYdeTi4ZHtTFj4ZwHTHEbQfghGgxlziLgrY"
                    />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-2xl font-bold text-primary dark:text-text-main-dark">
                      Alex Doe
                    </p>
                    <p className="text-base text-text-secondary-light dark:text-text-secondary-dark">
                      alex.doe@example.com
                    </p>
                    <Badge className="mt-2 bg-accent/20 text-accent font-medium px-3 py-1 rounded-full">
                      Loyalty Member
                    </Badge>
                  </div>
                </div>
                <Button
                  onClick={() => setEditModalOpen(true)}
                  className="bg-primary text-white hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90 font-semibold px-5"
                >
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              {/* Left Column */}
              <div className="flex flex-col gap-8">
                <Card className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary dark:text-text-main-dark">
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <InfoRow label="Full Name" value="Alex Doe" />
                    <InfoRow label="Email" value="alex.doe@example.com" />
                    <InfoRow label="Phone" value="+1 (555) 123-4567" />
                  </CardContent>
                </Card>

                <Card className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary dark:text-text-main-dark">
                      Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center bg-background-light dark:bg-background-dark p-2 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Clock10 className="h-6 w-6 text-primary dark:text-text-main-dark" />
                        <p className="text-sm">SMS/Email Reminders</p>
                      </div>
                      <Switch
                        checked={reminders}
                        onCheckedChange={setReminders}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border border-blue-400 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold tracking-tight">
                      Ready for a new look?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm opacity-90">
                      Find your next style with our talented team of
                      professionals.
                    </p>
                    <Button className="mt-4 w-full bg-white text-blue-600 hover:bg-blue-100 font-semibold">
                      <Link href="/book-appointment">
                        Book a New Appointment
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-2">
                <Card className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
                  <Tabs value={tab} onValueChange={setTab}>
                    <CardHeader className="border-b border-border-light dark:border-border-dark">
                      <TabsList className="bg-transparent">
                        <TabsTrigger
                          value="upcoming"
                          className="text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary font-medium px-4 py-2"
                        >
                          Upcoming (1)
                        </TabsTrigger>
                        <TabsTrigger
                          value="history"
                          className="text-text-secondary-light dark:text-text-secondary-dark data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary font-medium px-4 py-2"
                        >
                          History (0)
                        </TabsTrigger>
                      </TabsList>
                    </CardHeader>
                    <CardContent className="p-6">
                      {tab === "upcoming" ? (
                        <ApptCardInfo
                          title="Men's Haircut & Style"
                          stylist="Jane Smith"
                          date="Mon, Dec 18, 2024"
                          meta="2:30 PM (45 min) - $50.00"
                        />
                      ) : (
                        <EmptyHistory />
                      )}
                    </CardContent>
                  </Tabs>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
