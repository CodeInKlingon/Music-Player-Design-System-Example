import { Component, Prop, Event, State, EventEmitter, h } from '@stencil/core';


@Component({
  tag: 'ds-checkbox',
  styleUrl: 'ds-checkbox.css',
  shadow: true
})
export class CheckBox {

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
	
    return	<host>
				<input name={this.name} type="checkbox" data-label={this.label} value={this.value}  onInput={(ev) => this.handleChange(ev)} class={ 'ds-checkbox ' + this.color + ' ' + (this.isTyped ? 'typed' : '')  + ' ' + (this.valid === true ? 'valid' : '') + ' ' + (this.valid === false ? 'invalid' : '')} />
			</host>
  }
}