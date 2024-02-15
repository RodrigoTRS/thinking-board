import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThoughtsComponent } from './components/thoughts/thoughts.component';
import { FormComponent } from './components/form/form.component';
import { ExcludeModalComponent } from './components/exclude-modal/exclude-modal.component';
import { UpdateModalComponent } from './components/update-modal/update-modal.component';

const routes: Routes = [
  { path: '', redirectTo: 'thoughts-list', pathMatch: 'full'},
  { path: 'thoughts-list', component: ThoughtsComponent},
  { path: 'create', component: FormComponent},
  { path: 'exclude/:id', component: ExcludeModalComponent},
  { path: 'update/:id', component: UpdateModalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
