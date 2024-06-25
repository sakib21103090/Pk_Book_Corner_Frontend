import { Outlet } from "react-router-dom";
import Navbar from "../features/Shared/Navbar";
import Navigation from "../features/Shared/Navigation";

const Main = () => {
    return (
        <div>
        {/* <Navbar></Navbar> */}
        <Navigation></Navigation>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Main;