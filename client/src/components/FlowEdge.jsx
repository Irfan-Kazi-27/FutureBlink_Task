// SVG arrow connecting InputNode to ResultNode visually
const FlowEdge = () => {
    return (
        <div className="flex items-center justify-center">
            <svg
                width="80"
                height="24"
                viewBox="0 0 80 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-500"
            >
                {/* Line */}
                <line
                    x1="0"
                    y1="12"
                    x2="68"
                    y2="12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeDasharray="6 3"
                />
                {/* Arrowhead */}
                <polygon points="68,6 80,12 68,18" fill="currentColor" />
            </svg>
        </div>
    );
};

export default FlowEdge;
