import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-slate-500 text-white">
            <h3 className="font-bold">Github Search</h3>
            <span>
                <Link className="mr-5" to={"/"}>Home</Link>
                <Link to={"/favourites"}>Favourites</Link>
            </span>
        </nav>
    )
}