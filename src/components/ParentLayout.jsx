import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'
import Contact from './Contact'

const ParentLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Contact/>
      <Footer />
    </div>
  )
}

export default ParentLayout;
