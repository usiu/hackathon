import React from "react";
import Router from "react-router"
var { Link } = Router;
import $ from "jquery";
window.$ = $;

class LastSemester extends React.Component {
	handleClick(event) {
		window.evenT = event;
		function createModal() {
            var modal = '<div class="modal-wrapper hidden"><div class="modal"><a href="" class="hidden arrow left"></a><a href="" class="arrow right hidden"></a></div></div>'
            $('body').append(modal);
            $('body').on('click', '.modal', function(e) {
                $('.modal-wrapper').addClass('hidden');
				$('.modal img').remove();
                $('html').removeClass('no-scroll');
            });
			$('.modal').on('click', '.arrow', function(e) {
				e.stopPropagation();
				e.preventDefault();
				var numImages = $('.page > .row img').length;
				var index = $('.modal img').data('index');
				var index = $('.modal img').attr('data-index');

				if($(this).hasClass('left')) {
					index = (index - 1 < 0 ) ? numImages - 1 : index - 1;
				} else {
					index = (index + 1 >= numImages) ? 0 : index + 1;
				}

				var el = $($('.page > .row img')[index]);
				var content = '<img src="' + el.attr('src') + '" data-index="'+ $(el).index()+'">';
				$('.modal img').remove();
				$('.modal').append(content);

			})
    }

    //Creates modal if it does not exist on page
    if (typeof $('.modal-wrapper')[0] === 'undefined' || typeof $('.modal')[0] === 'undefined') {
        createModal();
    }

    var content = '<img src="' + $(event.target).attr('src') + '" data-index="'+ $(event.target).index()+'">';

    $('.modal-wrapper').removeClass('hidden');
    $('html').addClass('no-scroll');

    $('.modal').append(content);

	}
	render() {

		return <div className="page main wrapper">
				<div className="title-wrapper">
					<h1>Gallery</h1>
					<p>Last semester&rsquo;s hackathon in pictures</p>
				</div>
				<div className="row">
					<img src="/assets/images/winner.jpg" className="main-image" />
					<ul className="gallery-images">
						<li>
							<img src="/assets/images/9T4A8251.jpg" onClick={this.handleClick} />
						</li>
						<li>
							<img src="/assets/images/9T4A8266.jpg" onClick={this.handleClick} />
						</li>
						<li>
							<img src="/assets/images/9T4A8314.jpg" onClick={this.handleClick} />
						</li>
						<li>
							<img src="/assets/images/9T4A8314.jpg" onClick={this.handleClick} />
						</li>
						<li>
							<img src="/assets/images/DSC07673.jpg" onClick={this.handleClick} />
						</li>
						<li>
							<img src="/assets/images/DSC07638.jpg" onClick={this.handleClick} />
						</li>
					</ul>
				</div>
			</div>;
	}
	componentDidMount() {
		$('title').html('USIU-Africa Hackathon &mdash; Summer 2015');
		$('body').removeClass('login');
	}
};

export default LastSemester;
