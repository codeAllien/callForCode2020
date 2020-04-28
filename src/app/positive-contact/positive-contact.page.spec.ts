import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PositiveContactPage } from './positive-contact.page';

describe('PositiveContactPage', () => {
  let component: PositiveContactPage;
  let fixture: ComponentFixture<PositiveContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositiveContactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PositiveContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
