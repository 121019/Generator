import React from "react";
import Calcul from "./Calcul";

describe("<Calcul />", () => {
  it("renders", () => {
    cy.mount(<Calcul />);
    cy.get("h1").should("have.text", "Générateur de Calcul Mental");
    cy.get(".numbers > p").should("contain.text", "+");
    cy.get(".numbers > p").should("contain.text", "=");
    cy.get(":input[placeholder='Votre réponse']")
      .should("be.visible")
      .and("have.text", "");
    cy.get("h2").should("have.text", "T'es sur de toi ???");
    cy.get("button").should("have.text", "Valider...");
    cy.get(".score").should("have.text", "Score : 0");
    cy.get(".good-reponse").should("not.exist");
    cy.get(".wrong-reponse").should("not.exist");
    cy.get(".badImage").should("not.exist");
    cy.get(".goodImage").should("not.exist");
  });
});
