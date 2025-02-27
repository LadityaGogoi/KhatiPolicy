import { Link } from 'react-router';
import Logo from './icon.png';

export function Welcome() {
  return (
    <div className="flex justify-center items-start bg-gray-100 min-h-screen">
      <div className="w-[320px] min-h-screen bg-white mx-auto flex flex-col justify-center items-center gap-y-4 p-4">
        <div className='w-11/12 mx-auto rounded-full bg-blue-100 flex flex-col  items-center p-3'>
          <div className='flex flex-row mb-3'>
            <img src={Logo} alt='logo' className='w-12 h-12' />
          </div>
          <Link to={'/delete'} className='text-base text-blue-400 font-medium underline'>Account Deletion</Link>
          <Link to={'/policy'} className='text-base text-blue-400 font-medium underline'>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}