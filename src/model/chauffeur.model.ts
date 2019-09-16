import Wang from '@/utils/wang';

export default class Chauffeur implements ChauffeurImpl {
  public uuid: string = Wang.randomString(32);
  public carNo: string = '';
  public carName: string = '';
  public shows: boolean = true;
  public images: Array<ImageImpl> = [
    {
      uuid: Wang.randomString(32),
      tourId: this.uuid,
      url: ''
    }
  ];
  public prices: Array<PriceImpl> = [];

  constructor(options = undefined) {
    if (options) {
      Wang.merge(this, options);
    }
  }

  public getSubmit() {
    const { uuid, carNo, carName, shows, images, prices } = this;
    return {
      uuid,
      carNo,
      carName,
      shows,
      images,
      prices
    };
  }

  public addPrice() {
    this.prices.push({
      uuid: Wang.randomString(32),
      chauffeurId: this.uuid,
      route: '',
      price: null
    });
  }

  public removePrice(uuid: string) {
    this.prices = this.prices.filter((price: PriceImpl) => {
      return price.uuid !== uuid;
    });
  }

  get minPrice() {
    return Math.min.apply(
      Math,
      this.prices.map(price => {
        return price.price as number;
      })
    );
  }
}

interface ChauffeurImpl {
  uuid: string;
  carNo: string;
  carName: string;
  shows: boolean;
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
  chauffeurId?: string;
  route: string;
  price: number | null;
}
