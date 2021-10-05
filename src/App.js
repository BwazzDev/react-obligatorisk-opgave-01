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
            <div className="non-header">
                <Sidebar>
                    <Navigation/>
                </Sidebar>
                <DynamicContent>
                    <Route path="/welcome">
                        <Welcome/>
                    </Route>
                    <Route path="/property-listings">
                        <Products/>
                    </Route>
                </DynamicContent>
            </div>
        </div>
    );
}

export default App;
