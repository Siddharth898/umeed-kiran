import Link from "next/link";
import Image from "next/image";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl?: string; // Made optional for better fallback handling
};

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link href={`/blog/${post.id}`} key={post.id} className="block">
          <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="relative w-full h-48">
              <Image
                src={post.imageUrl ? post.imageUrl : "/images/placeholder.svg"}
                alt={post.title || "Blog post image"}
                fill
                className="object-cover"
                priority={post.id === "1"} // Load the first image with priority
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-sky-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
