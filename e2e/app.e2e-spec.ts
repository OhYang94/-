import { LittlePracticePage } from './app.po';

describe('little-practice App', () => {
  let page: LittlePracticePage;

  beforeEach(() => {
    page = new LittlePracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
