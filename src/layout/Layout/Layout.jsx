import { Outlet } from 'react-router-dom';

import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

import './Layout.css';
function Layout( {products, carts, tab, setTab, setToken} ) {
    return ( 
        <div>
            <Header />
            <Navbar products={products} carts={carts} tab={tab} setTab={setTab} setToken={setToken}/>
            <Outlet />
            <Footer />
        </div>
     );
}

export default Layout;
