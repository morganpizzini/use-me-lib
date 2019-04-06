import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'pot-inline-edit',
  templateUrl: './inline-edit.component.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InlineEditComponent), multi: true }
  ],
  styleUrls: ['./inline-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlineEditComponent implements ControlValueAccessor, OnInit {
  @ViewChild('inlineEditControl') inlineEditControl: ElementRef; // input DOM element
  @Input() label = ''; // Label value for input element
  @Input() type = 'text'; // The type of input element
  @Input() required = false; // Is input requried?
  @Input() disabled = false; // Is input disabled?
  @Input() saveOnBlur = false; // Is input disabled?
  private preValue = ''; // The value before clicking to edit
  editing = false; // Is Component in edit mode?

  // tslint:disable-next-line: no-input-rename
  @Input('inputValue') _inputValue: string;

  get inputValue() {
    return this._inputValue;
  }

  set inputValue(val) {
    this._inputValue = val;
    this.propagateChange(val);
  }

  propagateChange: any = () => {};
  validateFn: any = () => {};

  writeValue(value) {
    if (value) {
      this.inputValue = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  validate(c: FormControl) {
    return this.validateFn(c);
  }

  constructor() {}

  // Do stuff when the input element loses focus
  onBlur($event: Event) {
    if (!this.saveOnBlur) {
      return;
    }
    this.editing = false;
  }

  // Start the editting process for the input element
  edit() {
    if (this.disabled) {
      return;
    }

    this.preValue = this._inputValue;
    this.editing = true;
    // Focus on the input element just as the editing begins
    // force layout update

    this.inlineEditControl.nativeElement.focus();
    // setTimeout(_ => this._renderer.invokeElementMethod(this.inlineEditControl,
    //   'focus', []));
  }
  save() {
    this.editing = false;
  }

  abort() {
    this.inputValue = this.preValue;
    this.editing = false;
  }

  ngOnInit() {}
}
