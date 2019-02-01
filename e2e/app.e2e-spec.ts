import { UdemytutorialPage } from './app.po';

describe('udemytutorial App', function() {
  let page: UdemytutorialPage;

  beforeEach(() => {
    page = new UdemytutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
