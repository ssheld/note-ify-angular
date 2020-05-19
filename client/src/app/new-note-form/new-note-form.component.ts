import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './new-note-form.component.html',
  styleUrls: ['./new-note-form.component.css'],
  providers: [NoteService]
})
export class NewNoteFormComponent implements OnInit {

  noteList = null;

  note: any = {};

  @Output() newNote = new EventEmitter();

  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    this.noteService.listNotes().subscribe((notes) => {
      this.noteList = notes;
    });
  }

  save(): void {
    const newNote = {
      author: this.note.author,
      title: this.note.title,
      comment: this.note.comment
    };

    this.noteService.createNote(newNote)
      .subscribe((note) => {
        this.newNote.emit();
        location.reload();
      });
  }
}
