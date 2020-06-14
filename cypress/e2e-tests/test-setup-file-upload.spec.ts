import { TestSetupStepTwoPage } from '../pages/test-setup-step2.page';

const stepTwoPage = new TestSetupStepTwoPage();
const username = Cypress.env("username");
const password = Cypress.env("password");

describe('Test suite setup: step 2 | Basic settings File Upload', () => {
  beforeEach(() => {
    cy.createTestSuite(username, password).then(res => {
      const url = res.body.data.createTestSuite.testSuite.id;
      cy.visit(`/setup/${url}`)
    });
    stepTwoPage.clickSettingsHeading();
    stepTwoPage.selectListSource();
    stepTwoPage.pressUploadBtn();
  })

  describe('Succesful file upload', () => {

    it('user can succesfully upload a CSV file in list source', () => {
      const fileName = "list-files/csv-list.csv";
      stepTwoPage.uploadFile(fileName);
      stepTwoPage.findByTextAndContext('b', '1 File(s) uploaded').should('be.visible');
    })

    it('user can succesfully upload a TXT file in list source', () => {
      const fileName = "list-files/txt-list.txt";
      stepTwoPage.uploadFile(fileName);
      stepTwoPage.findByTextAndContext('b', '1 File(s) uploaded').should('be.visible');
    })

    it('user can succesfully upload multiple files in list source', () => {
      const fileNames = ["list-files/csv-list.csv", "list-files/txt-list.txt"];
      fileNames.forEach(function (fileName) {
        stepTwoPage.uploadFile(fileName);
      });
      stepTwoPage.findByTextAndContext('b', '2 File(s) uploaded').should('be.visible');
      stepTwoPage.deleteFileUpload();
    })
  })

  describe('Unsupported files', () => {
    it('user can see validation error when uploading unsupported file type', () => {
      const fileName = "list-files/json-list.json";
      stepTwoPage.uploadFile(fileName);
      stepTwoPage.findByTextAndContext('b', '0 File(s) uploaded').should('be.visible');
      stepTwoPage.findByTextAndContext(stepTwoPage.ERROR_MSG, "Couldn't upload list-files/json-list.json").should('be.visible');
    })
  })
})