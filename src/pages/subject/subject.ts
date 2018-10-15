import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChapterPage } from '../chapter/chapter'

import { InfoDataProvider } from '../../providers/info-data/info-data';
/**
 * Generated class for the SubjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subject',
  templateUrl: 'subject.html',
})
export class SubjectPage {

  subjectName: String = "";
  subjectKey: String = "";
  chapterList: any;
  chapterData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public infoData: InfoDataProvider) {
  }

  ionViewDidLoad() {


    this.subjectName = this.navParams.get("subjectName");
    this.subjectKey = this.navParams.get("subjectKey");
    console.log(this.subjectKey);

    this.infoData.getInfoData(this.subjectKey).subscribe(result => {
      this.chapterData = result;
    });

    if (this.subjectKey == "1") {
      this.chapterList = [
        { name: "On Board Safety & Security 1", key: "1-1" },
        { name: "On Board Safety & Security 2", key: "1-2" }]
    } else if (this.subjectKey == "2") {
      this.chapterList = [
        { name: "Personality Development & Grooming 1", key: "2-1" },
        { name: "Personality Development & Grooming 2", key: "2-2" },
        { name: "Personality Development & Grooming 3", key: "2-3" },
        { name: "Personality Development & Grooming 4", key: "2-4" },
        { name: "Personality Development & Grooming 5", key: "2-5" },
        { name: "Personality Development & Grooming 6", key: "2-6" },
        { name: "Personality Development & Grooming 7", key: "2-7" },
        { name: "Personality Development & Grooming 8", key: "2-8" },
        { name: "Personality Development & Grooming 9", key: "2-9" }]
    }

  }

  itemSelected(chapterData, chapterKey, chapterName) {
    this.navCtrl.push(ChapterPage, { chapterName: chapterName, data: chapterData, chapterKey: chapterKey });
  }

}
