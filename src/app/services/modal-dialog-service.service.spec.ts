import { TestBed } from '@angular/core/testing';

import { ModalDialogServiceService } from './modal-dialog.service';

describe('ModalDialogServiceService', () => {
  let service: ModalDialogServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalDialogServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
