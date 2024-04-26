import { Selectable } from "../pageObject/selectable.page";

describe('Demoqa scenarios HW1', () => {
  context("GRID", () =>{
    beforeEach(() => {
      cy.visit("https://demoqa.com/selectable");
    });

    it('Grid test', () => {
      // Click “Grid”
      Selectable.gridButtonSelection.click();
      // Click - “Two”, “Four”, “Six”, “Eight”
      Selectable.firstRowButton.contains("Two").click();
      Selectable.secondRowButton.contains("Four").click();
      Selectable.secondRowButton.contains("Six").click();
      Selectable.thirdRowButton.contains("Eight").click();
      // Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
      Selectable.isHighlighted.should('contain','Two','Four','Six','Eight');
      // Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
      Selectable.notHighlighted.should('contain','One','Three','Seven','Nine');
    })

  })
})




