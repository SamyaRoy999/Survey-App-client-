const steps = [
    {
        title: 'নিবন্ধন করুন',
        description: 'আমাদের ওয়েবসাইটে নিবন্ধন করুন এবং আপনার অ্যাকাউন্ট তৈরি করুন।',
        icon: '📋'
    },
    {
        title: 'জরিপ তৈরি করুন',
        description: 'আপনার প্রয়োজনীয় প্রশ্নাবলী এবং বিকল্পগুলি সহ একটি জরিপ তৈরি করুন।',
        icon: '📝'
    },
    {
        title: 'ভোট দিন',
        description: 'আপনার জরিপ শেয়ার করুন এবং আপনার ব্যবহারকারীদের ভোট দিতে আমন্ত্রণ করুন।',
        icon: '🗳️'
    },
    {
        title: 'ফলাফল বিশ্লেষণ করুন',
        description: 'প্রাপ্ত ফলাফলগুলি বিশ্লেষণ করুন এবং সিদ্ধান্ত গ্রহণে সহায়ক তথ্য সংগ্রহ করুন।',
        icon: '📊'
    }
];

const SurveyDetail = () => {
  

    return (
        <section className="bg-white py-12">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">কিভাবে কাজ করে 🛠</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                        <div className="text-4xl mb-4">{step.icon}</div>
                        <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default SurveyDetail;
