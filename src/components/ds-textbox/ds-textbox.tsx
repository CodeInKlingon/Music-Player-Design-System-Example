import { Component, Prop, Event, State, EventEmitter, h } from '@stencil/core';


@Component({
  tag: 'ds-textbox',
  styleUrl: 'ds-textbox.css',
  shadow: true
	// shadow: true
})
export class Textbox {

	@Prop() label: string;
	@Prop() placeholder: string;

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
	
    return	<host>
				<div class={"root " + this.type}>
					<input data-label={this.label} placeholder={this.placeholder} type={this.type} name={this.name} value={this.value}  onInput={(ev) => this.handleChange(ev)} class={ this.color + ' ' + (this.isTyped ? 'typed' : '')  + ' ' + (this.valid === true ? 'valid' : '') + ' ' + (this.valid === false ? 'invalid' : '')} />
					<span class="label">{this.label}</span>
				</div>
			</host>

  }
}