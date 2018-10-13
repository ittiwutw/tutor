import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PreTestPage } from '../pre-test/pre-test'

import { InfoDataProvider } from '../../providers/info-data/info-data';
/**
 * Generated class for the TestListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-list',
  templateUrl: 'test-list.html',
})
export class TestListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public infoData: InfoDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestListPage');
  }

  onClickItem(testId) {
    this.navCtrl.push(PreTestPage, { testId: testId });
  }

  getTestData(testId, type) {
    this.infoData.getInfoData(testId).subscribe(result => {
      this.navCtrl.push(PreTestPage, { data: result, type: type });
    });
  }

}
