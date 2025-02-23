import BlogList from "@/components/blog-list";
import { getBlogPosts } from "@/lib/get-blog-posts";

export default async function BlogPage({ searchParams }: { searchParams?: { page?: string } }) {
  console.log("Fetching blog posts...");

  // Ensure valid page number
  const params = await searchParams
  const currentPage = Math.max(parseInt(params?.page || "1", 10), 1);
  const blogs = await getBlogPosts(currentPage);
  
  // Assume pagination limit is 6 posts per page
  const hasMore = blogs.length > 6; 

  return (
    <main className="min-h-screen py-16 px-4 bg-gradient-to-b from-blue-50 to-blue-200">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold text-sky-800 mb-12 text-center">
          Umeed Kiran Blog
        </h1>
        {blogs.length > 0 ? (
          <BlogList posts={blogs} currentPage={currentPage} hasMore={hasMore} />
        ) : (
          <p className="text-center text-sky-600">No blog posts available.</p>
        )}
      </div>
    </main>
  );
}
