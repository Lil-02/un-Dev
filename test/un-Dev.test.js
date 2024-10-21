import { html, fixture, expect } from '@open-wc/testing';
import "../un-Dev.js";

describe("un-Dev test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <un-Dev
        title="title"
      ></un-Dev>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
