import { useState } from 'react';
import { Database, Zap } from 'lucide-react';
import BrandAccPage from './components/BrandAccPage';
import ComExPage from './components/ComExPage';

function App() {
  const [activeTab, setActiveTab] = useState('brand-acc');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Database className="text-indigo-600" />
              Spare Credit Portal
            </h1>
            
            {/* Toggle Switch */}
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('brand-acc')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all text-sm font-medium ${
                  activeTab === 'brand-acc'
                    ? 'bg-white text-indigo-700 shadow-sm ring-1 ring-slate-900/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Database size={16} />
                Brand Account
              </button>
              <button
                onClick={() => setActiveTab('com-ex')}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all text-sm font-medium ${
                  activeTab === 'com-ex'
                    ? 'bg-white text-indigo-700 shadow-sm ring-1 ring-slate-900/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Zap size={16} />
                Express Code
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-900/5 overflow-hidden">
          {activeTab === 'brand-acc' ? <BrandAccPage /> : <ComExPage />}
        </div>
      </main>
    </div>
  );
}

export default App;
