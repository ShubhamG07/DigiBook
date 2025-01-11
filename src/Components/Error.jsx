import '../styles.css'
import { Link } from 'react-router-dom';


function Error(){
return(
    <div className='errorpage'>
     <div>
     <h2>404 -Page Not Found</h2>
     <p>This page isn't available, you landed on wrong page.</p>
     <Link to='/'><button>Back to Home</button></Link>
        </div>   
    

    <div><img src="../src/assets/404.png" alt="" height="250px" width="250px" /></div>

    </div>
)


}

export default Error;