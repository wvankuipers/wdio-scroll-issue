describe("WebdriverIO Component Testing", () => {
  it("should be able to render to the DOM and assert", async () => {
    await browser.url("http://127.0.0.1:8080");

    const $element = await browser.$("#scroll-here");

    await $element.isExisting();

    await $element.scrollIntoView();

    await browser.pause(10000);
  });
});
