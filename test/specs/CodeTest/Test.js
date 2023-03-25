const { expect } = require("chai");
const moment = require("moment");


describe('WebDriver IO Code Test', () => {

    // Question - 1: (50-points)
    /**
     * Testcase: Verify rewards form is empty and Conitnue button is disabled
     * Steps:
     * 1. Launch hotels.com
     * 2. Click on Learn about Hotels.com Rewards
     * 3. -> Verify Hotels Rewards opened in a new window
     * 4. Click on Join Now
     * 5. -> Verify Form is blank
     * 6. -> Verify Continue button is NOT enabled
     */
    it('Verify rewards form is empty and Conitnue button is disabled', async () => {

        //1. Launch hotels.com
        await browser.url('https://www.hotels.com/')



       //2. Click on Learn about Hotels.com Rewards
       const rewardsLink = await $('=Learn about Hotels.com Rewards') ;    
        rewardsLink.scrollIntoView(false);

        await $('=Learn about Hotels.com Rewards').click();
    

        //3. -> Verify Hotels Rewards opened in a new window
        const allHandles = await browser.getWindowHandles();

        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            console.log(`current url -> ${currentUrl}\n\n`);
            if (currentUrl.localeCompare('https://www.hotels.com/hotel-rewards-pillar/hotelscomrewards.html') === 0) {
               break;
             }
        }


       const isDisplayed = await $('span*=rewards program').isDisplayed();
       
        expect(isDisplayed, 'No Rewards').to.be.true;

        await browser.pause(20000);

     
        // 4. Click on Join Now
        await $('a*=Join Now').click();



        //5. -> Verify Form is blank

        await $('#signupFormEmailInput').isDisplayed();
        await $('#signupFormFirstNameInput').isDisplayed();
        await $('#signupFormLastNameInput').isDisplayed();
        await $('#signupFormPasswordInput').isDisplayed();


        // 6. -> Verify Continue button is NOT enabled
        const contBtnEnabled = await $('#signupFormSubmitButton').isEnabled();
        expect(contBtnEnabled , 'button is enabled').to.be.false;


    });


    // Question - 2: (50-points)
    /**
     * Testcase: Verify past dates are disabled in Calendar
     * Steps:
     * 1. Launch hotels.com
     * 2. Click on Dates section
     * 3. If not already, go to current month
     * 4. -> Verify all past dates are disabled
     */
    it.only('Verify past dates are disabled in Calendar', async () => {


        //1. Launch hotels.com
        await browser.url('https://www.hotels.com/')

        // 2. Click on Dates section
        await $('#date_form_field-btn').click();

        //3. If not already, go to current month
      //await $('button[data-stid*=date-picker-paging[1]]').click();
     await  $('//button[@class="uitk-button uitk-button-medium uitk-button-only-icon uitk-layout-flex-item uitk-button-paging"][1]').click();
     await browser.pause(5000);

     //4. -> Verify all past dates are disabled
     const currentDayAbbr = await $('button[class=uitk-date-picker-day edge]').isEnabled();
       const today =  moment().format('D')
       expect(currentDayAbbr,'').to.be.equal(today);


 
    });
    


})











   




