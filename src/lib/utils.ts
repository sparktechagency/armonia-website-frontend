import dayjs from "dayjs";

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const setToLocalStorage = (key: string, token: string) => {
    if (!key || typeof window === "undefined") {
        return "";
    }
    return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
    if (!key || typeof window === "undefined") {
        return "";
    }
    return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key: string) => {
    if (!key || typeof window === "undefined") {
        return "";
    }
    return localStorage.removeItem(key);
};



export const formatDate = (date: dayjs.Dayjs): string =>
    `${date.date()}-${date.month() + 1}-${date.year()}`;

export const timeAgo = (preTime: string | number | Date): string => {
    const createdAt = new Date(preTime);
    const now = new Date();

    const differenceInMinutes = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60));

    if (differenceInMinutes < 1) return "Just now";
    if (differenceInMinutes < 60) return `${differenceInMinutes} min ago`;
    if (differenceInMinutes < 1440) return `${Math.floor(differenceInMinutes / 60)} hour ago`;
    if (differenceInMinutes < 10080)
        return `${createdAt.toLocaleDateString("en-US", { weekday: "long" })}, 
              ${createdAt.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}`;
    if (differenceInMinutes < 43800) return `${Math.floor(differenceInMinutes / 10080)} week ago`;
    if (differenceInMinutes < 525600) return `${Math.floor(differenceInMinutes / 43800)} month ago`;

    return `${Math.floor(differenceInMinutes / 525600)} year ago`;
};