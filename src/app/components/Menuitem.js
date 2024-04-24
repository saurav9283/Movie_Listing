import Link from "next/link";
import React from "react";

export default function Menuitem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="hover:text-amber-500">
        {typeof window !== "undefined" && <Icon className="text-2xl sm:hidden" />}
        <p className="uppercase hidden sm:inline text-sm">{title}</p>
      </Link>
    </div>
  );
}
