"use client";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ClapperboardIcon, UserCircleIcon } from "lucide-react";

const AuthButton = () => {
  // TODO: Add different auth states
  return (
    <>
    <SignedIn>
      <UserButton>
          {/* TODO: Add user profile */}
        <UserButton.MenuItems>
          <UserButton.Link 
           label="Studio"
           href="/studio"
           labelIcon={<ClapperboardIcon className="size-4"/>}
          />
        </UserButton.MenuItems>
      </UserButton>
    </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
      <Button
        variant="outline"
        className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-500 border-blue-500/20
       rounded-full shadow-none [&_svg]:size-5"
      >
        <UserCircleIcon />
        Sign In
      </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

export default AuthButton;
