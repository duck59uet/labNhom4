import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
=======
import { Toast, ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { API } from '../services/api';
>>>>>>> 0b56c2ca1c1e52db7c774c11907094d66dbe7b7b
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
<<<<<<< HEAD
    private alertService: AlertService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
=======
    private alertService: AlertService,
    private api: API,
    private toastr: ToastrService
  ) {
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
>>>>>>> 0b56c2ca1c1e52db7c774c11907094d66dbe7b7b
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
<<<<<<< HEAD
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
=======
      account: ['', Validators.required],
      userName: ['', Validators.required],
>>>>>>> 0b56c2ca1c1e52db7c774c11907094d66dbe7b7b
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
<<<<<<< HEAD
    // this.userService.register(this.registerForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.alertService.success('Registration successful', true);
    //       this.router.navigate(['/login']);
    //     },
    //     error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     });
=======

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

>>>>>>> 0b56c2ca1c1e52db7c774c11907094d66dbe7b7b
  }

}
