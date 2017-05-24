import { TohDstPage } from './app.po';

describe('toh-dst App', () => {
  let page: TohDstPage;

  beforeEach(() => {
    page = new TohDstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
