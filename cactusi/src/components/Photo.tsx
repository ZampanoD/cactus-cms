import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { ModeToggle } from './mode-toggle';

export default function Photo() {
  return(
    <>
      <div className='relative h-screen w-full' id='Photo'>
        <img src='/fon2.jpg' className='absolute h-full w-full object-cover object-center scale-x-[-1]' />
        <div className='absolute top-0 left-0 h-full w-full flex items-center justify-center '>
          <div className='max-w-[700px] m-auto text-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-white'>CactuseWorld</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-white'>
              <TypeAnimation
                sequence={[
                  'ZampanoD',
                  2000,
                  'Sonechii',
                  2000,
                  'MaybeYouRe',
                  2000,
                  'Mashinka34',
                  2000,
                 
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', paddingLeft:'5px'}}
                repeat={Infinity}
              />
            </h2>
            <div className='flex justify-between  pt-6  max-w-[150px] w-full pl-3'>
      <a href="https://github.com/ZampanoD/cactus-cms" target="_blank" rel="noopener noreferrer">
          <FaGithub className='cursor-pointer text-white' size={30}/>
      </a>
      <a href="https://postimg.cc/sGyk8Lmg" target="_blank" rel="noopener noreferrer">
          <MdPhotoCamera className='cursor-pointer text-white pl-1' size={30}/>
      </a>
      <ModeToggle/>
  </div>

          </div>
        </div>
      </div>
    </>
  )
}
