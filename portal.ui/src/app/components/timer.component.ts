import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Clock} from './common/Clock';

@Component({
	 templateUrl: 'app/views/timer.html',
   selector: 'timer',
   directives: [Clock]
})

export class TimerComponent implements OnInit {

    timer = {
      clockTime: {
        days: '0',
        minutes: '00',
        hours: '00',
        seconds: '00'
      },
      timeInterval: '',
      editable: true,
      timeUpdate: function(event) {
        this.clockTime = event.time;
      }
    }

		ngOnInit() {}

    constructor() {

    }

    getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.now();
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }

    getTimeInMillis(time) {
      var days = time.days ? +time.days * (24 * 60 * 60 * 1000) : 0;
      var hours = time.hours ? +time.hours * (60 * 60 * 1000) : 0;
      var minutes = time.minutes ? +time.minutes * (60 * 1000) : 0;
      var seconds = time.seconds ? +time.seconds * (1000) : 0;
      return (days + hours + minutes + seconds);
    }


    startTimer() {
      if(this.timer.editable) {
        this.timer.editable = false;
        var endtime = new Date(Date.now() + this.getTimeInMillis(this.timer.clockTime));
        function updateClock() {
          var t = this.getTimeRemaining(endtime);
          if (t.total < 0) {
            this.timer.editable = true;
            clearInterval(this.timer.timerInterval);
            return;
          }
          this.timer.clockTime = {
            days: t.days,
            hours: ('0' + t.hours).slice(-2),
            minutes: ('0' + t.minutes).slice(-2),
            seconds: ('0' + t.seconds).slice(-2)
          };
        }

        updateClock.call(this);
        this.timer.timerInterval = setInterval(updateClock.bind(this), 1000);
      } else {
        this.timer.editable = true;
        clearInterval(this.timer.timerInterval);
      }
    }

}
