/* eslint-disable max-len */
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './modules/HomePage/components/HomePage';
import { ProductPage } from './modules/ProductPage/components/ProductPage';
import { NotFound } from './modules/shared/components/NotFound';
import { ProductDetailsPage } from './modules/ProductDetailsPage/components/ProductDetailsPage';
import { FavoritesPage } from './modules/FavoritesPage/components/FavoritesPage';
import { CartPage } from './modules/CartPage/components/CartPage';
import { ScrollToTop } from './modules/shared/components/ScrollToTop';
import { useEffect } from 'react';

export const Root = () => {
  useEffect(() => {
    history.scrollRestoration = 'manual';

    return () => {
      history.scrollRestoration = 'auto';
    };
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="phones">
            <Route index element={<ProductPage category="phones" />} />
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>

          <Route path="tablets">
            <Route index element={<ProductPage category="tablets" />} />
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>

          <Route path="accessories">
            <Route index element={<ProductPage category="accessories" />} />
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>

          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="cart" element={<CartPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
