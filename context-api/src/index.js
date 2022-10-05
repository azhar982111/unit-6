import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeContextProvider from "./context/theme"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <AuthContextProvider>
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
        
    // </AuthContextProvider>

);


