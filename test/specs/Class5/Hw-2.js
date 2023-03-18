// Due date: Mar 15 (eod)
const { expect } = require("chai");
const moment = require("moment");


// TC-1: Verify the current date is select by default in Sign Up dropdown
/**
 * 1. Launch facebook.com
 * 2. Click on Create New Account button
 * 3. Verify current date is displayed in the birthdate dropdowns.
 */
// Hint:
/**
 * get current date using moment-library - A
 * get default date selected in the dropdown - B
 * expect(A, '').to.equals(B)
 * 
 */
 describe('verify', () => {
 it.only('Verify the current date is select by default in Sign Up dropdown', async () => {
    // 1. Launch facebook.com
    await browser.url('https://www.facebook.com/');

    //2. Click on Create New Account button
    const creatAccBtn = await  $('//a[contains(@data-testid, "form")]');
    await creatAccBtn.click();
    await browser.pause(2000);

    //3. Verify current date is displayed in the birthdate dropdowns.

    const monthDropdownElement = await $('//select[@id="month"]//option[@selected]');
    const selectedMonth = await monthDropdownElement.getText()
    const currentMonthAbbr = moment().format('MMM')
    expect(selectedMonth, 'The current date is NOT  select by default in Sign Up dropdown').to.equal(currentMonthAbbr);
    await browser.pause(2000);

    const dayDropdownElement = await $('//select[@id="day"]//option[@selected]');
    const selectedDay = await dayDropdownElement.getText()
    const currentDayAbbr = moment().format('D')
    expect(selectedDay, 'The current date is NOT  select by default in Sign Up dropdown').to.equal(currentDayAbbr);
    await browser.pause(2000);

    const yearDropdownElement = await $('//select[@id="year"]//option[@selected]');
    const selectedYear = await yearDropdownElement.getText()
    const currentYearAbbr = moment().format('YYYY')
    expect(selectedYear, 'The current date is NOT  select by default in Sign Up dropdown').to.equal(currentYearAbbr);
    await browser.pause(2000);

});



   



// TC-2: Verify the travelers count on homepage
/**
 * 1. Launch hotels.com
 * 2. Make Adults=4 in Room-1
 * 3. Click Add another room
 * 4. Make Adults=3 in Room-2
 * 5. Click on Done button
 * 6. Verify total-travalers is equals to the number of adults mentioned in rooms
 * 
 */

 it('Verify the travelers count on homepage', async () => {
    // 1. Launch hotels.com
    await browser.url('https://www.hotels.com/');

    //2. Make Adults=4 in Room-1
    const travelersBtn = await $('button[data-stid=open-room-picker]');
    await travelersBtn.click();
    await browser.pause(1000);

    const addTravelers = await $('//input[@id="traveler_selector_adult_step_input-0"]/following-sibling::button') 
    addTravelers.click();
    addTravelers.click();
    await browser.pause(1000);

    //3. Click Add another room
    const addRoomBtn = await $('#traveler_selector_add_room');
    await addRoomBtn.click();
    await browser.pause(1000);

   //4. Make Adults=3 in Room-2
    const addTravelers2 = await $('//input[@id="traveler_selector_adult_step_input-1"]/following-sibling::button');
    addTravelers2.click();
    addTravelers2.click();
   
    await browser.pause(1000);


    //5. Click on Done button
    const doneBtn = await $('#traveler_selector_done_button');
    await doneBtn.click();
    await browser.pause(1000);

   // 6. Verify total-travalers is equals to the number of adults mentioned in rooms

        //button[text() = '7 travelers, 2 rooms']
        const totalTravelers = await $('button=7 travelers, 2 rooms');
        const isTotalTravelers = await totalTravelers.isDisplayed();
        expect(isTotalTravelers,'total-travalers is NOT equal to the number of adults mentioned in rooms').to.be.equal('7 travelers, 2 rooms');
        await browser.pause(1000);
});

})