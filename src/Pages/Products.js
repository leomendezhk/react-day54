import { useEffect, useState } from "react";
import Card from "../Components/Card";

export default function Product() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products/list")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setProductList(response);
      });
  }, []);

  return (
    <div>
      {productList && productList.length > 1
        ? productList.map((item) => (
            <div>
              <Card
                title={item.name}
                desc={item.description}
                price={item.price}
              />
            </div>
          ))
        : "no products"}
    </div>
  );
}
