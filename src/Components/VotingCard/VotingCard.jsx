import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const VotingCard = ({ item }) => {

    const { title, description, voters = [] } = item;
    return (
        <>
            <Link to={`/survey/survayDetails/${item._id}`} key={item._id} >

                <div className=' rounded-lg shadow-2xl h-96 flex flex-col items-center px-10'>
                    <div className="w-28">
                        <img src="https://i.ibb.co/4Zh2hXb/voting-paper-and-ballot-box-outline-icon-vector-illustration.jpg" alt="" />
                    </div>
                    <div className="text-center">
                        <div>
                            <h2 className="text-xl  font-bold pb-4 text-[#0E6251]">{title}</h2>
                            <p className="font-Shanti text-base font-light pb-2">{description}</p>
                            <p><strong>Votes:</strong> {voters.length}</p>
                        </div>
                        <button
                            type="button"
                            className="btn bg-[#0E6251]  mt-4 inline-block btn-sm rounded-full border-2 border-[#0E6251] px-6  text-base font-medium leading-normal text-white transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
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