import react from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root=document.getElementById('root')

const render = () => {
ReactDOM.createRoot(root).render(
    <react.StrictMode>
        <App />
    </react.StrictMode>,
);
}

render();