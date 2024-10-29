import Header from '../components/Header';

const About = () => {
    return (
        <div>
            <Header />
            <main className="p-4">
                <h2 className="text-2xl font-bold mb-4">About Us</h2>
                <p>
                    Welcome to our affiliate website! We curate top products from AliExpress so you can find the best deals and items right here. Click on any product to be taken directly to AliExpress for more details and to purchase.
                </p>
            </main>
        </div>
    );
};

export default About;