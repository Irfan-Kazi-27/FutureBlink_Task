const InputNode = ({ value, onChange, disabled }) => {
    return (
        <div className="bg-gray-800 border border-gray-600 rounded-2xl p-5 w-72 shadow-lg shadow-black/40">
            {/* Node Header */}
            <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                    Input Node
                </span>
            </div>

            {/* Textarea */}
            <textarea
                id="prompt-input"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                rows={5}
                placeholder="Type your prompt here… e.g. What is the capital of France?"
                className="w-full bg-gray-900 text-gray-100 placeholder-gray-500 text-sm rounded-lg p-3 resize-none border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition disabled:opacity-50"
            />
        </div>
    );
};

export default InputNode;
