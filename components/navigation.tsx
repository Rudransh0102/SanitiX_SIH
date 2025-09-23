"use client";

// import { useState } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Menu, Shield, HardDrive, History, Settings, HelpCircle, Home } from "lucide-react"
// import { cn } from "@/lib/utils"

// const navigation = [
//   { name: "Home", href: "/", icon: Home },
//   { name: "Devices", href: "/devices", icon: HardDrive },
//   { name: "History", href: "/history", icon: History },
//   { name: "Settings", href: "/settings", icon: Settings },
//   { name: "Help", href: "/help", icon: HelpCircle },
// ]

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const pathname = usePathname()

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center justify-between px-4">
//         <div className="flex items-center gap-2">
//           <Shield className="h-8 w-8 text-primary" />
//           <span className="text-xl font-bold text-balance">SanitiX</span>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-6">
//           {navigation.map((item) => {
//             const Icon = item.icon
//             return (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={cn(
//                   "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
//                   pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
//                 )}
//               >
//                 <Icon className="h-4 w-4" />
//                 {item.name}
//               </Link>
//             )
//           })}
//         </nav>

//         {/* Mobile Navigation */}
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger asChild className="md:hidden">
//             <Button variant="ghost" size="icon">
//               <Menu className="h-5 w-5" />
//               <span className="sr-only">Toggle menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//             <div className="flex flex-col gap-4 mt-8">
//               {navigation.map((item) => {
//                 const Icon = item.icon
//                 return (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className={cn(
//                       "flex items-center gap-3 px-3 py-3 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
//                       pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
//                     )}
//                   >
//                     <Icon className="h-5 w-5" />
//                     {item.name}
//                   </Link>
//                 )
//               })}
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   )
// }

"use client";

import { useState } from "react";
// import { useTheme } from "@/components/theme-provider";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Menu,
  Shield,
  HardDrive,
  History,
  Settings,
  HelpCircle,
  Home,
  X,
} from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  // const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Devices", path: "/devices", icon: HardDrive },
    { name: "History", path: "/history", icon: History },
    { name: "Settings", path: "/settings", icon: Settings },
    { name: "Help", path: "/help", icon: HelpCircle },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300,
        mass: 0.5,
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "tween", stiffness: 300, damping: 15 },
    },
    exit: { opacity: 0, x: 20 },
  };

  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Create a motion-enhanced Link component
  const MotionLink = motion.create(Link);

  return (
    <nav className={`fixed top-0 md:top-4 w-full z-50 mb-10`}>
      <div className="md:max-w-fit md:border-2 md:rounded-full mx-auto px-7 py-2 bg-zinc-200/50 dark:bg-slate-900/50 backdrop-blur-3xl">
        <div className="flex justify-between items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-clip-text text-transparent"
          >
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gray-600 text-balance">SanitiX</span>
              {" "}
            </div>
          </motion.div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ name, path, icon: IconComponent }, index) => (
                <MotionLink
                  key={name}
                  href={path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  <IconComponent size={16} />
                  {name}
                </MotionLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>

            {/* Theme Toggle */}
            {/* <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Icon icon="solar:sun-bold" className="text-yellow-500" width={20} height={20} />
              ) : (
                <Icon icon="solar:moon-bold" className="text-blue-500" width={20} height={20} />
              )}
            </motion.button> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              style={{ top: "4.5rem" }}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Container */}
            <motion.div
              key="dropdown"
              className="md:hidden fixed top-16 right-4 -translate-x-1/2 z-50 bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl rounded-2xl p-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="space-y-2">
                {navItems.map(({ name, path, icon: IconComponent }) => (
                  <MotionLink
                    key={name}
                    href={path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 py-3 px-4 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-slate-800 rounded-lg transition-colors duration-300 text-base font-medium"
                    variants={itemVariants}
                    // whileHover={{
                    //   scale: 1.03,
                    //   backgroundColor:
                    //     theme === "dark"
                    //       ? "rgba(255,255,255,0.1)"
                    //       : "rgba(0,0,0,0.05)",
                    // }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <motion.span
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent size={16} />
                    </motion.span>
                    {name}
                  </MotionLink>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
