import { Container } from "@medusajs/ui"
import Image from "next/image"
import React from "react"

type Props = {}

const ProductRange = (props: Props) => {
  const productRange = [
    {
      name: "Doors & Window Frames",
      img: "https://i.pinimg.com/564x/39/ea/28/39ea28546fd74e5233a470cc97bcc811.jpg",
    },
    {
      name: "Solid Wood Doors",
      img: "https://images.unsplash.com/photo-1680472800758-b384161c9a6d?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Teak Products",
      img: "https://i.pinimg.com/564x/e4/d5/40/e4d540da20c732cf4ada2b778744efdc.jpg",
    },
    // {
    //   name: "Wooden Mouldings",
    //   img: "https://i.pinimg.com/564x/d0/bb/fc/d0bbfc87485a0bb2e004129f6513cd96.jpg",
    // },
  ]
  return (
    <div className="sm:grid flex flex-col gap-y-6 max-w-6xl px-12 m-auto gap-6 grid-cols-3">
      {productRange.map((product, idx) => (
        <div
          key={idx}
          className="flex flex-col transform transition-transform hover:scale-110 hover:cursor-pointer gap-y-3 text-center text-amber-700 font-semibold"
        >
          <Container className="relative h-[300px]">
            <Image
              src={product.img}
              alt="product_range"
              layout="fill"
              objectFit="cover"
              className=" object-center rounded-md"
            />
          </Container>
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductRange
