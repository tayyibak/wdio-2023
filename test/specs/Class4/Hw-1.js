const { expect } = require("chai");


// Due date: Mar-13 (eod)

// TC-1: Verify current-temp is in between 40 and 55
/**
 * 1. Launch https://www.accuweather.com/
 * 2. Verify current-temp is in between 40 and 55
 */

 describe('verify', () => {

it('Verify current-temp is in between 40 and 55', async () => {
    // 1. Launch https://www.accuweather.com/
    await browser.url('https://www.accuweather.com/');

    await browser.pause(2000);

    // 2. Verify current-temp is in between 40 and 55

    const currentTempElement = await $('span[class=recent-location-temp]');;
    let currentTempText = await currentTempElement.getText(); 
    currentTempText = currentTempText.trim();  
    currentTempText.indexOf('°')                                
    let currentTemp = currentTempText.substring(0, currentTempText.indexOf('°') );   
    currentTemp = Number(currentTemp);    
       console.log(currentTemp)                            
    expect(currentTemp >35 && currentTemp <55,'Current-temp is Not in between 35 and 55').to.be.true;
});





// TC-2: Verify error on empty login flow
/**
 * 1. Launch https:www.facebook.com/
 * 2. Click 'Log In' button
 * 3. Verify error msg is displayed
 *      The email or mobile number you entered isn’t connected to an account
 */


 it('Verify error on empty login flow', async () => {
    // 1. Launch facebook.com
    await browser.url('https://www.facebook.com/');

    //2. Click 'Log In' button
    const logInBtn =await $('button[name=login]');
    await logInBtn.click();

    await browser.pause(1000);


    //3. Verify error msg is displayed 
    //The email or mobile number you entered isn’t connected to an account
       ////div[contains(text(), 'email or mobile')]
    const msgDisplayed = await $('div*=email or mobile');
    const isMsgDisplayed = await msgDisplayed.isDisplayed();
    expect(isMsgDisplayed,'Verify error is not on empty login flow').to.be.true;
    await browser.pause(1000);

});











// TC-3: Verify the empty messenger login flow
/**
 * 1. Launch https:www.facebook.com/
 * 2. Click on 'Messenger' link
 * 3. Verify 'Keep me signed in' checkbox is NOT selected
 * 4. Click 'Log In' button
 * 5. Verify link -> "Find your account and log in" is displayed
 * 6. Verify 'Continue' button is enabled
 * 7. Verify 'Keep me signed in' checkbox is NOT selected
 * 8. Click 'Keep me signed in' checkbox
 * 9. Verify 'Keep me signed in' checkbox is selected
 * 
 */



 it.only('Verify error on empty login flow', async () => {
    // 1. Launch facebook.com
    await browser.url('https://www.facebook.com/');

    //2. Click on 'Messenger' link
    const messengerBtn = await $('a=Messenger');
    await messengerBtn.click();
    await browser.pause(1000);
    
    //3. Verify 'Keep me signed in' checkbox is NOT selected
    const verifyCheckbox = await $('input[type*=checkbox]');
    const isVerifyCheckbox = await verifyCheckbox.isSelected()
    expect(isVerifyCheckbox, 'Checkbox is selected').to.be.false;

    //4. Click 'Log In' button

    //button[@name="login"]
    const logInBtn = await $('button[name=login]');
    await logInBtn.click();
    await browser.pause(1000);
    
   //5. Verify link -> "Find your account and log in" is displayed
   const verifyLink = await $('a*=and log');
   const isLinkDisplayed = await verifyLink.isDisplayed();
   expect(isLinkDisplayed, 'Link is displayed').to.be.false;
   await browser.pause(1000);

    
    //6. Verify 'Continue' button is enabled
    const continueBtn  = await $('button[name=login]');
    const isContinueBtnEnabled = await continueBtn.isEnabled()
    expect(isContinueBtnEnabled, 'Button is Not enabled').to.be.true;
    await browser.pause(1000);

    //7. Verify 'Keep me signed in' checkbox is NOT selected
    const checkbox = await $('label[class*=LabelInput]');
    const isCheckbox = await checkbox.isSelected()
    expect(isCheckbox, 'Checkbox is selected').to.be.false;
    await browser.pause(1000);

    //8. Click 'Keep me signed in' checkbox
    const signInCheckbox =  await $('label[class*=LabelInput]');
    await signInCheckbox.click();
    await browser.pause(1000);
    
    //9. Verify 'Keep me signed in' checkbox is selected
    const isSelectedCheckbox = await signInCheckbox.isSelected()
    await browser.pause(2000);
    expect(isSelectedCheckbox, 'Checkbox is selected').to.be.false;



    })

 });