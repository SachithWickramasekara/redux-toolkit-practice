import { useEffect } from "react";
import Cards from "../components/cards/cards";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productsSlice";
import StatusCode from "../utils/StatusCode";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    console.log("dispatching an action for fetchProducts");
    console.log(getProducts());
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (status === StatusCode.ERROR) {
    return <h1 className="text-center">Something went wrong! Try again later</h1>;
  }

  const addToCart = (product) => {
    console.log("dispatch an add action");
    console.log(product);
    dispatch(add(product));
  };

  // console.log(add);

  const cards = products.map((product) => (
    <Cards
      key={product.id}
      cardSrc={product.image}
      cardTitle={product.title}
      cardPrice={product.price}
      buttonBg={"bg-[#D9D9D9]"}
      buttonTextColor={"text-black"}
      hoverBg={"hover:bg-[#d5d6d7]"}
      buttonText={"Request This Product"}
      OnclickFunction={() => addToCart(product)}
    />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 p-6 h-full">
      {cards}
    </div>
  );
};

export default Product;
