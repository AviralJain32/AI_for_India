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

import { hackathons, conferences } from '@/lib/data';

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
    { name: "Collaborators", href: "/collaborators" },
    { name: "Our Experts", href: "/experts" },
    { name: "About", href: "/about" },
    { name: "AI Assemblies", href: "/assemblies" },
    // { name: "AI Pro", href: "/ai-pro" },
    // { name: "AI Battles", href: "/ai-battles" },
    // { name: "AI Tools", href: "/ai-tools" },
    // { name: "AI Labs", href: "/ai-labs" },
    // { name: "AI for ALL", href: "/ai-for-all" },
    { name: "AI Headlines", href: "/news" },
    
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-dark-navy/90 dark:bg-dark-navy/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/Logo.jpg" alt="Logo" height={30} width={40} className="rounded-lg" />
          <span className="text-xl font-bold text-foreground">AFI Edutech</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Hackathons Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:text-saffron transition-colors font-medium">
              Hackathons
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-white dark:bg-dark-navy text-foreground border border-foreground/10 shadow-xl">
              <DropdownMenuLabel className="text-saffron">Hackathons</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {hackathons.map((hackathon) => (
                <DropdownMenuItem key={hackathon.slug} asChild>
                  <Link to={`/hackathons/${hackathon.slug}`}>
                    <div>
                      <p className="font-semibold">{hackathon.title}</p>
                      <p className="text-sm opacity-80">{hackathon.date} • {hackathon.prize}</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Conferences Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:text-saffron transition-colors font-medium">
              Conferences
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-white dark:bg-dark-navy text-foreground border border-foreground/10 shadow-xl">
              <DropdownMenuLabel className="text-saffron">Conferences</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {conferences.map((conference) => (
                <DropdownMenuItem key={conference.slug} asChild>
                  <Link to={`/conferences/${conference.slug}`}>
                    <div>
                      <p className="font-semibold">{conference.short}</p>
                      <p className="text-sm opacity-80">{conference.date}</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Other nav links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-foreground hover:text-saffron transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Button className="bg-saffron hover:bg-saffron/80 text-black">Join Now</Button>
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
        <div className="md:hidden bg-white dark:bg-deep-purple/95 backdrop-blur-lg animate-fade-in border-t border-foreground/10 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4 text-foreground">

              {/* Hackathons mobile submenu */}
              <p className="font-semibold text-saffron">Hackathons</p>
              {hackathons.map((hackathon) => (
                <Link
                  key={hackathon.slug}
                  to={`/hackathons/${hackathon.slug}`}
                  className="hover:text-saffron"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {hackathon.title} — {hackathon.date}
                </Link>
              ))}

              {/* Conferences mobile submenu */}
              <p className="font-semibold text-saffron">Conferences</p>
              {conferences.map((conference) => (
                <Link
                  key={conference.slug}
                  to={`/conferences/${conference.slug}`}
                  className="hover:text-saffron"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {conference.short} — {conference.date}
                </Link>
              ))}

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

              <Button className="bg-saffron hover:bg-saffron/80 text-black w-full mt-4">
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
