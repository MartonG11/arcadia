const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className='w-full flex flex-col items-center justify-center bg-slate-900 py-10 border-t border-blue-300'>
      <h5 className='text-white font-bold'>Created by Gabor Marton</h5>
      <p className='text-gray-400'>{currentYear}</p>
    </div>
  )
}

export default Footer