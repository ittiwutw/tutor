import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PreTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pre-test',
  templateUrl: 'pre-test.html',
})
export class PreTestPage {

  testData = [];
  no1: any;
  no2: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get("data"));

    this.setData(navParams.get("data"), navParams.get("type"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreTestPage');
  }

  submit() {
    //console.log(this.no1)
  }

  setData(data, type) {
    let size = data["" + type]["length"];

    for (var i = 0; i <= size - 1; i++) {
      let setData = {
        model: data["" + type][i]["model"],
        question: data["" + type][i]["question"],
        choice: this.setChoices(data["" + type][i]["choice"]),
        ans: data["" + type][i]["question"],
        choose: ''
      }
      this.testData.push(setData);
    }
    console.log(this.testData);
  }

  setChoices(datas) {
    let size = datas["length"];
    let choiceData = [];
    for (var i = 0; i <= size - 1; i++) {
      choiceData.push({
        a: datas[i]["a"],
        b: datas[i]["b"],
        c: datas[i]["c"],
        d: datas[i]["d"],
      });
    }

    return choiceData;
  }


}
