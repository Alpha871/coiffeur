"use client";

import AuthLoginForm from "@/components/auth/signin-form";
import AuthRegisterForm from "@/components/auth/signup-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scissors } from "lucide-react";
import { useState } from "react";

export default function SalonAuth() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState<"login" | "register" | null>(null);

  function onSubmit(kind: "login" | "register") {
    setLoading(kind);
    setTimeout(() => setLoading(null), 900);
  }

  return (
    <div className="min-h-screen w-full bg-background lg:grid lg:grid-cols-2">
      {/* Left Panel */}
      <div className="mx-auto flex w-full max-w-md flex-col justify-center px-6 py-10 sm:px-10">
        {/* Logo and Title */}
        <div className="mb-8 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Scissors className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Salon Management
          </span>
        </div>

        <h1 className="pb-2 text-3xl font-bold tracking-tight">Welcome</h1>
        <p className="pb-6 text-sm text-muted-foreground">
          Log in to your account or create a new one.
        </p>

        <Card className="border-none p-0 shadow-none">
          <CardContent className="p-0">
            <Tabs
              defaultValue="login"
              value={tab}
              onValueChange={(v) => setTab(v as string as "login" | "register")}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 rounded-xl bg-muted p-1">
                <TabsTrigger
                  value="login"
                  className="rounded-lg text-sm cursor-pointer"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  className="rounded-lg text-sm cursor-pointer"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="mt-6">
                <AuthLoginForm
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
              </TabsContent>

              <TabsContent value="register" className="mt-6">
                <AuthRegisterForm
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  onToggle={() => setTab("login")}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="flex items-center gap-4 py-6">
          <Separator className="flex-1" />
          <span className="text-sm text-muted-foreground">or</span>
          <Separator className="flex-1" />
        </div>

        <Button
          variant="outline"
          className="h-12 w-full text-sm cursor-pointer"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            className="mr-3"
            fill="currentColor"
          >
            <path d="M12 11.999h10.545c.09.532.137 1.088.137 1.666 0 5.727-3.84 9.8-10.682 9.8C5.83 23.465 1 18.635 1 11.999 1 5.364 5.83.535 12 .535c3.24 0 5.955 1.192 7.97 3.164l-3.418 3.418C15.417 6.17 13.882 5.6 12 5.6c-3.804 0-6.893 3.1-6.893 6.9 0 3.8 3.09 6.9 6.893 6.9 3.404 0 5.403-1.946 5.816-4.678H12v-2.723Z" />
          </svg>
          Continue with Google
        </Button>
      </div>

      {/* Right Panel (Image) */}
      <div className="relative hidden bg-muted/60 md:block">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/60" />
        <div
          aria-label="Modern and warmly lit barber shop interior"
          className="absolute inset-3 rounded-lg object-cover bg-center bg-cover"
          style={{
            backgroundImage:
              "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCEb7QhwJNoR996GGufgFikcLfnnRU2agYu56okZcwM8cxvxsX-kmTgA59n0S4s4zM0bSq4NOSYG4MbJLrf-c8OEOAIADr5NhW__5wmt0t_Zy__sG9yaxqpydn_8Ozy-bXkGOSDDF9AuER2hzpeS6FNQY2Xg_C7MrtHx_8q9nCyJYhQh6qkcbWEI0C_u5M63NGEDwuRJHf0VCSk85GsXz2LGKfrxgkdkPEWvS2eJ7VT7Ec_z07HuZru09jzkIlENc9QhhPvIm-3iAM)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  );
}
