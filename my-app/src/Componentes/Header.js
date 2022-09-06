import './Header.css';

function Header() {
  return (
    <div className="Header">
        <div className='headerLogo'>
            <p>Maker</p>
        </div>

        <div className='headerMenu'>
            <a href='https://www.youtube.com/'>Home</a>
            <a href='https://www.youtube.com/'>Impressão 3D</a>
            <a href='https://www.youtube.com/'>Oficina</a>
            <a href='https://www.youtube.com/'>Programação</a>
        </div>
    </div>
  );
}

export default Header;
