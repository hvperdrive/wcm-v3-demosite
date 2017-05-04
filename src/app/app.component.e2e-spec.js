describe('App', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('Wcmv3demo app | ACPaaS Angular App generator');
  });

  it('should have <header>', function () {
    expect(element(by.css('app header')).isPresent()).toEqual(true);
  });

  it('should have <main>', function () {
    expect(element(by.css('app main')).isPresent()).toEqual(true);
  });

  it('should have a main title', function () {
    expect(element(by.css('main h1')).getText()).toEqual('Digipolis Angular Wcmv3demo App');
  });

  it('should have <footer>', function () {
    expect(element(by.css('app footer')).getText()).toEqual("footer");
  });

});
