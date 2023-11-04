import { useSelector } from "react-redux";
import Cards from "../components/cards/cards";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();

  const productCard = useSelector((state) => state.cart);

  const removeToCart = (id) => {
    console.log("dispatch an remove action");
    console.log(id);
    dispatch(remove(id));
  };

  const cards = productCard.map((product) => (
    <Cards
      key={product.id}
      cardSrc={product.image}
      cardTitle={product.title}
      cardPrice={product.price}
      buttonText={"Remove This Product"}
      buttonBg={"bg-red-600"}
      buttonTextColor={"text-white"}
      hoverBg={"hover:bg-red-500"}
      OnclickFunction={() => removeToCart(product.id)}
    />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 w-full gap-4 p-6 h-full">
      {cards}
    </div>
  );
};

export default Cart;
