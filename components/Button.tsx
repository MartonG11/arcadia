type ButtonProps = {
  text: string
  onClick: () => void
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button type='button' onClick={onClick} className='rounded-xl text-orange-400 hover:bg-orange-400 hover:text-white border border-orange-400 p-2'>
      {text}
    </button>
  )
}

export default Button