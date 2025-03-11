"use client";
import {useRouter} from "next/navigation";
import {PageTitle} from "@/lib/components/PageTitle";
import {useEffect} from "react";

export default function SignoutPage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
    router.refresh();
  }, []);
  return <>
    <PageTitle>Signing Out...</PageTitle>
  </>;
}