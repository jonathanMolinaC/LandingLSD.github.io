import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ModuleWithProviders } from '@angular/core';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SpecificationComponent} from './components/specification/specification.component';
import { ESectionComponent } from './components/esection/esection.component';

//Routes for each component
const appRoutes : Routes = [
  {path:'', component: HomeComponent},
  {path:'VideoSpecifications/:videoId',component: SpecificationComponent},
  {path:'section',component:ESectionComponent},
  {path: '**', component:HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);