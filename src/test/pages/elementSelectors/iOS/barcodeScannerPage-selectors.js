module.exports = {
     barcodeIcon : e => mob.$('android=.text("close barcode")'),
     editIcon : e => mob.$('android=.text("close flash")'),
     saveButton : e => mob.$('android=.text("SAVE")'),
     barcodePlaceHolder : e => mob.$('//textarea[@placeholder="Enter item barcodes..."]'),
     trashIcon : e => mob.$('android=.text("trash")'),
     clearModal : e => mob.$('android=.text("Clear Items").instance(1)'),
     currentOffice : e => mob.$('android=.text("Current office: Selected")'),
     otherOffices : e => mob.$('android=.text("Other offices: All")'),
     storageLocation : e => mob.$('android=.className("android.widget.EditText").index(0).instance(1)'),
     noteInput : e => mob.$('android=.className("android.widget.EditText").index(0).instance(2)'),
     signatureIcon : e => mob.$('android=.text("brush SIGNATURE")'),
     DoneButton : e => mob.$('android=.text("DONE")'),
     signatureApplied : e => mob.$('android=.text("Signature applied")'),
     trueIcon : e => mob.$('android=.text("checkmark")'),
     barcodeId : e => mob.$('android=.textContains("Test1242, test")'),
     yesButton : e => mob.$('android=.className("android.widget.Button").text("YES")'),
     okButton : e => mob.$('android=.className("android.widget.Button").text("OK")'),
     barcodeInputHeader : e => mob.$("//div[text()='Barcode input']"),
     itemFound : e => mob.$("//p[text()='Successful Scans: 1']"),
     itemBarcode : e => mob.$("//h2[text()='Item # 3/2']"),
     itemNotFound : e => mob.$("//p[text()='Items Not Found: 1']"),
     moveItem : e => mob.$('//span[text()="Move Item"]'),
     moveItemHeader : e => mob.$('//div[text()="Move 1 item"]'),
     signatureHeader : e => mob.$("//div[text()='Signature']"),
     barcodeID : e => mob.$('h2=Item # 3/2')
     }


