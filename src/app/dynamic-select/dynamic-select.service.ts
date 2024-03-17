import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicSelectService {
  niveaux = ['L1', 'L2', 'L3'];
  semestres = ['Semestre 1', 'Semestre 2'];

  niveauxCours: { [key: string]: { [key: string]: { [key: string]: string[] } } } = {
    niveauxCours: {
      'L1': {
        'Semestre 1': ['mathématique Appliquées', 'At.Programmation', 'At.Dév.Web& Multimédia 1', 'Techniques d expression 1', 'Algorithmique & programmation 1', 'At.Mathématique Appliquées', 'At.Systémes logiques', 'English for computiong 1', 'Architecture des Ordinateurs', 'Systémes Logiques', 'At.Architecture', 'Cert.en Compétences Numériques']
      },},
    'L2': {
      'DSI': {
        'Semestre 1': ['At.Dévelopmment Web coté serveur','At.BD','At.Programmation Objets','Base de Donnes','Gestion des projets',
                      'Modélisation Objet(UML2)','Droit de l informatique','At.Prog Python','At.Framework Coté Client','Programmation Objets','High tech english','Communication en entreprise'],
        'Semestre 2': ['Liste des cours du deuxième semestre pour DSI L2']
      },
      'REM': {
        'Semestre 1': ['At.Administration Systémes','At.BD','High tech english','At.Programmation Ojets','Programmation Objets',
                      'Droit de l informtique','Gestion des projets','BD','At.Réseaux Loc.et TCP/IP','Réseaux sans fil'],
        'Semestre 2': ['Liste des cours du deuxième semestre pour REM L2']
      },
      'SYM': {
        'Semestre 1': ['At.Programmation Objets','At.Systémes Electroniques','At.BD','At.Prog Python',
                      'BD','Electronique','Communication en entrprise','High tech english','Droit de l informatique',
                      'Syst.d Exp.pour l embarqué','At.Syst.d Exp.pour l embarqué','AT.Protocoles & Services Rx','Programmation Objets','At Prog Systéme'],
        'Semestre 2': ['Liste des cours du deuxième semestre pour SYM L2']
      }
    },
    'L3': {
      'DSI': {
        'Semestre 1': ['Cours DSI L3 Semestre 1'],
        'Semestre 2': ['Liste des cours du deuxième semestre pour DSI L3']
      },
      'REM': {
        'Semestre 1': ['Cours REM L3 Semestre 1'],
        'Semestre 2': ['Liste des cours du deuxième semestre pour REM L3']
      },
      'SYM': {
        'Semestre 1': ['Cours SYM L3 Semestre 1'],
        'Semestre 2': ['Liste des cours du deuxième semestre pour SYM L3']
      }
    }
  };

  constructor() { }

  getNiveaux(): string[] {
    return this.niveaux;
  }

  getSemestres(niveau: string, section: string): string[] {
    return Object.keys(this.niveauxCours[niveau][section]);
  }

  getSpecialiteCours(niveau: string, section: string, semestre: string): string[] {
    return this.niveauxCours[niveau][section][semestre] || [];
  }
}
