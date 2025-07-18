// app/api/blogs/[id]/route.js
import { NextResponse } from "next/server";
import Blog from "../../models/Blog";
import { connectDB } from "../../lib/db";

// GET /api/blogs/:id
export async function GET(req, { params }) {
  await connectDB();
  try {
    const blog = await Blog.findById(params.id);
    if (!blog) return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    return NextResponse.json(blog);
  } catch (error) {
    console.error("GET blog error:", error);
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}

// PUT /api/blogs/:id
export async function PUT(req, { params }) {
  await connectDB();
  try {
    const data = await req.json();
    const updatedBlog = await Blog.findByIdAndUpdate(params.id, data, { new: true });

    if (!updatedBlog) return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error("PUT blog error:", error);
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
  }
}

// DELETE /api/blogs/:id
export async function DELETE(req, { params }) {
  await connectDB();
  try {
    const deletedBlog = await Blog.findByIdAndDelete(params.id);
    if (!deletedBlog) return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("DELETE blog error:", error);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}
