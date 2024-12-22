import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from './blogposts/registry'

export default function Home() {

  const latestPosts = getAllPosts().slice(0, 2)

  return (
    <div className="max-w-4xl mx-auto">
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="w-96 h-48 relative rounded-full overflow-hidden">
          <Image
            src={`/profile.jpg?t=${new Date().getTime()}`}
            alt="Profile picture"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">About me</h1>
          <p className="text-xl text-gray-300 mb-6">
            Professional software developer since 2013. 
            7 years in Finance. 
            Father and husband. 
            Lithuanian native living in the UK since 2012.
            Diagnosed with Ulcerative Colitis in 2019 and beat it.
          </p>
          <div className="text-right">
            <Link 
              href="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
              hidden
            >
              more
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
        <div className="grid gap-6">
          {latestPosts.map((post) => (
            <article key={post.id} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-300">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link 
            href="/blog"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            View All Posts →
          </Link>
        </div>
      </section>
    </div>
  )
}