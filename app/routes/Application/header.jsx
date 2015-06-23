import React from "react";
import Router from "react-router"
var { Link } = Router;

import Navigation from "./navigation";

class AppHeader extends React.Component {
	render() {
		return <span>
        
        <div className="bg-solid green row register">
          <header className="open">
            <nav>
              <div className="logo-wrapper lf">
              <a href=""><img src="/assets/images/logo_white.png" /></a>
              </div>
              <div className="rf">
                <a href="#" className="menu-icon"><div className="patty"></div></a>
              </div>
            </nav>
            <div className="content">
              <div className="lf">
                <a href="" className="button hollow white">Signup with Github</a>
                <a href="" className="button hollow white">Signup with Google</a>
              </div>
              <div className="rf">
                <a href="" className="button hollow white">Login</a>
              </div>
            </div>
          </header>
          <div className="sponsors">
            <h4>Sponsored by</h4>
            <img src="/assets/images/DO_Logo_Vertical_White.png" />
          </div>
        </div>
        
        <header>
				  <Navigation />
				  <a href="#" className="menu-icon"><div className="patty"></div></a>
			  </header>
      </span>;
	}

};

export default AppHeader;