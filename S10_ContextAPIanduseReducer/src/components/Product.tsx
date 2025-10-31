interface ProductProps {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}

const Product = ({ id, image, title, price, description }: ProductProps) => {
  return (
    <>
      Product component!
      <div>
        id: {id}, title: {title}
        price: {price}
        description: {description}
        image: {image}\
      </div>
    </>
  );
};

export default Product;
