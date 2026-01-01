import Image from "next/image";

interface Props {
    image: string;
    title: string;
    description: string;
    features: string[];
    extraContent: string;
}

export default function ProductLayout({ image, title, description, features, extraContent }: Props) {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            {/* TOP SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <Image
                        src={image || ""}
                        alt={title || "Product Image"}
                        width={600}
                        height={600} 
                        className="rounded-xl object-cover"
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-bold text-blue-700 mb-4">
                        {title}
                    </h1>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {features.map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <span className="text-[#2563EB] text-xl">✔</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* BOTTOM CONTENT */}
            {extraContent && (
                <div
                    className="mt-7 prose max-w-none text-black"
                    dangerouslySetInnerHTML={{ __html: extraContent }}
                />
            )}
        </section>
    );
}
