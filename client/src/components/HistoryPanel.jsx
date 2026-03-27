const HistoryPanel = ({ history, onLoad }) => {
    return (
        <aside className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
            {/* Header */}
            <div className="px-5 py-4 border-b border-gray-700">
                <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">
                    Saved History
                </h2>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {history.length === 0 ? (
                    <p className="text-gray-500 text-sm italic text-center mt-8">
                        No saved history yet.
                    </p>
                ) : (
                    history.map((item) => (
                        <div
                            key={item._id}
                            onClick={() => onLoad(item)}
                            className="bg-gray-900 border border-gray-700 rounded-xl p-3 cursor-pointer hover:border-blue-500 hover:bg-gray-800 transition group"
                        >
                            {/* Prompt */}
                            <p className="text-xs text-blue-400 font-medium truncate mb-1 group-hover:text-blue-300">
                                {item.prompt}
                            </p>
                            {/* Response snippet */}
                            <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                                {item.response}
                            </p>
                            {/* Timestamp */}
                            <p className="text-[10px] text-gray-600 mt-2">
                                {new Date(item.createdAt).toLocaleString()}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </aside>
    );
};

export default HistoryPanel;
