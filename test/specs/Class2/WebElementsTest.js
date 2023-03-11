describe('basic locator strategies', () => {
    
    it('Locator strategy : Using id-value', async () => {
        /**
         * 1. Launch facebook.com
         * 2. Type (abcd@gmail.com) in the Email or phone number field/element
         * 3. Type (abcd@1234) in the Password field/element
         */
        // 1. Launch facebook.com
        await browser.url('https://www.facebook.com/');

        // 2. Type (abcd@gmail.com) in the Email or phone number field/element
        const loginEmailElement = await $('#email');
        await loginEmailElement.setValue('abcd@gmail.com');

        // 3. Type (abcd@1234) in the Password field/element
        const loginPasswordElement = await $('#pass');
        loginPasswordElement.setValue('abcd@1234');
        
        await browser.pause(10000);

    })

})