import { TestBed } from '@angular/core/testing';

import { EventBusService } from './eventbus.service';

describe('EventBusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventBusService = TestBed.get(EventBusService);
    expect(service).toBeTruthy();
  });
});
