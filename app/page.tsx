"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gamepad2, Trophy, ShoppingBag, User } from "lucide-react";


// Import tab components
import PlayGame from "@/components/tabs/play-game";
import Leaderboard from "@/components/tabs/leaderboard";
import Marketplace from "@/components/tabs/marketplace";
import { ConnectButton } from "thirdweb/react";
import { createThirdwebClient, defineChain } from "thirdweb";
import { ecosystemWallet } from "thirdweb/wallets";
import Items from "@/components/tabs/items";

export default function LandingPage() {

  const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_ClIENTID!
  });
  const chain = defineChain(2021);
  const wallets = [ecosystemWallet("ecosystem.thirdweb-games")];

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D] text-white">
      {/* Header */}
      <header className="p-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold flex items-center mb-4 md:mb-0"
          >
            <Image
              src="/placeholder.svg"
              alt="Take Flight Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="take-flight-text">Take Flight</span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center md:justify-end w-full md:w-auto">
            <ul className="flex flex-wrap space-x-6 mb-4 md:mb-0 pr-4">
              <li>
                <Link href="#play" className="hover:text-[#3D8BFD]">
                  Play
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#3D8BFD]">
                  About
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-[#3D8BFD]">
                  Features
                </Link>
              </li>
            </ul>

            {/* Connect Button */}
            <div className="w-full md:w-auto flex justify-center">
              {/* Ensure ConnectButton is responsive */}
              <ConnectButton
                client={client}
                chain={chain}
                wallets={wallets}
                connectButton={{
                  label: "Sign in",
                }}
              />
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center text-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#3D8BFD] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B3DFD] rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-3xl relative z-10">
          <h1 className="text-6xl font-bold mb-6">Take Flight</h1>
          <p className="text-xl mb-8 text-gray-300">
            An exhilarating infinite runner built with thirdweb SDK. Soar
            through the skies, compete globally, and trade unique items!
          </p>

          <Link href={"#play"}>
            <Button
              size="lg"
              className="bg-[#3D8BFD] hover:bg-[#3D8BFD]/90 text-white"
            >
              Play Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Tabs Section */}
      <section id="play" className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="game" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger
                value="game"
                className="flex items-center justify-center"
              >
                <Gamepad2 className="mr-2 h-4 w-4" />
                Play Game
              </TabsTrigger>
              <TabsTrigger
                value="leaderboard"
                className="flex items-center justify-center"
              >
                <Trophy className="mr-2 h-4 w-4" />
                Leaderboard
              </TabsTrigger>
              <TabsTrigger
                value="marketplace"
                className="flex items-center justify-center"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Marketplace
              </TabsTrigger>
              <TabsTrigger
                value="items"
                className="flex items-center justify-center"
              >
                <User className="mr-2 h-4 w-4" />
                Badges
              </TabsTrigger>
            </TabsList>
            <TabsContent value="game" className="mt-4 h-[80vh]">
              <PlayGame />
            </TabsContent>
            <TabsContent value="leaderboard" className="mt-4">
              <Leaderboard />
            </TabsContent>
            <TabsContent value="marketplace" className="mt-4">
              <Marketplace />
            </TabsContent>
            <TabsContent value="items" className="mt-4">
              <Items />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            About Take Flight
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="mb-4 text-gray-300">
              Take Flight is an exciting infinite runner game that combines
              fast-paced gameplay with blockchain technology. Built using the
              thirdweb SDK, it offers a unique gaming experience where your
              achievements and assets are securely stored on the blockchain.
            </p>
            <p className="text-gray-300">
              Compete with players from around the world, climb the global
              leaderboard, and trade rare items in our decentralized
              marketplace. Get ready to take flight and soar to new heights!
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Game Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#3D3D3D]">
              <h3 className="text-xl font-semibold mb-4">Infinite Runner</h3>
              <p className="text-gray-300">
                Experience endless gameplay with procedurally generated levels.
              </p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#3D3D3D]">
              <h3 className="text-xl font-semibold mb-4">
                Blockchain Integration
              </h3>
              <p className="text-gray-300">
                Secure your achievements and assets on the blockchain.
              </p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#3D3D3D]">
              <h3 className="text-xl font-semibold mb-4">Global Marketplace</h3>
              <p className="text-gray-300">
                Trade and collect unique in-game items with other players.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">
            &copy; 2024 Take Flight. All rights reserved.
          </p>
          <div className="mt-4">
            <Link
              href="#"
              className="text-[#3D8BFD] hover:text-[#3D8BFD]/90 mx-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-[#3D8BFD] hover:text-[#3D8BFD]/90 mx-2"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-[#3D8BFD] hover:text-[#3D8BFD]/90 mx-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
