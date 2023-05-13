type ButtonProps = {
  text: string
  onClick: () => void
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button type='button' onClick={onClick} className='rounded-2xl bg-blue-700 hover:bg-blue-500 text-white p-2'>
      {text}
    </button>
  )
}

export default Button