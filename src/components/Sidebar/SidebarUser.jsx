import { Link } from "react-router-dom";
import { useContext } from "react";

const SidebarUser = () => {
    return (
        <div className="sidebarUser">
            {/* <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">ONFIT</span>
                </Link>
            </div> */}
            <hr />
            <div className="center">
                <ul>
                    <p className="title">-------------</p>
                    <p className="title">Dashboard</p>
                    <Link to="/user/information" style={{ textDecoration: "none" }}>
                        <li>
                            <span>Your Information</span>
                        </li>
                    </Link>
                    <Link to="/user/bodystatus" style={{ textDecoration: "none" }}>
                        <li>
                            <span>Your Body Status</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default SidebarUser;
