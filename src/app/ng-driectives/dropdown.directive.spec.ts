import { DropdownDirective } from './dropdown.directive';
import { Directive } from '@angular/core';

describe('DropdownDirective', () => {
  it('should create an instance', () => {
    const directive = new DropdownDirective();
    expect(directive).toBeTruthy();
  });
});


@DropdownDirective({
  selector: '[appDropdown]'
})

export class DropdownDirective {
}