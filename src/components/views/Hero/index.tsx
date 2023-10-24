import React from 'react'
import { HeroMain } from '../../assets'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex justify-between items-center'>
        {/*left side*/}
        <div>
            <h1 className='flex font-bold font-weight-700'>An Industrial Take on Streetwear</h1>
        </div>

        {/*right side*/}
        
        <div className='bg-blue-50 rounded-full'>
            <Image width={450} height={450} src={HeroMain} alt="HeroMain" />
        </div>
    </div>
  )
}

export default Hero