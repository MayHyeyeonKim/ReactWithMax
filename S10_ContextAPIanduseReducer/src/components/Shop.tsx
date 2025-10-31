interface ShopProps {
  children?: React.ReactNode;
}

const Shop = ({ children }: ShopProps) => {
  return (
    <>
      Shop component!
      <ul>{children}</ul>
    </>
  );
};

export default Shop;
