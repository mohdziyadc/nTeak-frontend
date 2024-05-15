"use client"
import React from "react"
import { clx, useToggleState } from "@medusajs/ui"
import { Region } from "@medusajs/medusa"
import CountrySelect from "@modules/layout/components/country-select"
import { ChevronDown, ChevronUp } from "lucide-react"

type Props = {
  regions: Region[]
}

const NavCountrySelect = ({ regions }: Props) => {
  const toggleState = useToggleState()
  return (
    <div
      onMouseEnter={toggleState.open}
      onMouseLeave={toggleState.close}
      className="sm:flex justify-center items-center hidden"
    >
      <CountrySelect
        regions={regions}
        toggleState={toggleState}
        displayInNavbar
      />
      {toggleState.state ? (
        <ChevronUp className="h-4 w-4 ml-1" />
      ) : (
        <ChevronDown className={clx("h-4 w-4 ml-1 ")} />
      )}
    </div>
  )
}

export default NavCountrySelect
