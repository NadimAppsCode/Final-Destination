import { TestBed } from '@angular/core/testing';

import { IonUtilitiesService } from './ion-utilities.service';

describe('IonUtilitiesService', () => {
  let service: IonUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
