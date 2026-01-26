"use client";
import * as React from "react";
import { RelatedPost } from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SITE = "kassaposbillingsoftware.wordpress.com"; // Replace with your WordPress site

const getCategories = async (): Promise<any[]> => {
    try {
        const res = await fetch(
            `https://public-api.wordpress.com/rest/v1.1/sites/${SITE}/categories`,
            { cache: "no-store" }
        );

        if (!res.ok) throw new Error("Failed to fetch categories");

        const data = await res.json();

        // Convert object to array
        return Object.values(data) as any[];
        console.log("Categories Data:", data);
    } catch (err) {
        console.error("Error fetching categories:", err);
        return [];
    }
};

// Fetch related posts based on categories
const getRelatedPosts = async (
    categoriesObj: any,
    currentPostId: number
) => {
    if (!categoriesObj || Object.keys(categoriesObj).length === 0) return [];

    // Convert categories object → array
    const categoriesArray = Object.values(categoriesObj) as any[];

    // Use FIRST category slug
    const primaryCategorySlug = categoriesArray[0]?.slug;
    if (!primaryCategorySlug) return [];

    const res = await fetch(
        `https://public-api.wordpress.com/rest/v1.1/sites/${SITE}/posts?category=${primaryCategorySlug}&number=3&exclude=${currentPostId}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        console.error("Failed to fetch related posts");
        return [];
    }

    const data = await res.json();
    return data.posts || [];
};


const BlogDetailsPage = () => {
    const pathname = usePathname();
    const [post, setPost] = React.useState < any > (null);
    const [relatedPosts, setRelatedPosts] = React.useState < any[] > ([]);
    const [categoriesList, setCategoriesList] = React.useState < any[] > ([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const blogId = pathname.split("blogDetails/")[1] ?? null;
                const res = await fetch(
                    `https://public-api.wordpress.com/rest/v1.1/sites/${SITE}/posts/${blogId}`,
                    { cache: "no-store" }
                );
                if (!res.ok) throw new Error("Blog not found");
                const postData = await res.json();
                setPost(postData);
                // Fetch related posts
                const related = await getRelatedPosts(postData.categories, postData.ID);
                console.log("Fetched Related Posts:", related);
                setRelatedPosts(related);
                const categories = await getCategories();
                setCategoriesList(categories[0].length ? categories[0] : categories[1]);
            } catch (error) {
                console.error("Error fetching blog post details:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="flex flex-col-reverse gap-5 lg:flex-row xl:gap-10">
                        <div className="md:w-1/2 lg:w-[32%]">
                            <div className="hidden animate_top mb-10 rounded-md border border-stroke bg-white p-3 dark:border-strokedark dark:bg-blacksection">
                                <form
                                    action="https://formbold.com/s/unique_form_id"
                                    method="POST"
                                >
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search Here..."
                                            className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                                        />

                                        <button
                                            className="absolute right-0 top-0 p-5"
                                            aria-label="search-icon"
                                        >
                                            <svg
                                                className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                                                width="21"
                                                height="21"
                                                viewBox="0 0 21 21"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-4 dark:border-strokedark dark:bg-blacksection">
                                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                                    Categories
                                </h4>

                                <ul>
                                    {categoriesList.map((category: any) => (
                                        <li key={category.ID} className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                                            <a href="#">{category.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <RelatedPost posts={relatedPosts} />
                        </div>

                        <div className="lg:w-2/3">
                            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                                <div className="mb-10 w-full overflow-hidden ">
                                    <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                                        <Image
                                            src={post?.featured_image || "/images/blog/blog-01.png"}
                                            alt={post?.title || "Blog Image"}
                                            fill
                                            className="rounded-md object-contain"
                                        />
                                    </div>
                                </div>

                                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                                    {post?.title}
                                </h2>

                                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                                    <li>
                                        <span className="text-black dark:text-white">Author: </span>{" "}
                                        {post?.author?.name}
                                    </li>
                                    <li>
                                        <span className="text-black dark:text-white">
                                            Published On:{" "}
                                        </span>
                                        {post?.date ? new Date(post.date).toLocaleDateString() : ""}
                                    </li>
                                    <li>
                                        <span className="text-black dark:text-white">Category: </span>
                                        {Object.values(post?.categories || {})
                                            .map((cat: any) => cat.name)
                                            .join(", ")}
                                    </li>
                                </ul>

                                <div
                                    className="blog-details"
                                    dangerouslySetInnerHTML={{ __html: post?.content }}
                                />

                                <SharePost />
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default BlogDetailsPage;
