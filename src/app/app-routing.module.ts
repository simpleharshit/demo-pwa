import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/HomeComponent/home.component';
import { RouteComponent } from './components/RouteComponent/route.component';

const routes: Routes = [	
{ path: '',  redirectTo: '/landing',  pathMatch: 'full' },
{ path: 'landing', component: HomeComponent },
{ path: 'movies', component: RouteComponent , data : {featured:"featured_movies",name:"movies"}},  	
{ path: 'tv', component: RouteComponent , data : {featured:"featured_tv",name:"tv"} },
{ path: 'games', component: RouteComponent , data : {featured:"featured_games",name:"games"} }  	
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})

export class AppRoutingModule { }

export const routedComponents = [HomeComponent, RouteComponent];