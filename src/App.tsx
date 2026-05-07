import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';

function App() {
  return (
    <div className="bg-black min-h-screen text-primary selection:bg-primary selection:text-black">
      <main>
        <Hero />
        <About />
        <Features />
      </main>
    </div>
  );
}

export default App;
