import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChapterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter',
  templateUrl: 'chapter.html',
})
export class ChapterPage {

  @ViewChild('slider') slider: Slides;

  chapterName: String = "";
  chapterKey: String = "";
  datas = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chapterName = navParams.get("chapterName");
    this.chapterKey = navParams.get("chapterKey");

    this.setData(navParams.get("data"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterPage');
  }

  setData(chapterData) {
    let size = chapterData["" + this.chapterKey]["length"];

    for (var i = 0; i <= size - 1; i++) {
      let setData = {
        desc: chapterData["" + this.chapterKey][i]["desc"],
        img: chapterData["" + this.chapterKey][i]["img"]
      }
      this.datas.push(setData);
    }
  }

  currentIndex = 0;

  nextSlide() {
    this.slider.slideNext();
  }

  previousSlide() {
    this.slider.slidePrev();
  }

  onSlideChanged() {
    this.currentIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', this.currentIndex);
  }

}
