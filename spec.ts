import {HomePage} from "./pages/HomePage";

describe('When opening the browser', () => {

    let homePage: HomePage;

    beforeAll(() => {
        homePage = new HomePage();
    });

    it('I should login ', () => {
        homePage.navigateTo().then(() => {
            homePage.setName('sander').then(() => {
                expect(homePage.getGreetingText()).toEqual('Hello sander!');
            })
        })
    });
});