import { Outlet } from "react-router-dom";
import BasicExample from "./Navigation.jsx";

export default function Layout() {
    return(
        <>
        <BasicExample/>
        <Outlet/>
</>
    )
}