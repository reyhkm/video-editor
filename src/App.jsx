import React, { useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import Header from './components/layout/Header';
import useKeyboardShortcuts from './hooks/useKeyboardShortcuts';

function App() {
  useKeyboardShortcuts();

  return (
    <div className="h-screen w-screen flex flex-col bg-dark-bg overflow-hidden">
      <Header />
      <main className="flex-grow">
        <MainLayout />
      </main>
    </div>
  );
}

export default App;
