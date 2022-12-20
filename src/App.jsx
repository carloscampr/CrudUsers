
import axios from 'axios'
import './App.css'
import FormUsers from './components/FormUsers'
import {useEffect, useState} from 'react'
import UserCard from './components/UserCard'

const baseUrl = "https://users-crud.academlo.tech/"

function App() {
  const [users, setUsers] = useState()
  const [userUpdate, setUserUpdate] = useState()
  const [isShowForm, setIsShowForm]= useState(false)

  const getAllUsers = () => {
    const url = `${baseUrl}users/`
    axios.get(url)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  const createUser = (data) =>{
    const url = `${baseUrl}users/`
      axios.post(url, data)
        .then(res => {
          console.log(res.data)
          getAllUsers()
          handleChangeShowModal()
        })
        .catch(err => console.log(err))
  }
  const deleteUser = (id) =>{
    const url = `${baseUrl}users/${id}`
      axios.delete(url)
        .then(res => {
          console.log(res.data)
          getAllUsers()
        })
        .catch(err => console.log(err))
  }
  const updateUser = (id, data) =>{
    const url = `${baseUrl}users/${id}/`
     axios.patch(url,data)
      .then(res => {
        console.log(res.data)
        getAllUsers();
        setUserUpdate();
        handleChangeShowModal();
      })
      .catch(err => console.log(err))
  }
  const handleChangeShowModal = () =>{
    setIsShowForm(!isShowForm)
  }

  const handleClickNewUser = () =>{
    setUserUpdate()
    handleChangeShowModal()
  }

  useEffect(()=>{
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <div className='header-container'>
        <h1 className='header-title'>Crud users</h1>
        <button onClick={handleClickNewUser} className='header-btn'><i className='bx bxs-plus-circle'></i> Create new user</button>
      </div>
      <FormUsers createUser={createUser} userUpdate = {userUpdate} updateUser={updateUser} isShowForm={isShowForm} handleChangeShowModal={handleChangeShowModal}/>
      <div className='users-container'>
        {
          users?.map(user =>(
            <UserCard key={user.id} user={user} deleteUser={deleteUser} setUserUpdate = {setUserUpdate} handleChangeShowModal={handleChangeShowModal}/>          
          ))
        }
      </div>
    </div>
  )
}

export default App
