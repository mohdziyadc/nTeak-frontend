import Link from "next/link"
import React from "react"

type Props = {}

const NavItems = (props: Props) => {
  return (
    <div className="flex-1 mx-4  items-center justify-center">
      <ul className="flex px-4 gap-16 font-normal text-base flex-row w-full justify-center ">
        <Link
          href={"/"}
          className="hover:text-ui-contrast-fg-secondary hover:cursor-pointer"
        >
          Home
        </Link>
        <Link
          href={"#"}
          className="hover:text-ui-contrast-fg-secondary hover:cursor-pointer"
        >
          Shop
        </Link>
        <Link
          href={"#"}
          className="hover:text-ui-contrast-fg-secondary hover:cursor-pointer"
        >
          About
        </Link>
        <Link
          href={"#"}
          className="hover:text-ui-contrast-fg-secondary hover:cursor-pointer"
        >
          Contact
        </Link>
      </ul>
    </div>
  )
}

export default NavItems
