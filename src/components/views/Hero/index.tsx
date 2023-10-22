import React from 'react'
import { HeroMain } from '../../assets'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex justify-between items-center'>
        {/*left side*/}
        <div>
            <h1 className=''>An Industrial Take on Streetwear</h1>
        </div>

        {/*right side*/}
        <div className="">
            <Image src={HeroMain} alt="HeroMain" />
        </div>
    </div>
  )
}

export default Hero