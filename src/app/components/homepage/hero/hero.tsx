import React from "react";
import HeroContent from "./hero-content/hero-content";
import * as actions from '@/app/actions/product-actions/product-action'

type Props={}

const Hero = async(props: Props) => {

  const { products } = await actions.getNewestHeroProducts();

  return (
    <>
        <HeroContent products={products} />
    </>
  );
};

export default Hero;
