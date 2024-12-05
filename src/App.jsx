import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserForm from './components/UserForm'
import Profile from './components/Profile'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}