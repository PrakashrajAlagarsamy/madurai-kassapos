export function normalizeWpLinks(html: string) {
  return html.replaceAll(
    "https://kassaposbillingsoftware.wordpress.com",
    ""
  );
}
