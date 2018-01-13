import { MusicDiscoverProjPage } from './app.po';

describe('music-discover-proj App', () => {
  let page: MusicDiscoverProjPage;

  beforeEach(() => {
    page = new MusicDiscoverProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
