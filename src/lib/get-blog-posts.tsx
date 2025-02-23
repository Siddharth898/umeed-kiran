export async function getBlogPosts(page = 1, limit = 6) {
  // In a real application, you would fetch this data from a database or API
  try {
    console.log("aaya")
    const response = await fetch(`http://localhost:3000/api/blogs?page=${page}&limit=${limit}`);
    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || "Failed to fetch blogs");
    }

    return data.blogs;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPost(id: string) {
  const response = await fetch(`http://localhost:3000/api/blogs/${id}`);
  const data = await response.json();

  if (!data.success) return null; // Handle errors properly

  return data.blog; // ✅ Ensure this returns an object with `imageUrl`
}


