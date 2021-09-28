import {Route} from "react-router-dom";
import Header from "./components/header";
import Navigation from "./components/navigation";
import DynamicContent from "./components/dynamic-content";
import Welcome from "./components/pages/welcome";
import Products from "./components/pages/products";
import Sidebar from "./components/sidebar";

function App() {
    return (
        <div className="App">
            <Header/>
            <Sidebar>
                <Navigation/>
            </Sidebar>
            <DynamicContent>
                <Route path="/welcome">
                    <Welcome/>
                </Route>
                <Route path="/products">
                    <Products/>
                </Route>
            </DynamicContent>

        </div>
    );
}

export default App;
