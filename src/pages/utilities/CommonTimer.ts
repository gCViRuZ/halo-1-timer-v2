/**
 * Created by Russell on 3/26/2017.
 */
export class CommonTimer {

  constructor(){

  }

  getTimeRemaing(startTime: Date){
    var endDate = new Date();
    var timeRemaining = new Date();
    timeRemaining.setTime(endDate.getTime() - startTime.getTime());

    return {
      "minutes": ('0' + timeRemaining.getMinutes().toString()).slice(-2),
      "seconds": ('0' + timeRemaining.getSeconds().toString()).slice(-2)
    }
  }
}
