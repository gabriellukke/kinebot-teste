import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [heroes, setHeroes] = useState([]);
  const [heroIndex, setHeroIndex] = useState(0);

  const renderHeroes = async () => {
    if (!data.length) {
      return null;
    }

    if (heroIndex < data.length) {
      setHeroes((prevState) => [...prevState, data[heroIndex]]);
      setHeroIndex((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    const getHeroes = async () => {
      const response = await fetch('http://localhost:4000/api/users');
      const data = await response.json();
      setData(data);
    };
    getHeroes();
  }, []);

  const isButtonDisabled = heroIndex < data.length;

  return (
    <div className="App">
      <header className="header">
        <h2>reimagined-spork</h2>
      </header>
      <main>
        <div className="form">
          <button
            type="button"
            onClick={() => renderHeroes()}
            disabled={!isButtonDisabled}
          >
            click
          </button>
        </div>
        <section className="heroes-container">
          {!!heroes.length &&
            heroes.map((hero) => (
              <div key={hero.id} className="hero-card">
                <h2>{hero.name}</h2>
                <img alt={`${hero.name} hero`} src={hero.image} />
              </div>
            ))}
        </section>
      </main>
    </div>
  );
}

export default App;
