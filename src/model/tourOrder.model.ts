import Wang from '@/utils/wang';

export default class TourOrder implements TourOrderImpl {
  public uuid: string = Wang.randomString(32);
  public tourId: string = '';
  public tourName: string = '';
  // 个人信息
  public name: string = '';
  public country: string = '';
  public mailAddress: string = '';
  public alternatMailAddress?: string;
  public phoneNumber?: String;
  // 行程信息
  public startDate: string = '';
  public endDate?: string;
  public numberOfAdults?: number | undefined;
  public numberOfChildren?: number;
  public ageOfChildren?: number;
  // 酒店信息
  public hotelName?: string;
  public roomNumber?: string;
  public hotelNumber?: string;
  // 航班信息
  public arriveTime?: string;
  public arriveLineNumber?: string;
  public leaveTime?: string;
  public leaveLineNumber?: string;
  // 备注
  public remarks?: string;

  constructor(options = undefined) {
    if (options) {
      Wang.merge(this, options);
    }
  }

  public getSubmit() {
    const { 
        uuid, tourId, tourName, name, country, mailAddress, alternatMailAddress, 
        phoneNumber, startDate, endDate, numberOfAdults, numberOfChildren,
        ageOfChildren, hotelName, roomNumber, hotelNumber, arriveTime, arriveLineNumber,
        leaveTime, leaveLineNumber, remarks
    } = this;
    const tourDate = endDate ? `${startDate}至${endDate}` : startDate;
    return {
        uuid, tourId, tourName, name, country, mailAddress, alternatMailAddress, 
        phoneNumber, tourDate, numberOfAdults, numberOfChildren,
        ageOfChildren, hotelName, roomNumber, hotelNumber, arriveTime, arriveLineNumber,
        leaveTime, leaveLineNumber, remarks
    };
  }
}

interface TourOrderImpl {
  uuid: string;
  tourId: string;
  tourName: string;
  name: string;
  country: string;
  mailAddress: string;
  alternatMailAddress?: string;
  phoneNumber?: String;

  startDate: string;
  endDate?: string;
  numberOfAdults?: number | undefined;
  numberOfChildren?: number;
  ageOfChildren?: number;

  hotelName?: string;
  roomNumber?: string;
  hotelNumber?: string;

  arriveTime?: string;
  arriveLineNumber?: string;
  leaveTime?: string;
  leaveLineNumber?: string;

  remarks?: string;
}
