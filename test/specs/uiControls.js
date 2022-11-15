const expectChai = require('chai').expect

describe('Ecommerce Application',() =>
{

    xit('UI Controls',()=> 
    { 
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("//input[@type='password']")
        password.setValue("learning")

        const radioButtons = $$(".customradio")
        const userRadioButton = radioButtons[1].$(".radiotextsty")
        
        userRadioButton.click() // chain of locators
        const popupModal = $('.modal-body')
        popupModal.waitForDisplayed()
        const cancelButton = $('#cancelBtn')
        cancelButton.click()
        const adminRadioButton = radioButtons[0].$(".radiotextsty")
        const userRadioButtonCheckMark = radioButtons[1].$("#usertype")
        const adminRadioButtonCheckMark = radioButtons[0].$("#usertype")
        console.log("Is the user radio button selected(true or false) : " + userRadioButtonCheckMark.isSelected())
        console.log("Is the admin radio button selected(true or false) : " + adminRadioButtonCheckMark.isSelected())

        userRadioButton.click()
        popupModal.waitForDisplayed()
        const okayButton = $('#okayBtn')
        okayButton.click()
        expect(userRadioButtonCheckMark.isSelected())
        adminRadioButton.click()
        expect(popupModal).not.toBeDisplayed()
        const dropdown = $("select.form-control")
        dropdown.selectByAttribute("value","teach")
        dropdown.selectByVisibleText("Consultant")
        dropdown.selectByIndex(0)
        expectChai(dropdown.getValue()).to.equal('stud')
        browser.pause(3000)
    }) 

    
    xit('UI Controls',()=> 
    { 
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        // const pageTitle = browser.getTitle()
        // expectChai(pageTitle).to.equal("Practice Page")
        browser.pause(5000)
        $('#autocomplete').setValue("ind")
        browser.pause(5000)

        let items = $$("[class='ui-menu-item'] div")
        // for(var i=0; i < items.length ; i++)
        // {
        //    console.log(items[i].getText())
        // }

        const desiredCountry = items.filter(item => item.getText() === "India") // filter returns an array , you have to mention array index to click
        desiredCountry[0].click()
        browser.pause(3000)
    })

    xit('Checkbox Identification',()=> 
    { 
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        
        const checkBoxesList = $$("label input[type='checkbox']")
        checkBoxesList[1].click()
        console.log(checkBoxesList[1].isSelected())
        console.log(checkBoxesList[2].isSelected())
        browser.pause(5000)
        browser.saveScreenshot("screenshot.png")
    })

})