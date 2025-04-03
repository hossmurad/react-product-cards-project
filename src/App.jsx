import { HashRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./page/login-page.jsx";
import VerifyPage from "./page/verify-page.jsx";
import ProductListPage from "./page/product-list-page.jsx";
import CardListPage from "./page/card-list-page.jsx";
import HomePage from "./page/home-page.jsx";
import { Toaster } from 'react-hot-toast';

const App = () => {
    return (

        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product" element={<ProductListPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/verify" element={<VerifyPage />} />
                <Route path="/cart" element={<CardListPage />} />
            </Routes>
            <Toaster />
        </HashRouter>

    );
};

export default App;