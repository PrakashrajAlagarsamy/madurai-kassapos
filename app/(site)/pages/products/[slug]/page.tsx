import { Metadata } from "next";
import { parseWpProduct } from "@/components/products/parseWpProduct";
import ProductLayout from "@/components/products/ProductLayout";
import ErroPage from "@/app/(site)/error/page";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getPage(slug: string) {
  const res = await fetch(
    `https://public-api.wordpress.com/wp/v2/sites/kassaposbillingsoftware.wordpress.com/pages?slug=${slug}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    console.error("Fetch failed:", res.status);
    return null;
  }

  const data = await res.json();
  return data?.[0] || null;
}


export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const page = await getPage(slug);
  if (!page) return <ErroPage />;
  const product = parseWpProduct(page.content.rendered);
  return (
    <>      
      <ProductLayout
        image={product.image}
        title={product.title}
        description={product.description}
        features={product.features}
        extraContent={product.extraContent}
      />
    </>
  );
}
