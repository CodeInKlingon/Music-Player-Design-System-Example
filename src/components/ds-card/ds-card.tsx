import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'ds-card',
  styleUrl: 'ds-card.css',
  shadow: true,
//   scoped: true
})
export class Card {

 @Prop() color: string;

  render() {
    return 	<div class={this.color}>
				<slot/>
			</div>;
  }
}
