const expectChai = require('chai').expect

describe('Functional Testing on application',() =>
{

    xit('Scrolling and Mouse Hover',()=> 
    { 
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const mousehoverButton = $('#mousehover')
        mousehoverButton.scrollIntoView()
        browser.pause(3000)
        mousehoverButton.moveTo()
        browser.pause(3000)
        $("=Top").click() // =Top since we have link text
        browser.pause(3000)

        browser.url("http://only-testing-blog.blogspot.com/2014/09/selectable.html")
        $("button").doubleClick()
        browser.pause(5000)
        console.log(browser.isAlertOpen())//
        expectChai(browser.isAlertOpen()).to.be.true
        console.log(browser.getAlertText()) // prints the alert text
        expectChai(browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
        browser.acceptAlert()
        browser.pause(5000)
    }) 

    xit('Web Tables Sort Validation',()=> 
    { 
        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        const vegFruitNameColumnHeader = $("tr th:nth-child(1)")
        vegFruitNameColumnHeader.click()
        // retrieve list of veggie names into array A
        // sort the array A --> Array B
        // compare Array A and Array B
        const veggiesList = $$("tr td:nth-child(1)") // this is CSS , if XPath is used : //tr/td[1]
        const originalVeggieNames = veggiesList.map(veggie => veggie.getText())
        console.log("This is original veggies list : " + originalVeggieNames)
        //Arrays are passed by reference 
        const veggies = originalVeggieNames.slice() // copying the array into another copy since sorting the original array will sort the array wherevr it is referenced
        
        const sortedVeggies = veggies.sort()
        console.log("This is sorted veggies list : " + sortedVeggies)
        expectChai(originalVeggieNames).to.eql(sortedVeggies)
    }) 

    xit('Web Tables Filter Validation',()=> 
    { 
        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        $("input[type='search']").setValue("tomato")
        const veggieLocators = $$("tr td:nth-child(1)")
        expect(veggieLocators).toBeElementsArrayOfSize({eq:1})
        expect(veggieLocators).toHaveTextContaining("Tomato")
        
    }) 

    
    

   

})