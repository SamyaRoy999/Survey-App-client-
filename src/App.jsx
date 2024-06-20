

const SurveyDetail = () => {


    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center mb-4">
                            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-center text-gray-700">Step 1</h3>
                        <p className="text-gray-600 text-center">Create an account and log in to get started with our survey platform.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center mb-4">
                            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m4-4H8" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-center text-gray-700">Step 2</h3>
                        <p className="text-gray-600 text-center">Create and design your survey with easy-to-use tools and customization options.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center mb-4">
                            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-center text-gray-700">Step 3</h3>
                        <p className="text-gray-600 text-center">Share your survey and collect responses in real-time with our integrated tools.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SurveyDetail;
