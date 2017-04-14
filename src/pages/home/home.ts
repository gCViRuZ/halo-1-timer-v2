import { Component } from '@angular/core';

import {DateTime, NavController} from 'ionic-angular';
import {CommonTimer} from '../utilities/CommonTimer'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  minutes:string = '00';
  seconds:string = '00';
  tabBarElement: any;

  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');
    this.tabBarElement.style.display = 'none';

  }


  startTimer(){
    var self = this;
    var now = new Date();
    var timerInterval = setInterval(function(){
      var timer = new CommonTimer();
      var timeRemaining = timer.getTimeRemaing(now);

      self.updateTime(timeRemaining);
    }, 995);
  }

  updateTime(time: any){
    this.minutes = time.minutes;
    this.seconds = time.seconds;
  }

}
