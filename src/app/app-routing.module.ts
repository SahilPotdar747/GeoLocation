import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  
  {
    path: "",
    component: FullComponent,

    children: [
      //admin
     
     
      //modules ui
      { path: "", redirectTo: "/home", pathMatch: "full" },
      {
        path: "home",
        component: DashboardComponent,
      
      },

     
     

     
     

     
     
     
    ],
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
