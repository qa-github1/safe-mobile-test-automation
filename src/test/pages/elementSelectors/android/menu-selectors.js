module.exports = {
 homePageHeader : e => mob.$('android=.text("Recent Cases")'),
 homeIcon : e => mob.$('android=.textContains("Home home")'),
 caseList : e => mob.$$('android=.textContains("Case Mobile Test")'),
 burgerIcon : e => mob.$('android=.text("menu")'),
 addCaseLink : e => mob.$('android=.textContains("Add Case add")'),
 addCaseTranslation : e => mob.$('android=.textContains("CASES.ADD.MODAL_HEADING")'),
 //addCaseLink : e => mob.$('//*[contains(text(),"Add Case")]'),
 newCaseHeader : e => mob.$('//*[contains(text(),"New Case")]'),
 loadingWindow : e => mob.$("//div[@class='loading-wrapper']//div[text()='Please wait...']"),
 burgerMenu : e => mob.$('//*[@name="menu"]'),
 homeLink : e => mob.$('.input-wrapper'),
 logOutIcon : e => mob.$('.ion-md-exit'),
 pagesUnderMenu: text => mob.$('android=.textContains("' + text + '")'),
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
 discrepancyReportsPage : e => mob.$('android=.textContains("Discrepancy Reports")')

}
