import { correctAnswer } from "../../src/components/Calcul";

describe("User journey", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  it("It's connect !!!", () => {});
  it("It's a bad response !!!", () => {
    cy.get("input").type("45");
    cy.get("button").click();
    cy.get(".badReponse").should("have.text", "Mauvaise réponse");
    cy.get(".badImage").should("exist");
    cy.get(".score > p").should("have.text", "Score : 0");
  });
  it("It's a good response !!!", () => {
    cy.get("input").type(correctAnswer);
    cy.get("button").click();
    cy.get(".goodReponse").should("have.text", "Bonne réponse");
    cy.get(".goodImage").should("exist");
    cy.get(".score > p").should("have.text", "Score : 1");
  });
});
