/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Track,
} from './utils/track';

export namespace Components {
  interface DsButton {
    'color': string;
  }
  interface DsCard {
    'color': string;
  }
  interface DsCheckbox {
    'color': string;
    'label': string;
    'name': string;
    'type': string;
    'valid': boolean;
    'value': string;
  }
  interface DsPlayer {
    'nowplaying': Track;
    'playbackState': any;
  }
  interface DsRadio {
    'color': string;
    'label': string;
    'name': string;
    'type': string;
    'valid': boolean;
    'value': string;
  }
  interface DsSearch {
    'value': string;
  }
  interface DsTextarea {
    'color': string;
    'label': string;
    'name': string;
    'type': string;
    'valid': boolean;
    'value': string;
  }
  interface DsTextbox {
    'color': string;
    'label': string;
    'name': string;
    'placeholder': string;
    'type': string;
    'valid': boolean;
    'value': string;
  }
  interface DsTrackListItem {
    'eventName': string;
    'track': Track;
  }
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface SimpleConfig {
    /**
    * A simple number field
    */
    'aNumber': number;
    /**
    * Another number field
    */
    'bNumber': number;
    /**
    * A string field which represents a color
    */
    'backgroundColor': string;
    /**
    * A boolean field
    */
    'isChecked': boolean;
    /**
    * A poorly named field which should hold a color value
    */
    'poorlyNamedProp': string;
    /**
    * A simple text field
    */
    'simpleText': string;
    /**
    * A date field
    */
    'startDate': string;
  }
}

declare global {


  interface HTMLDsButtonElement extends Components.DsButton, HTMLStencilElement {}
  var HTMLDsButtonElement: {
    prototype: HTMLDsButtonElement;
    new (): HTMLDsButtonElement;
  };

  interface HTMLDsCardElement extends Components.DsCard, HTMLStencilElement {}
  var HTMLDsCardElement: {
    prototype: HTMLDsCardElement;
    new (): HTMLDsCardElement;
  };

  interface HTMLDsCheckboxElement extends Components.DsCheckbox, HTMLStencilElement {}
  var HTMLDsCheckboxElement: {
    prototype: HTMLDsCheckboxElement;
    new (): HTMLDsCheckboxElement;
  };

  interface HTMLDsPlayerElement extends Components.DsPlayer, HTMLStencilElement {}
  var HTMLDsPlayerElement: {
    prototype: HTMLDsPlayerElement;
    new (): HTMLDsPlayerElement;
  };

  interface HTMLDsRadioElement extends Components.DsRadio, HTMLStencilElement {}
  var HTMLDsRadioElement: {
    prototype: HTMLDsRadioElement;
    new (): HTMLDsRadioElement;
  };

  interface HTMLDsSearchElement extends Components.DsSearch, HTMLStencilElement {}
  var HTMLDsSearchElement: {
    prototype: HTMLDsSearchElement;
    new (): HTMLDsSearchElement;
  };

  interface HTMLDsTextareaElement extends Components.DsTextarea, HTMLStencilElement {}
  var HTMLDsTextareaElement: {
    prototype: HTMLDsTextareaElement;
    new (): HTMLDsTextareaElement;
  };

  interface HTMLDsTextboxElement extends Components.DsTextbox, HTMLStencilElement {}
  var HTMLDsTextboxElement: {
    prototype: HTMLDsTextboxElement;
    new (): HTMLDsTextboxElement;
  };

  interface HTMLDsTrackListItemElement extends Components.DsTrackListItem, HTMLStencilElement {}
  var HTMLDsTrackListItemElement: {
    prototype: HTMLDsTrackListItemElement;
    new (): HTMLDsTrackListItemElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLSimpleConfigElement extends Components.SimpleConfig, HTMLStencilElement {}
  var HTMLSimpleConfigElement: {
    prototype: HTMLSimpleConfigElement;
    new (): HTMLSimpleConfigElement;
  };
  interface HTMLElementTagNameMap {
    'ds-button': HTMLDsButtonElement;
    'ds-card': HTMLDsCardElement;
    'ds-checkbox': HTMLDsCheckboxElement;
    'ds-player': HTMLDsPlayerElement;
    'ds-radio': HTMLDsRadioElement;
    'ds-search': HTMLDsSearchElement;
    'ds-textarea': HTMLDsTextareaElement;
    'ds-textbox': HTMLDsTextboxElement;
    'ds-track-list-item': HTMLDsTrackListItemElement;
    'my-component': HTMLMyComponentElement;
    'simple-config': HTMLSimpleConfigElement;
  }
}

declare namespace LocalJSX {
  interface DsButton extends JSXBase.HTMLAttributes<HTMLDsButtonElement> {
    'color'?: string;
    'onDsclicked'?: (event: CustomEvent<string>) => void;
  }
  interface DsCard extends JSXBase.HTMLAttributes<HTMLDsCardElement> {
    'color'?: string;
  }
  interface DsCheckbox extends JSXBase.HTMLAttributes<HTMLDsCheckboxElement> {
    'color'?: string;
    'label'?: string;
    'name'?: string;
    'onChanged'?: (event: CustomEvent<string>) => void;
    'type'?: string;
    'valid'?: boolean;
    'value'?: string;
  }
  interface DsPlayer extends JSXBase.HTMLAttributes<HTMLDsPlayerElement> {
    'nowplaying'?: Track;
    'onNextRequest'?: (event: CustomEvent<any>) => void;
    'onPrevRequest'?: (event: CustomEvent<any>) => void;
    'onSeekRequest'?: (event: CustomEvent<any>) => void;
    'onTogglePlaybackRequest'?: (event: CustomEvent<any>) => void;
    'playbackState'?: any;
  }
  interface DsRadio extends JSXBase.HTMLAttributes<HTMLDsRadioElement> {
    'color'?: string;
    'label'?: string;
    'name'?: string;
    'onChanged'?: (event: CustomEvent<string>) => void;
    'type'?: string;
    'valid'?: boolean;
    'value'?: string;
  }
  interface DsSearch extends JSXBase.HTMLAttributes<HTMLDsSearchElement> {
    'onChangeTrackRequest'?: (event: CustomEvent<any>) => void;
    'onChanged'?: (event: CustomEvent<string>) => void;
    'value'?: string;
  }
  interface DsTextarea extends JSXBase.HTMLAttributes<HTMLDsTextareaElement> {
    'color'?: string;
    'label'?: string;
    'name'?: string;
    'onChanged'?: (event: CustomEvent<string>) => void;
    'type'?: string;
    'valid'?: boolean;
    'value'?: string;
  }
  interface DsTextbox extends JSXBase.HTMLAttributes<HTMLDsTextboxElement> {
    'color'?: string;
    'label'?: string;
    'name'?: string;
    'onChanged'?: (event: CustomEvent<string>) => void;
    'placeholder'?: string;
    'type'?: string;
    'valid'?: boolean;
    'value'?: string;
  }
  interface DsTrackListItem extends JSXBase.HTMLAttributes<HTMLDsTrackListItemElement> {
    'eventName'?: string;
    'onListItemClicked'?: (event: CustomEvent<any>) => void;
    'track'?: Track;
  }
  interface MyComponent extends JSXBase.HTMLAttributes<HTMLMyComponentElement> {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface SimpleConfig extends JSXBase.HTMLAttributes<HTMLSimpleConfigElement> {
    /**
    * A simple number field
    */
    'aNumber'?: number;
    /**
    * Another number field
    */
    'bNumber'?: number;
    /**
    * A string field which represents a color
    */
    'backgroundColor'?: string;
    /**
    * A boolean field
    */
    'isChecked'?: boolean;
    /**
    * A poorly named field which should hold a color value
    */
    'poorlyNamedProp'?: string;
    /**
    * A simple text field
    */
    'simpleText'?: string;
    /**
    * A date field
    */
    'startDate'?: string;
  }

  interface IntrinsicElements {
    'ds-button': DsButton;
    'ds-card': DsCard;
    'ds-checkbox': DsCheckbox;
    'ds-player': DsPlayer;
    'ds-radio': DsRadio;
    'ds-search': DsSearch;
    'ds-textarea': DsTextarea;
    'ds-textbox': DsTextbox;
    'ds-track-list-item': DsTrackListItem;
    'my-component': MyComponent;
    'simple-config': SimpleConfig;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


