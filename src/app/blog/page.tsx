import BlogList from "@/components/blog-list";
import { getBlogPosts } from "@/lib/get-blog-posts";

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <main className="min-h-screenpy-16 px-4 bg-gradient-to-b from-blue-50 to-blue-200">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold text-sky-800 mb-12 text-center">
          Umeed Kiran Blog
        </h1>
        {blogPosts.length > 0 ? (
          <BlogList posts={blogPosts} />
        ) : (
          <p className="text-center text-sky-600">No blog posts available.</p>
        )}
      </div>
    </main>
  );
}

