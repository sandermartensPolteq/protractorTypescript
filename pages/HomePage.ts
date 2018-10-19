import {browser, by, element, ElementFinder, promise, protractor} from "protractor";

const EC = protractor.ExpectedConditions;
const globalAny: any = global;

export class HomePage {

    username: ElementFinder = element(by.model('yourName'));
    greeting: ElementFinder = element(by.binding('yourName'));

    navigateTo(){
        return browser.get('http://www.angularjs.org');
    }

    setName(username: string): promise.Promise<void> {
        return browser.wait(EC.presenceOf(this.username), globalAny.DEFAULTTIMEOUT).then(() => {
            return this.username.sendKeys(username);
        })
    };

    getGreetingText(): promise.Promise<string>{
        return browser.wait(EC.presenceOf(this.greeting), globalAny.DEFAULTTIMEOUT).then(() => {
            return this.greeting.getText();
        })
    };
}