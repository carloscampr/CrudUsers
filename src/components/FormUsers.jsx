
import { useForm } from "react-hook-form"
import { useEffect } from "react"

const defaultValues = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: ""
}

const FormUsers = ({createUser, userUpdate, updateUser, isShowForm, handleChangeShowModal}) =>{
    const {handleSubmit, register, reset} = useForm()
    
    const submitForm = (data) =>{
        if(userUpdate){
            updateUser(userUpdate.id, data)
        }else{
            createUser(data)
        }
        reset(defaultValues)
    }

    const titleForm = userUpdate ? "Edit user" : "New user"
    const textButton = userUpdate ? "Edit user" : "Add new user"

    useEffect (() =>{
        if(userUpdate){
            reset(userUpdate)
        } else {
            reset(defaultValues)
        }
    }, [userUpdate])
    return(
        <div className={`container-form ${isShowForm ? "" : "disable-form"}`}>
            <form className="form" onSubmit={handleSubmit(submitForm)}>
                <i onClick={handleChangeShowModal} className='form_x bx bx-x'></i>
                <h2 className="form_title">{titleForm}</h2>
                <div className="form-div">
                    <label className="form-label" htmlFor="">Email</label>
                    <input className="form-input" placeholder="Enter your email" type="email"{...register("email")}/>
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="">Password</label>
                    <input className="form-input" placeholder="Enter your password" type="password"{...register("password")}/>
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="">First name</label>
                    <input className="form-input" placeholder="Enter your first name" type="text"{...register("first_name")}/>
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="">Lastname</label>
                    <input className="form-input" placeholder="Enter your last name" type="text"{...register("last_name")}/>
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="">Birthday</label>
                    <input className="form-input" type="date"{...register("birthday")}/>
                </div>
                <button className="form-btn">{textButton}</button>
            </form>
        </div>
    )
}
export default FormUsers