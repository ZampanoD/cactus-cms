import GalleryItem from "./GalleryItem";
import Photo1 from "/опунция.jpg"
import Photo2 from "/сугуаро.png"
import Photo3 from "/ребуция.png"
import Photo4 from "/ферокактус.png"


export default function Gallery() {
    return(
        <div id='Gallery' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Галерея</h1>
            <p className="text-center py-8">Добро пожаловать в увлекательный мир кактусов! 🌵 В нашей галерее вы найдете разнообразные виды этого удивительного растения, которое приспособилось к самым экстремальным условиям.</p>
            <div className="grid sm:grid-cols-2 gap-12">
                <GalleryItem img={Photo1} title=''/>
                <GalleryItem img={Photo2} title=''/>
                <GalleryItem img={Photo3} title=''/>
                <GalleryItem img={Photo4} title=''/>
                
            </div>
        </div>
    )
}
