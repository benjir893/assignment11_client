
import { Link } from 'react-router-dom';
import logo from '../../assets/prodXlogo.webp'

const Navlogo = () => {
    return (
        <div>
            {/* "https://i.ibb.co/rvsWpfQ/prod-Xlogo.webp" */}
            <Link to={'/'}><img className='w-16 h-16 rounded-full mt-2 mx-2' src={logo} alt="logo" /></Link>
        </div>
    );
};

export default Navlogo;