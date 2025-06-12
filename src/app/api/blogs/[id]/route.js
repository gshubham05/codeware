import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db";
import Blog from "../../../models/Blog";

// GET /api/blogs/:id
export async function GET(req, { params }) {
  await connectDB();

  try {
    const blog = await Blog.findById(params.id);

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("GET /api/blogs/[id] error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}
