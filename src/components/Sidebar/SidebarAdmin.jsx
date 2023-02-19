import { Link } from "react-router-dom";
import { useContext } from "react";

const SidebarAdmin = () => {
    return (
        <div className="sidebarAdmin">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">ONFIT</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">OTHER</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <span>Trainer</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default SidebarAdmin;
