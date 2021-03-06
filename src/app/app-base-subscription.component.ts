import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({ template: '' })
export class BaseSubscriptionComponent implements OnDestroy {
  private readonly subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  protected addSubscription(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }
}
