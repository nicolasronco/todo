import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoListTileComponent } from './to-do-list-tile/to-do-list-tile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { toDoReducer } from './state/to-do.reducer';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToDoHeaderComponent } from './to-do-header/to-do-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListTileComponent,
    ToDoHeaderComponent
  ],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSlideToggleModule,
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot({ }),
    StoreModule.forFeature('toDoList', toDoReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // retains last 25 states
      logOnly: environment.production
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
