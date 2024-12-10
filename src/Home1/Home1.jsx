import React, { useState } from "react";
import "./Home1.css";
import alert from "../assets/alarm.png";
import notification from "../assets/notification.png";
import search from "../assets/search.png";
import home from "../assets/home.png";
import watch from "../assets/bookmark.png";
import bag from "../assets/bag.png";
import file from "../assets/file.png";
import acc from "../assets/account.png";

const Home1 = () => {
    const [activeTab, setActiveTab] = useState("Stocks"); // Track active tab for navParent
    const [activeIcon, setActiveIcon] = useState("Home"); // Track active icon for navLast

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleIconClick = (iconName) => {
        setActiveIcon(iconName);
    };

    return (
        <div>
            <div className="Navigation">
                <div className="navParent">
                    {/* code for navChild */}
                    <div className="navChild">
                        <div>
                            <h1>Home</h1>
                            <h2>News</h2>
                        </div>

                        <ul>
                            <img src={alert} alt="alert" />
                            <img src={notification} alt="notification" />
                            <img src={search} alt="search" />
                        </ul>
                    </div>

                    {/* code for nav parent */}
                    <ul className="ul">
                        {["Stocks", "F&O", "Mutual Funds", "FD"].map((tabName) => (
                            <li
                                key={tabName}
                                className={activeTab === tabName ? "active" : ""}
                                onClick={() => handleTabClick(tabName)}
                            >
                                {tabName}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bottom Navigation */}
                <div className="navLast">
                    {[
                        { name: "Home", icon: home },
                        { name: "Watchlist", icon: watch },
                        { name: "Portfolio", icon: bag },
                        { name: "Orders", icon: file },
                        { name: "Account", icon: acc },
                    ].map(({ name, icon }) => (
                        <div
                            key={name}
                            className={`iocn ${activeIcon === name ? "activeIcon" : ""}`}
                            onClick={() => handleIconClick(name)}
                        >
                            <img src={icon} alt={name} />
                            <p>{name.toUpperCase()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home1;
