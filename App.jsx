import { useState } from 'react'
import Login from './Login.jsx'
import SignUp from './SignUp.jsx'
import WrongPassword from './assets/WrongPassword.jsx'
import ResetPassword from './assets/ResetPassword.jsx'

function App() {
  const [page, setPage] = useState('login')
  const [message, setMessage] = useState(null)

  return(
    <div className="min-h-screen bg-gray-50">
      {page === 'login' && <Login setPage={setPage} setMessage={setMessage} />}
      {page === 'signup' && <SignUp setPage={setPage} setMessage={setMessage} />}
      {page === 'wrong-password' && <WrongPassword setPage={setPage} />}
      {page === 'reset-password' && <ResetPassword setPage={setPage} />}
      {message && <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">{message}</div>}
    </div>
  );
}

export default App
