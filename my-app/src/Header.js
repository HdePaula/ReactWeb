import './Header.css';

function Header() {
  return (
    <div className="Header">
        <div className='Header_logo'>
            <p>Maker</p>
        </div>

        <div className='Header_menu'>
            <a href=''>Home</a>
            <a href=''>Impressão 3D</a>
            <a href=''>Oficina</a>
            <a href=''>Programação</a>
        </div>
    </div>
  );
}

export default Header;
