"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserLinks = () => {
  const { status } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <div>

          <span className="border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer"
            onClick={() => signOut()}>Logout</span>
        </div>
      ) : (
        <Link className="border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer" href="/login">Login</Link>
      )}
    </>
  );
};

export default UserLinks;
