const EmployeeInfo = (props) => {
    return (
        <>
            <div className="EmployeeInfo">
                <div>
                    <img className="employeeInfoImage" src="https://wallpapers-clan.com/wp-content/uploads/2023/02/anime-boy-black-pfp-1.jpg"></img>
                </div>
                <div className="employeeInfoDetail">
                    <div className="flex-item">Name : {props.Name}</div>
                    <div className="flex-item">Employee Id : {props.EmployeeId}</div>
                    <div className="flex-item">Department : {props.Department}</div>
                </div>
            </div>

        </>
    )
}
export default EmployeeInfo;