import React from "react";
import Router from "react-router"
var { Link } = Router;
import $ from "jquery";

class FAQ extends React.Component {
	render() {

		return <div className="page main wrapper">
          <div className="title-wrapper">
            <h1>FAQ</h1>
          </div>
            <article className="guide row">
              <h4 id="whatisa_hackathon_">What is a <em>hackathon</em>?</h4>

            <p>A hackathon is an event, typically lasting several days, in which a large number of people meet to engage in <em>collaborative</em> computer programming.</p>

            <h4>How much is this going to cost me?</h4>
            <p>The hackathon is completely free, including food, drinks and awesome swag.</p>

            <h4 id="whatdoiget">What do I get?</h4>

            <ul>
            <li>A <strong>shirt</strong> :)</li>
            <li>Snacks and Drinks throughout the event.</li>
            <li>You get to meet other developers and techies.</li>
            <li>Be part of building a new community.</li>
            <li>Swag from our <strong>awesome Sponsors</strong>.</li>
            <li>And lots of other perks/ gifts :D</li>
            </ul>

            <h4 id="doihavetopreorganizeateam">Do I have to pre-organize a team?</h4>
            <p>No. We can try to help you find one at the event.</p>
                        

            <h4>What about team sizes?</h4>
            You&rsquo;re welcome to have up to four people on a team. It is absolutely not necessary to have a team prior to coming to the hackathon.

            <h4>What should I bring?</h4>
            <p>Your valid student ID, laptop, phone, chargers, sleeping equipment, and lots of excitement. If you’re a minor, a parental consent form too that we’ll email to you.</p>


            <h4 id="hackimadevelopernotasecurityguy">Hack? I'm a developer, not a security guy!</h4>

            <p>Relax. In the programming world, hacker means:
            "A person who enjoys exploring the details of programmable systems and stretching their capabilities, as opposed to most users, who prefer to learn only the minimum necessary.</p>
            
            <h4>How do I get there?</h4>
            <p>You can take a </p>

            <h4 id="howtosurviveahackathon">How to survive a hackathon</h4>

            <ul>
            <li>Have a <em>modest</em> goal; a simple concept or app to build. Do one thing and do it well, concentrate on building a prototype, not a finished product! Build something simple; a finished product is better than one that can't compile.</li>
            <li>Get enough rest, stay hydrated and just relax. Relax, take it easy, have fun! - <a href="https://www.youtube.com/watch?v=RVmG_d3HKBA">Mika</a></li>
            <li>Set your tools - sublime-text, Netbeans, Jetbrains, VIM, Emacs &hellip; etc your compilers and get your coding mojo.</li>
            <li>Clean your comp, fine tune it - <em>just get it working</em>.</li>
            </ul>

            <h4 id="haveanideadoineedtobeaprogrammer">Have an Idea? / Do I need to be a programmer?</h4>
            <p>Not really, the hackathon is open to techies and enthusiasts alike (programmers, devs).</p>

            <h4 id="venue">Where is it and How Do I get there?</h4>
            <p>The hackathon wil be held at the USIU-Africa Science Center.</p>
            <p>The centre has all the tools for a successful hackathon, reliable WiFi, microphone, speakers - sockets.</p>

            <h4 id="whowillattendstudentsonly">Who can attend?</h4>
            <p>All undergraduate, graduate from any school or university are welcome</p>

            <h4 id="imnotastudentsohowcanigetinvolved">I&rsquo;m not a student, so how can I get involved?</h4>

            <p>Unfortunately, we can’t allow you to participate in the event or be on site during hacking. If you’re looking to mentor (i.e. someone with <em>technical skills</em> who’d be willing to help out participants during the event), you should reach out to us at <strong>itclub@clubs.usiu.ac.ke</strong>.</p>

            <h4 id="hackathonguidelines">Hackathon Guidelines</h4>
            <ul>
              <li>Coding <strong>must</strong> take place during designated programming hours. No outside work allowed.</li>
              <li>Each team gets <strong>5</strong> minutes to present their project.</li>
              <li>Each project must be solving a problem identified in any area.</li>
              <li><strong>Bring your own device</strong> (BYOD) laptop, tablet, testing device.</li>
              <li>We encourage teams to be composed of <em>two to five people</em> - you need a good reason to work alone (<strong>optional</strong>).</li>
              <li>If and when voting occurs, each team must cast votes for <strong>ANOTHER</strong> team. No self-voting allowed! (for the audience choice award).</li>
              <li>Upon judging, no complaints can be made whatsoever: their choice is final. There will however be an audience choice award.</li>
              <li>Participation awards - recognition on the IT club website for respective teams.</li>
              <li><strong>No running torrents</strong> within the network or unnecessarily deteriorating the network.</li>
              <li>For those running hacking demos, be sure to get <strong>permission</strong> before penetrating a system or setup a virtual environment for your tests.</li>
              <li>Short demo and presentation, <strong>5 slides max, 5 mins max</strong>. Sharpen that elevator pitch.</li>
              <li><strong>No running torrents</strong> within the network or unnecessarily deteriorating the network (Looking at you IDM users!).</li>
            </ul>


            <h4 id="schedule">How long will the hackathon last?</h4>

            <p>The hackathon should last just under 10 hours. Not a lot of time, admittedly, but having a tighter deadline will make teams much more productive!</p>
            
            <h4>I have a question that&rsquo;s not answered here!</h4>
            <p>We’re here for you! Send us an email at itclub@clubs.usiu.ac.ke or feel free to reach out to us on Twitter or Facebook.</p>

                </article>
		</div>;
	}
	componentDidMount() {
		$('title').html('USIU-Africa Hackathon &mdash; Summer 2015');
		$('body').removeClass('login');
	}
};

export default FAQ;
