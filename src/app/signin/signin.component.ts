import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { API } from '../services/api';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private api: API,
    private toastr: ToastrService
  ) {
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      account: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.api.post('/api/users',
      {
        'Username': this.registerForm.value.account,
        'Usermail': this.registerForm.value.userName,
        'Password': this.registerForm.value.password,
        'Status': '1'
      }).subscribe(
        (data: any) => {
          this.toastr.success('Đăng ký tài khoản thành công');
          this.router.navigate(['/login']);
        },
        (error: any) => {
          this.alertService.error(error);
          this.loading = false;
        }
      );

  }

}
