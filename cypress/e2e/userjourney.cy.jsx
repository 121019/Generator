import add from "../../src/utils/calcul";

describe("User journey", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("It's connect !!!", () => {});
  it("It's a bad response !!!", () => {
    cy.get("input").type("0");
    cy.get("button").click();
    cy.get(".badReponse").should("have.text", "Mauvaise réponse");
    cy.get(".badImage").should("exist");
    cy.get(".score > p").should("have.text", "Score : 0");
  });
  xit("It's a good response !!!", () => {
    cy.stub(window, "add").returns({
      correctAnswer: 4,
      num1: 2,
      num2: 2,
    });
    cy.get("input").type("4");
    cy.get("button").click();
    cy.get(".goodReponse").should("have.text", "Bonne réponse");
    cy.get(".goodImage").should("exist");
    cy.get(".score > p").should("have.text", "Score : 1");
  });
});
