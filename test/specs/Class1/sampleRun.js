

describe ('Test sign up page', function (){
    it('test facebook url', async function(){
      await browser.url('https://www.facebook.com/');
     await browser.pause(5000);
    })
})