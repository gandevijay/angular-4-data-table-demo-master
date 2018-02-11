import { TestTPage } from './app.po';

describe('test-t App', () => {
  let page: TestTPage;

  beforeEach(() => {
    page = new TestTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
