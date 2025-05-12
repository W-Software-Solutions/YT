import Link from 'next/link'; 
import Image from 'next/image'; 

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start"> 

          <div className="w-full md:w-1/4 mb-6 md:mb-0 flex flex-col items-center">
            <Image
              src="/W-logo.jpg" 
              alt="Channel Logo"
              width={150} 
              height={150}
              className="rounded-full" 
            />
            <h1 className='font-bold items-center p-3 py-5'>Entertainment_And_Info</h1>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0"> 
            <h3 className="text-xl font-bold text-blue-500 mb-4">Navigation</h3>
            <ul>
              <li className="mb-2">
                <Link href="/" className="hover:text-blue-500 transition duration-300">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="hover:text-blue-500 transition duration-300">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/videos" className="hover:text-blue-500 transition duration-300">
                  Videos
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/community" className="hover:text-blue-500 transition duration-300">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0"> {/* Adjusted width */}
            <h3 className="text-xl font-bold text-blue-500 mb-4">Connect with Us</h3>
            <div className="flex flex-col space-y-2"> {/* Changed to flex-col for stacked links */}
              <a
                href="YOUR_YOUTUBE_CHANNEL_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                YouTube
              </a>
              <a
                href="YOUR_TWITTER_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                Twitter
              </a>
              <a
                href="YOUR_INSTAGRAM_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                Instagram
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0"> {/* Adjusted width */}
            <h3 className="text-xl font-bold text-blue-500 mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm">
              You can reach out to us via the social media links or use the contact Page.
            </p>
            <Link href="/contact" className="text-blue-500 hover:underline">Go to Contact Page</Link>
          </div>

        </div>


        <div className="w-full text-center mt-8">
          <p className="text-gray-400 text-sm">&copy;  Entertainment_And_Info. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
