import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentaryResourcesComponent } from './documentary-resources.component';

describe('DocumentaryResourcesComponent', () => {
  let component: DocumentaryResourcesComponent;
  let fixture: ComponentFixture<DocumentaryResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentaryResourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentaryResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
