import Wang from '@/utils/wang';

export default class Comment implements CommentImpl {
  public uuid: string = Wang.randomString(32);
  public tourId: string = '';
  public authorName: string = '';
  public imageId: string = Wang.randomString(32);
  public imageUrl: string = '';
  public star: number = 5;
  public content: string = '';

  constructor(options = undefined) {
    if (options) {
      Wang.merge(this, options);
    }
  }

  public getSubmit() {
    const { uuid, tourId, authorName, imageId, imageUrl, star, content } = this;
    return {
      uuid, tourId, authorName, imageId, imageUrl, star, content
    };
  }
}

interface CommentImpl {
  uuid: string;
  tourId: string;
  authorName: string;
  imageId: string;
  imageUrl: string;
  star:number;
  content: string
}
