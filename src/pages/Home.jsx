import Header from "../components/Header";
import ProductList from "../components/ProductList";

const Home = () => {
    return (
        <div>
            <Header />

            <main className="p-4">
                <h2 className="text-2xl font-bold mb-4">Our Top Picks</h2>

                <ProductList />
            </main>
        </div>
    );
};

export default Home;