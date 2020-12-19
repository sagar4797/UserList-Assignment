import React,{ useState, useEffect} from "react";


const ContactForm = (props) => {
const initialFieldValues = {  //initialise all values
    fullName:'',
    email:'',
    message:''
}
var [values, setValues] = useState(initialFieldValues)

const handleInputChange = e =>{    // set all values in one state 
    var { name, value } = e.target
    setValues({
        ...values, //this is stored all values
        [name] :value
    })
}
const handleFormSubmit = e =>{ // form submit function
    var emailCheck = values.email;
    if(emailCheck.indexOf('@')<=0){  // Email Validation (@ is not allow in first index)
        alert("Please enter a valid email address.");
        return false;
    } if((emailCheck.charAt(emailCheck.length-4)!='.') && (emailCheck.charAt(emailCheck.length-3)!='.') ){ //check after dot how many character
        alert("Please enter a valid email address.");
        return false;
    } else{
        e.preventDefault();
        props.addOrEdit(values)
    }
   
}
    return ( 
        <form autoComplete="off" name="myForm" style={{backgroundColor: "#f2f2f2",padding:"29px"}} onSubmit={handleFormSubmit}>
            <h5>User Form</h5>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div>
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Enter Your Name" name="fullName"
                value={values.fullName}
                onChange={handleInputChange}
                />
            </div>
            <br></br>
            <div className="form-row">
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div>
                        <i className="fas fa-envelope"></i>
                    </div>
                </div>
                <input className="form-control" placeholder=" Email" name="email"
                value={values.email}
                onChange={handleInputChange}

                />
            </div>
            <br></br>
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                    <div>
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <textarea className="form-control"  placeholder="message" name="message"
                value={values.message}
                onChange={handleInputChange}

                />
            </div>
            
            </div>
            <br></br>
            <div className="form-group">
                <input type="submit" value="Submit" className="btn btn-primary btn-block" />

            </div>
        </form>
    );
}

export default ContactForm;