import Image from "next/image"
import { getBlogPost } from "@/lib/get-blog-posts"
import { notFound } from "next/navigation"

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id)

  if (!post) {
    notFound() // Redirects to Next.js 404 page
  }

  return (
    <main className="min-h-screen bg-sky-100">
      <article className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-sky-800 mb-4">{post.title}</h1>

        <Image
          src={post.imageUrl || "/placeholder.svg"}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg mb-6"
          priority
        />

        <div className="prose prose-sky max-w-none">{post.content}</div>
      </article>
    </main>
  )
}
