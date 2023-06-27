import { Strategy } from "./base/strategy.js";
import { authorizePendingSessionWithSameNetwork, getUserCompany, sendReportError, validateAppVersion } from "./middlewaresFunctions.js";

export class MobileStrategy extends Strategy {
  constructor() {
    super([
      getUserCompany,
      validateAppVersion,
      authorizePendingSessionWithSameNetwork,
      sendReportError
    ])
  }
}
