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

  subjectId: String = "";
  subjectKey: String = "";
  chapterList: any;
  chapterData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public infoData: InfoDataProvider) {
  }

  ionViewDidLoad() {


    this.subjectId = this.navParams.get("subjectId");
    this.subjectKey = this.navParams.get("subjectKey");
    console.log(this.subjectKey);

    this.infoData.getInfoData(this.subjectKey).subscribe(result => {
      this.chapterData = result;
    });

    this.chapterList = [
      { name: "On Board Safety & Security 1", key: "1-1" },
      { name: "On Board Safety & Security 2", key: "1-2" }]
  }

  itemSelected(chapterData, chapterKey, chapterName) {
    this.navCtrl.push(ChapterPage, { chapterName: chapterName, data: chapterData, chapterKey: chapterKey });
  }

}
