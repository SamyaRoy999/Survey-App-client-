import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const PaymentHistory = () => {

  const axiosSecure = useAxiosSecure();

  const { data: allPayment = [], refetch } = useQuery({
    queryKey: ["allPayment"],
    queryFn: async () => {
      const res = await axiosSecure.get('/payment');
      return res.data
    }
  })
  console.log(allPayment);
  refetch()
  
  return (
    <div>

      <div className="overflow-x-auto mx-12 mt-16">
        <table className="table ">
          {/* head */}
          <thead className="bg-[#0E6251] text-white text-base ">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>TransactionID</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              allPayment.map((item , ind)=> (
                <tr key={item._id}>
                  <th>{ind + 1 }</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.transactionID}</td>
                  <td>{new Date(item.date).toLocaleDateString("en-US", { year: 'numeric', month: 'numeric', day: 'numeric' })}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PaymentHistory