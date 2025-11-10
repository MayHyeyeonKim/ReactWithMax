import Box from "@mui/material/Box";

interface ShopProps {
  children?: React.ReactNode;
}

const Shop = ({ children }: ShopProps) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: 3,
        p: 3,
      }}
    >
      {children}
    </Box>
  );
};

export default Shop;
