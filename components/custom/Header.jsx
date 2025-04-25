"use client";
import { useRouter } from "next/navigation";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useUserDetail } from "@/app/layout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Header = () => {
  const router = useRouter();
  const { userDetail, setUserDetail } = useUserDetail();

  const handleLogin = () => {
    localStorage.setItem(
      "userDetail",
      JSON.stringify({
        name: "Demo Account",
        email: "info@lemonadelabs.com",
        role: "admin",
        picture:
          "https://images.pexels.com/photos/1549975/pexels-photo-1549975.jpeg",
      })
    );
    router.push("/dashboard");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md px-10">
      <Image
        src={"/LemonadeLogo-NoBG.png"}
        alt="Logo"
        width={180}
        height={140}
        onClick={() => router.push("/")}
      />
      <div>
        {userDetail ? (
          <div className="flex gap-4">
            <Button variant="default" onClick={() => router.push("/dashboard")}>
              Dashboard
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                {" "}
                <Avatar>
  <AvatarImage src={userDetail?.picture} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <Button
                    variant="destructive"
                    onClick={() => {
                      setUserDetail(null);
                      localStorage.removeItem("userDetail");
                      router.push("/");
                    }}
                  >
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Button variant="default" onClick={() => handleLogin()}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
