"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"

type Props = {}

const queryClient = new QueryClient()
const Providers = (props: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  )
}

export default Providers
