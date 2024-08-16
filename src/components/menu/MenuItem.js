export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="text-center">
                <img src="/pizza1.png" className="max-h-32 block mx-auto" alt="Pizza" />
            </div>
            <h4 className="font-semibold my-3 text-xl">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm">Pepperoni pizza is a classic and popular dish that features a crispy, golden crust topped with a rich tomato sauce, melted mozzarella cheese, and slices of spicy pepperoni.</p>
            <button className="bg-primary text-white rounded-full px-8 py-2 mt-4">Add to Cart $12</button>
        </div>
    );
}