import { Route, Routes } from 'react-router-dom'
import './App.css'
import PostList from './pages/PostList'
import PostCreate from './pages/PostCreate'
import PostEdit from './pages/PostEdit'
import PostShow from './pages/PostShow'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<PostList />} />
        <Route path='/create' element={<PostCreate />} />
        <Route path='/edit/:id' element={<PostEdit />} />
        <Route path='/show/:id' element={<PostShow />} />
      </Routes>
    </div>
  )
}

export default App
