import { Component, Prop, h, Event, EventEmitter, Listen, Element } from '@stencil/core';
import {Track} from '../../utils/track'

@Component({
	tag: 'ds-player',
	styleUrl: 'ds-player.css',
	shadow: true,

})
export class Player {

	@Element() el;

	@Prop() nowplaying: Track;

	@Prop() playbackState;



	@Event({
		eventName: 'togglePlaybackRequest',
		composed: true,
		cancelable: true,
		bubbles: true,
	}) togglePlaybackRequest: EventEmitter;

	@Event({
		eventName: 'prevRequest',
		composed: true,
		cancelable: true,
		bubbles: true,
	}) prevRequest: EventEmitter;

	@Event({
		eventName: 'nextRequest',
		composed: true,
		cancelable: true,
		bubbles: true,
	}) nextRequest: EventEmitter;

	@Listen('nowPlayingChanged')
	nowPlayingUpdate(ev){
		var track = ev.detail;
		this.nowplaying = track;
		this.el.shadowRoot.querySelector('.progress').style.animation.duration = track.duration + "s";
		this.el.shadowRoot.querySelector('.handle').style.animation.duration = track.duration + "s";
	}


	@Listen('stateChanged')
	stateUpdate(ev){
		var state = ev.detail;
		state;
		var progress = 50; //TODO: connect progress varable to state object
		this.el.shadowRoot.querySelector('.progress').style.animation.duration = "-" + progress + "s";
		this.el.shadowRoot.querySelector('.handle').style.animation.duration = "-" + progress + "s";
	}


	@Event({
		eventName: 'seekRequest',
		composed: true,
		cancelable: true,
		bubbles: true,
	}) seekRequest: EventEmitter;

	seekTrack(ev){
		var position = ev.clientX;
		var elementX = ev.target.getBoundingClientRect().x;
		var elementWidth = ev.target.getBoundingClientRect().width;
		var progress = (position - elementX) / elementWidth; 

		console.log(progress)
		console.log(this.nowplaying.duration * progress)

		this.seekRequest.emit( this.nowplaying.duration * progress)
	}

	render() {
		return 	<div class="player">
					<div class="track">
						<div class="preview">
							<img src={ (this.nowplaying != undefined? this.nowplaying.thumbnail : ' ' )} />
						</div>
						<div class="text">
							<span class={"title " + (this.nowplaying == undefined? 'none': '') }>{ (this.nowplaying != undefined? this.nowplaying.title : '' )}</span>
							<span class={"artist " + (this.nowplaying == undefined? 'none': '') }>{ (this.nowplaying != undefined? this.nowplaying.artist : '' )}</span>
						</div>
					</div>
					<div class="controls">
						<div class="buttons">

						<button class="prev"></button>
						<button class="play"></button>
						<button class="next"></button>

						</div>
						<div class="seek">
							<div class="range">
								<div onClick={(ev) => this.seekTrack(ev) } class="bar"></div>
								<div class="progress"></div>
								<div class="handle"></div>
							</div>
						</div>


					</div>
				</div>;
	}
}

