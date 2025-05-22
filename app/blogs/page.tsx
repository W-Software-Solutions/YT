'use client';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Digital Storytelling',
      date: 'October 26, 2023',
      excerpt: 'Explore how technology is reshaping the way we tell stories...',
      link: '#', 
    },
    {
      id: 2,
      title: 'Color Palettes in the Digital Age',
      date: 'October 20, 2023',
      excerpt: 'A look into the vibrant and dynamic world of digital colors...',
      link: '#', 
    },
    {
      id: 3,
      title: 'Designing for the Responsive Web',
      date: 'October 15, 2023',
      excerpt: 'Tips and tricks for creating websites that look great everywhere...',
      link: '#', 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 text-white font-sans p-4">
      <header className="text-center py-10">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wider text-purple-300 drop-shadow-lg">
          Our Blog
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-indigo-300">
          Exploring the future of entertainment and info
        </p>
      </header>

      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-purple-700 hover:border-purple-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">{post.title}</h2>
              <p className="text-sm text-indigo-400 mb-4">{post.date}</p>
              <p className="text-gray-300 mb-5">{post.excerpt}</p>
              <a href={post.link} className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-5 rounded-full transition duration-300 ease-in-out">
                Read More
              </a>
            </article>
          ))}
        </div>
      </main>

      <footer className="text-center py-8 mt-10 text-gray-400">
        <p>&copy; 2023 Entertainment_And_Info. All rights reserved.</p>
      </footer>
    </div>
  );
}