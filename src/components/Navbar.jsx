// import {appLogo} from "../image/appLogo"

function NavBar() {
  return (
    <>
      <nav>
        <div class="nav-bar">
          <div classname="logo">
            <p className="app-name">CRYPTOFLUENCING</p>
          </div>

          <div class="nav-options">
            <div className="nav-items">
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#instagram-activeTask">Instagram Bounties</a>
                </li>
                <li>
                  <a href="#tiktok-activeTask">Tiktok Bounties</a>
                </li>
                <li>
                  <a href="#twitter-activeTask">Twitter Bounties</a>
                </li>
                <li>
                  <a href="#Team-members">Team</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export { NavBar };
