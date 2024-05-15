import { Container } from "@medusajs/ui"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {
  countryCode: string
}

const ProductRange = ({ countryCode }: Props) => {
  const productRange = [
    {
      name: "Doors & Window Frames",
      img: "https://i.pinimg.com/564x/39/ea/28/39ea28546fd74e5233a470cc97bcc811.jpg",
      handle: "/collections/frames",
    },
    {
      name: "Solid Wood Doors",
      img: "https://images.unsplash.com/photo-1680472800758-b384161c9a6d?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      handle: "/collections/doors",
    },
    {
      name: "Teak Products",
      img: "https://i.pinimg.com/564x/e4/d5/40/e4d540da20c732cf4ada2b778744efdc.jpg",
      handle: "/collections/teak-products",
    },
  ]
  return (
    <div className="sm:grid flex flex-col gap-y-6 max-w-6xl px-12 m-auto gap-6 grid-cols-3">
      {productRange.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col transform transition-transform hover:scale-110 hover:cursor-pointer gap-y-3 text-center text-amber-700 font-semibold"
        >
          <Link href={`${countryCode}/${item.handle}`}>
            <Container className="relative h-[300px]">
              <Image
                src={item.img}
                alt="product_range"
                layout="fill"
                objectFit="cover"
                className=" object-center rounded-md"
              />
            </Container>
            <p>{item.name}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProductRange
