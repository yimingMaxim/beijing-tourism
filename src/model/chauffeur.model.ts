import Wang from '@/utils/wang';

export default class Chauffeur implements ChauffeurImpl {
  public uuid: string = Wang.randomString(32);
  public carNo: string = '';
  public carName?: string;
  public carUrlId: string = Wang.randomString(32);
  public carUrl: string = '';
  public shows: boolean = true;
  public carprice: Array<PriceImpl> = [];

  constructor(options = undefined) {
    if (options) {
      Wang.merge(this, options);
    }
  }

  public getSubmit() {
    const { uuid, carNo, carName, carUrlId, carUrl, shows, carprice } = this;
    return {
      uuid, carNo, carName, carUrlId, carUrl, shows, carprice
    };
  }

  public addPrice() {
    this.carprice.push({
      uuid: Wang.randomString(32),
      price: null,
      carId: this.uuid,
      placeId: Wang.randomString(32),
      placeName: ''
    });
  }

  public removePrice(uuid: string) {
    this.carprice = this.carprice.filter((price: PriceImpl) => {
      return price.uuid !== uuid;
    });
  }

  get minPrice() {
    return Math.min.apply(
      Math,
      this.carprice.map((price: PriceImpl) => {
        return price.price as number;
      })
    );
  }
}

interface ChauffeurImpl {
  uuid: string;
  carNo: string;
  carName?: string;
  carUrlId: string;
  carUrl: string;
  shows: boolean;
  carprice: Array<PriceImpl>;
}

interface PriceImpl {
  uuid: string;
  price: number | null;
  carId: string;
  placeId: string,
  placeName: string
}
