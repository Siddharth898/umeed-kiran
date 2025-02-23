import { NextRequest, NextResponse } from "next/server";
import { databases, storage } from "@/app/appwrite";
import { Query } from "appwrite";

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string;
const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "6", 10);
    const offset = (page - 1) * limit; // Calculate the offset for pagination
    console.log("reached till here")
    const queries = [
      Query.limit(limit),
      Query.offset(offset), // Now properly using page-based pagination
      Query.orderDesc("$createdAt"),
    ];

    // Fetch blogs with pagination
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, queries);

    // Attach image URLs if blogs have images
    const blogsWithImages = response.documents.map((blog) => ({
      ...blog,
      imageUrl: blog.imageId ? storage.getFileView(BUCKET_ID, blog.imageId).href : null,
    }));

    return NextResponse.json({
      success: true,
      blogs: blogsWithImages,
      total: response.total,
      currentPage: page,
      totalPages: Math.ceil(response.total / limit),
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ success: false, message: "Failed to fetch blogs" }, { status: 500 });
  }
}
