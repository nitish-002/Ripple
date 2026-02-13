import { useState } from 'react';
import RecursiveGrid from './components/RecursiveGrid';
import HireMe from './components/HireMe';

function App() {
  const [view, setView] = useState<'game' | 'hire'>('game');

  return (
    <>
      {view === 'game' ? (
        <RecursiveGrid onHireMeClick={() => setView('hire')} />
      ) : (
        <HireMe onBack={() => setView('game')} />
      )}
    </>
  );
}

export default App;
