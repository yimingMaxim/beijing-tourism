import Wang from '@/utils/wang';

export default class Tour implements TourImpl {
  public uuid: string = Wang.randomString(32);
  public title: string = '';
  public content: string = '';
  public day: number = 1;
  public isShow: boolean = true;
  public tourType: string = 'group';
  public city: string = 'beijing';
  public images: Array<ImageImpl> = [];
  public prices: Array<Price> = [];

  constructor(options = undefined) {
    if(options) {
      Wang.merge(this, options);
    }
  }

  public addPrice() {
    this.prices.push({
      person: null,
      price: null
    })
  }
}

interface TourImpl {
  uuid: string;
  title: string;
  content: string;
  day: number;
  isShow: boolean;
  tourType: string;
  city: string;
  images: Array<ImageImpl>;
  prices: Array<Price>;
}

interface ImageImpl {
  uuid?: string;
  tourId?: string;
  url: string;
}

interface Price {
  uuid?: string;
  person: number | null;
  price: number | null;
  tourId?: string;
}