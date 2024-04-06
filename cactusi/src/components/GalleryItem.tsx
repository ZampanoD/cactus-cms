import React from "react";

type GalleryItemProps = {
  img: string;
  title: string;
};

const GalleryItem: React.FC<GalleryItemProps> = ({ img, title }) => {
  return(
<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl transform transition duration-500 hover:scale-110">
        <img src={img} alt="/" className='rounded-xl group-hover:opacity-10'/>
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                {title}
            </h3>
            <p></p>
        </div>
    </div>
  )
}

export default GalleryItem;
