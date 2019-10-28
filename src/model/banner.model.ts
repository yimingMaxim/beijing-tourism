import Wang from '@/utils/wang';

export default class Banner implements BannerImpl {
  public uuid: string = Wang.randomString(32);
  public tourId: string = '';
  public imageid?: string;
  public url?: string = '';

  constructor(options = undefined) {
    if (options) {
      Wang.merge(this, options);
    }
  }

  public getSubmit() {
    const { uuid, tourId, url } = this;
    return {
      uuid, tourId, url 
    };
  }
}

interface BannerImpl {
  uuid: string;
  tourId: string;
  imageid?: string;
  url?: string;
}
