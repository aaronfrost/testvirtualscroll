import { TestVirtualScrollPage } from './app.po';

describe('test-virtual-scroll App', () => {
  let page: TestVirtualScrollPage;

  beforeEach(() => {
    page = new TestVirtualScrollPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('af works!');
  });
});
