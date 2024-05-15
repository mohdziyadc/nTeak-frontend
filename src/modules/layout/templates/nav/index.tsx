import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Link from "next/link"
import NavItems from "./components/NavItems"
import CountrySelect from "@modules/layout/components/country-select"
import NavCountrySelect from "./components/NavCountrySelect"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative bg-amber-700 bg-opacity-90 h-16 mx-auto duration-200 border-ui-border-base">
        <nav className="content-container text-white  txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="sm:hidden mr-4">
            <SideMenu regions={regions} />
          </div>

          <div className="flex flex-[0.5]  items-center h-full">
            <LocalizedClientLink
              href="/"
              className="text-xl md:text-2xl font-semibold hover:text-ui-fg-base "
              data-testid="nav-store-link"
            >
              Nilambur Teak
            </LocalizedClientLink>
          </div>

          <div className="hidden sm:flex">
            <NavItems />
          </div>

          <div className="flex items-center flex-[0.5] gap-x-6  w-full h-full   basis-0 justify-end">
            <div className="hidden small:flex text-sm items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
              {regions && <NavCountrySelect regions={regions} />}
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base text-sm  flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
