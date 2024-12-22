import Link from 'next/link'
import { getAllPosts } from '../blogposts/registry'

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <time className="text-sm text-gray-400">{post.date}</time>
          </article>
        ))}
      </div>
    </div>
  )
}