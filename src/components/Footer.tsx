'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="font-bold text-lg flex items-center">
              <span className="text-purple-400">WasteTime</span>
              <span className="text-white">Games</span>
            </Link>
            <p className="text-sm text-gray-400 mt-1">© {currentYear} WasteTime Games. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div>
              <h3 className="text-white font-semibold mb-2">Contact</h3>
              <a 
                href="mailto:jinhongxie0407@gmail.com" 
                className="text-sm text-gray-400 hover:text-purple-300 transition-colors"
              >
                jinhongxie0407@gmail.com
              </a>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-2">Legal</h3>
              <div className="flex flex-col space-y-1">
                <Link 
                  href="/terms" 
                  className="text-sm text-gray-400 hover:text-purple-300 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-sm text-gray-400 hover:text-purple-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 