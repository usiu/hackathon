import React from "react";
import Router from "react-router"
var { Link } = Router;

import Navigation from "./navigation";
import API_CONFIG from "../../api-config";
const API_URL = API_CONFIG.baseUrl;

class AppHeader extends React.Component {
	_handleAuth(url) {
		var child = window.open(url, '_blank', 'menubar=no,status=no,height=500,width=800');
		var leftDomain = false;
	  var interval = setInterval(function() {
        try {
            if (child.document.domain === document.domain) {
                if (leftDomain && child.document.readyState === "complete") {
                    // we're here when the child window returned to our domain
                    clearInterval(interval);
										window.location = '/me';
										child.close();
                }
            }
            else {
                // this code should never be reached,
                // as the x-site security check throws
                // but just in case
                leftDomain = true;
            }
        }
        catch(e) {
            // we're here when the child window has been navigated away or closed
            if (child.closed) {
                clearInterval(interval);
                alert("closed");
                return;
            }
            // navigated to another domain
            leftDomain = true;
        }
	    }, 600);
	}
	authGitHub(event) {
		event.preventDefault();
    this._handleAuth(API_URL + '/api/auth/github');
	}
	authGoogle(event) {
		event.preventDefault();
    this._handleAuth(API_URL + '/api/auth/google');
	}
	closeRegister(event) {
		event.preventDefault();
    $('body').removeClass('show-register');
    $('html').removeClass('no-scroll');
	}
	render() {
		return <span>

        <div className="bg-solid green row register">
          <header className="open">
            	<nav>
              <div className="logo-wrapper lf">
              <a href=""><img src="/assets/images/logo_white.png" /></a>
              </div>
              <div className="rf">
                <a href="#" className="menu-icon" onClick={this.closeRegister.bind(this)}><div className="patty"></div></a>
              </div>
            </nav>
            <div className="content">
              <div className="lf">
                <a href="#" className="button hollow white" onClick={this.authGitHub.bind(this)}>Signin with Github</a>
                <a href="#" className="button hollow white" onClick={this.authGoogle.bind(this)}>Signin with Google</a>
              </div>
              <div className="hidden rf">
                <a href="" className="button hollow white">Login</a>
              </div>
            </div>
          </header>
          <div className="sponsors">
            <h4>Sponsored by</h4>
            <img src="/assets/images/at_logo_white.png" />
            <img src="/assets/images/angani_white.png" />
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
