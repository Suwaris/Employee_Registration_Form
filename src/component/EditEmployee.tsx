import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css"


type Props = {
    data: IEmployee;
    onBackBtnClickHnd : () => void;
    onUpdateClickHnd: (data: IEmployee) => void
}

const EditEmployee = (props: Props) => {
    const { data, onBackBtnClickHnd, onUpdateClickHnd  } = props;

    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName)
    const [email, setEmail] = useState(data.email);
    const [department, setDepartment] = useState(data.department);

    const onFirstNameChangeHnd = (e:any) => {
        setFirstName(e.target.value)
    };

    const onLastNameChangeHnd = (e:any) => {
        setLastName(e.target.value)
    };
    
    const onEmailChangeHnd = (e:any) => {
        setEmail(e.target.value)
    };

    const onDepartmentChangeHnd = (e:any) => {
        setDepartment(e.target.value)
    };

    const onSubmitBtnClickHnd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    // Validate inputs
    if (!firstName || !lastName || !email || !department) {
        alert("Please fill in all fields");
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

        const updatedData: IEmployee = {
            id: data.id,
            firstName: firstName,
            lastName: lastName,
            email: email,
            department: department
        }
        onUpdateClickHnd(updatedData);
        onBackBtnClickHnd();

        // Reset the form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setDepartment("");
    }

    return (
        <div className="form-container">
        <div>
            <h3>Add Employee Form</h3>
        </div>
        <form onSubmit={onSubmitBtnClickHnd}>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={onFirstNameChangeHnd} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={onLastNameChangeHnd}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange={onEmailChangeHnd}/>
            </div>
            <div>
                <label>Department: 
                    <select className="select-container" value={department} onChange={onDepartmentChangeHnd}>
                        <option value="">Select your department</option>
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="Finance">Finance</option>
                    </select>
                </label>
            </div>        
            <div>
                <input type="button" value="Back" onClick={ onBackBtnClickHnd }/>
                <input type="submit" value="Update Employee" />
            </div>           
        </form>
      </div>
    )
    
}

export default EditEmployee;