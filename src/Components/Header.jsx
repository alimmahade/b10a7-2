const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <img src="/src/assets/logo.png" alt="" />
    <a className="btn btn-ghost text-xl">BPL</a>

  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Schedules</a></li>
      <li><a href="">Coin</a></li>
      
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;