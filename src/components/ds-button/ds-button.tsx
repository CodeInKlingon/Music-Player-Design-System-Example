import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.css',
  shadow: true
})
export class Button {

  @Prop() color: string;

  @Event({ eventName: 'dsclicked', bubbles: true}) dsclicked: EventEmitter<string>;

	
  handleChange(ev: any) {
	//   console.log("clicked");
	ev;
	this.dsclicked.emit();
  }

  render() {
    return 	<button class={this.color} onClick={(ev) => this.handleChange(ev)}>
				<slot/>
			</button>;
  }
}
