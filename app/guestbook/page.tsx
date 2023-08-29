import type { Metadata } from "next";
import Form from "../components/Form";
import { prisma } from "../db";
import SingleGuestbook from "@/components/SingleGuestbook";
import { spawn } from "child_process";
import { getAuthSession } from "@/utils/auth";

async function getEntries() {
  const data = await prisma.guestbook.findMany({
    take: 5,
    orderBy: {
      created_at: "desc",
    },
  });

  return data;
}

export const revalidate = 60;

export const metadata: Metadata = {
  title: "El Hadji Mama Sarr | Guest Page",
  description: "Portfolio of El Hadji Mama Sarr",
};
export default async function Guestbook() {
  const session = await getAuthSession();
  const data = await getEntries();
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Guestbook
        </h1>
        <p>Laissez un message</p>
      </div>

      <div className="w-full">
        <div className="max-w-[500px] mx-auto mt-8">
          <Form />

          <div className="flex flex-col space-y-2">
            {data.map((entry) => (
              <div key={entry.id} className="flex items-center justify-start text-sm border-b-3 h-16">
              {session?.user.isAdmin === true 
                ? (
                <div className="bg-red-800 text-neutral-900 dark:text-neutral-100 rounded-md px-3 py-1 cursor-pointer">Delete</div>)
                : ( <span>{entry.username}</span> ) }
                <div className="ml-5">{entry.message}</div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
