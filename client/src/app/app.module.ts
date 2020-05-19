import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewNoteFormComponent } from './new-note-form/new-note-form.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { HomeComponent } from './home/home.component';
import { UpdateNoteFormComponent } from './update-note-form/update-note-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent },
  { path: 'new-note-form', component: NewNoteFormComponent },
  { path: 'notes/:id', component: UpdateNoteFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewNoteFormComponent,
    NoteCardComponent,
    HomeComponent,
    UpdateNoteFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
