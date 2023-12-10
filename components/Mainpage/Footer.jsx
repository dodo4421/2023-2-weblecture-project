import Link from "next/link"
import './footer.css'

export default function Footer() {
  return (
    <>
      <footer className='body-font'>
        <div className=''>
          <div className='container py-5 mx-auto flex items-center sm:flex-row flex-col'>
            <Link href='/' legacyBehavior>
              <a className='flex title-font font-medium'>
                <span className='ml-3 text-xl'>A.M.A 서비스 </span>
              </a>
            </Link>
            <button className='text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 hover:underline text-center '>
              서비스 이용약관
            </button>
            <button className='text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 hover:underline text-center '>
              개인정보 처리방침
            </button>
            <button className='text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 hover:underline text-center '>
              청소년 보호정책
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}