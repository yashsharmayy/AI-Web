import { useState } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

const ServiceGallery = ({ gallery = [] }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    if (!gallery || gallery.length === 0) {
        return null;
    }

    const openGallery = (index) => {
        setSelectedIndex(index);
    };

    const closeGallery = () => {
        setSelectedIndex(null);
    };

    const nextImage = () => {
        setSelectedIndex((current) =>
            current === gallery.length - 1 ? 0 : current + 1
        );
    };

    const previousImage = () => {
        setSelectedIndex((current) =>
            current === 0 ? gallery.length - 1 : current - 1
        );
    };

    return (
        <>
            <section className="py-20">
                {/* Heading */}
                <div className="mb-10">
                    <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-500">
                        Selected Work
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                        Gallery
                    </h2>

                    <p className="mt-4 max-w-2xl text-neutral-500">
                        A selection of creative work and visual explorations from this
                        service.
                    </p>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {gallery.map((item, index) => {
                        const image = typeof item === "string" ? item : item.image;
                        const title =
                            typeof item === "string" ? "Creative Work" : item.title;
                        const category =
                            typeof item === "string" ? "" : item.category;

                        return (
                            <button
                                key={index}
                                onClick={() => openGallery(index)}
                                className="group relative overflow-hidden rounded-2xl bg-neutral-100 text-left"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={image}
                                        alt={title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    {category && (
                                        <span className="mb-2 text-xs uppercase tracking-[0.2em] text-white/70">
                                            {category}
                                        </span>
                                    )}

                                    <h3 className="text-xl font-medium text-white">
                                        {title}
                                    </h3>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* Lightbox */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-5"
                    onClick={closeGallery}
                >
                    {/* Close */}
                    <button
                        onClick={closeGallery}
                        className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20"
                    >
                        <X size={24} />
                    </button>

                    {/* Previous */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            previousImage();
                        }}
                        className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20 md:left-8"
                    >
                        <ArrowLeft size={24} />
                    </button>

                    {/* Image */}
                    <div
                        className="relative max-h-[90vh] max-w-[90vw]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {(() => {
                            const item = gallery[selectedIndex];
                            const image = typeof item === "string" ? item : item.image;
                            const title =
                                typeof item === "string" ? "Creative Work" : item.title;

                            return (
                                <img
                                    src={image}
                                    alt={title}
                                    className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
                                />
                            );
                        })()}
                    </div>

                    {/* Next */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20 md:right-8"
                    >
                        <ArrowRight size={24} />
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                        {selectedIndex + 1} / {gallery.length}
                    </div>
                </div>
            )}
        </>
    );
};

export default ServiceGallery;