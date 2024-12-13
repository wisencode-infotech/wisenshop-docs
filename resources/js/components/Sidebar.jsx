import React from "react";
import SidebarMenu from "./SidebarMenu";

const Sidebar = ({ activeHash }) => {
    return (
        <aside className="bg-gray-900 lg:w-1/5 w-full lg:h-screen p-4 shadow-lg border-r border-opacity-10 border-theme-light left-sidebar">
            <div className="flex flex-col space-y-6">
                <div className="text-left space-x-3 px-4">
                    <h2 className="text-1xl font-semibold text-gray-200 tracking-wide">Topics</h2>
                </div>
                <SidebarMenu activeHash={activeHash} />
            </div>
        </aside>
    );
};

export default Sidebar;
