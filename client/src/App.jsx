import { useState, useEffect } from "react";
import InputNode from "./components/InputNode";
import ResultNode from "./components/ResultNode";
import FlowEdge from "./components/FlowEdge";
import HistoryPanel from "./components/HistoryPanel";
import { askAI, saveHistory, getHistory } from "./api/aiApi";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Load history on mount
  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const data = await getHistory();
      setHistory(data);
    } catch {
      // silently fail — history is non-critical
    }
  };

  const handleRunFlow = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError("");
    setResponse("");
    setSaveSuccess(false);
    try {
      const aiResponse = await askAI(prompt);
      setResponse(aiResponse);
    } catch {
      setError("Failed to get AI response. Check your API key and server.");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!prompt || !response) return;
    setSaving(true);
    setSaveSuccess(false);
    try {
      await saveHistory(prompt, response);
      setSaveSuccess(true);
      fetchHistory();
    } catch {
      setError("Failed to save. Check your MongoDB connection.");
    } finally {
      setSaving(false);
    }
  };

  const handleLoadHistory = (item) => {
    setPrompt(item.prompt);
    setResponse(item.response);
    setError("");
    setSaveSuccess(false);
  };

  return (
    <div className="flex h-screen bg-gray-950 text-white font-sans overflow-hidden">
      {/* Main Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="flex items-center justify-between px-8 py-4 border-b border-gray-800 bg-gray-900">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <h1 className="text-lg font-bold tracking-tight text-white">
              AI Flow
            </h1>
            <span className="text-xs text-gray-500 ml-1">
              — Powered by OpenRouter
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {saveSuccess && (
              <span className="text-xs text-emerald-400 animate-fade-in">
                ✓ Saved to MongoDB
              </span>
            )}
            <button
              onClick={handleSave}
              disabled={!response || saving}
              className="px-4 py-1.5 text-sm rounded-lg bg-gray-700 hover:bg-gray-600 text-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition font-medium"
            >
              {saving ? "Saving…" : "Save"}
            </button>
            <button
              onClick={handleRunFlow}
              disabled={loading || !prompt.trim()}
              className="px-5 py-1.5 text-sm rounded-lg bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-40 disabled:cursor-not-allowed transition font-semibold shadow shadow-blue-900/50"
            >
              {loading ? "Running…" : "▶ Run Flow"}
            </button>
          </div>
        </header>

        {/* Error Banner */}
        {error && (
          <div className="mx-8 mt-4 px-4 py-3 bg-red-900/40 border border-red-700 rounded-lg text-red-300 text-sm">
            {error}
          </div>
        )}

        {/* Flow Canvas */}
        <div className="flex-1 flex items-start justify-center gap-0 overflow-y-auto py-10">
          <InputNode
            value={prompt}
            onChange={setPrompt}
            disabled={loading}
          />
          <FlowEdge />
          <ResultNode response={response} loading={loading} />
        </div>

        {/* Footer hint */}
        <footer className="text-center pb-4 text-xs text-gray-600">
          Type a prompt → Run Flow → Save to MongoDB
        </footer>
      </main>

      {/* History Sidebar */}
      <HistoryPanel history={history} onLoad={handleLoadHistory} />
    </div>
  );
}

export default App;
