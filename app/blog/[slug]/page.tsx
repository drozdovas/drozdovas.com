import { getPostBySlug } from '../../blogposts/registry'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: PageProps) {
  const resolvedParams = await params
  const post = getPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <time className="text-gray-400 block mb-8">{post.date}</time>
      <div className="prose prose-invert max-w-none">
        {post.content}
      </div>
    </article>
  )
}