import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header1 from './componet/Header-1.jsx';
import Header2 from './componet/Header-2.jsx';
import Footer from './componet/Footer.jsx';
import { Route, Routes } from 'react-router';
import Home from './componet/Home.jsx';
import ShopLeftsidebar from './componet/Shop-Left-sidebar.jsx';
import ShopRightsidebar from './componet/Shop-Right-sidebar.jsx';
import ShopFullwidth from './componet/Shop-Full-width.jsx';
import ProductLeftsidebar from './componet/product-Left-sidebar.jsx';
import ProductRightsidebar from './componet/product-Right-sidebar.jsx';
import ProductFullWidth from './componet/Product-Full-width.jsx';
import About from './componet/About.jsx';
import ContactUs from './componet/ContactUs.jsx';
import Cart from './componet/Cart.jsx';
import TrackOrder from './componet/TrackOrder.jsx';
import Wishlist from './componet/Wishlist.jsx';
import Faq from './componet/Faq.jsx';
import LoginForm from './componet/Loging.jsx';
import RegisterForm from './componet/RegisterForm.jsx';
import Policy from './componet/Policy.jsx';
import Checkout from './componet/Checkout.jsx';
import LeftSidebar from './componet/Left-Sidebar.jsx';
import RightSidebar from './componet/Right-Sidebar.jsx';
import FullWidth from './componet/Full-Width.jsx';
import DetailLeftSidebar from './componet/Detail-Left-Sidebar.jsx';
import DetailRightSidebar from './componet/Detail-Right-Sidebar.jsx';
import DetailFullWidth from './componet/Detail-Full-Width.jsx';
import Products from './componet/Products.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <>
            <Header1 />
            <Header2 />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shopLeftsidebar' element={<ShopLeftsidebar />} />
                <Route path='/shopRightsidebar' element={<ShopRightsidebar />} />
                <Route path='/shopFullWidthsidebar' element={<ShopFullwidth />} />
                <Route path='/productLeftsidebar' element={<ProductLeftsidebar />} />
                <Route path='/productRightsidebar' element={<ProductRightsidebar />} />
                <Route path='/productRightsidebar' element={<ProductRightsidebar />} />
                <Route path='/productFullWidth' element={<ProductFullWidth />} />
                <Route path='/about' element={<About />} />
                <Route path='/contactUs' element={<ContactUs />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/trackOrder' element={<TrackOrder />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/loginForm' element={<LoginForm />} />
                <Route path='/registerForm' element={<RegisterForm />} />
                <Route path='/policy' element={<Policy />} />
                <Route path='/leftSidebar' element={<LeftSidebar />} />
                <Route path='/rightSidebar' element={<RightSidebar />} />
                <Route path='/fullWidth' element={<FullWidth />} />
                <Route path='/detailLeftSidebar' element={<DetailLeftSidebar />} />
                <Route path='/detailRightSidebar' element={<DetailRightSidebar />} />
                <Route path='/detailFullWidth' element={<DetailFullWidth />} />
                <Route path='/products' element={<Products />} />
            </Routes>
            <Footer />
        </>
    )
}


export default App;