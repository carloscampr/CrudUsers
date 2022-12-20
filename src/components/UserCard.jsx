const UserCard = ({user, deleteUser, setUserUpdate, handleChangeShowModal}) =>{

    const handleChangeClickUpdate = () => {
        setUserUpdate(user)
        handleChangeShowModal()
    }
    
    return(
        <article className="user">
            <h2 className="user_title">{`${user.first_name} ${user.last_name}`}</h2>
            <ul className="user_list">
                <li className="user_item"><span>Email: </span>{user.email}</li>
                <li className="user_item">
                    <span>Birthday: </span>
                    <div>
                        <i className='bx bx-gift'></i>
                        {user.birthday}
                    </div>
                </li>
            </ul>
            <div className="user_container-btn">
            <button className="user-btn" onClick={() => deleteUser(user.id)}>
                <i className='bx bxs-trash'></i>
            </button>
            <button className="user-btn" onClick={handleChangeClickUpdate}>
                <i className='bx bx-edit-alt'></i>
            </button>
            </div>
        </article>
    )
}
export default UserCard