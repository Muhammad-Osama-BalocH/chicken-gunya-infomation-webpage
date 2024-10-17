// pages/index.js
import Head from 'next/head';
import Header from './components/Header';
import Symptoms from './components/Symptoms';
import Prevention from './components/Prevention';
import Treatment from './components/Treatment';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-slate-300 to-blue-300 flex flex-col">
      <Head>
        <title>Chikungunya (Chicken Gunya) Information</title>
        <meta name="description" content="Information about Chikungunya (Chicken Gun) disease and its prevention." />
      </Head>

      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <main className="flex-grow p-6">
        <Symptoms />
        <Prevention />
        <Treatment />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
