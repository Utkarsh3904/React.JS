import React from 'react'
import { Outlet } from 'react-router-dom'
//outlet is very useful for it makes certain things vary like where outlet is written only that thing will vary others will be fixed
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';


function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>    {/*ye bich me likha hai isliye ye vary krta rhega upar aur niche ka same rhega har page me */}
        <Footer/>
        </>
    )
}

export default Layout
