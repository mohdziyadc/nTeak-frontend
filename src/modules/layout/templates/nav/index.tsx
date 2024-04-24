import { Suspense } from "react"

import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Link from "next/link"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex flex-[0.5]  items-center h-full">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-semibold hover:text-ui-fg-base "
              data-testid="nav-store-link"
            >
              n-Teak
            </LocalizedClientLink>
          </div>

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

          <div className="flex items-center flex-[0.5] gap-x-6  w-full h-full   basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
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
                  className="hover:text-ui-fg-base flex gap-2"
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
