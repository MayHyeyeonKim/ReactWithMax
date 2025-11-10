import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme"; // 테마 import
import CartContextProvider from "./store/shopping-cart-provider";
import Header from "./components/Header";
import Shop from "./components/Shop";
import Product from "./components/Product";
import { DUMMY_PRODUCTS } from "./data/Dummy_Products";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {" "}
      {/* 테마 적용! */}
      <CssBaseline /> {/* 기본 스타일 초기화 */}
      <CartContextProvider>
        <Header />
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <div key={product.id}>
              <Product {...product} />
            </div>
          ))}
        </Shop>
      </CartContextProvider>
    </ThemeProvider>
  );
};

export default App;
