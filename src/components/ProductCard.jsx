
const ProductCard = ({ product }) => {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="h-[230px] w-full object-cover rounded-t-lg" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-700 mt-1">${product.price}</p>
            <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
                onClick={() => window.open(product.affiliateLink, '_blank')}
            >
                View on AliExpress
            </button>
        </div>
    );
};

export default ProductCard;