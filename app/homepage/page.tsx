'use client'

import Image from "next/image";
import CharityImage from 'd:/Sam/Documents/Work/Encore/PD Project/charity.jpg';
import ConstructionImage from 'd:/Sam/Documents/Work/Encore/PD Project/construciton.jpg';
import { useState } from "react";
import { styled } from "@mui/material";

export default function HomePage() {
    const [backgroundImage, setBackgroundImage] = useState(CharityImage)
    return (
        <div>
            <div className="">
                <Image
                    src={backgroundImage}
                    alt="Charity Image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="">
                <Image
                    src={ConstructionImage}
                    alt="Charity Image"
                    layout="fill"
                    objectFit="cover"
                    hidden
                />
            </div>

            <p className="absolute -top-96 left-0 w-full h-full flex justify-center 
            items-center font-bold text-white text-5xl">Choose which option best suits you</p>

            <button className=" rounded-lg bg-[#0473ba] p-2 text-white font-bold
             hover:bg-[#ae1182] transition ease-in duration-400 absolute top-96 left-96 
               w-40 h-20 text-4xl opacity-70 hover:opacity-100"

                onMouseEnter={() => setBackgroundImage(CharityImage)}

            >Charity
            </button>

            <button className=" rounded-lg bg-[#0473ba] p-2 text-white font-bold
             hover:bg-[#ae1182] transition ease-in duration-400 absolute top-96 right-96
             w-50 h-20 text-4xl opacity-70 hover:opacity-100"

                onMouseEnter={() => setBackgroundImage(ConstructionImage)}
            
            >Construction Site


        </button>

        </div >

    )
} 