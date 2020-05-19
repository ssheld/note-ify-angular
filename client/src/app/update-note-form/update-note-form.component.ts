import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-note-form',
  templateUrl: './update-note-form.component.html',
  styleUrls: ['./update-note-form.component.css'],
  providers: [NoteService]
})
export class UpdateNoteFormComponent implements OnInit {

  noteList = null;

  note: any = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private noteService: NoteService) {
  }

  ngOnInit() {

    this.route.paramMap.subscribe(routeParams => {
      this.getNote();
      this.getNoteList();
    });
  }

  getNoteList(): void {
    this.noteService.listNotes()
      .subscribe((notes) => {
        this.noteList = notes;
      });
  }

  getNote(): void {
    const param = this.route.snapshot.paramMap.get('id');

    this.noteService.getNote(param)
      .subscribe((note) => {
        this.note = note;
      });
  }

  updateNote(obj: any): void {
    this.note.title = obj.title;
    this.note.author = obj.author;
    this.note.comment = obj.comment;
    this.noteService.updateNote(this.note._id, this.note)
      .subscribe((result) => {
        location.reload();
      });
  }

  deleteNote() {
    if (confirm(`Are you sure you want to delete ${this.note.title}?`)) {
      this.noteService.deleteNote(this.note._id)
        .subscribe((result) => {
          this.router.navigate(['/']);
        });
    }
  }
}
