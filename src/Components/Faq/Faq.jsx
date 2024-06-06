

const Faq = () => {
    return (
        <div className="flex font-Josefin justify-center items-center pt-10  px-4 flex-col-reverse lg:flex-row">
            <section className=" min-h-screen py-32 flex-1">
                <div className="container flex flex-col justify-center  mx-auto ">
                    <h1 className="text-2xl mb-7 md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-[#0E6251]  ">
                        Frequenty asked questions
                    </h1>
                    <div className="flex flex-col divide-y sm:px-8  divide-gray-700">
                        <details>
                            <summary className="py-2 font-Shanti outline-none cursor-pointer focus:underline">What is a survey?</summary>
                            <div className="px-4 pb-4">
                                <p>A survey is a method of gathering information from individuals, typically by asking them a series of questions.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 font-Shanti outline-none cursor-pointer focus:underline">Can I edit my survey after creating it?</summary>
                            <div className="px-4 pb-4">
                                <p>Yes, you can edit your survey by navigating to the survey update page, making the necessary changes, and submitting the updated information.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 font-Shanti outline-none cursor-pointer focus:underline">How can I view the responses to my survey?</summary>
                            <div className="px-4 pb-4">
                                <p>You can view the responses to your survey by navigating to the survey responses page, where you can see individual responses along with user details.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 font-Shanti outline-none cursor-pointer focus:underline">What are the common categories for surveys?</summary>
                            <div className="px-4 pb-4">
                                <p>Common categories for surveys include technology, health, education, customer satisfaction, market research, and employee feedback.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 font-Shanti outline-none cursor-pointer focus:underline">How do I report an inappropriate survey?</summary>
                            <div className="px-4 pb-4">
                                <p>To report an inappropriate survey, go to the survey details page and click on the Report button. Provide the necessary details, and your report will be reviewed by our team.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 font-Shanti outline-none cursor-pointer focus:underline">What is your customer support contact?</summary>
                            <div className="px-4 pb-4">
                                <p>If you have any questions, concerns, or need assistance, you can reach our customer support team at 9911083755 during our business hours, Monday to Saturday from 10 am to 6 pm. You can also contact us via email at <a href="" className="underline">example@gmail.com</a>.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 font-Shanti outline-none cursor-pointer focus:underline">What are your terms and conditions?</summary>
                            <div className="px-4 pb-4">
                                <p>You can find our detailed terms and conditions by visiting our
                                    <a href="" className="underline">Terms of Service</a>
                                    page on our website. It includes information about our policies, user guidelines, and more.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
            <div className=" w-96 h-96 border-4 border-[#0E6251]  lg:relative p-4 mr-5">
                <img className="lg:absolute lg:top-7 lg:left-7" src="https://i.ibb.co/mF9NfJh/jon-tyson-hhq1-Lxtuwd8-unsplash.jpg" alt="" />
            </div>
        </div>


    )
}

export default Faq