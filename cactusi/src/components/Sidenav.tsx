import { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { GrGallery } from "react-icons/gr";
import { GiCactusPot } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiMessageEdit } from "react-icons/bi";

const smoothScroll = (id:string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  } else {
    console.error(`Element with id '${id}' not found`);
  }
}

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
    <div>
      {nav ? (
        <AiOutlineClose
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden"
        />
      ) : (
        <AiOutlineMenu
          onClick={handleNav}
          className="absolute top-4 right-4 z-[99] md:hidden"
        />
      )}
      
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            href="#Photo"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 bg-opacity-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4"> Главная</span>
          </a>
          <a
            href="#Text"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 bg-opacity-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <GiCactusPot size={20} />
            <span className="pl-4">Мир кактусов</span>
          </a>
          <a
            href="#Gallery"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 bg-opacity-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <GrGallery size={20} />
            <span className="pl-4">Галерея</span>
          </a>
          <a
            href="#Photo"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 bg-opacity-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <FaPeopleGroup size={20} />
            <span className="pl-4"> О нас</span>
          </a>
          <a
            href="#Contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 bg-opacity-400 m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-300"
          >
            <BiMessageEdit size={20} />
            <span className="pl-4"> Связь с нами</span>
          </a>
        </div>
      ) : (
        
        <div></div>
      )}
        <div className="md:block hidden fixed top-[25%] z-10">
      <div className="flex flex-col">
        <a
          onClick={() => smoothScroll('Photo')}
          className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <AiOutlineHome className='text-black' size={20} />
        </a>
        <a
          onClick={() => smoothScroll('Text')}
          className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <GiCactusPot className='text-black' size={20} />
        </a>
        <a
          onClick={() => smoothScroll('Gallery')}
          className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <GrGallery className='text-black' size={20} />
        </a>
        <a
          onClick={() => smoothScroll('Photo')}
          className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <FaPeopleGroup className='text-black' size={20} />
        </a>
        <a
          onClick={() => smoothScroll('Contact')}
          className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <BiMessageEdit className='text-black' size={20} />
        </a>
      </div>
    </div>

      </div>
    </>
  );
}

export default Sidenav;
