import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentsComponent } from './documents/documents.component';
import { LogInvalidsComponent } from './log-invalids/log-invalids.component';
import { AuthGuard } from './login-guard.guard';
import { LoginComponent } from './login/login.component';
import { LogsComponent } from './logs/logs.component';
import { SigninComponent } from './signin/signin.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateComponent } from './employee/create/create.component';
import { EditComponent } from './employee/edit/edit.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { SidebarComponent } from './sidebar/sidebar.component';

//Su dung guard

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'log', component: LogsComponent },
      { path: 'loginvalid', component: LogInvalidsComponent },
      { path: 'contact', component: ContactsComponent },
      { path: 'help', component: DocumentsComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'employee/create', component: CreateComponent },
      { path: 'dashboard', component:DashboardComponent},
      { path: 'employee/:id',component:EditComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
