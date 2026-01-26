// import { JSDOM } from "jsdom";

// export function parseWpProduct(html: string) {
//   const dom = new JSDOM(html);
//   const document = dom.window.document;

//   const image =
//     document.querySelector("figure img")?.getAttribute("src") || "";

//   const title =
//     document.querySelector("h1")?.textContent || document.querySelector("h2")?.textContent || "";

//   const description =
//     document.querySelector("p")?.textContent || "";

//   const features = Array.from(
//     document.querySelectorAll("ul li")
//   ).map((li) => li.textContent || "");

//   // --- REMAINING CONTENT ---
//   const extraContent =
//     document.querySelector("details")?.textContent || "";
//   //const extraContent = document.body.innerHTML;

//   return { image, title, description, features, extraContent };
// }


import { parse } from "node-html-parser";

export function parseWpProduct(html: string) {
  const root = parse(html);
  const quotations = [...html.matchAll(/"([^"]+)"/g)].map(m => m[1]);

  return {
    image: root.querySelector("figure img")?.getAttribute("src") ?? "",
    title: root.querySelector("h1,h2,h3,h4,h5,h6")?.text ?? "",
    description: root.querySelector("p")?.text ?? "",
    features: root.querySelectorAll("ul li").map(li => li.text),
    extraContent: root.querySelector("details")?.innerHTML ?? "" + quotations,
  };
}