const ProductCard = ({
  title,
  price,
  image,
  rating,
  availability,
  numRatings,
}) => {
  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-4 flex flex-col gap-3">
      
      <div className="w-full h-64 bg-zinc-100 rounded-lg flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="object-contain h-full rounded-lg"
        />
      </div>

      <h2 className="text-lg font-semibold text-zinc-800 line-clamp-2">
        {title}
      </h2>

      <p className="text-2xl font-bold text-green-700">₹{price.replace(".", "")}</p>

      <div className="flex items-center gap-2">
        <span className="text-yellow-500 text-lg">⭐ {rating.split(" ")[0]} out of 5</span>
        <span className="text-sm text-zinc-600">({numRatings.replace(/[()]/g, "")} ratings)</span>
      </div>

      <p
        className={`text-sm font-medium ${
          availability?.toLowerCase().includes("unavailable")
            ? "text-red-600"
            : "text-green-600"
        }`}
      >
        {availability}
      </p>
    </div>
  );
};

export default ProductCard;
