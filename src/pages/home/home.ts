import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubjectPage } from '../subject/subject'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onClickSubject(subjectId, key) {
    console.log(key);
    this.navCtrl.push(SubjectPage, { subjectId: subjectId, subjectKey: key });
  }

}
