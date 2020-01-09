import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { DetranMainComponent } from './detran/detran-main/detran-main.component';
import { CreditorGroupComponent } from './creditor-group/creditor-group.component';
import { CreditorComponent } from './creditor/creditor.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { ContractRegisterComponent } from './contract-register/contract-register.component';
import { PasswordRecoverComponent } from './password-recover/password-recover.component';
import { DetranDetailComponent } from './detran/detran-detail/detran-detail.component';
import { DetranContactsComponent } from './detran/detran-contacts/detran-contacts.component';
import { PasswordRecoverSuccessComponent } from './password-recover-success/password-recover-success.component';
import { PasswordRecoverFailedComponent } from './password-recover-failed/password-recover-failed.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { DetranAddComponent } from './detran/detran-add/detran-add.component';
import { DetranContactAddComponent } from './detran/detran-contact-add/detran-contact-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'recuperar-senha',
    component: PasswordRecoverComponent,
  },
  {
    path: 'recuperar-senha-enviado',
    component: PasswordRecoverSuccessComponent,
  },
  {
    path: 'recuperar-senha-falha',
    component: PasswordRecoverFailedComponent
  },
  {
    path: 'recuperar-senha-reset',
    component: PasswordResetComponent
  },
  {
    path: 'detran',
    component: DetranMainComponent,
    canActivate: [AuthGuard],
  },
  {        
    path: 'detran-detalhe/:id',
    component: DetranDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detran-contatos/:id',
    component: DetranContactsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detran-adicionar',
    component: DetranAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detran-adicionar-contato',
    component: DetranContactAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'credora',
    component: CreditorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gestora',
    component: CreditorGroupComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registradora',
    component: RegistrarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'principal',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ajuda',
    component: HelpComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registrar-contrato',
    component: ContractRegisterComponent,
    canActivate: [AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }