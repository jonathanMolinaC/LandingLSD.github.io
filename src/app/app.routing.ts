import { Route } from '@angular/compiler/src/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SpecificationComponent} from './components/specification/specification.component';


const appRoutes : Routes = [
    {path:'', component: HomeComponent},
    {path:'VideoSpecifications',component: SpecificationComponent},
    {path: '**', component:HomeComponent}
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);