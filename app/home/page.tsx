"use client";

import * as React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  MenuList,
  MenuItem,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import companyImage from "/app/public/encore.png";
import pdImage from "/app/public/project divert logo.png";
import backgroundImage from "/app/public/background.jpg";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ScaleIcon from "@mui/icons-material/Scale";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const encoreBlue = "#3382c4";
const encoreRed = "#f04e43";
const encorePurple = "#883995";
const encoreGreen = "#93bf3e";
const encoreGrey = "#444c52";

export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className="p-3 bg-white">
        <div className="flex items-center justify-between">
          <Image className="w-16 inline" src={pdImage} alt="Company Logo" />

          <div className="sm:hidden">
            <button className="text-stone-500" onClick={toggleMenu}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <ul className="hidden sm:flex space-x-4">
            <li><a href="/login" className="text-stone-500 hover:underline">LOG IN</a></li>
            <li><a href="/requestaccount" className="text-stone-500 hover:underline">SIGN UP</a></li>
            <li><a href="https://www.encore-environment.com/" className="text-stone-500 hover:underline">MAIN SITE</a></li>
            <li><a href="#" className="text-stone-500 hover:underline">HELP</a></li>
          </ul>
        </div>

        {/*Mobile Menu*/}

        {isMenuOpen ? (
          <ul className="flex-col sm:hidden">
            <li className="py-2"><a href="/login" className="text-stone-500 hover:underline">LOG IN</a></li>
            <li className="py-2"><a href="/requestaccount" className="text-stone-500 hover:underline">SIGN UP</a></li>
            <li className="py-2"><a href="https://www.encore-environment.com/" className="text-stone-500 hover:underline">MAIN SITE</a></li>
            <li className="py-2"><a href="#" className="text-stone-500 hover:underline">HELP</a></li>
          </ul>
        ) : null}

      </nav>

      <div>
        <div className="relative">
          <div className="h-96 overflow-hidden">
            <Image
              alt="background"
              src={backgroundImage}
              layout="fill"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-25"></div>
          </div>

          <div className="absolute bottom-0 w-full z-10 bg-black bg-opacity-50 p-4">
            <div className="flex flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-8">
              <div className="flex flex-col items-center">
                <IconButton>
                  <CurrencyPoundIcon style={{ color: "white", fontSize: 48 }} />
                </IconButton>
                <p className="text-white text-center">£60k+ saved</p>
              </div>
              <div className="flex flex-col items-center">
                <IconButton>
                  <VolunteerActivismIcon style={{ color: "white", fontSize: 48 }} />
                </IconButton>
                <p className="text-white text-center">148 charities helped</p>
              </div>
              <div className="flex flex-col items-center">
                <IconButton>
                  <ScaleIcon style={{ color: "white", fontSize: 48 }} />
                </IconButton>
                <p className="text-white text-center">44k+ kgCO2 saved</p>
              </div>
              <div className="flex flex-col items-center">
                <IconButton>
                  <EmojiEmotionsIcon style={{ color: "white", fontSize: 48 }} />
                </IconButton>
                <p className="text-white text-center">100% social value</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white font-sans">
          <h2 className="text-2xl font-bold mb-4">What is Project Divert?</h2>
          <p className="mb-4 text-black">Our award winning initiative was set up to reduce landfill and boost social value.</p>
          <p className="text-black mb-4">Project DIVERT has diverted hundreds of tonnes of construction waste from landfill, 
            stopped the release of millions of tonnes of carbon into the atmosphere and on average saved construction companies 
            30% on waste costs.</p>

          <p className="text-black mb-4">In simple terms, we identify good quality, reusable items from the sites that we work with.
            We then identify nearby recipients who will benefit from a donation of items. This could be a charity, community group, 
            or even a school, college or university.
          </p>

          <p className="text-black mb-4">This process works wonders for everyone involved. Our clients gain an abundance of social value and 
            make huge savings on capital, but more importantly carbon. To date, we have prevented the emission of over 44,000kg of carbon into 
            the atmosphere! And this is only the beginning.
          </p>

          <p className="text-black mb-4">We bring value to communities by aiding good causes with items that they otherwise could
            not afford or have access to.
          </p>

          <p className="text-black mb-4">Learn more about Project Divert <a href="https://www.encore-environment.com/projectdivert/"
          className=" underline text-blue-800">
          here</a> on our main site.</p>

          <h2 className="text-2xl font-bold mb-4">How can you take part?</h2>

          <p className="text-black mb-4">Are you part of a good cause that is in need? 
            If you work for a charity, community group, educational facility, or any other organisation that you believe strives to bring value to their community,
            then <a href="/requestaccount" className=" underline text-blue-800">request your access</a> and become part of Project Divert.</p>

        </div>

      </div>
    </>
  );
}
