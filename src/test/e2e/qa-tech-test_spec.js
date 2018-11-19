describe("Page Presence Test", function() {
  it("Visits the page on localhost", function() {
    cy.visit("/");
  });
});

describe("Clicking the first button we find", function() {
  it("Activates a looooong scroll-down", function() {
    cy.visit("/");

    cy.get(
      "body > div > div > section:nth-child(1) > div > div > button:nth-child(1)"
    ).click();
  });

  it("Should now show the Arrays Challenge", function() {
    cy.get("body > div > div > section:nth-child(2)") // just trying to keep it "polymorphic", so it doesnt depend on the #id
      .should("be.visible");
  });
});

describe("Making arrays from table data", function() {
  it("Makes THREE arrays of NINE integers each", function() {
    cy.visit("/")
      .get(
        "body > div > div > section:nth-child(1) > div > div > button:nth-child(1)"
      )
      .click();
    // This isnt the Cy way, should 'Take Control of State' directly
    // will try to refactor using cy.request()
    // already tested this UI!

    const firstArray = []; // Grrrr, this also isnt really the Cy way...
    const secondArray = []; // I tried some other things,
    const thirdArray = []; // but the td elements kept ending up as one string

    cy.get(
      "body > div > div > section:nth-child(2) > div > div > div:nth-child(7) > div > div:nth-child(2) > table > tbody > tr:nth-child(1) td"
    )
      .each(function($element) {
        firstArray.push(parseInt($element.text(), 10));
      })
      .should(function() {
        expect(firstArray)
          .to.be.an("Array")
          .with.lengthOf(9);
      });

    cy.get(
      "body > div > div > section:nth-child(2) > div > div > div:nth-child(7) > div > div:nth-child(2) > table > tbody > tr:nth-child(2) td"
    ).each(function($element) {
      secondArray.push(parseInt($element.text(), 10));
    });

    cy.get(
      "body > div > div > section:nth-child(2) > div > div > div:nth-child(7) > div > div:nth-child(2) > table > tbody > tr:nth-child(3) td"
    ).each(function($element) {
      thirdArray.push(parseInt($element.text(), 10));
    });
  });
}); // wow, this seems fugly. hopefully I can refactor it.
// atleast put the three together in one loop...

// those selectors seem obnoxiosly long.. again, just tring to be 'polymorphic'
// I dont know if that's a good way to do things. Just trying something.
// It may LOOK better if I use xpath selectors... ?
