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

import { hackathons, conferences, aiChallengeEvents } from '@/lib/data';

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
    { name: "About", href: "/about" },
    { name: "Hackathons", href: "/hackathons", isDropdown: true },
    { name: "AI & Emerging Tech Challenges", href: "/ai-challenges" },
    { name: "Conferences", href: "/conferences", isDropdown: true },
    { name: "CMS", href: "/cms" },
    { name: "Collaborators", href: "/collaborators" },
    { name: "Industry Experts", href: "/experts" },
    { name: "Team", href: "/team" },
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
          {/* About - plain link */}
          <Link
            to="/about"
            className="text-foreground hover:text-saffron transition-colors font-medium"
          >
            About
          </Link>

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

          {/* AI & Emerging Tech Challenges - plain link */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:text-saffron transition-colors font-medium">
              AI & Emerging Tech Challenges
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 bg-white dark:bg-dark-navy text-foreground border border-foreground/10 shadow-xl">
              <DropdownMenuLabel className="text-saffron">AI & Emerging Tech Challenges</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {aiChallengeEvents.map((challenge) => (
                <DropdownMenuItem key={challenge.slug} asChild>
                  <Link to={`/hackathons/${challenge.slug}`}>
                    <div>
                      <p className="font-semibold">{challenge.title}</p>
                      <p className="text-sm opacity-80">{challenge.date} • {challenge.prize}</p>
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

          {/* CMS - plain link */}
          <Link
            to="/cms"
            className="text-foreground hover:text-saffron transition-colors font-medium"
          >
            CMS
          </Link>

          {/* Collaborators - plain link */}
          <Link
            to="/collaborators"
            className="text-foreground hover:text-saffron transition-colors font-medium"
          >
            Collaborators
          </Link>

          {/* Industry Experts - plain link */}
          <Link
            to="/experts"
            className="text-foreground hover:text-saffron transition-colors font-medium"
          >
            Industry Experts
          </Link>

          {/* Team - plain link */}
          <Link
            to="/team"
            className="text-foreground hover:text-saffron transition-colors font-medium"
          >
            Our Team
          </Link>

          {/* <Button className="bg-saffron hover:bg-saffron/80 text-black">Join Now</Button> */}
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

              {/* About */}
              <Link
                to="/about"
                className="hover:text-saffron py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Hackathons mobile submenu */}
              <p className="font-semibold text-saffron">Hackathons</p>
              {hackathons.map((hackathon) => (
                <Link
                  key={hackathon.slug}
                  to={`/hackathons/${hackathon.slug}`}
                  className="hover:text-saffron pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {hackathon.title} — {hackathon.date}
                </Link>
              ))}

              {/* AI & Emerging Tech Challenges */}
              <Link
                to="/ai-challenges"
                className="hover:text-saffron py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI & Emerging Tech Challenges
              </Link>

              {/* Conferences mobile submenu */}
              <p className="font-semibold text-saffron">Conferences</p>
              {conferences.map((conference) => (
                <Link
                  key={conference.slug}
                  to={`/conferences/${conference.slug}`}
                  className="hover:text-saffron pl-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {conference.short} — {conference.date}
                </Link>
              ))}

              {/* CMS */}
              <Link
                to="/cms"
                className="hover:text-saffron py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CMS
              </Link>

              {/* Collaborators */}
              <Link
                to="/collaborators"
                className="hover:text-saffron py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Collaborators
              </Link>

              {/* Industry Experts */}
              <Link
                to="/experts"
                className="hover:text-saffron py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Industry Experts
              </Link>

              {/* Team */}
              <Link
                to="/team"
                className="hover:text-saffron py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Team
              </Link>

              {/* <Button className="bg-saffron hover:bg-saffron/80 text-black w-full mt-4">
                Join Now
              </Button> */}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
