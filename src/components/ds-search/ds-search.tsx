import { Component, Prop, Event, State, EventEmitter, h, Listen } from '@stencil/core';
// import {Track} from '../../utils/track'


@Component({
	tag: 'ds-search',
	styleUrl: 'ds-search.css',
	shadow: true
})
export class Search {


	@Event() changed: EventEmitter<string>;

	@Prop() value: string;

	@State() isTyped: boolean = false;

	searchResults: any = [
		{
			title: 'rolling in the deep',
			artist: 'adele',
			thumbnail: 'string',
			duration: 100
		},
		{
			title: 'hit me baby',
			artist: 'britany',
			thumbnail: 'string',
			duration: 100
		},
	];

	@Event({
		eventName: 'changeTrackRequest',
		composed: true,
		cancelable: true,
		bubbles: true,
	}) changeTrackRequest: EventEmitter;


	@Listen('listItemClicked')
	resultSelected(ev){
		var track = ev.detail;
		console.log(track);
		this.value = "";
		this.isTyped = false;

		var selectedTrack;
		this.changeTrackRequest.emit(selectedTrack);
	}

	handleChange(ev) {
		this.value = ev.target ? ev.target.value : null;
		

		if ( this.value != "") {
			this.isTyped = true;
		} else {
			this.isTyped = false;
		}
	}

	componentDidLoad(){

		if(this.value != undefined){
			this.isTyped = true;
		}else{
			this.isTyped = false;
		}
	}

	render() {
		
		return	<host>
					<div class="root">
						<ds-textbox onInput={(ev) => this.handleChange(ev)} value={this.value} type="search" placeholder="Search"></ds-textbox>
						{/* results */}
						<div class={"search-results " + (this.isTyped ? "": "no-results")}>
						{this.isTyped
							?
							
							this.searchResults.map((track) =>
								<ds-track-list-item track={track} eventName="listItemClicked"></ds-track-list-item>
							)
						
							:
								''
						}
						
						</div>
					</div>
					
				</host>
	}
}