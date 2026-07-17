
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-navy dark:bg-dark-navy pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="h-8 w-8 rounded-md bg-gradient-to-br from-saffron to-neon-blue flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <path d="M17.5 6.5h.01"></path>
                </svg>
              </div> */}
           <img src="/Logo.jpeg" alt="Logo" height={30} width={40} className='rounded-lg'/>

              <span className="text-xl font-bold">
                {/* <span className="text-saffron">AI</span> */}
                <span className="text-foreground">AFI Edutech</span>
                {/* <span className="text-india-green">INDIA</span> */}
              </span>
            </div>
            <p className="text-foreground/70 mb-6">
              We are a next-generation EdTech company driving global innovation through hackathons, AI challenges, and international research conferences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-saffron transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-saffron transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-saffron transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-saffron transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-saffron transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-foreground font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-saffron transition-colors">About Us</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-saffron transition-colors">Hackathons</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-saffron transition-colors">Conferences</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-saffron transition-colors">Programs</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-saffron transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-foreground/70">📧 afiedutech@gmail.com</li>
              <li className="text-foreground/70">🌐 www.afiedutech.com</li>
              <li className="text-foreground/70">📍 Global Operations</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-foreground font-medium text-lg mb-4">Newsletter</h3>
            <p className="text-foreground/70 mb-4">Subscribe to stay updated with our latest news and events.</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/20 dark:bg-white/10 border-foreground/20 dark:border-white/20 text-foreground placeholder:text-foreground/50 focus:border-saffron"
              />
              <Button className="bg-saffron hover:bg-saffron/80">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 dark:border-white/10 pt-8 text-center">
          <p className="text-foreground/50 dark:text-black/50 text-sm">
            © {new Date().getFullYear()} AFI Edutech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
