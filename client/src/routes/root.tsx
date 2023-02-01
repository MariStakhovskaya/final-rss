import { Outlet } from 'react-router-dom';
import { Footer } from '../components/footer';
import Header from '../components/header/Header';

export default function Root() {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
