module.exports = {
     loadingWindow : e => mob.$("//div[@class='loading-wrapper']//div[text()='Please wait...']"),
    // categoryDropdown : e => mob.$('//*[@formcontrolname="categoryId"]'),
     //caseField: e => mob.$('//XCUIElementTypeTextField[@name="search"]'),
     caseField: e => mob.$('//XCUIElementTypeOther[@name="Ionic App"]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[4]/XCUIElementTypeTextField'),
     //categoryDropdown  : e => mob.$('//XCUIElementTypeOther[@name="Ionic App"]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[7]/XCUIElementTypeOther'),
     biohazzard : e => mob.$('~Bicycle'),
     recoveredByField : e => mob.$('//XCUIElementTypeOther[@name="Ionic App"]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[12]/XCUIElementTypeTextField'),
     recoveredByTypeahead : personName => mob.$('~person ' + personName + ''),
     recoveredAtField : e => mob.$('-ios predicate string:type == "XCUIElementTypeTextField" AND value == "recovery location"'),
     searchAddressPlaceholder : e => mob.$('XCUIElementTypeSearchField'),
     newItemHeader : e => mob.$('~New Item'),
     addressSearchResult : e => mob.$('~Sarajevo, Bosnia and Herzegovina'),
     recoveryDate : e => mob.$('~Select date'),
     itemBelongsTo : e => mob.$('//XCUIElementTypeOther[@name="Ionic App"]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[34]/XCUIElementTypeTextField\n'),
     CustodyReason : e => mob.$('//*[@formcontrolname="custodyReasonId"]'),
     custodyReasonMenu  : custodyR => mob.$('~' + custodyR),
     additionalBarcode : e => mob.$('//XCUIElementTypeOther[@name="Ionic App"]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[31]/XCUIElementTypeTextField'),
     storageLocation1 : e => mob.$('//XCUIElementTypeOther[@name="Ionic App"]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[13]/XCUIElementTypeTextField'),
     storageLocation : e => mob.$('//XCUIElementTypeOther[@name="Ionic App"]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[42]/XCUIElementTypeTextField'),
     storageLocationValue : location => mob.$('//XCUIElementTypeButton[@name="archive ' + location + '"]'),
     itemHeader : e => mob.$('-ios predicate string:type == "XCUIElementTypeStaticText" AND name contains "Item #"'),
     descriptionPlaceHolder : e => mob.$$('//*[@formcontrolname="description"]')[1],
     doneButton : e => mob.$("//*[contains(text(),'Done')]"),
    make : e => mob.$('//XCUIElementTypeOther[@name="Ionic App"]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[25]/XCUIElementTypeTextField'),
     model : e => mob.$('//XCUIElementTypeOther[@name="Ionic App"]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[27]/XCUIElementTypeTextField'),
     serialNumber : e => mob.$('//XCUIElementTypeOther[@name="Ionic App"]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther[3]/XCUIElementTypeOther[29]/XCUIElementTypeTextField'),
     arrowDropMenu : e => mob.$('~arrow dropdown'),
     saveButton : e => mob.$('~Save'),
     firstItem : e => mob.$('h2=Item # 1'),
     firstItemHeader : e => mob.$('~ITEM # 1'),
    //  editIcon() {return $('//*[@name="create"]')}
     editIcon : e => mob.$('~close create'),
     proposeAddressButton : e => mob.$('~PROPOSE ADDRESS'),
     mapBox : e => mob.$('//*[contains(text(),"Map")]'),
     addressLocation : e => mob.$("//div[text()='Enter address']"),
     editedDesc : e => mob.$(`~Mobile Automation Test - ${D.randomString}`),
     existingCaseNumber: text => mob.$('~archive ' + text)
     };


