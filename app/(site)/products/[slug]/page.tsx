export const runtime = "nodejs";
import { parseWpProduct } from "@/components/products/parseWpProduct";
import ProductLayout from "@/components/products/ProductLayout";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const SITE = "kassaposbillingsoftware.wordpress.com";

// Fetch the page from WordPress
async function getPage(slug: string) {
  try {
    console.log("Fetching page for slug:", slug);
    const res = await fetch(
      `https://public-api.wordpress.com/wp/v2/sites/${SITE}/pages?slug=${slug}`,
      { 
        //redirect: "follow",
        next: { revalidate: 60 } 
      }
    );

    if (!res.ok) {
      console.error("Fetch failed with status:", res.status);
      return null;
    }

    const data = await res.json();
    if (!data || !Array.isArray(data) || data.length === 0) return null;

    return data[0];
  } catch (err) {
    console.error("Error fetching page:", err);
    return null;
  }
}

export default async function ProductPage({ params }: PageProps) {
  try {
    const { slug } = await params;

    if (!slug) return notFound();

    const page = await getPage(slug);

    if (!page) return notFound();

    const htmlContent = page.content?.rendered ?? "";
    const product = parseWpProduct(htmlContent);

    return (
      <ProductLayout
        image={product.image ?? "/images/default-product.png"}
        title={product.title ?? "No Title"}
        description={product.description ?? ""}
        features={product.features ?? []}
        extraContent={product.extraContent ?? ""}
      />
    );
  } catch (err) {
    console.error("Error rendering ProductPage:", err);
    return notFound(); // fallback to 404 instead of 500
  }
}

