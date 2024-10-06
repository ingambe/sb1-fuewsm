import Link from 'next/link';
import { Home, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Home className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-primary">AI Real Estate</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/search" className="flex items-center space-x-1 text-gray-600 hover:text-primary">
                <Search className="w-5 h-5" />
                <span>Find Properties</span>
              </Link>
            </li>
            <li>
              <Link href="/account" className="flex items-center space-x-1 text-gray-600 hover:text-primary">
                <User className="w-5 h-5" />
                <span>Account</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;