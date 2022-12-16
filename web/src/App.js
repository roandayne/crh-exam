import { useNavigate } from 'react-router-dom';
import Login from './components/Login'

const App = () => {
  const navigate = useNavigate();

  return (
    <Login />
  )
}

export default App