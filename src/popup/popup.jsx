import React from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/tailwind.css';

function App() {
  return (
    <div className="p-4 w-80">
      <h1 className="text-lg font-bold mb-2">Peeky</h1>
      <p className="mb-4">Popup UI coming soon.</p>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
