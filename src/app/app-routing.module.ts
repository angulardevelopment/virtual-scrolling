import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollComponent } from './scroll/scroll.component';
import { BasicComponent } from './basic/basic.component';

const routes: Routes = [{
  path: 'ScrollComponent',
  component: ScrollComponent
},
{
  path: 'BasicComponent',
  component: BasicComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
