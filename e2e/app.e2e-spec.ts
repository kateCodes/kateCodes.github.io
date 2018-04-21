import { KateCodes.Github.IoPage } from './app.po';

describe('kate-codes.github.io App', () => {
  let page: KateCodes.Github.IoPage;

  beforeEach(() => {
    page = new KateCodes.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
