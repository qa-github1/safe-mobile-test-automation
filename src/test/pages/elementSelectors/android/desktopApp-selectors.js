module.exports = {
 homePageHeader : e => mob.$('android=.text("Recent Cases")'),
 homeIcon : e => mob.$('android=.textContains("Home home")'),
 caseList : e => mob.$$('android=.textContains("Case Mobile Test")'),
 burgerIcon : e => mob.$('android=.text("menu")'),
 addCaseLink : e => mob.$('android=.textContains("Add Case add")'),
 newCaseHeader : e => mob.$('//*[contains(text(),"New Case")]'),
 loadingWindow : e => mob.$("//div[@class='loading-wrapper']//div[text()='Please wait...']"),
 burgerMenu : e => mob.$('//*[@name="menu"]'),
 homeLink : e => mob.$('.input-wrapper'),
 addItemLink : e => mob.$('android=.textContains("Add Item add")'),
 newItemHeader : e => mob.$('android=.text("New Item")'),
 addPersonLink : e => mob.$('android=.textContains("Add Person add")'),
 addNewPersonHeader : e => mob.$("//*[contains(text(),'New Person')]"),
 barcodeSCannerLink : e => mob.$('android=.textContains("Barcode Scanner qr scanner")'),
 scannerPageHeader : e => mob.$('//div[text()="Barcode Scanner"]'),
 searchLink : e => mob.$('android=.textContains("Search Case search")'),
 searchPageHeader : e => mob.$('android=.text("Search Parameters")'),
 backarrow : e => mob.$('android=.text("arrow back")'),
 discrepancyReports : e => mob.$('android=.textContains("Discrepancy Reports report")'),
 discrepancyReportsPage : e => mob.$('android=.textContains("Discrepancy Reports")'),

 caseNumberField : e => mob.$('android.widget.EditText'),
 offenseTypeMenuButton : e => mob.$('android=.text("Select Offense Type")'),
 offenseDescription : e => mob.$('android=.className("android.widget.EditText").index(0).instance(3)'),
 offenseDate : e => mob.$('android=.text("Select date")'),
 doneButton : e => mob.$('android=.text("DONE")'),
 formTestBen : e => mob.$('android=.text("Select Form to Add")'),
 formTestBens : e => mob.$('android=.text("archive TestBen")'),
 textBoxField : e => mob.$('android=.className("android.widget.EditText").index(0).instance(4)'),
 radioButtonList : e => mob.$('android=.className("android.view.View").index(0).instance(71)'),
 caseOfficerName : e =>mob.$('android=new UiScrollable(new UiSelector().className("android.view.View").index(1).instance(2)).scrollIntoView(' +
        'new UiSelector().className("android.widget.EditText").index(0).instance(0))'),

amrCaseOfficer : (officerName) => mob.$('android=.text("' + officerName + '")'),
 saveButton : e => mob.$("//page-case-info//ion-content//div[2]//ion-grid//button//span[text()='Save']"),
 offenseItem : e => mob.$('android=new UiScrollable(new UiSelector().className("android.view.View").index(0).instance(23)).scrollIntoView(' +
        'new UiSelector().className("android.widget.Button").index(9).textContains("Assault"))'),

 startButton : e => mob.$('android=.text("START")'),
 OffenseLocation : e => mob.$('//*[contains(text(),"Offense Location")]//..//div'),
 searchAddressPlaceholder : e => mob.$('android=.className("android.widget.EditText").index(1)'),
 addressSearchResult : address => mob.$('android=.text("'+ address + '")'), //sarajevo..
 tagFIeld : e => mob.$("(//input[@type='text'])[4]"),
 enterAddressHeader : e => mob.$("//div[text()='Enter address']"),
 basicInfoHeader : e => mob.$('android=.text("Basic Info")'),
 caseStatus : e => mob.$('android=.text("Open")'),
 caseName : e => mob.$('android=.textContains("Case # Case Mobile Test -")'), //need to check
 caseFound : caseName => mob.$('android=.text("Case Mobile Test - ' + caseName + '")'), // D.generatecasen2

 welcomeHeader : e => mob.$('//android.view.View[@text=\'Welcome to SAFE!\']'),
 settingsButton : e => mob.$('//android.wid.Button[@text=\'SETTINGS\']'),
 addButton : e => mob.$('android=.text("ADD")'),
 addDomainHeader : e => mob.$('android=.text("Add Domain")'),
 domainName : e => mob.$('android=.className("android.widget.EditText").index(0).instance(0)'),
 domainUrl : e => mob.$('android=.className("android.widget.EditText").index(0).instance(1)'),
 domainMediaUrl : e => mob.$('android=.className("android.widget.EditText").index(0).instance(2)'),
 trueIcon : e => mob.$('//android.widget.Button[@text=\'checkmark\']'),
 userLoggedInAlert : e => mob.$("//div[@class='alert-wrapper']"),
 okButton : e => mob.$('//android.widget.Button[@text=\'OK\']'),
 photoErrorToastMsg : e => mob.$("//*[contains(text(),'Photo does not belong to organization')]"),
 email : e => mob.$('android=.className("android.widget.EditText").index(0).instance(0)'),
 password : e => mob.$('android=.className("android.widget.EditText").index(0).instance(1)'),
 LoginButton : e => mob.$('android=.className("android.widget.Button").text("LOGIN")'),
 caseSearch : e => mob.$('//input[@placeholder="Case Search"]'),

 loginPageTitle : e => chromeDesktop.$("//*[text()='Welcome To SAFE']"),
 emailInput : e => chromeDesktop.$('#username'),
 passwordInput : e => chromeDesktop.$('#password-12345'),
 loginButton : e => chromeDesktop.$("//button[text()='Login']"),

 dashboardHeader : e => chromeDesktop.$('//h2[text()="Welcome"]'),
 loginConfirmationModal : e => chromeDesktop.$("//h2[text()='Are you sure?']"),
 yesButton : e => chromeDesktop.$("//button[text()='Yes']"),
 searchField : e => chromeDesktop.$('#searchinput'),
 caseNumberInput : e => chromeDesktop.$('#CaseNumberWithoutFormat'),
 caseTypeDropMenu : e => chromeDesktop.$('//*[@name="offenseType"]'),
//  nextButton() {return chromeDesktop.$('//*[text()="Next"]')}
 caseType : e => chromeDesktop.$('//option[text()="Assault"]'),
 nextButton : e => chromeDesktop.$('button=Next'),
 caseOfficerPlaceHolder : placeholder => chromeDesktop.$('//input[@placeholder="' + placeholder + '"]'),
 officerName : e => chromeDesktop.$('//a[text()=" Kamel (akamel+1@trackerproducts.com)"]'), //need to check
 offenseLocation : e => chromeDesktop.$('//input[@name="offenseLocation"]'),
 addressResult : e => chromeDesktop.$('//span[text()="NY, USA"]'), //need to check
 datePicker : e => chromeDesktop.$('.glyphicon-calendar'),
 todayDate : e => chromeDesktop.$('button=Today'),
 tags : e => chromeDesktop.$('(//input[@type="search"])[2]'),
 offenseDesc : e => chromeDesktop.$('//textarea[@name="offenseDescription"]'),
 SaveButton : e => chromeDesktop.$('button=Save')
}


