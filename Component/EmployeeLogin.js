import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

var assignTickets = 20;
var ticketCompleted = 20;
var ticketsPending = 20;
var blockedTickets = 20;

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


const EmployeeLogin = (props) => {
    return (
        <>
            <div className="EmployeeLogin">
                <div>
                    <img className="Employeeimage" src="https://wallpapers-clan.com/wp-content/uploads/2023/02/anime-boy-black-pfp-1.jpg"></img>
                </div>
                <div className="employeeDetail">
                    <div className="flex-item">Name : Prashant</div>
                    <div className="flex-item">Email : xyz@gmail.com</div>
                    <div className="flex-item">Employee Id : 1234</div>
                    <div className="flex-item">Department : IT</div>
                    <div className="flex-item">Date of joining : 12/23/1212</div>
                </div>
                <div className="ticketDetails">
                    <div>Number of Ticket Assigned : {assignTickets} </div>
                    <div>Number of Ticket Completed : {ticketCompleted}</div>
                    <div>Number of Ticket Pending : {ticketsPending}</div>
                    <div>Number of Blocker Faced : {blockedTickets}</div>
                </div>
                <div>
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                </div>
            </div>


        </>
    )
}
export default EmployeeLogin;