import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./navigation.css"

function NavBar() {
    return (
        <div>
            <nav>
                <Link to='/' >Home</Link>
                <Link to='messages'>Messages</Link>
                <Link to='profile'>Profile</Link>
                <Link to='settings'>Settings</Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default NavBar