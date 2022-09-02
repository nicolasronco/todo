import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { ToDoContentComponent } from "./to-do-content/to-do-content.component";
import { ToDoListDetailedTileComponent } from "./to-do-list-detailed-tile/to-do-list-detailed-tile.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'todos', component: ToDoContentComponent },
  { path: 'todos/:id', component: ToDoListDetailedTileComponent }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}