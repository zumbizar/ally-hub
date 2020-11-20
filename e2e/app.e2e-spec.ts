import { AllyHubPage } from './app.po';

describe('ally-hub App', () => {
  let page: AllyHubPage;

  beforeEach(() => {
    page = new AllyHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
