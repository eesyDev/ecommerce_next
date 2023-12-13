import React from 'react';
import { client } from '@/lib/client'

import { Product, HeroBanner, FooterBaneer } from '../components';

const Page = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='products-heading'>
        <h2>Best selling products</h2>
        <p>Speakers of many variation</p>
        <a href="#">Link to change</a>
      </div>
      <div className='products-container'>
          {products.map((item, i) => {
            return <Product product={item} key={i}/>
          }
          )}
      </div>
      <FooterBaneer footerBanner={bannerData.length && bannerData[0]}/>
    </>
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]'
    const bannerData = await client.fetch(bannerQuery)
    return {
        props: { products, bannerData }
    }
}

export default Page