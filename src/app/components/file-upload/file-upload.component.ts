import { Component } from '@angular/core';
// import { FileUploadService } from '../../services/file-upload.service'

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  selectedFiles: File[] = [];
  progress = 0;
  message = '';
  randomQuote = '';

  // constructor(private uploadService: FileUploadService) { }
  
  ngOnInit(): void {
    this.getRandomQuote();
  }

  getRandomQuote(): void {
    const quotes = [
      { text: "Le savoir est le seul bien qui s'accroît quand on le partage.", author: "Socrate" },
      { text: "Seul on va plus vite, ensemble on va plus loin.", author: "Proverbe africain" },
      { text: "L'éducation est l'arme la plus puissante qu'on puisse utiliser pour changer le monde.", author: "Nelson Mandela" },
      { text: "Le partage des connaissances est la clé du succès.", author: "Anonyme" },
      { text: "La connaissance est comme une bibliothèque : elle ne vaut que par ce qu'on en sort.", author: "Anonyme" },
      { text: "Partager, c'est aussi penser aux autres.", author: "Anonyme" },
      { text: "Le partage est une source de richesse.", author: "Anonyme" }
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    this.randomQuote = `"${quotes[randomIndex].text}" - ${quotes[randomIndex].author}`;
  }

  selectFiles(event: any): void {
    this.selectedFiles = Array.from(event.target.files);
  }

  upload(): void {
    this.progress = 0;

    // this.selectedFiles.forEach(file => {
    //   this.uploadService.upload(file).subscribe({
    //     next: (response: any) => {
    //       console.log('File uploaded successfully:', file.name);
          
    //     },
    //     error: (error: any) => {
    //       console.error('Failed to upload file:', file.name, error);
          
    //     }
    //   });
    // });
  }
}
