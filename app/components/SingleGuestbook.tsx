"use client";
import type { GuestbookType } from "@/types/types";
import { useRef, useState } from "react";
import { deleteEntry } from "../action";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import Guestbook from "@/guestbook/page";

export default function SingleGuestbook({ guestbook }: { guestbook: GuestbookType }) {
    const [message, setMessage] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const { pending } = useFormStatus();
    const handleEdit = () => {

    }
    const handleDelete = () => { }
    return (
        <div>
            <input
                type="text"
                placeholder="Your message..."
                name="message"
                value={message}
                onChange={(event: any) => event.target.value}
                required
                disabled={pending}
                className="pl-4 pr-2 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            />
            <input
                type="text"
                placeholder="Your username..."
                name="username"
                value={username}
                onChange={(event: any) => event.target.value}
                required
                disabled={pending}
                className="pl-4 pr-2 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            />
            <input
                type="text"
                placeholder="Your email..."
                name="email"
                value={email}
                onChange={(event: any) => event.target.value}
                required
                disabled={pending}
                className="pl-4 pr-2 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            />


            <button
                type="button"
                onClick={handleEdit}
                disabled={pending}
                className="flex items-center justify-center right-2 mt-1 font-medium h-7 bg-teal-500/30 text-neutral-900 dark:text-neutral-100 rounded w-16"
            >
                Edit
            </button>
            <button
                type="button"
                onClick={handleDelete}
                disabled={pending}
                className="flex items-center justify-center absolute right-2 mt-1 font-medium h-7 bg-teal-500/30 text-neutral-900 dark:text-neutral-100 rounded w-16"
            >
                Delete
            </button>
        </div>
    );
}
