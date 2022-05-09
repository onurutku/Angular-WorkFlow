import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { FormsComponent } from './forms/forms.component';
import { IconsComponent } from './icons/icons.component';

const routes: Routes = [
  {
    path: 'icons',
    component: IconsComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'data',
    component: DataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
