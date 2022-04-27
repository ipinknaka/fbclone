import Image from 'next/image'
import logo from '../public/GitHub-Mark-120px-plus.png'

function Login() {
  return (
    <div className='grid place-items-center'>
      <Image src={logo} width={120} height={120} objectFit='contain' />
      <h1 className='mt-5 p-5 rounded-full bg-black text-white text-center cursor-pointer'>Login with Github</h1>
    </div>
  )
}

export default Login
