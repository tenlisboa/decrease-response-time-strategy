import { WebStrategy } from './strategies/webStrategy.js';
import { MobileStrategy } from './strategies/mobileStrategy.js';

export class AuditLoginIntent {
  async execute(input) {
    const appIdMapStrategy = {
      'come-from-web-id': new WebStrategy(),
      'come-from-mobile-id': new MobileStrategy()
    }

    const strategy = appIdMapStrategy[input.appId]

    if (!strategy) {
      throw new Error('Invalid appId')
    }

    await strategy.run(input)
  }
}
