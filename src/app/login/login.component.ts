import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
<<<<<<< HEAD
=======
import { ToastrService } from 'ngx-toastr';
>>>>>>> 0b56c2ca1c1e52db7c774c11907094d66dbe7b7b

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
<<<<<<< HEAD
    private alertService: AlertService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
=======
    private alertService: AlertService,
    private toastr: ToastrService
  ) {
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }

    if(localStorage.getItem('userName')){
      this.router.navigate(['/home'])
>>>>>>> 0b56c2ca1c1e52db7c774c11907094d66dbe7b7b
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
<<<<<<< HEAD
        },
        error => {
=======
          if(data == false){
            this.toastr.warning('Đăng nhập thất bại', 'Kiểm tra lại tài khoản mật khẩu');
            this.loading = false;
          } else {
            this.toastr.success('Đăng nhập thành công');
          }
        },
        error => {
          this.toastr.warning('Đăng nhập thất bại');
>>>>>>> 0b56c2ca1c1e52db7c774c11907094d66dbe7b7b
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
