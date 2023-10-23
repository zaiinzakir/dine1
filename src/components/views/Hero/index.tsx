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
        
        <div className="bg-orange-100 w-72 h-72 rounded-full">
            <Image src={HeroMain} alt="HeroMain" size={42}/>
        </div>
    </div>
  )
}

export default Hero