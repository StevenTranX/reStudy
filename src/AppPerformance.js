import React, { useCallback, useState } from 'react';
import Count from './Components/Advanced-React/performance/Count';
// React.memo(Component)
const App = () => {
  const [filter, setFilter] = useState('');
  // useCallback( () => callback, [dependencies])
  // memorized
  const calculate = useCallback(() => {
    setFilter('');
  }, [setFilter]);
  return (
    <div>
      <input
        type='text'
        className='p-4 rounded border border-gray-300'
        onChange={(e) => setFilter(e.target.value)}
      />
      <Count calculate={calculate} />
    </div>
  );
};

export default App;
