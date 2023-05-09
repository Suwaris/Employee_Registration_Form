import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeList.style.css";
import EmployeeModal from "./EmployeeModal";


type Props = {
    list: IEmployee[];
    onDeleteClickHnd: (data: IEmployee) => void;
    onEdit: (data: IEmployee) => void;
}

    const EmployeeList = (props: Props) => {
        const { list, onDeleteClickHnd, onEdit } = props;
        const [showModal, setShowModal] = useState(false);
        const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

    const viewEmployee = (data: IEmployee) => {
        setDataToShow(data);
        setShowModal(true)
    }

    const onCloseModal = () => setShowModal(false)

    return (
        <div>
            <article className="list-header">
                <h3>Employee List</h3>
            </article>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Depatment</th>
                        <th>Action</th>
                    </tr>
                    {list.map(employee => {
                        console.log(employee)
                        return  <tr key={employee.id}>
                            <td>{`${employee.firstName} ${employee.lastName}`}</td>
                            <td>{`${employee.email}`}</td>
                            <td>{`${employee.department}`}</td>
                            <td>
                                <div>
                                    <input type="button" value="View" onClick={()=>viewEmployee(employee)}/>
                                    <input type="button" value="Edit"  onClick={()=>onEdit(employee)}/>
                                    <input type="button" value="Delete"  onClick={() => onDeleteClickHnd(employee)}/>
                                </div>
                            </td>
                    </tr>
                    })}
                </tbody>               
            </table>
            {showModal &&  dataToShow !== null && (<EmployeeModal onClose={onCloseModal} data={dataToShow}/>)}
            
        </div>
    )
}


export default EmployeeList;