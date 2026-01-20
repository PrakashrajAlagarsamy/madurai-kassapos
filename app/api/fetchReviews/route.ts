import { NextResponse } from "next/server";

const SITE = "kassaposbillingsoftware.wordpress.com";

/** Extract rating like: "Rating: 4" or "Rating - 4/5" */
function extractRating(text: string): number {
    const match = text.match(/rating\s*[:\-]?\s*(\d)/i);
    return match ? Number(match[1]) : 5;
}

function stripHtml(text: string): string {
    return text
        .replace(/<[^>]*>/g, "")      // remove HTML tags
        .replace(/&#8217;/g, "'")     // fix apostrophe
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#(\d+);/g, "")     // remove remaining entities
        .trim();
}


/** Extract Name from form content */
function extractName(text: string): string | null {
    const match = text.match(/name\s*[:\-]?\s*(.+)/i);
    return match ? stripHtml(match[1]) : null;
}


/** Remove labels and HTML from comment */
function cleanComment(text: string): string {
    return stripHtml(
        text
            .replace(/name\s*:.*(\n|<br>)/gi, "")
            .replace(/email\s*:.*(\n|<br>)/gi, "")
            .replace(/rating\s*:.*(\n|<br>)/gi, "")
            .replace(/comments?\s*:/gi, "")
    );
}


export async function GET() {
    try {
        const res = await fetch(
            `https://public-api.wordpress.com/rest/v1.1/sites/${SITE}/comments/?status=approved&number=20`,
            { cache: "no-store" }
        );

        if (!res.ok) {
            console.error("WP COMMENTS API ERROR:", res.status);
            return NextResponse.json([], { status: 200 });
        }

        const data = await res.json();

        const reviews = data.comments.map((c: any) => {
            const rawContent = c.content || "";

            return {
                id: c.ID,
                name: extractName(rawContent) || "Anonymous",
                image:
                    c.author?.avatar_URL || "/images/default-user.png",
                rating: extractRating(rawContent),
                testimonial: cleanComment(rawContent),
                date: c.date,
            };
        });

        return NextResponse.json(reviews);
    } catch (err: any) {
        console.error("FETCH REVIEWS ERROR:", err.message);
        return NextResponse.json([], { status: 200 });
    }
}
