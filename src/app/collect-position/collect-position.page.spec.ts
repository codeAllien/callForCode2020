import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CollectPositionPage } from './collect-position.page';

describe('CollectPositionPage', () => {
  let component: CollectPositionPage;
  let fixture: ComponentFixture<CollectPositionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectPositionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CollectPositionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
