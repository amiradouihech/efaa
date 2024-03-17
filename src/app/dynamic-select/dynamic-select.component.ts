import { Component, OnInit } from '@angular/core';
import { DynamicSelectService } from './dynamic-select.service';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.css']
})
export class DynamicSelectComponent implements OnInit {
  niveaux!: string[];
  sections: string[] = [];
  semestres!: string[];
  cours!: string[];
  selectedNiveau: string = '';
  selectedSection: string = '';
  selectedSemestre: string = '';
  selectedCours: string = '';

  constructor(private dynamicSelectService: DynamicSelectService) { }

  ngOnInit(): void {
    console.log("Niveaux:", this.dynamicSelectService.getNiveaux());
    console.log("NiveauxCours:", this.dynamicSelectService.niveauxCours);
    this.niveaux = this.dynamicSelectService.getNiveaux();
  }

  onNiveauSelected(selectedNiveau: string): void {
    this.selectedNiveau = selectedNiveau;
    if (selectedNiveau === 'L1') {
        this.semestres = Object.keys(this.dynamicSelectService.niveauxCours[selectedNiveau]);
        // Afficher les cours pour le premier semestre de L1 par défaut
        this.selectedSemestre = this.semestres[0];
        this.cours = this.dynamicSelectService.getSpecialiteCours(selectedNiveau, '', this.selectedSemestre); // Passer une chaîne vide pour la section
    } else if (selectedNiveau === 'L2' || selectedNiveau === 'L3') {
        this.sections = Object.keys(this.dynamicSelectService.niveauxCours[selectedNiveau]);
    } else {
        this.sections = [];
    }
    this.selectedSection = ''; 
    this.selectedCours = ''; 
}


  onSectionSelected(selectedSection: string): void {
    this.selectedSection = selectedSection;
    this.semestres = this.dynamicSelectService.getSemestres(this.selectedNiveau, selectedSection);
    this.selectedSemestre = ''; // Réinitialiser la sélection du semestre
    this.selectedCours = ''; // Réinitialiser la sélection du cours
  }

  onSemestreSelected(selectedSemestre: string): void {
    this.selectedSemestre = selectedSemestre;
    this.cours = this.dynamicSelectService.getSpecialiteCours(this.selectedNiveau, this.selectedSection, selectedSemestre);
    this.selectedCours = ''; // Réinitialiser la sélection du cours
  }
}
