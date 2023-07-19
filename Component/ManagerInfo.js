import EmployeeList from "../src/data";
import EmployeeInfo from "./EmployeeInfo";

const ManagerInfo = () => {
    return (
        <>
            <div className="managerBoard">
                {EmployeeList.map((Employee, i) => {
                    const { Name, EmployeeId, Department } = Employee;
                    return (
                        <div key={i} >
                            <EmployeeInfo
                                Name={Name}
                                EmployeeId={EmployeeId}
                                Department={Department}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    )
}
export default ManagerInfo;