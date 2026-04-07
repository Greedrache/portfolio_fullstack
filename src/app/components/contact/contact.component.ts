import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: ''
  };
  isSending = false;
  statusMessage = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.isSending = true;
    this.statusMessage = '';
    
    // PHP Skript URL (Anpassen auf deinen Server)
    const phpEndpoint = 'sendMail.php';

    this.http.post(phpEndpoint, this.contactData, { responseType: 'text' }).subscribe({
      next: (response) => {
        this.statusMessage = 'Nachricht erfolgreich gesendet!';
        this.isSending = false;
        this.contactData = { name: '', email: '', message: '' }; // Reset
      },
      error: (error) => {
        this.statusMessage = 'Ein Fehler ist aufgetreten. Bitte später probieren.';
        this.isSending = false;
        console.error(error);
      }
    });
  }
}

