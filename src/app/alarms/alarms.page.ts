import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { CardComponent } from '../components/card/card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.page.html',
  styleUrls: ['./alarms.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CardComponent, IonButton]
})
export class AlarmsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMainView() {
    this.router.navigate(['/main-view']);
  }

  goToCreateAlarm() {
    this.router.navigate(['/create-alarm']);
  }

  goToEditAlarm() {
    this.router.navigate(['/edit-alarm']);
  }
}
