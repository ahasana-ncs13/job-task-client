"use client";
import AddBooks from "@/Components/AllBooks/AddBooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AddBookForm() {
   const router = useRouter();

  useEffect(() => {
    const isLoggedIn = document.cookie.includes("auth=true");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);
  return (
    <>
      <AddBooks></AddBooks>
    </>
  );
}
