import { Outlet } from "react-router-dom";

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