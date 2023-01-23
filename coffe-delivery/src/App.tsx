import GlobalStyles from "./styles/global";
import { AppRoutes } from "./routes";
import { CartProvider } from "./hooks/useCart";
import { ToastProvider } from "./hooks/useToast";
import { RequestProvider } from "./hooks/useRequest";

function App() {
  return (
    <RequestProvider>
      <ToastProvider>
        <CartProvider>
          <GlobalStyles />
          <AppRoutes />
        </CartProvider>
      </ToastProvider>
    </RequestProvider>
  );
}

export default App;
