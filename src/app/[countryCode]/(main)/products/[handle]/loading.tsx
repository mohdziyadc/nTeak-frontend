import { Loader2 } from "lucide-react"
import React from "react"

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-orange-100">
      <Loader2 className="h-10 w-10 animate-spin text-amber-700" />
    </div>
  )
}

export default Loading
