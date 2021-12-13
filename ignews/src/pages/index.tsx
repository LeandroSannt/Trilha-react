/* eslint-disable @next/next/no-img-element */
import {GetServerSideProps,GetStaticProps} from 'next'
import Head from 'next/head'
import { SubscribButton } from '../components/subscribButton'
import { stripe } from '../services/stripe'

interface HomeProps{
  product:{
    priceId:string;
    amount:number
  }
}

import styles from './home.module.scss'
export default function Home({product}:HomeProps) {
  return (
    <>
    <Head><title> ejvuiejignews</title></Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey,welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get acess to all  the publications <br/>
            <span>for {product.amount} month</span>
          </p>

          <SubscribButton priceId={product.priceId}/>
        </section>
        <img src="/images/avatar.svg" alt="" />
      </main>
    </>
  )
}

export const getStaticProps:GetServerSideProps = async() =>{
  const price = await stripe.prices.retrieve('price_1K61acC3DX80zgM4ijTtXON1',{
    expand:['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style:'currency',
      currency: 'USD',


    }).format(price.unit_amount / 100),
  }
  return {
    props:{
      product
    },
    revalidate: 60 * 60 * 24  // 24 horas

  }
}
