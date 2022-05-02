import chalk from "chalk";
import stripAnsi from "strip-ansi";

import highlight, { shouldHighlight, getChalk } from "../src/index.js";


describe("@babel/highlight", function () {
  describe("highlight", function () {
    describe("when colors are supported", function () {
      it("highlights code", function () {
        const code = "console.log('hi')";
        const result = highlight(code);
        const stripped = stripAnsi(result);
        expect(result.length).toBeGreaterThan(stripped.length);
        expect(stripped).toBe(code);
      });
    });
  });

  describe("shouldHighlight", function () {
    describe("when colors are supported", function () {
      it("returns true", function () {
        expect(shouldHighlight({})).toBeTruthy();
      });
    });
  });

  describe("getChalk", function () {
    describe("when colors are supported", function () {
      describe("when forceColor is not passed", function () {
        it("returns a Chalk instance", function () {
          expect(getChalk({}).constructor).toBe(chalk.constructor);
        });
      });

      describe("when forceColor is passed", function () {
        it("returns a Chalk instance", function () {
          expect(getChalk({ forceColor: true }).constructor).toBe(
            chalk.constructor,
          );
        });
      });
    });
  });
});
