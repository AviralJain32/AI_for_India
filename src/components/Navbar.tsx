
// import React, { useState, useEffect } from 'react';
// import { Button } from "@/components/ui/button";
// import { Moon, Sun, Menu, X } from "lucide-react";
// import { useTheme } from "next-themes";
// import { cn } from '@/lib/utils';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const { setTheme, theme } = useTheme();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const navLinks = [
//     { name: "About", href: "/about" },
//     { name: "AI Assemblies", href: "/assemblies" },
//     { name: "AI Pro", href: "/ai-pro" },
//     { name: "AI Battles", href: "/ai-battles" },
//     { name: "AI Tools", href: "/ai-tools" },
//     { name: "AI Labs", href: "/ai-labs" },
//     { name: "AI for ALL", href: "/ai-for-all" },
//     { name: "AI Headlines", href: "/news" },
//   ];

//   return (
//     <header 
//       className={cn(
//         "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
//         scrolled ? "bg-dark-navy/80 backdrop-blur-lg shadow-md" : "bg-transparent"
//       )}
//     >
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         <Link to="/" className="flex items-center space-x-2">
//           {/* <div className="h-8 w-8 rounded-md bg-gradient-to-br from-saffron to-neon-blue flex items-center justify-center">
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
//               <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
//               <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//               <path d="M17.5 6.5h.01"></path>
//             </svg>
//           </div> */}
//           <img src="/Logo.jpg" alt="Logo" height={30} width={40} className='rounded-lg'/>
//           <span className="text-xl font-bold">
//             <span className="text-white">AFI Edutech</span>
//             {/* <span className="text-white"> FOR </span>
//             <span className="text-india-green">INDIA</span> */}
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           <nav className="flex items-center space-x-6">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.href}
//                 className="text-white hover:text-saffron transition-colors"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>
//           <Button 
//             onClick={toggleTheme}
//             variant="ghost" 
//             size="icon"
//             className="mr-2"
//           >
//             {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//           </Button>
//           <Button className="bg-saffron hover:bg-saffron/80 text-white">
//             Join Now
//           </Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="flex items-center md:hidden">
//           <Button onClick={toggleTheme} variant="ghost" size="icon" className="mr-2">
//             {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//           </Button>
//           <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
//             {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-deep-purple/95 backdrop-blur-lg animate-fade-in">
//           <div className="container mx-auto px-4 py-4">
//             <nav className="flex flex-col space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.href}
//                   className="text-white hover:text-saffron transition-colors py-2"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//               <Button className="bg-saffron hover:bg-saffron/80 text-white w-full mt-4">
//                 Join Now
//               </Button>
//             </nav>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// Shadcn dropdown components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { setTheme, theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: "Conference", href: "/conference" },
    { name: "AI Challenge", href: "/ai-challenge" },
    { name: "AI Labs", href: "/ai-labs" },
    { name: "News", href: "/news" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-dark-navy/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/Logo.jpg" alt="Logo" height={30} width={40} className="rounded-lg" />
          <span className="text-xl font-bold text-white">AFI Edutech</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Hackathon Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white hover:text-saffron transition-colors font-medium">
              Hackathon
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-64 bg-dark-navy text-white">
              <DropdownMenuLabel className="text-saffron">Hackathons</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <Link to="/hackathon/one-earth">
                  <div>
                    <p className="font-semibold">🌍 One Earth Hackathon</p>
                    <p className="text-sm opacity-80">A global sustainability hackathon.</p>
                  </div>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/hackathon/hacksecurex">
                  <div>
                    <p className="font-semibold">🔐 HackSecureX</p>
                    <p className="text-sm opacity-80">Cybersecurity-focused innovation challenge.</p>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Other nav links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-white hover:text-saffron transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Theme Toggle */}
          <Button onClick={toggleTheme} variant="ghost" size="icon" className="mr-2">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button className="bg-saffron hover:bg-saffron/80 text-white">Join Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Button onClick={toggleTheme} variant="ghost" size="icon" className="mr-2">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button onClick={toggleMobileMenu} variant="ghost" size="icon">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-deep-purple/95 backdrop-blur-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4 text-white">

              {/* Hackathon mobile submenu */}
              <p className="font-semibold text-saffron">Hackathon</p>

              <Link
                to="https://www.oneearthhackathon.com/"
                className="hover:text-saffron"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🌍 One Earth Hackathon — A global sustainability hackathon
              </Link>

              <Link
                to="https://www.hacksecurex.com/"
                className="hover:text-saffron"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🔐 HackSecureX — Cybersecurity innovation challenge
              </Link>

              <hr className="opacity-40" />

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="hover:text-saffron py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Button className="bg-saffron hover:bg-saffron/80 text-white w-full mt-4">
                Join Now
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
