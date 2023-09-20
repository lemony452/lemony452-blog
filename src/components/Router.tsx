import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/home/index"
import Login from "../pages/login/index"
import Signup from "../pages/signup/index"
import Profile from "../pages/home/profile/index"
import Posts from "../pages/home/posts/index"
import Detail from "../pages/home/posts/detail"
import New from "../pages/home/posts/new"
import Edit from "../pages/home/posts/edit"

function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<Signup></Signup>} />
        <Route path='/profile' element={<Profile></Profile>} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<Detail />} />
        <Route path='/posts/new' element={<New />} />
        <Route path='/posts/edit/:id' element={<Edit />} />
        <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
    </>
  )
}

export default Router