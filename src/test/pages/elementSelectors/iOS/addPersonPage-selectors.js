module.exports = {
     businessName : e => mob.$('-ios predicate string:type == "XCUIElementTypeTextField" AND value == "Business Name"'),
     editIcon : e => mob.$('~close create'),
     firstName : e => mob.$('-ios predicate string:type == "XCUIElementTypeTextField" AND value == "First Name"'),
     middleName : e => mob.$('-ios predicate string:type == "XCUIElementTypeTextField" AND value == "Middle Name"'),
     lastName : e => mob.$('-ios predicate string:type == "XCUIElementTypeTextField" AND value == "Last Name"'),
     Alias : e => mob.$('-ios predicate string:type == "XCUIElementTypeTextField" AND value == "Alias"'),
     phoneNumber : e => mob.$("//*[@placeholder='Mobile Phone']//input['.text-input']"),
     burgerIcon : e => mob.$('~menu'),
     firstCase : e => mob.$('-ios predicate string:type == "XCUIElementTypeButton" AND name contains "archive Case Mobile Test -"'),
     PersonType : e => mob.$('//*[@formcontrolname="personTypeId"]'),
     basicInfo : e => mob.$('~Basic Info'),
     male : e => mob.$('~Male'),
     raceItem : racetype => mob.$('~' + racetype),
     raceMenu : e => mob.$('//*[@formcontrolname="raceId"]'),
     gender : e => mob.$("//ion-select[@formcontrolname='genderId']"),
     loadingWindow : e => mob.$("//div[@class='loading-wrapper']//div[text()='Please wait...']"),
     saveButton : e => mob.$('~Save'),
    //  saveButton() {return $("//button//span[text()='Save']")}
     driverLicense : e => mob.$('-ios predicate string:type == "XCUIElementTypeTextField" AND value contains "Driver\'s License"'),
     homeAddress : e => mob.$('//span[contains(text(),"Home")]'),
     address1 : e => mob.$$('.text-input')[9],
     city : e => mob.$$('.text-input')[11],
     state : e => mob.$('//*[@formcontrolname="stateId"]'),
     postalCode : e => mob.$$('.text-input')[12],
     addPersonButton : e => mob.$('~close person add'),
     caseField : e => mob.$('//XCUIElementTypeTextField[@name="search"]'),
     personType : e => mob.$('//*[@formcontrolname="personTypeId"]'),
     addrsLine1 : text => mob.$('~'+text),
     addrsType : text => mob.$('~'+text),
     pinSetAsDefault : e => mob.$('~pin Set as Default'),
     deleteAddressButton : e => mob.$('~trash Delete'),
     }

