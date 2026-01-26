// import { JSDOM } from "jsdom";

// export function parseWpProduct(html: string) {
//   try {
//     if (!html || typeof html !== "string") {
//       return {
//         image: "",
//         title: "",
//         description: "",
//         features: [],
//         extraContent: "",
//       };
//     }

//     const dom = new JSDOM(html);
//     const document = dom.window.document;

//     const image =
//       document.querySelector("figure img")?.getAttribute("src") ?? "";

//     const title =
//       document.querySelector("h1")?.textContent?.trim() ||
//       document.querySelector("h2")?.textContent?.trim() ||
//       "";

//     const description =
//       document.querySelector("p")?.textContent?.trim() ?? "";

//     const features = Array.from(document.querySelectorAll("ul li"))
//       .map((li) => li.textContent?.trim())
//       .filter(Boolean) as string[];

//     const extraContent =
//       document.querySelector("details")?.textContent?.trim() ?? "";

//     return { image, title, description, features, extraContent };
//   } catch (error) {
//     console.error("❌ parseWpProduct failed:", error);

//     // NEVER crash the page
//     return {
//       image: "",
//       title: "",
//       description: "",
//       features: [],
//       extraContent: "",
//     };
//   }
// }


export function parseWpProduct(html: string) {
  if (!html || typeof html !== "string") {
    return {
      image: "",
      title: "",
      description: "",
      features: [],
      extraContent: "",
    };
  }

  const strip = (s: string) => s.replace(/<[^>]*>/g, "").trim();

  const image =
    html.match(/<img[^>]+src="([^">]+)"/)?.[1] ?? "";

  const title =
    strip(
      html.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1] ??
      html.match(/<h2[^>]*>(.*?)<\/h2>/)?.[1] ??
      html.match(/<h3[^>]*>(.*?)<\/h3>/)?.[1] ??
      html.match(/<h4[^>]*>(.*?)<\/h4>/)?.[1] ??
      html.match(/<h5[^>]*>(.*?)<\/h5>/)?.[1] ??
      html.match(/<h6[^>]*>(.*?)<\/h6>/)?.[1] ??
      ""
    );

  const description =
    strip(html.match(/<p[^>]*>(.*?)<\/p>/)?.[1] ?? "");

  const features = [...html.matchAll(/<li[^>]*>(.*?)<\/li>/g)].map(
    m => strip(m[1])
  );

  return {
    image,
    title,
    description,
    features,
    extraContent: html,
  };
}
