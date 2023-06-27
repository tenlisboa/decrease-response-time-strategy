import { randomDelay } from '../../shared/util.js';
import { setTimeout } from 'timers/promises'

export async function getUserCompany(context) {
  await setTimeout(randomDelay());

  return {
    ...context,
    company: {
      id: 'company-id',
      owner: context.userId,
      name: 'Company Name',
      status: 'active',
    }
  }
}

export async function isValidCaptcha(context) {
  await setTimeout(randomDelay());

   if (context.captchaString !== 'captcha-string') {
    throw new Error('Invalid captcha')
   }

   return {
    ...context,
    validCaptcha: true
   }
}

export async function isTrustedNetwork(context) {
  await setTimeout(randomDelay());

   if (context.ipAddress !== '1.1.1.1') {
    throw new Error('Invalid IP address')
   }

    return {
      ...context,
      trusted: true
    }
}

export async function validateAppVersion(context) {
  await setTimeout(randomDelay());

  if (context.version !== '1.0.0') {
    throw new Error('App version is not valid');
  }

  return {
    ...context,
  }
}

export async function authorizePendingSessionWithSameNetwork(context) {
  await setTimeout(randomDelay());

  if (context.userId !== 'user-id' || context.ipAddress !== '1.1.1.1') {
    throw new Error('Pending session is not valid');
  }

  return {
    ...context,
  }
}

export async function sendReportError(data) {
  await setTimeout(randomDelay());

  console.log(data);
}
