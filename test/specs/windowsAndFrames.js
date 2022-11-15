const expectChai = require('chai').expect

describe('Windows and Frames Miscellaneous',() =>
{

    xit('Parent and Child windows switch',()=> 
    { 
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
       //$([onclick='openWindow()'])  --> this works too, but adding paranthesis is not a good locator
       const switchOpenWindowBtn = $("[onclick*='openWindow']")
       switchOpenWindowBtn.click()
       browser.pause(5000)
       var handles = browser.getWindowHandles()
       //0th index parent window, // 1st index child window
       browser.switchToWindow(handles[1])
       console.log(browser.getTitle())

       browser.maximizeWindow()
       browser.closeWindow()
       
        //come back to parent window 
        browser.switchToWindow(handles[0])
        console.log(browser.getTitle())

        browser.newWindow("https://rahulshettyacademy.com/#/index") // this automatically switches to a new window
        const titleofNewWindow = browser.getTitle()
        browser.switchWindow("https://rahulshettyacademy.com/AutomationPractice/") // uses title or url to switch to another window
        $('#name').setValue(titleofNewWindow)
        browser.pause(5000)
        browser.switchWindow(titleofNewWindow)
        console.log(browser.getUrl())

    }) 

    xit('Frame Switch',()=> 
    { 
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const mousehoverButton = $('#mousehover')
        mousehoverButton.scrollIntoView()
        console.log($$('a').length)   
        browser.switchToFrame($("#courses-iframe")) // u can use [id='courses-iframe'] as well
        console.log($("=Courses").getTagName())
        console.log($$("a").length)
        browser.switchToFrame(null) // if null server will switch back to default content
        console.log($$("a").length)

    }) 

})