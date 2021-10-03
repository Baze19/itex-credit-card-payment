import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { PagenotFoundComponent } from './components/pagenot-found/pagenot-found.component';
const routes: Routes = [
 
  
  { path: "input", component: InputComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PagenotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
