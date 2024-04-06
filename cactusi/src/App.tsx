import Sidenav from './components/Sidenav.tsx';
import Photo from './components/Photo.tsx';
import Text from './components/Text.tsx'
import Gallery from './components/Gallery.tsx';
import { Link } from 'react-scroll';
import Contact from './components/Contact.tsx';


export default function App() {
  return (
    <div>
      <Sidenav />
      <Photo />
      <Text/>
      <Gallery/>
      <Contact/>
      <div>
      </div>
    </div>
  );
}
