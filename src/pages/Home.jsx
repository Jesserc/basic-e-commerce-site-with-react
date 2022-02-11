import Card from "../components/Card/Card";
import products from "../components/Product";

const HomePage = () => {
  console.log(products);
  return (
    <div className="home__container">
      <h1 className="homepage__title">Home Page</h1>

      <div className="products__container">
        {products.map((product, index) => {
          return <Card product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
