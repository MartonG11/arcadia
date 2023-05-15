'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Button from './Button'

const Header = () => {
  const { data: session } = useSession()

  return (
    <nav className='w-full mb-16 flex-shrink-0 py-2'>
      <div className='flex justify-between items-center px-5'>
        <p className='font-bold text-lg'>Arcadia</p>
        {session?.user ? (
          <Button text='Sign Out' onClick={signOut} />
        ) : (
          <Button text='Sign In' onClick={() => signIn('google')} />
        )}
      </div>
    </nav>
  )
}

export default Header