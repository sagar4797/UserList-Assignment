import React,{ useState, useEffect } from "react";
import ContactForm from "./ContactForm"
import firebaseDb from "../firebase.js";

const Contacts = () => {
    var [contactObjects, setContactObjects] = useState({})

    useEffect(()=>{
        firebaseDb.child('contacts').on('value', snapshot=>{
            if(snapshot.val()!= null)
            setContactObjects({
                ...snapshot.val()
            })
        })
    },[]) //This is similer to componentDidMount

    const addOrEdit = obj=>{
        firebaseDb.child('contacts').push(
            obj,
            err => {
                if(err)
                    console.log(err);
                
            }
        )
    }
    return ( 
        <>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center"></h1>
            </div>
         </div>
         <div className="row">
             <div className="col-md-5">
                <ContactForm addOrEdit={addOrEdit}/>
             </div>
             <div className="col-md-7">
                 
                 <table className="table table--borderless table-stripped">
                     <thead className="thead-light">
                         <tr>
                             <th>Full Name</th>
                             <th>Email</th>
                             <th>Massage</th>
                         </tr>
                     </thead>
                     <tbody>
                         {
                             Object.keys(contactObjects).map(id=>{
                                 return <tr>
                                     <td>{contactObjects[id].fullName}</td>
                                     <td>{contactObjects[id].email}</td>
                                     <td>{contactObjects[id].message}</td>
                                 </tr>
                             })
                         }
                     </tbody>
                 </table>

             </div>
         </div>
         </>

    );
}

export default Contacts;