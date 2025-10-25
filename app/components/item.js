"use client";
import { useState } from "react";

const Item = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState([]);

  const categories = ["all", "luxury", "sport", "classic", "smart"];

 
  const watches = [
    {
      id: 1,
      name: "Royal Chronograph",
      brand: "Swiss Elite",
      price: 2499,
      originalPrice: 2999,
      category: "luxury",
      rating: 4.9,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&q=80",
      features: ["Swiss Movement", "Sapphire Crystal", "Water Resistant"],
      inStock: true,
      discount: 17,
    },
    {
      id: 2,
      name: "Sport Pro X",
      brand: "ActiveTime",
      price: 899,
      originalPrice: 1199,
      category: "sport",
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1510017098667-27dfc7150acb?w=500&h=500&fit=crop",
      features: ["GPS Tracking", "Heart Monitor", "50m Waterproof"],
      inStock: true,
      discount: 25,
    },
    {
      id: 3,
      name: "Heritage Classic",
      brand: "Vintage Co.",
      price: 3299,
      originalPrice: null,
      category: "classic",
      rating: 5.0,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&q=80",
      features: ["Automatic", "Leather Band", "Limited Edition"],
      inStock: true,
      discount: 0,
    },
    {
      id: 4,
      name: "Smart Vision Pro",
      brand: "TechWatch",
      price: 599,
      originalPrice: 799,
      category: "smart",
      rating: 4.8,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&q=80",
      features: ["AMOLED Display", "Health Tracking", "7 Day Battery"],
      inStock: true,
      discount: 25,
    },
    {
      id: 5,
      name: "Diamond Elite",
      brand: "Prestige",
      price: 4999,
      originalPrice: null,
      category: "luxury",
      rating: 4.9,
      reviews: 76,
      image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=500&h=500&fit=crop",
      features: ["18K Gold", "Diamond Bezel", "Swiss Made"],
      inStock: false,
      discount: 0,
    },
    {
      id: 6,
      name: "Ocean Diver",
      brand: "DeepSea",
      price: 1599,
      originalPrice: 1899,
      category: "sport",
      rating: 4.6,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&h=500&fit=crop",
      features: ["300m Waterproof", "Luminous Hands", "Rotating Bezel"],
      inStock: true,
      discount: 16,
    },
  ];

  const filteredWatches =
    selectedCategory === "all"
      ? watches
      : watches.filter((watch) => watch.category === selectedCategory);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Premium Collection
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover timepieces that define elegance and precision
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Watch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWatches.map((watch) => (
            <div
              key={watch.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Discount Badge */}
              {watch.discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  -{watch.discount}%
                </div>
              )}

              {/* Stock Badge */}
              {!watch.inStock && (
                <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  Out of Stock
                </div>
              )}

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(watch.id)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              >
                <svg
                  className={`w-6 h-6 transition-colors duration-300 ${
                    favorites.includes(watch.id)
                      ? "fill-red-500 text-red-500"
                      : "fill-none text-gray-600"
                  }`}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              {/* Watch Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="mb-3">
                  <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
                    {watch.brand}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">
                    {watch.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(watch.rating)
                            ? "fill-current"
                            : "fill-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {watch.rating} ({watch.reviews})
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {watch.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">
                      ${watch.price.toLocaleString()}
                    </div>
                    {watch.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        ${watch.originalPrice.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    disabled={!watch.inStock}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      watch.inStock
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {watch.inStock ? "Add to Cart" : "Notify Me"}
                  </button>
                  <button className="px-4 py-3 border-2 border-gray-300 rounded-xl hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item;