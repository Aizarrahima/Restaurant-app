import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
    return (
        <section
            className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
            id="home"
        >
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
                <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
                    <p className="text-base text-orange-500 font-semibold">
                        Bike Delivery
                    </p>
                    <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
                        <img
                            src={Delivery}
                            className="w-full h-full object-contain"
                            alt="delivery" />
                    </div>
                </div>

                <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
                    The Fastest Delivery in
                    <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
                        Your City
                    </span>
                </p>

                <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maxime culpa ut fuga quia, ab placeat eligendi et ratione, atque aut corrupti deserunt consectetur, odio quo ipsa ipsam impedit nobis.
                </p>

                <button
                    type="button"
                    className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 items-center">
                    Order Now
                </button>
            </div>

            <div className="py-2 flex-1 flex items-center relative">
                <img src={HeroBg} className="ml-auto lg:w-auto w-full h-420 lg:h-650" alt="HeroBg" />
                <div className="w-full h-full absolute flex items-center justify-center top-0 left-0 py-4 gap-4 flex-wrap lg:px-32">
                    {heroData && heroData.map(n => (
                        <div key={n.id} className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
                            <img
                                src={n.imageSrc}
                                className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                                alt="Ice Cream" />
                            <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                                {n.name}
                            </p>
                            <p className="text-[10px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                                {n.decp}
                            </p>
                            <p className="text-sm font-semibold text-headingColor">
                                <span className="text-xs text-red-600">$</span> {n.price}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default HomeContainer;