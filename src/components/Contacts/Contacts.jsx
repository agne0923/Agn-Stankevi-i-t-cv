
import kitty from '../../../public/kitty.jpg'
import BasicExample from "../Navbar/Navbar.jsx";
import './Contacts.css'
function Contacts(){
    return(
        <div className="Contacts">
            <BasicExample/>
            
            <h4>Contacts</h4>
            <div className="text">
<p>Gmail </p> <p>agne0923@gmail.com</p>
<p>LinkedIn </p>  <p className="lin"><a href="https://lt.linkedin.com/in/agn%C4%97-stankevi%C4%8Di%C5%ABt%C4%97-396038313?trk=people-guest_people_search-card">  LinkedIn</a> </p>
</div>
<img src={kitty} alt="" />
</div>
    )
}
export default Contacts;
