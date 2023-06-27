import { Strategy } from "./base/strategy.js";
import { getUserCompany, isTrustedNetwork, isValidCaptcha, sendReportError } from "./middlewaresFunctions.js";

export class WebStrategy extends Strategy {
  constructor() {
    super([
      getUserCompany,
      isValidCaptcha,
      isTrustedNetwork,
      sendReportError
    ])
  }
}
