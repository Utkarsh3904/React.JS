import React from 'react'
import { Container, header, logo, logout, LogoutBtn } from '../Index'
import { Link } from 'react-router-dom'   
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'  // like useDispatch

function Header() {
    const authStatus = useSelector((state) => state.auth.status)  // smjh nhi hai pr, ye authStatus ko useSelector se uthate hain
    const navigate = useNavigate()  

    const navItems=[              // better its a navigation bar
        {
            name: "Home",
            slug: "/",            // slug or link both same 
            active: true,
        },
        {
            name: "About",
            slug: "/about",
            active: !authStatus      
        },
        {
            name: "Signup",
            slug: "/Signup",
            active: !authStatus           // upar puch lia hai ki login hai ya nhi, agr login hai tho ye nhi dikhega
        },
        {
            name: "All Posts",
            slug: "/all=posts",
            active: authStatus
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus
        },
        {
            name: "Contact",
            slug: "/contact",
        },
    ]


    return (
       <header py-3 shadow bg-gray-500>
        <Container>
            <nav className =' flex'>

                <div className ='mr-4'>
                    <Link to ='/'>
                    <logo width =' 70px' />
                    </Link>
                </div>

                <ul className ='flex ml-auto'> 
                    {navItems.map((item)=>
                     item.active ?(     // if active tho te display hoga 
                        <li key={item.name}>
                            <button
                            onClick ={()=>navigate(item.slug)} 
                            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' 
                            >{item.name}</button>
                        </li>
                     ):null
                    )}
                    
                    {authStatus && (           //Nice syntax is authStatus is true tabhi ye dusra bracket show hoga
                        <li>
                            <LogoutBtn />  // means aunthenticated user ho tho logout button dikhega
                        </li>

                    )}     
                    </ul>
            </nav>

        </Container>
       </header>
    )
}

export default Header

