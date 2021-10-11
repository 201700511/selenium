const {Builder, By, Key, util} = require("selenium-webdriver");

try{
async function example(){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://facebook.com")
    await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN)
    console.log(driver)
}
example();
}
catch(err){
    console.log(err)
}