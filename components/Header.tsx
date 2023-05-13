'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Button from './Button'

const Header = () => {
  const { data: session } = useSession()

  return (
    <nav className='w-full mb-16 flex-shrink-0'>
      <div className='flex justify-between items-center px-5'>
        <h3 className='text-blue-600 font-bold'>Arcadia</h3>
        {session?.user ? (
          <Button text='Sign Out' onClick={signOut} />
        ) : (
          <Button text='Sign In' onClick={() => signIn()} />
        )}
      </div>
    </nav>
  )
}

export default Header