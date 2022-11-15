const loginPage = require("./pageObjects/loginPage")

describe('Ecommerce Application',() =>{

    //adding x will skip the test
    it('Login Failed Page Title',()=> {
        //webdriverIO Code
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        console.log(browser.getTitle())
        
        expect(browser).toHaveTitleContaining('Rahul Shetty Academy')

        loginPage.Login("rahulshettyacademy","learning123")
         console.log(loginPage.alert.getText() + ' is the text I see on the screen');
         // signing-in dont check (check after button turns to sign in)
         browser.waitUntil(() => loginPage.signIn.getAttribute('value') === 'Sign In', {timeout: 4000, timeoutMsg: 'Error message did not appear'})
        expect(loginPage.textInfo).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")
        browser.pause(5000)



    })

})