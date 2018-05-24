import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'userInfo': new FormGroup({
        'id': new FormControl(0),
        'name': new FormControl(null, [Validators.required]),
        'phone': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email], [this.emailFree.bind(this)]),
        'password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      }),
      'verify-password': new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit(){
    if (!this.registerForm.valid) {
      return;
    }
    this.authService.register(this.registerForm.get('userInfo').value).subscribe(
      () => this.router.navigate(['/'])
    );
  }

  emailFree(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      this.authService.isEmailTaken(control.value).subscribe(isTaken => {
        if (isTaken) {
          resolve(null);
        } else {
          resolve({'emailTaken': true});
        }
      });
    });
  }
}
