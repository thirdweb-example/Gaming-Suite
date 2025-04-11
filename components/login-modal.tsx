"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ConnectButton } from "thirdweb/react"
import { createThirdwebClient, defineChain } from "thirdweb"
import { ecosystemWallet } from "thirdweb/wallets";


interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onLogin: () => void
}

export default function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_ClIENTID!
  });
  const chain = defineChain(2021)
  const wallets = [ecosystemWallet("ecosystem.thirdweb-games")];


  const handleConnect = async () => {
    setIsLoading(true)
    // Simulate connection delay
    setTimeout(() => {
      setIsLoading(false)
      onLogin()
      onClose()
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleConnect}>
      <DialogContent className="bg-[#1A1A1A] border-[#3D3D3D]">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogDescription className="text-gray-400">
            Connect your wallet to access game perks and save your progress.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4 flex justify-center">
          <ConnectButton
          client={client}
          chain={chain}
          wallets={wallets}/>
        </div>
        <div className="text-xs text-gray-500 text-center">
          By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
        </div>
      </DialogContent>
    </Dialog>
  )
}

