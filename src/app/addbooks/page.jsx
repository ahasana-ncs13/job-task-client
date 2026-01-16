"use client";

import AddBooks from "@/Components/AllBooks/AddBooks";
import Loader from "@/Components/Modules/Loader/Loader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddBookForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = document.cookie.includes("auth=true");

    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
    <Loader></Loader>
    );
  }

  return <AddBooks />;
}
