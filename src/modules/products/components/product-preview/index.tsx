import { Text } from "@medusajs/ui"

import { ProductPreviewType } from "types/global"

import { retrievePricedProductById } from "@lib/data"
import { getProductPrice } from "@lib/util/get-product-price"
import { Region } from "@medusajs/medusa"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  productPreview,
  isFeatured,
  region,
}: {
  productPreview: ProductPreviewType
  isFeatured?: boolean
  region: Region
}) {
  const pricedProduct = await retrievePricedProductById({
    id: productPreview.id,
    regionId: region.id,
  }).then((product) => product)

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
    region,
  })

  return (
    <LocalizedClientLink
      href={`/products/${productPreview.handle}`}
      className="group"
    >
      <div data-testid="product-wrapper">
        <Thumbnail
          thumbnail={productPreview.thumbnail}
          size="full"
          isFeatured={isFeatured}
        />
        <div className="flex items-center gap-x-4 txt-compact-medium mt-4 justify-between">
          <Text
            className="text-ui-fg-subtle text-amber-700 text-lg font-bold"
            data-testid="product-title"
          >
            {productPreview.title}
          </Text>
          <div className="flex  flex-col justify-center  items-end  gap-x-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            <span className="text-ui-fg-muted">Onwards</span>
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
