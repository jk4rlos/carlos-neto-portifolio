"use client";

import { Home, User, Briefcase, Code2, Linkedin,Github, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-zinc-900 dark:text-white font-semibold mb-3 text-lg">Carlos Neto</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Full Stack Developer | React | Next.js | TypeScript
            </p>
          </div>

          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold mb-4 text-base">Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 flex items-center gap-3 hover:translate-x-1"
                >
                  <Home size={16} />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 flex items-center gap-3 hover:translate-x-1"
                >
                  <User size={16} />    
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 flex items-center gap-3 hover:translate-x-1"
                >
                  <Briefcase size={16} />    
                  Work
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold mb-4 text-base">Social</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://github.com/carlosneto-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 flex items-center gap-3 hover:translate-x-1"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/carlosneto-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 flex items-center gap-3 hover:translate-x-1"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:carlosneto.dev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 flex items-center gap-3 hover:translate-x-1"
                >
                  <Mail size={16} />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}