import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import {Track} from '../../utils/track'


@Component({
	tag: 'ds-track-list-item',
	styleUrl: 'ds-track-list-item.css',
	shadow: true,

})
export class TrachListItem {


	@Prop() track: Track;
	@Prop() eventName: string;

	@Event({
		eventName: this.eventName,
		composed: true,
		cancelable: true,
		bubbles: true,
	}) listItemClicked: EventEmitter;

	trackListItemClicked(ev){
		ev;
		console.log('track item clicked');
		this.listItemClicked.emit(this.track)
	}

	render() {
		return 	<div class="track" onClick={(ev) => this.trackListItemClicked(ev) } >
					<div class="preview">
						<img src={this.track.thumbnail} />
					</div>
					<div class="text">
						<span class="title">{this.track.title}</span>
						<span class="artist">{this.track.artist}</span>
					</div>
				</div>;
	}
}


