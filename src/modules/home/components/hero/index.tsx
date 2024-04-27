import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import HeroImage from "../../../../../public/wooden_hero.jpeg"
import { ArrowRight, MoveRight } from "lucide-react"

const Hero = () => {
  return (
    <div className="relative h-[75vh] w-full  border-ui-border-base  bg-ui-bg-subtle">
      <div>
        <Image
          src={HeroImage}
          alt="hero"
          className="absolute -z-1 inset-0 w-full h-full object-cover blur-[1.5px]"
        />
      </div>
      <div className="absolute mx-12 sm:mx-0 sm:w-[400px] text-white right-0 sm:my-0 my-36 sm:-translate-x-3/4 sm:translate-y-3/4 bg-amber-600 bg-opacity-90 p-6 rounded-lg  ">
        <div className="text-2xl">Crafting</div>
        <div className="md:text-4xl text-3xl  font-semibold">
          {" "}
          Timeless Elegance
        </div>
        <div className="mt-4 md:text-lg">
          Crafted from the finest{" "}
          <span className="font-bold">Nilambur Teak</span>, our products blend
          timeless elegance with unmatched durability.
        </div>
        <Button className="px-4 mt-4 py-2 hover:bg-orange-600 hover:text-white text-orange-600  w-fit flex flex-row justify-between items-center border-0 bg-orange-200">
          <div className=" text-lg font-bold mr-2">Show me</div>
          <div>
            <MoveRight className="h-4 w-4 " />
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Hero
