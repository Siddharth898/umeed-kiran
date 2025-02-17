import LandingPage from "@/components/LandingPage";
import BlogList from "@/components/blog-list";
import { getBlogPosts } from "@/lib/get-blog-posts";

export default async function Home() {
  const blogPosts = await getBlogPosts();

  return (
    <main className="min-h-screen antialiased bg-white">
      {/* Landing Page Section */}
      <LandingPage />

      {/* Blog Section */}
      <section className="bg-sky-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-sky-800 mb-10 text-center">
            Umid Kiran Blog
          </h2>
          {blogPosts.length > 0 ? (
            <BlogList posts={blogPosts} />
          ) : (
            <p className="text-center text-sky-600">No blog posts available.</p>
          )}
        </div>
      </section>
    </main>
  );
}
