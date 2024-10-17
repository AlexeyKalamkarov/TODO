import NotePencil from '../../image/header/NotePencil.svg';
import '../Header/style.css'
const Header = () => {
    return ( 
        <header className="header">
            <div className="header-title">
                <h1>TO-DO NOW</h1>
                <div className="header-icon">
                    <div className="line"></div>
                        <div className="icon">
                            <img src={NotePencil} alt="" />
                        </div>
                    <div className="line"></div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;