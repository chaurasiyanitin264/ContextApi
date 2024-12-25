import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import LoginContext from './LoginContext.jsx'

createRoot(document.getElementById('root')).render(
<LoginContext>
<App />
</LoginContext>

)