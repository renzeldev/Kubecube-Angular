import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationSettingsComponent } from './translation-settings.component';

describe('TranslationSettingsComponent', () => {
  let component: TranslationSettingsComponent;
  let fixture: ComponentFixture<TranslationSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
