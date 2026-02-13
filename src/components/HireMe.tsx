interface HireMeProps {
    onBack: () => void;
}

const HireMe = ({ onBack }: HireMeProps) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 font-sans p-8">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">HIRE ME</h1>

                <div className="space-y-4 mb-8">
                    <p className="text-gray-600">
                        I may not make you a billionaire (yet), but I can definitely build great software for you!
                    </p>

                    <div className="flex flex-col gap-3">
                        <a
                            href="https://drive.google.com/file/d/1IgtarnrrZ3pNGhWjX-ygSVhd6BhzeeB2/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors font-medium"
                        >
                            View Resume
                        </a>

                        <a
                            href="https://github.com/nitish-002"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors font-medium"
                        >
                            GitHub Profile
                        </a>

                        <a
                            href="https://www.linkedin.com/in/nitish-sharma02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-[#0077b5] text-white rounded hover:opacity-90 transition-colors font-medium"
                        >
                            LinkedIn Profile
                        </a>
                        <a
                            href="tel:+919475011647"
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium"
                        >
                            +91 9475011647
                        </a>
                    </div>
                </div>

                <button
                    onClick={onBack}
                    className="text-gray-500 hover:text-gray-800 underline transition-colors"
                >
                    Back to Game
                </button>
            </div>
        </div>
    );
};

export default HireMe;
