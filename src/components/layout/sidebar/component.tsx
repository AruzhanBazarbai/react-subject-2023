import React from "react";

export const SideBar: React.FC = () => {
    return (
        <div className="flex flex-col gap-y-4 cursor-pointer w-[200px]">
            <div className="flex gap-x-4 items-center">
                <div className="icon"></div>
                <div className="text-[20px] bold text-cyan-700">Home</div>
            </div>        
            <div className="flex gap-x-4 items-center">
                <div className="icon"></div>
                <div className="text-[20px] bold">Explore</div>
            </div>        
            <div className="flex gap-x-4 items-center">
                <div className="icon"></div>
                <div className="text-[20px] bold ">Notifications</div>
            </div>        
            <div className="flex gap-x-4 items-center">
                <div className="icon"></div>
                <div className="text-[20px] bold ">Messages</div>
            </div>        
            <div className="flex gap-x-4 items-center">
                <div className="icon"></div>
                <div className="text-[20px] bold ">Bookmarks</div>
            </div>        
            <div className="flex gap-x-4 items-center">
                <div className="icon"></div>
                <div className="text-[20px] bold">Lists</div>
            </div>        
            <div className="flex gap-x-4 items-center">
                <div className="icon"></div>
                <div className="text-[20px] bold ">Profile</div>
            </div>        
            <div className="flex gap-x-4 items-center">
                <div className="icon"></div>
                <div className="text-[20px] bold ">More</div>
            </div>        
        </div>
    )
}