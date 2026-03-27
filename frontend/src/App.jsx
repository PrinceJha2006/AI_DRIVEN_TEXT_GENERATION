import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import AnalysisPanel from './components/AnalysisPanel';
import AgentPanel from './components/AgentPanel';

function App() {
  const [activeTab, setActiveTab] = useState('analyze');
  const [analysisData, setAnalysisData] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold bg-gradient-to-r from-sky-600 to-ocean-600 bg-clip-text text-transparent">
                🐦 AI Twitter Analytics
              </h1>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('analyze')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'analyze'
                    ? 'bg-sky-100 text-sky-700'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Analyze
              </button>
              <button
                onClick={() => setActiveTab('agent')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'agent'
                    ? 'bg-sky-100 text-sky-700'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                AI Agent
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'analyze' ? (
          <AnalysisPanel onAnalysisComplete={setAnalysisData} />
        ) : (
          <AgentPanel context={analysisData?.rows || []} />
        )}
        
        {analysisData && activeTab === 'analyze' && (
          <Dashboard data={analysisData} />
        )}
      </div>
    </div>
  );
}

export default App;
