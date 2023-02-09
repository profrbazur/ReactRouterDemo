import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { Contact } from './components/Contact';
import { Admin } from './components/Admin';
import { PageNotFound } from './components/PageNotFound';
import { ContactPh } from './components/ContactPh';
import { ContactEu } from './components/ContactEu';
import { ContactUs } from './components/ContactUs';
import { ContactGlobal } from './components/ContactGlobal';

import './App.css';

function App() {
  const user = true;
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<ProductList />}></Route>
          <Route path="products/:id" element={<ProductDetail />}></Route>
          <Route path="contact" element={<Contact />}>
            <Route path="ph" element={<ContactPh />} />
            <Route path="eu" element={<ContactEu />} />
            <Route path="us" element={<ContactUs />} />
            <Route path="*" element={<ContactGlobal />} />
          </Route>
          <Route
            path="/admin"
            element={user ? <Admin /> : <Navigate to="/" />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
