const ResultNode = ({ response, loading }) => {
    return (
        <div className="bg-gray-800 border border-gray-600 rounded-2xl p-5 w-72 shadow-lg shadow-black/40 min-h-[172px]">
            {/* Node Header */}
            <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                    Result Node
                </span>
            </div>

            {/* Content */}
            {loading ? (
                <div className="flex items-center gap-3 mt-4">
                    <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm text-gray-400">Thinking…</span>
                </div>
            ) : response ? (
                <p className="text-sm text-gray-100 leading-relaxed whitespace-pre-wrap">
                    {response}
                </p>
            ) : (
                <p className="text-sm text-gray-500 italic mt-2">
                    AI response will appear here…
                </p>
            )}
        </div>
    );
};

export default ResultNode;
