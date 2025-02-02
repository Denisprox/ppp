import { FormAssociated } from '../form-associated/form-associated.js';
import { FoundationElement } from '../foundation-element/foundation-element.js';

class _Button extends FoundationElement {}

/**
 * A form-associated base class for the Button component.
 *
 * @internal
 */
export class FormAssociatedButton extends FormAssociated(_Button) {
  constructor() {
    super(...arguments);
    this.proxy = document.createElement('input');
  }
}
