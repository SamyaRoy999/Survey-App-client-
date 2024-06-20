import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const VotingCard = ({ item }) => {

    const { title, description, voters = [] } = item;
    return (
        <>
            <Link to={`/survey/survayDetails/${item._id}`} key={item._id} >

                <div className=" p-6 h-96 rounded-lg shadow-xl">

                    <div className="flex items-center justify-center mb-4 ">
                        <img src="https://i.ibb.co/4Zh2hXb/voting-paper-and-ballot-box-outline-icon-vector-illustration.jpg" className="w-20" alt="" />
                        {/* {step.icon} */}
                    </div>

                    <div className="text-center">
                        <h2 className="text-xl font-bold mb-2 text-center text-[#0E6251]">{title}</h2>
                        <p className="text-gray-600 text-center">{description}</p>
                        <p><strong>Votes:</strong> {voters.length}</p>
                    </div>
                    <div className="w-full text-center">

                        <button
                            type="button"
                            className="btn   bg-[#0E6251]  mt-4 inline-block btn-sm rounded-full border-2 border-[#0E6251] px-6  text-base font-medium leading-normal text-white transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
                        >
                            Vote
                        </button>
                    </div>

                </div>

            </Link>

        </>
    )
}

export default VotingCard

VotingCard.propTypes = {
    item: PropTypes.object
};

// {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//     {steps.map(step => (
//         <div key={step.id} className="bg-white p-6 rounded-lg shadow-lg">
//             <div className="flex items-center justify-center mb-4 ">
//                 <img src="https://i.ibb.co/YPhyY4y/process.png" className="w-8" alt="" />
//                 {/* {step.icon} */}
//             </div>
//             <h3 className="text-2xl font-bold mb-2 text-center text-[#0E6251]">{step.title}</h3>
//             <p className="text-gray-600 text-center">{step.description}</p>
//         </div>
//     ))}
// </div> */}