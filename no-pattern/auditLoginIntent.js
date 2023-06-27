import { setTimeout } from 'timers/promises'
import { randomDelay } from '../shared/util.js';

/**
 * @typedef {Object} input
 * @property {string} userId
 * @property {string} ipAddress
 * @property {string} appId
 * @property {string} version
 * @property {string} captchaString
 */
export class AuditLoginIntent {
  async execute(input) {
    let hasError = false;
    let trusted = false;
    let validCaptcha = false;

    try {
      const company = await this.getUserCompany(input.userId);

      if (company.status !== 'active') {
        throw new Error('Company is not active');
      }

      if (input.appId === 'come-from-mobile-id') {
        await this.validateAppVersion(input.version)
      }

      trusted = await this.isTrustedNetwork(input.ipAddress)

      if (!trusted && input.appId === 'come-from-web-id') {
        throw new Error('Network is not trusted');
      }

      validCaptcha = await this.isValidCaptcha(input.captchaString)
      if ( !validCaptcha && input.appId !== 'come-from-web-id') {
        throw new Error('Captcha is not valid');
      }

      await this.authorizePendingSessionWithSameNetwork(input.userId, input.ipAddress)

    } catch (error) {
      hasError = true;

      throw error;
    } finally {
      await this.sendReportError({
        status: hasError ? 'error' : 'success',
        userId: input.userId,
        ipAddress: input.ipAddress,
        trusted,
        validCaptcha,
      });
    }
  }

  async getUserCompany(userId) {
    await setTimeout(randomDelay());

    return {
      id: 'company-id',
      owner: userId,
      name: 'Company Name',
      status: 'active',
    }
  }

  async validateAppVersion(version) {
    await setTimeout(randomDelay());

    if (version !== '1.0.0') {
      throw new Error('App version is not valid');
    }
  }

  async isTrustedNetwork(ipAddress) {

    await setTimeout(randomDelay());

    return ipAddress === '1.1.1.1'
  }

  async isValidCaptcha(captchaString) {
    await setTimeout(randomDelay());

    return captchaString !== 'captcha-string'
  }

  async authorizePendingSessionWithSameNetwork(userId, ipAddress) {
    await setTimeout(randomDelay());

    if (userId !== 'user-id' || ipAddress !== '1.1.1.1') {
      throw new Error('Pending session is not valid');
    }
  }

  async sendReportError(data) {
    await setTimeout(randomDelay());

    console.log(data);
  }
}
