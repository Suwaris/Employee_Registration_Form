import { useState } from "react"
import "./EmployeeForm.style.css"
import { IEmployee } from "./Employee.type";
import SearchableDropdown from './SearchableDropdown';



type Props = {
    onBackBtnClickHnd : () => void;
    onSubmitClickHnd : (data: IEmployee) => void
};

interface FormState {
  department: string;
  // add other form fields here
}


const AddEmployee = (props: Props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [formData, setFormData] = useState<FormState>({ department: '' });

    const { onBackBtnClickHnd, onSubmitClickHnd } = props;

    const onFirstNameChangeHnd = (e:any) => {
        setFirstName(e.target.value)
    };

    const onLastNameChangeHnd = (e:any) => {
        setLastName(e.target.value)
    };
    
    const onEmailChangeHnd = (e:any) => {
        setEmail(e.target.value)
    };

    // const onDepartmentChangeHnd = (e:any) => {
    //     setDepartment(e.target.value)
    // };
  
    const onSubmitBtnClickHnd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    // Validate inputs
    if (!firstName || !lastName || !email ) {
        alert("Please fill in all fields");
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

        const data: IEmployee = {
            id: new Date().toJSON().toString(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            department: formData.department
        }
        onSubmitClickHnd(data);
        onBackBtnClickHnd();

        // Reset the form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setDepartment("");
    }

    const departments = ['HR', 'Finance', 'Marketing'];

    const handleDepartmentChange = (value: string) => {
        setFormData({ ...formData, department: value });
      };


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
            {/* <div>
                <label>Department: 
                    <select className="select-container" value={department} onChange={onDepartmentChangeHnd}>
                        <option value="">Select your department</option>
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="Finance">Finance</option>
                    </select>
                </label>
            </div>  */}
            <div>
                <label>Department:  </label>
                <SearchableDropdown name="department" options={departments} value={formData.department} onChange={handleDepartmentChange} />                  
            </div>
                
            <div>
                <input type="button" value="Back" onClick={onBackBtnClickHnd}/>
                <input type="submit" value="Add Employee" />
            </div>           
        </form>
      </div>
    )
}

export default AddEmployee;