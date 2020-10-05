import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentsComponent } from './documents/documents.component';
import { LogInvalidsComponent } from './log-invalids/log-invalids.component';
import { LogsComponent } from './logs/logs.component';
// import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
   {path:'log', component:LogsComponent},
   {path:'loginvalid', component:LogInvalidsComponent},
   {path:'contact', component:ContactsComponent},
   {path:'help', component:DocumentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
