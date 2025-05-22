import Image from 'next/image';

export default function AboutPage() {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-4">
          About Us
        </h1>
        <div className="flex justify-center mb-12">
          <Image
            src="/W-logo.jpg"
            alt="Entertainment_And_Info Logo"
            width={200}
            height={200}
            objectFit="cover"
            className="rounded-full border-4 border-purple-600 shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-2xl rounded-xl p-6 sm:p-8 border border-purple-700 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 break-words">Entertainment_And_Info</h2>

          <p className="text-xl leading-relaxed text-gray-300 text-center">
            Entertainment_And_Info is a digital media brand dedicated to creating engaging, informative, and visually compelling content on YouTube. Our mission is to deliver bite-sized entertainment and insightful information through high-quality YouTube Shorts and videos that leave an impact.
          </p>

          <p className="text-xl leading-relaxed text-gray-300 text-center">
            We focus on a wide range of topics — from eye-catching visuals and storytelling to educational and thought-provoking content — all designed to entertain and inform viewers in under a minute.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-2xl rounded-xl p-6 sm:p-8 border border-purple-700 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-400">🎯 What We Do</h3>
          <ul className="list-none space-y-4 text-lg sm:text-xl leading-relaxed text-gray-300">
            <li className="flex items-start">
              <span className="mr-3 text-purple-400 text-2xl">🎬</span>
              <span><strong className="text-purple-400">YouTube Shorts Production</strong> – Fast-paced, impactful videos that grab attention</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-purple-400 text-2xl">📚</span>
              <span><strong className="text-purple-400">Info-packed Visuals</strong> – Turning knowledge into engaging, easy-to-understand clips</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-purple-400 text-2xl">🧠</span>
              <span><strong className="text-purple-400">Creative Storytelling</strong> – Every second of content is crafted with intention and purpose</span>
            </li>
          </ul>
        </div>


        <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-2xl rounded-xl p-6 sm:p-8 border border-purple-700 text-center">
          <p className="text-lg leading-relaxed">
            Whether you're here to explore, collaborate, or get inspired, Entertainment_And_Info is your destination for smart, creative, and scroll-stopping content.
          </p>
        </div>
      </div>
    </div>
  );
}