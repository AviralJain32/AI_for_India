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
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { hackathons, conferences, aiChallengeEvents, olympiads } from '@/lib/data';

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

  const eventSections = [
    {
      label: 'Hackathons',
      items: hackathons.map((hackathon) => ({
        title: hackathon.title,
        date: hackathon.date,
        href: `/hackathons/${hackathon.slug}`,
      })),
    },
    {
      label: 'AI & Emerging Tech Challenges',
      items: aiChallengeEvents.map((challenge) => ({
        title: challenge.title,
        date: challenge.date,
        href: `/hackathons/${challenge.slug}`,
      })),
    },
    {
      label: 'International Conferences',
      items: conferences.map((conference) => ({
        title: conference.short,
        date: conference.date,
        href: `/conferences/${conference.slug}`,
      })),
    },
    {
      label: 'Olympiads',
      items: olympiads.map((olympiad) => ({
        title: olympiad.short,
        date: olympiad.date,
        href: `/olympiads/${olympiad.slug}`,
      })),
    },
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
          <img src="/Logo.jpeg" alt="Logo" height={30} width={40} className="rounded-lg" />
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
          

          {/* Events Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-foreground hover:text-saffron transition-colors font-medium">
              R&D projects
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[320px] bg-white dark:bg-dark-navy text-foreground border border-foreground/10 shadow-xl p-1">
              <DropdownMenuLabel className="text-saffron px-3 py-2 text-sm">Events</DropdownMenuLabel>
              <div className="space-y-1">
                {eventSections.map((section) => (
                  <DropdownMenuSub key={section.label}>
                    <DropdownMenuSubTrigger className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent">
                      <span>{section.label}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-96 bg-white dark:bg-dark-navy text-foreground border border-foreground/10 shadow-xl p-1">
                      {section.items.map((item) => (
                        <DropdownMenuItem key={item.title} asChild>
                          {item.href === '#' ? (
                            <div className="rounded-md px-3 py-2 w-full flex flex-col gap-1">
                              <p className="font-semibold text-sm break-words">{item.title}</p>
                              <p className="text-xs opacity-70">{item.date}</p>
                            </div>
                          ) : (
                            <Link to={item.href} className="rounded-md px-3 py-2 w-full flex flex-col gap-1">
                              <p className="font-semibold text-sm break-words">{item.title}</p>
                              <p className="text-xs opacity-70">{item.date}</p>
                            </Link>
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

         <Link
            to="/rd-projects"
            className="text-foreground hover:text-saffron transition-colors font-medium"
          >
            R&I events
          </Link>
          {/* CMS - plain link */}
          {/* <Link
            to="/cms"
            className="text-foreground hover:text-saffron transition-colors font-medium"
          >
            CMS
          </Link> */}

          {/* Collaborators - plain link */}
          <Link
            to="/collaborators"
            className="text-foreground hover:text-saffron transition-colors font-medium"
          >
            Collaborators
          </Link>

          {/* <Link
            to="/partner-schools"
            className="text-foreground hover:text-saffron transition-colors font-medium"
          >
            Partner Schools
          </Link> */}

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

              {/* Events mobile submenu */}
              <div>
                <p className="font-semibold text-saffron py-2">Events</p>
                <div className="space-y-3">
                  {eventSections.map((section) => (
                    <div key={section.label}>
                      <p className="font-medium text-foreground/80 px-2 py-1.5 text-sm">{section.label}</p>
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          item.href === '#' ? (
                            <div key={item.title} className="px-6 py-1.5 text-foreground/70">
                              <p className="font-medium text-sm">{item.title}</p>
                              <p className="text-xs">{item.date}</p>
                            </div>
                          ) : (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="block px-6 py-1.5 hover:text-saffron hover:bg-foreground/5 rounded-md"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <p className="font-medium text-sm">{item.title}</p>
                              <p className="text-xs text-foreground/70">{item.date}</p>
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/rd-projects"
                className="hover:text-saffron py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                R&D Projects
              </Link>

              {/* CMS */}
              {/* <Link
                to="/cms"
                className="hover:text-saffron py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CMS
              </Link> */}

              {/* Collaborators */}
              <Link
                to="/collaborators"
                className="hover:text-saffron py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Collaborators
              </Link>

              <Link
                to="/partner-schools"
                className="hover:text-saffron py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Partner Schools
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
