import Wang from '@/utils/wang';

export default class Tour implements TourImpl {
  public uuid: string = Wang.randomString(32);
  public tourNo: string = '';
  public title: string = '';
  public content: string = '';
  public day: number = 1;
  public shows: boolean = true;
  public tourType: string = 'group';
  public city: string = 'beijing';
  public images: Array<ImageImpl> = [
    {
      uuid: Wang.randomString(32),
      tourId: this.uuid,
      url: ''
    }
  ];
  public prices: Array<PriceImpl> = [
    {
      uuid: Wang.randomString(32),
      tourId: this.uuid,
      person: null,
      price: null
    }
  ];

  constructor(options = undefined) {
    if (options) {
      Wang.merge(this, options);
    }
  }

  public getSubmit() {
    const {
      uuid,
      tourNo,
      title,
      content,
      day,
      shows,
      tourType,
      city,
      images,
      prices
    } = this;
    return {
      uuid,
      tourNo,
      title,
      content,
      day,
      shows,
      tourType,
      city,
      images,
      prices
    };
  }

  public addPrice() {
    this.prices.push({
      uuid: Wang.randomString(32),
      tourId: this.uuid,
      person: null,
      price: null
    });
  }

  public removePrice(uuid: string) {
    this.prices = this.prices.filter((price: PriceImpl) => {
      return price.uuid !== uuid;
    })
  }
}

interface TourImpl {
  uuid: string;
  tourNo: string;
  title: string;
  content: string;
  day: number;
  shows: boolean;
  tourType: string;
  city: string;
  images: Array<ImageImpl>;
  prices: Array<PriceImpl>;
}

interface ImageImpl {
  uuid?: string;
  tourId?: string;
  url: string;
}

interface PriceImpl {
  uuid?: string;
  person: number | null;
  price: number | null;
  tourId?: string;
}