import {HomePage} from "./pages/HomePage";
import {FileUtils} from "./utils/FileUtils";
import {Auto} from "./contracts/Auto";

describe('When opening the browser', () => {

    let homePage: HomePage;
    let input: string;
    let auto: Auto;

    beforeAll(() => {
        homePage = new HomePage();
    });

    it('run first test', () => {
        homePage.navigateTo().then(() => {
            homePage.setName('sander').then(() => {
                expect(homePage.getGreetingText()).toEqual('Hello sanderr!');
            });
        });
    });

    it('Create JSONObject', () => {
        input = '{"merk":"merknaam", "motor":"motornaam"}';
        FileUtils.writeJSONFile('C:/', 'auto2', input);
    });

    it('Read JSONObject', () => {
        auto = FileUtils.readJSONFileAndReturnObject('C:/', 'auto2');
        expect(auto.merk).toEqual('merknaam');
        expect(auto.motor).toEqual('motornaam');
    });
});
