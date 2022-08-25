import GlobalStyle from '../src/GlobalStyle';
import Layout from '../src/components/Layout';
import { SessionProvider } from "next-auth/react"

function MyApp({  Component,  pageProps: { session, ...pageProps },}) {
  return (
    <SessionProvider session={session}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
