"use client"
import React from "react"
import { EmblaOptionsType } from "embla-carousel"
import { DotButton, useDotButton } from "./CarouselButton"
import useEmblaCarousel from "embla-carousel-react"
import NextImage from "next/image"
import { Image } from "@medusajs/medusa"
import "./css/embla.css"
import { Container } from "@medusajs/ui"

type PropType = {
  slides: Image[]
  options?: EmblaOptionsType
}

const ImageCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  console.log("Image url: " + slides[0].url)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className=" embla__container">
          {slides.map((image, index) => (
            <div className="embla__slide" key={index}>
              <Container
                key={image.id}
                className="relative w-full embla__slide__number overflow-hidden bg-ui-bg-subtle"
                id={image.id}
              >
                <NextImage
                  src={image.url}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
                  alt="productImage"
                />
              </Container>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="embla__controls">
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageCarousel
