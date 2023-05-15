const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='w-full flex flex-col flex-shrink-0 items-center justify-center bg-gray-300 py-5 border-t border-gray-400'>
      <h5 className='text-black font-bold'>Created by Gabor Marton</h5>
      <p className='text-gray-700'>{currentYear}</p>
    </div>
  )
}

export default Footer