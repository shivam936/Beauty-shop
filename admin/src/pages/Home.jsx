import { LineChart } from "@mui/x-charts/LineChart";

const Home = () => {
  return (
    <div className="flex justify-between h-screen  p-2 bg-gray-100 w-[73vw]">
      <div className="flex flex-col p-2 w-2/3">
          <div className="flex">
            <div className="w-70 h-52 shadow-lg rounded-lg bg-white flex flex-col items-center justify-center m-5">
                <div className="rounded-full border-4 p-15 flex items-center justify-center w-10 h-10 border-blue-900 ">
                    <h2 className="text-2xl font-semibold">699</h2>
                </div>
                <h2 className="font-semibold">Products</h2>
            </div>
            <div className="w-70 h-52 shadow-lg rounded-lg bg-white flex flex-col items-center justify-center m-5">
                <div className="rounded-full border-4 p-15 flex items-center justify-center w-10 h-10 border-orange-600 ">
                    <h2 className="text-2xl font-semibold">100</h2>
                </div>
                <h2 className="font-semibold">Orders</h2>
            </div>
            <div className="w-70 h-52 shadow-lg rounded-lg bg-white flex flex-col items-center justify-center m-5">
                <div className="rounded-full border-4 p-15 flex items-center justify-center w-10 h-10 border-green-500 ">
                    <h2 className="text-2xl font-semibold">200</h2>
                </div>
                <h2 className="font-semibold">Users</h2>
            </div>
          </div>
          <div className="rounded-lg p-5 m-5 bg-white ">
              <div className="p-2 rounded-md bg-white">
                  <h3 className="mb-2 font-semibold text-md">Latest Transactions</h3>
                  <table className="table-auto min-w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-2 px-4">Customer</th>
                          <th className="py-2 px-4">Amount</th>
                          <th className="py-2 px-4">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4" >Rani kalal</td>
                          <td className="py-2 px-4">$450</td>
                          <td className="py-2 px-4">Approved</td>
                        </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
      <div className="rounded-lg w-1/3 shadow-lg bg-white p-10 ml-8 flex flex-col">
          <div className="rounded-lg shadow-xl m-5 p-3  text-center min-w-full whitespace-nowrap">
              <h2 className="font-semibold text-xl">Total Revenue: $9000</h2>
          </div>
          <div className="rounded-lg m-5 shadow-xl p-6 text-center min-w-full whitespace-nowrap">
              <h2 className="font-semibold text-xl">Total Loss: $0</h2>
          </div>
          <div>

          </div>
          <div>
      <LineChart
  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
  series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
      area: true,
    },
  ]}
  height={300}
/>
          </div>
      </div>
    </div>
  )
}

export default Home