import { Component, Prop, Event, State, EventEmitter, h } from '@stencil/core';


@Component({
  tag: 'ds-radio',
  styleUrl: 'ds-radio.css',
  shadow: true,
// shadow: true

//   scoped: true
})
export class Radio {

	@Prop() label: string;

	@Prop() type: string;
	
	@Prop() name: string;

	@Prop() valid: boolean;

  @Prop() color: string;

  @Event() changed: EventEmitter<string>;

  @Prop() value: string;

  @State() isTyped: boolean;


  render() {
	
    return	<host>
				<input type="radio" data-label={this.label} value={this.value} name={this.name} />
			</host>
  }
}