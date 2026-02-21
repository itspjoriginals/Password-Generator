import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}~|?`-=[]";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const handleCopyClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    
    // UI Feedback for copy
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 p-4">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 shadow-2xl rounded-2xl p-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white tracking-tight">Password Generator</h1>
          <p className="text-slate-400 text-sm">Generate secure passwords instantly.</p>
        </div>

        {/* Display Area */}
        <div className="relative group">
          <input
            type="text"
            value={password}
            className="w-full bg-slate-950 text-indigo-400 text-xl font-mono py-4 px-5 pr-24 rounded-xl border border-slate-700 outline-none focus:border-indigo-500 transition-all"
            placeholder="Generating..."
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={handleCopyClipboard}
            className={`absolute right-2 top-2 bottom-2 px-5 rounded-lg font-medium transition-all duration-200 active:scale-95 ${
              copied 
              ? 'bg-emerald-500 text-white' 
              : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
            }`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Controls Container */}
        <div className="space-y-6">
          {/* Range Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-slate-300 font-medium">Password Length</label>
              <span className="bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-sm font-bold border border-indigo-500/20">
                {length}
              </span>
            </div>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          {/* Checkboxes */}
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center space-x-3 bg-slate-800/50 p-3 rounded-xl cursor-pointer hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-slate-600 text-indigo-600 focus:ring-indigo-500 bg-slate-700"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <span className="text-slate-300 text-sm font-medium">Numbers</span>
            </label>

            <label className="flex items-center space-x-3 bg-slate-800/50 p-3 rounded-xl cursor-pointer hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-700">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-slate-600 text-indigo-600 focus:ring-indigo-500 bg-slate-700"
              checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <span className="text-slate-300 text-sm font-medium">Special Characters</span>
            </label>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500 italic">
            Securely generated on your device.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;