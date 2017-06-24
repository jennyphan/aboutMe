import { KasianBeautiAppPage } from './app.po';

describe('kasian-beauti-app App', () => {
  let page: KasianBeautiAppPage;

  beforeEach(() => {
    page = new KasianBeautiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
