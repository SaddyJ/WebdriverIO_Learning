describe('Ecommerce Application',() =>{

    //adding x will skip the test
    xit('Login Failed Page Title',()=> {
        //webdriverIO Code
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        console.log(browser.getTitle())
        browser.pause(3000)
        expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        //webdriver supports xpath,css and linkText
        // -- CSS syntax :  tagname[attribute='value']  --> input[name='username']
        $("input[name='username']").setValue("rahulshettyacademy")
        $("#username").setValue("secondCSS")
        browser.pause(3000)

        // alternate and quicker way of CSS using class name : #id -- in this case #username
        // css with classname  --> .className --> .form-control 
        // another method is : tagname.className  --> input.form-control
        // css shortcuts --> #id and .className 

        // XPath syntax :  //tagname[@attribute='value']  --> //input[@type='password']
        // or u can use this as well  //*[@type='password']
        const password = $("//input[@type='password']");
        password.setValue("learning123")
        const signInBtn = $("#signInBtn");
        signInBtn.click();
        browser.pause(3000);
        // when button says signing dont check, check after button text says signin
        // signInBtn.getAttribute('value') === 'Sign In'
        console.log($('.alert-danger').getText() + ' is the text I see on the screen');
        // browser.waitUntil(condition, { timeout, timeoutMsg, interval })
        browser.waitUntil(() => signInBtn.getAttribute('value') === 'Sign In', { timeout: 4000,  
         timeoutMsg: 'Error message did not appear' })

         console.log($('.alert-danger').getText() + ' is the text I see on the screen');
        expect($("p.text-white")).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")



    })

    //adding x will skip the test
    xit('Login Successful Page Title',()=> {
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        
        $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("//input[@type='password']")
        password.setValue("learning")
        const signInBtn = $("#signInBtn")
        signInBtn.click()
        const checkoutLinkText = $("*=Checkout")
        checkoutLinkText.waitForExist()
        expect(browser).toHaveTitle("ProtoCommerce")
        expect(browser).toHaveUrlContaining("shop")
    })
});
