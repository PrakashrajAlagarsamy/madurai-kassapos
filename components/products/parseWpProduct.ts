import { JSDOM } from "jsdom";

export function parseWpProduct(html: string) {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const image =
    document.querySelector("figure img")?.getAttribute("src") || "";

  const title =
    document.querySelector("h1")?.textContent || document.querySelector("h2")?.textContent || "";

  const description =
    document.querySelector("p")?.textContent || "";

  const features = Array.from(
    document.querySelectorAll("ul li")
  ).map((li) => li.textContent || "");

  // --- REMAINING CONTENT ---
  const extraContent =
    document.querySelector("details")?.textContent || "";
  //const extraContent = document.body.innerHTML;

  return { image, title, description, features, extraContent };
}
