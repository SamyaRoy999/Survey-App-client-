

const HowWorks = () => {
    const steps = [
        {
            id: 1,
            icon: (
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            ),
            title: "Step 1",
            description: "Create an account and log in to get started with our survey platform."
        },
        {
            id: 2,
            icon: (
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m4-4H8" />
                </svg>
            ),
            title: "Step 2",
            description: "Create and design your survey with easy-to-use tools and customization options."
        },
        {
            id: 3,
            icon: (
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            ),
            title: "Step 3",
            description: "Share your survey and collect responses in real-time with our integrated tools."
        },
        {
            id: 4,
            icon: (
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Step 4",
            description: "View detailed analytics and insights based on survey responses."
        },
        {
            id: 5,
            icon: (
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 7h13l3-7M3 13h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            title: "Step 5",
            description: "Manage user roles and permissions with our intuitive dashboard."
        },
        {
            id: 6,
            icon: (
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            ),
            title: "Step 6",
            description: "Access advanced features like payment integration and API access."
        }
    ];

    return (
        <section className="py-12 ">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-4xl font-bold text-center font-Josefin mb-8">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
                    {steps.map(step => (
                        <div key={step.id} className="  p-6 rounded-lg shadow-xl">
                            <div className="flex items-center justify-center mb-4 ">
                                <img src="https://i.ibb.co/YPhyY4y/process.png" className="w-8" alt="" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-center text-[#0E6251]">{step.title}</h3>
                            <p className="text-gray-600 text-center">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowWorks