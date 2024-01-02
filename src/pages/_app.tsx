/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ReactElement } from 'react'
import React from 'react'
import { globalQueryErrorHandler } from '@/libs/client/globalQueryErrorHandler'
import { globalStyles, theme } from '@/styles'
import { ThemeProvider, Global } from '@emotion/react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppContext, AppInitialProps, AppLayoutProps } from 'next/app'
import { type NextComponentType } from 'next/types'

import '../styles/font.css'
import 'react-lazy-load-image-component/src/effects/opacity.css'

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  const [queryClient] = React.useState<QueryClient | any>(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            suspense: true,
            retryOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,

            onError: (err: unknown) => globalQueryErrorHandler(err, queryClient),
          },
        },
      })
  )

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydrateState}>
          <ReactQueryDevtools initialIsOpen={false} />
          {getLayout(<Component {...pageProps} />)}
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
