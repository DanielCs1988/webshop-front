import {Injectable} from '@angular/core';

@Injectable()
export class CustomValidators {

  static matches(value: string, what: string): {[s: string]: boolean} | null {
    return value === what ? null : {'passwordDoNotMatch': true};
  }

}
