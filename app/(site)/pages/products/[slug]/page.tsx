import { parseWpProduct } from "@/components/products/parseWpProduct";
import ProductLayout from "@/components/products/ProductLayout";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

const SITE = "kassaposbillingsoftware.wordpress.com";

async function getPage(slug: string) {
  console.log("Fetching page for slug:", slug);
  const res = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/${SITE}/pages?slug=${slug}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    console.error("Fetch failed:", res.status);
    return null;
  }

  const data = await res.json();
  return data?.[0] ?? null;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = params;

  if (!slug) notFound();

  const page = await getPage(slug);

  if (!page) notFound();

  const product = parseWpProduct(page.content.rendered);

  return (
    <ProductLayout
      image={product.image}
      title={product.title}
      description={product.description}
      features={product.features}
      extraContent={product.extraContent}
    />
  );
}
