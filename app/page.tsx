"use client"

import { useSearchUsersQuery } from "@/store/features/github/githubApi";
import Image from "next/image";

export default function Home() {

 const {isLoading, isError, data} = useSearchUsersQuery("vladilen");

  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
}
