import { Link } from "react-router-dom";
import useSurvay from "../../../hooks/useSurvay";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import AlreadyParticipate from "../../../Components/AlreadyParticipate/AlreadyParticipate";
import Loading from '../../../Components/Loading/Loading'


const ParticipateUser = () => {
  const { user } = useContext(AuthContext)
  const [survay=[], refetch, isLoading] = useSurvay();

  if (isLoading) {
    return <Loading></Loading>
  }

  const survayData = Array.isArray(survay)
  ? survay.filter((items) => !items.voters.some((vote) => vote.email === user.email))
  : [];
  refetch();

  console.log(survayData);


  return (
    <div>
      <h2 className="text-2xl font-bold font-Josefin text-center text-[#0E6251] my-8">Participate in Surveys</h2>
      <div className="overflow-x-auto  flex justify-center  h-[80vh]">
        <table className="table w-9/12 ">
          {/* head */}
          <thead className="uppercase bg-[#0E6251] text-white">
            <tr>
              <th>title</th>
              <th>description</th>
              <th>category</th>
              <th>total votes</th>
              <th>Participate</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              survayData.map((item) => {
                const { _id, title, description, category, voters = [] } = item;
                refetch()
                return (
                  <tr key={_id}>
                    <th>{title}</th>
                    <td>{description}</td>
                    <td>{category}</td>
                    <td>{voters.length}</td>
                    <td>
                      <Link to={`/survey/survayDetails/${item._id}`} key={item._id} >
                        <button className="btn btn-outline btn-[#0E6251] btn-sm">vote</button>
                      </Link>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
      <h2 className="text-2xl lg:mt-14 font-bold text-center text-[#0E6251] my-8 font-Josefin">Already Participate in Surveys</h2>
      <AlreadyParticipate />
    </div>
  )
}

export default ParticipateUser










