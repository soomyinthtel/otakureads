"use client";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";
import { User, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Switch from "./ui/Switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/Tooltip";

export default function Navigation() {
  const t = useTranslations("Navigation");
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="mx-auto bg-white/70 mb-4 sm:my-4 px-4 sticky top-0 sm:top-4 z-10 w-full max-w-2xl rounded-none sm:rounded-full">
      <nav className="flex items-center justify-between py-2 text-black">
        <NavigationLink href="/" className="text-primary text-xl font-bold">
          OtakuReads
        </NavigationLink>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-4">
          <Switch />
          <LocaleSwitcher />
          <User className="cursor-pointer hover:text-primary transition-all ease-in" />
          {/* <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
              <User className="cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-primary">Login</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider> */}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 opacity-0" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="sm:hidden w-full fixed top-0 right-0 h-screen bg-background pt-2 pr-4"
          >
            <div className="flex flex-col items-end space-y-6">
              <button
                className="self-end p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
              <div className="w-full flex flex-col items-end pr-4 space-y-6">
                <Switch />
                <LocaleSwitcher />
                <User className="cursor-pointer hover:text-primary transition-all ease-in" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
