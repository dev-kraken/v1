"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
  return (
    <Image
    className="md:block cursor-pointer"
    height="30"
    width="30"
    src="/images/logo1.png"
    alt="Logo"
    />
  )
}

export default Logo