import Head from "next/head"
import { FC } from "react";

import { NavBar, SideMenu } from "src/components/ui";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const ShopLayout: FC<Props> = ({
  title, pageDescription, imageFullUrl, children
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={pageDescription} />

        <meta name='og:title' content={title} />
        <meta name='og:description' content={pageDescription} />

        {
          imageFullUrl && (
            <meta name="og:image" content={imageFullUrl} />
          )
        }
      </Head>

      <nav>
        <NavBar />
      </nav>
      <SideMenu />
      {/* TODO: Siderbar */}
      <main style={{
        margin: '80px auto',
        maxWidth: '1440px',
        padding: '0px 30px'
      }}>
        {children}
      </main>
      <footer>
        {/* TODO: mi custom footer */}
      </footer>
    </>
  )
}
