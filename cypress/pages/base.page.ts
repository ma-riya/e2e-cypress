export class BasePage {

    VALIDATION_MSG = "[class^='Errors_errorsList__']";
    ACCOUNT_SELECT_DROPDOWN = "div[class^='AccountSelect_dropdown']";
    SELECT_OPTIONS = "select[class^='Select_select']";

    public navigate(url: string) {
        cy.visit(url);
    }

    public find(selector: string) {
        return cy.get(selector);
    }

    public clearField(fieldName: string) {
        return this.find(fieldName).first().clear();
    }

    public findByText(textName: string) {
        return cy.contains(textName);
    }

    public findByTextAndContext(context: string, textName: string) {
        return this.find(context).contains(textName);
    }

    public findElementByOptions(options: string, selector: string) {
        return cy.get(options).find(selector);
    }

}