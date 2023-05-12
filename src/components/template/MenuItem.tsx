import Link from "next/link";
import React from "react";

interface MenuItemProps {
  url: string
  icone: any
  children: any
  className?: string
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.url}>
      <div className="flex flex-col items-center gap-3 cursor-pointer w-24">
        <div className={`
          flex justify-center items-center w-20 h-20 rounded-2xl border-zinc-800
          ${props.className ?? ''}
        `}>
          {props.icone && React.cloneElement(props.icone, {
            size: 60,
            strokeWidth: 1
          })}
        </div>

        <div className="text-sx text-center">
          {props.children}
        </div>

      </div>
    </Link>
  )
}