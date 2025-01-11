import '../styles.css'
import { Link } from 'react-router-dom';

function Header(){
return(
    <div className="header">
       <div>
        <Link to='/'><img src="../src/assets/logo.png" height="80px" width="80px"/>
        <h1>Online Library System</h1></Link>
        

        </div>

        <div className='headermenu'>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/browsebook'><li>Browse Books</li></Link>
                <Link to='/addbook'><li>Add Book</li></Link>
            </ul>
        </div>
        
    
    </div>
)
}

export default Header;