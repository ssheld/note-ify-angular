import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class NoteService {

  private apiurl = environment.apiurl;

  constructor(private http: HttpClient) { }

  listNotes() {
    return this.http.get(this.apiurl + 'api/notes');
  }

  // Get note by id
  getNote(id) {
    return this.http.get(this.apiurl + 'api/notes/' + id);
  }

  // Create note
  createNote(note) {
    return this.http.post(this.apiurl + 'api/notes', note);
  }

  // Update note
  updateNote(id, data) {
    return this.http.put(this.apiurl + 'api/notes/' + id, data);
  }

  // Delete note
  deleteNote(id) {
    return this.http.delete(this.apiurl + 'api/notes/' + id);
  }
}
