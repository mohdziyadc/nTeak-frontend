import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Metadata } from "next"
import "styles/globals.css"
import Providers from "./Providers"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

// const queryClient = new QueryClient()

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    // <QueryClientProvider client={queryClient}>
    <Providers>
      <html lang="en" data-mode="light">
        <body>
          <main className="relative">{props.children}</main>
        </body>
      </html>
    </Providers>
    // </QueryClientProvider>
  )
}
