// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <section className="max-w-5xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Library</h1>
          <p className="text-xl text-gray-600">
            Exploring stories, sharing thoughts, and discovering new worlds through books
          </p>
        </div>

        {/* Featured Books Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Featured Books</h2>
          {/* We'll add the FeaturedBooks component here later */}
          <div className="bg-gray-100 p-4 rounded-md">
            <p>Featured books will go here</p>
          </div>
        </div>

        {/* Latest Posts Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
          {/* We'll add the LatestPosts component here later */}
          <div className="bg-gray-100 p-4 rounded-md">
            <p>Latest blog posts will go here</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="/books" 
            className="p-6 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Browse Books →</h3>
            <p className="text-gray-600">Explore my complete collection</p>
          </Link>

          <Link 
            href="/blog" 
            className="p-6 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Read Blog →</h3>
            <p className="text-gray-600">Check out my latest thoughts</p>
          </Link>

          <Link 
            href="/shortstories" 
            className="p-6 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Short Stories →</h3>
            <p className="text-gray-600">Quick reads and flash fiction</p>
          </Link>
        </div>
      </section>
    </main>
  )
}