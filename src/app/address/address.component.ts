import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Address} from '../models/address.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addressForm: FormGroup;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
    this.route.params.subscribe(
      (params: Params) => {
        if (params['checkout'] != undefined) {
          //TODO: CHECKOUT LOGIC COMES HERE
        }
      }
    )
  }

  private initForm() {
    this.addressForm = new FormGroup({
      'billing': new FormGroup({
        'id': new FormControl(0),
        'zipcode': new FormControl(null, [Validators.required]),
        'country': new FormControl(null, [Validators.required]),
        'city': new FormControl(null, [Validators.required]),
        'street': new FormControl(null, [Validators.required])
      }),
      'shipping': new FormGroup({
        'id': new FormControl(0),
        'zipcode': new FormControl(null, [Validators.required]),
        'country': new FormControl(null, [Validators.required]),
        'city': new FormControl(null, [Validators.required]),
        'street': new FormControl(null, [Validators.required])
      })
    });
  }

  onSubmit(){
    if (!this.addressForm.valid) {
      return;
    }
    this.sendToBackend(this.addressForm.get('shipping').value);
    this.sendToBackend(this.addressForm.get('billing').value);

  }

  sendToBackend(address: Address) {
    console.log(address);
  }


  fillWithSameAddress() {
    this.addressForm.get('shipping').setValue(this.addressForm.get('billing').value)
  }
}
