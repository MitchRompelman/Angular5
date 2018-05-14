import { HttpEx400Page } from './app.po';

describe('http-ex400 App', function() {
  let page: HttpEx400Page;

  beforeEach(() => {
    page = new HttpEx400Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
