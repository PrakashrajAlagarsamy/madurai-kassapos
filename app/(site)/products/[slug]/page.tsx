import { parseWpProduct } from "@/components/products/parseWpProduct";
import ProductLayout from "@/components/products/ProductLayout";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>; // async-safe
}

const SITE = "kassaposbillingsoftware.wordpress.com";

// Fetch the page from WordPress
async function getPage(slug: string) {
  try {
    console.log("Fetching page for slug:", slug);
    const res = await fetch(
      `https://public-api.wordpress.com/wp/v2/sites/${SITE}/pages?slug=${slug}`,
      { next: { revalidate: 60 } }
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
  // Wait for async params
  const { slug } = await params;

  if (!slug) notFound();

  // Fetch page from WordPress
  const page = await getPage(slug);

  if (!page) {
    console.warn("No page found for slug:", slug);
    notFound(); // returns 404 instead of crashing
  }

  // Safely parse content
  const htmlContent = page.content?.rendered ?? "";
  let product;
  try {
    product = parseWpProduct(htmlContent);
  } catch (err) {
    console.error("Error parsing product content:", err);
    notFound(); // fallback to 404 if parsing fails
  }

  return (
    <ProductLayout
      image={product.image ?? "/images/default-product.png"} // fallback image
      title={product.title ?? "No Title"}
      description={product.description ?? ""}
      features={product.features ?? []}
      extraContent={product.extraContent ?? ""}
    />
  );
}
