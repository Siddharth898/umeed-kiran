import Link from "next/link";
import Image from "next/image";


type BlogPost = {
  title: string;
  content: string;
  imageUrl?: string;
  $id: string;
};

interface BlogListProps {
  posts: BlogPost[];
  currentPage: number;
  hasMore: boolean;
}

export default function BlogList({ posts, currentPage, hasMore }: BlogListProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post['$id']} className="bg-white p-4 rounded-lg shadow-md">
            {/* Blog Image */}
            {post.imageUrl && (
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-md"
              />
            )}

            {/* Blog Title */}
            <h2 className="text-xl font-bold mt-4">{post.title}</h2>

            {/* Blog Excerpt */}
            <p className="text-gray-700">{post.content.substring(0, 100)}...</p>

            {/* Read More Link */}
            <Link href={`/blog/${post['$id']}`} className="text-blue-600 hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-4">
        {currentPage > 1 && (
          <Link href={`?page=${currentPage - 1}`} className="px-4 py-2 bg-blue-500 text-white rounded">
            Previous
          </Link>
        )}
        {hasMore && (
          <Link href={`?page=${currentPage + 1}`} className="px-4 py-2 bg-blue-500 text-white rounded">
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
