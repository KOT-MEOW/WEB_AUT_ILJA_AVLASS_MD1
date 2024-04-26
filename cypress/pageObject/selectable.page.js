import { BasePage } from "./base.page";

export class Selectable extends BasePage{

    static url(){
        return "/selectable";
       }

    static get gridButtonSelection(){
        return cy.get("[id='demo-tab-grid']");
    }

    static get firstRowButton(){
        return cy.get("div[id='row1']")
    }

    static get secondRowButton(){
        return cy.get("div[id='row2']")
    }

    static get thirdRowButton(){
        return cy.get("div[id='row3']")
    }

    static get isHighlighted(){
        return cy.get("[class='list-group-item active list-group-item-action']");
    }

    static get notHighlighted(){
        return cy.get("[class='list-group-item list-group-item-action']");
    }

}