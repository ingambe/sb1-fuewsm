import Image from 'next/image';
import Link from 'next/link';
import { Search, TrendingUp, Home, Key } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Dream Home with AI</h1>
        <p className="text-xl text-gray-600 mb-8">Discover, book, and move into your perfect property with our AI-powered platform.</p>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Enter location, property type, or keywords"
              className="w-full md:w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="w-full md:w-auto px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300 flex items-center justify-center">
              <Search className="w-5 h-5 mr-2" />
              Search Properties
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose AI Real Estate</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
            <p className="text-gray-600">Get personalized property recommendations based on your preferences and market trends.</p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Virtual Tours</h3>
            <p className="text-gray-600">Explore properties from the comfort of your home with our immersive 3D virtual tours.</p>
          </div>
          <div className="text-center">
            <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Key className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Seamless Booking</h3>
            <p className="text-gray-600">Book property viewings or rentals with just a few clicks, powered by our smart scheduling system.</p>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={`https://source.unsplash.com/random/800x600?house,${i}`} alt={`Featured Property ${i}`} width={800} height={600} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Modern {i === 1 ? 'Apartment' : i === 2 ? 'House' : 'Villa'}</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam.</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">$1,{500 + i * 100}/month</span>
                  <Link href={`/property/${i}`} className="text-primary hover:underline">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
        <p className="text-xl mb-6">Let our AI-powered platform guide you to the perfect property.</p>
        <Link href="/search" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
          Start Your Search
        </Link>
      </section>
    </div>
  );
}