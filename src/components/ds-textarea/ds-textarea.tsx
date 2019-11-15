import { Component, Prop, Event, State, EventEmitter, h } from '@stencil/core';


@Component({
  tag: 'ds-textarea',
  styleUrl: 'ds-textarea.css',
  shadow: true
})
export class Textarea {

	@Prop() label: string;

	@Prop() name: string;

	@Prop() type: string;

	@Prop() valid: boolean;

  @Prop() color: string;

  @Event() changed: EventEmitter<string>;

  @Prop() value: string;

  @State() isTyped: boolean;

  

  handleChange(ev) {
    this.value = ev.target ? ev.target.value : null;
	this.changed.emit(this.value);
	
	this.valid = undefined;

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
	
    return	<host name={this.name}>
				<textarea name={this.name} onInput={(ev) => this.handleChange(ev)} class={ this.color + ' ' + (this.isTyped ? 'typed' : '')  + ' ' + (this.valid === true ? 'valid' : '') + ' ' + (this.valid === false ? 'invalid' : '')}>{this.value}</textarea>
				<span class="label">{this.label}</span>
			</host>
  }
}