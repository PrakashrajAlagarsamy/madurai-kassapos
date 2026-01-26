import { JSDOM } from "jsdom";

export function parseWpProduct(html: string) {
  try {
    if (!html || typeof html !== "string") {
      return {
        image: "",
        title: "",
        description: "",
        features: [],
        extraContent: "",
      };
    }

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const image =
      document.querySelector("figure img")?.getAttribute("src") ?? "";

    const title =
      document.querySelector("h1")?.textContent?.trim() ||
      document.querySelector("h2")?.textContent?.trim() ||
      "";

    const description =
      document.querySelector("p")?.textContent?.trim() ?? "";

    const features = Array.from(document.querySelectorAll("ul li"))
      .map((li) => li.textContent?.trim())
      .filter(Boolean) as string[];

    const extraContent =
      document.querySelector("details")?.textContent?.trim() ?? "";

    return { image, title, description, features, extraContent };
  } catch (error) {
    console.error("❌ parseWpProduct failed:", error);

    // NEVER crash the page
    return {
      image: "",
      title: "",
      description: "",
      features: [],
      extraContent: "",
    };
  }
}
