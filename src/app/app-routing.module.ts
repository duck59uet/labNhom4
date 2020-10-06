import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentsComponent } from './documents/documents.component';
import { LogInvalidsComponent } from './log-invalids/log-invalids.component';
import { LoginComponent } from './login/login.component';
import { LogsComponent } from './logs/logs.component';
import { SigninComponent } from './signin/signin.component';
// import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
   {path:'log', component:LogsComponent},
   {path:'loginvalid', component:LogInvalidsComponent},
   {path:'contact', component:ContactsComponent},
   {path:'help', component:DocumentsComponent},
   {path:'signin', component:SigninComponent},
   {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
