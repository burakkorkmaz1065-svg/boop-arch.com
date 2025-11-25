import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { ScrollToTop } from "./components/feature/ScrollToTop";
import { PageTransition } from "./components/feature/PageTransition";
import { ScrollToTopButton } from "./components/feature/ScrollToTopButton";


function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <ScrollToTop />
        <PageTransition>
          <AppRoutes />
        </PageTransition>
        <ScrollToTopButton />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
