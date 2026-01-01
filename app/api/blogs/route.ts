import { NextResponse } from "next/server";

const SITE = "kassaposbillingsoftware.wordpress.com";

function stripHtml(html: string = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}

export async function GET() {
  try {
    const res = await fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/${SITE}/posts/?number=10`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("WP BLOG API ERROR:", res.status);
      return NextResponse.json([], { status: 200 });
    }

    const data = await res.json();

    const blogs = data.posts.map((post: any) => ({
      _id: post.ID,

      title: post.title,

      slug: {
        current: post.slug,
      },

      metadata: stripHtml(post.excerpt),

      body: post.content, // HTML content

      mainImage: {
        asset: {
          url: post.featured_image || "/images/blog-placeholder.jpg",
        },
        alt: post.title,
      },

      author: {
        _id: post.author?.ID,
        name: post.author?.name || "Admin",
        image:
          post.author?.avatar_URL || "/images/default-user.png",
        bio: post.author?.description || "",
      },

      tags: post.tags
        ? Object.values(post.tags).map((tag: any) => tag.name)
        : [],

      publishedAt: post.date,
    }));

    return NextResponse.json(blogs);
  } catch (error: any) {
    console.error("BLOG FETCH ERROR:", error.message);
    return NextResponse.json([], { status: 200 });
  }
}
