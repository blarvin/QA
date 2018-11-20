describe("Checking out the UI", function() {
  it("Button activates a looooong scroll-down", function() {
    cy.visit("/");

    cy.get("[data-test-id=render-challenge]").click();
  });

  it("Should now show the Arrays Challenge", function() {
    cy.get("[data-test-id=arrays-table]").should("be.visible");
  });
});

const centerOfArray = require("../modules/centerOfArray").centerOfArray;

describe("Solving and submitting the challenge", function() {
  const arse = {
    firstArray: [],
    secondArray: [],
    thirdArray: []
  };
  describe("Making arrays", function() {
    it("Makes THREE arrays of NINE integers each", function() {
      cy.visit("/")
        .get("[data-test-id=render-challenge]")
        .click(); // this isnt exactly the Cypress way, I should 'take control of state' with cy.request

      cy.get("[data-test-id=first-row] td").each(function($element) {
        arse.firstArray.push(parseInt($element.text(), 10));
      });

      cy.get("[data-test-id=second-row] td").each(function($element) {
        arse.secondArray.push(parseInt($element.text(), 10));
      });

      cy.get("[data-test-id=third-row] td").each(function($element) {
        arse.thirdArray.push(parseInt($element.text(), 10));
      });
    });

    it("All three arrays have NINE integers", function() {
      for (const arr of Object.values(arse)) {
        cy.log(arr);
        expect(arr)
          .to.be.an("Array")
          .with.length(9);
        for (const num of arr) {
          expect(num).to.be.a("number");
        }
      }
    });
  });

  describe("Use module algorithm and enter answers", function() {
    it("Enters the answer into the form", function() {
      cy.get("[data-test-id=submit-1]").type(centerOfArray(arse.firstArray));
      cy.get("[data-test-id=submit-2]").type(centerOfArray(arse.secondArray));
      cy.get("[data-test-id=submit-3]").type(centerOfArray(arse.thirdArray));
      // cy.get("[data-test-id=submit-4]").type(Cypress.env("DEV"));
    });
  });

  describe("Submitting the answers", function() {
    it("Clicks the 'submit' button", function() {
      cy.get("[data-test-id=submit-answers]").click();
    });

    it("Recieves confirmation of correct submission", function() {
      cy.get(
        '[style="font-size: 16px; color: rgba(0, 0, 0, 0.6); padding: 24px; box-sizing: border-box; overflow-y: hidden; border-top: none; border-bottom: none; max-height: 480px;"]'
      ).should("contain", "Congratulations");
    });
  });
});

describe("An unhappy path :(", function() {
  it("Displays 'SORRY' dialog text", function() {
    cy.visit("/")
      .get("[data-test-id=render-challenge]")
      .click();
    cy.get("[data-test-id=submit-1]").type("three");
    cy.get("[data-test-id=submit-answers]").click();
    cy.get(
      '[style="font-size: 16px; color: rgba(0, 0, 0, 0.6); padding: 24px; box-sizing: border-box; overflow-y: hidden; border-top: none; border-bottom: none; max-height: 480px;"]'
    ).should("contain", "quite");
  });
});
