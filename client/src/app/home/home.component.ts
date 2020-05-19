import {Component, OnInit} from '@angular/core';
import {NoteService} from '../note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NoteService]
})
export class HomeComponent implements OnInit {

  constructor(private noteService: NoteService) {
  }

  noteList = null;

  ngOnInit() {
    this.noteService.listNotes().subscribe((notes) => {
      this.noteList = notes;
    });
  }
}
