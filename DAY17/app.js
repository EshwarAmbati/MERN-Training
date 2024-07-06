import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import HomePage from "./src/pages/homePage.js"
import ProductInfoCard from "./src/components/productInfoCard.js";
const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

const App = ()=>{
    return(
        <div>
            <HomePage />
            <ProductInfoCard/>
        </div>
    );
};

// root.render(App());
root.render(<App/>);