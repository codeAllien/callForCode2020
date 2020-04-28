import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SymptomsModalPage } from './symptoms-modal.page';

describe('SymptomsModalPage', () => {
  let component: SymptomsModalPage;
  let fixture: ComponentFixture<SymptomsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SymptomsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
