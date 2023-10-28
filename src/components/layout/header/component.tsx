import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <header className="flex justify-between h-[50px] px-5 py-3 items-center">
            <div className="text-[20px] bold text-cyan-700 w-[200px]">
                Twitter
            </div>
            <div className="flex grow text-[20px] bold">
                <Link to={"/"}>Home</Link>
            </div>
            <div className="w-[200px] border rounded-md px-[10px] py-[5px] text-gray-500">
                Search Twitter
            </div>
        </header>
    )
}