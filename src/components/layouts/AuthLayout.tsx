import { FC } from "react"
import Head from "next/head"

import { Box } from '@mui/material'

interface Props {
  title?: string
}

export const AuthLayout: FC<Props> = ({
  title = 'No title page',
  children
}) => {
  return (
    <>
      <Head>
        <title>{title || 'No title'}</title>
      </Head>
      <main >
        <Box display='flex' justifyContent='center' alignItems={'center'} height='calc(100vh - 200px)' >
          {children}
        </Box>
      </main>
    </>
  )
}
