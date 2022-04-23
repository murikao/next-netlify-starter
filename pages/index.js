import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bem vindo ao Netlify starter para NextJS!" />
        <p className="description">
          Uma Alternativa para hospedagem grátis para api e servers, via serverside render e prisma
        </p>
        <p>
          Para testar remova o código e susbtitua pelo que você tem para deploy.
        </p>
        <p>Veja o README.md</p>
      </main>

      <Footer />
    </div>
  )
}
