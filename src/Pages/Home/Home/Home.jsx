import useTitle from "../../../useTitle/useTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import Subscribe from "../Subscribe/Subscribe";
import ToyFeature from "../ToyFeature/ToyFeature";



const Home = () => {
  useTitle('Home');
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Gallery></Gallery>
      <ToyFeature></ToyFeature>
      <Subscribe></Subscribe>
      
    </div>
  );
};

export default Home;
