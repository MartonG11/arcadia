'use client'

import { useSession } from 'next-auth/react'
import Map from './Map'
import Title from './Title'
import Subtitle from './Subtitle'

const Hero = () => {
  const { data: session } = useSession()

  return (
    <div className="mx-auto max-w-2xl py-10 sm:py-20">
      <div className="text-center">
        {session?.user ? (
          <div className='flex flex-col gap-3'>
            <Title text={`Hi, ${session.user.name}`} />
            <Subtitle text={'Below you can see the exact location of Arcadia HQ. The map is rendered with CesiumJS JavaScript library'} />
            <Map />
          </div>
        ) : (
          <div className='flex flex-col gap-3'>
            <Title text={'Welcome to Pinpoint App'} />
            <Subtitle text={'Please log in to your Google Account to access Arcadia&apos;s location'} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
