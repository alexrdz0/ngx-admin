import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaSmartComponent } from './tabla-smart.component';

describe('TablaSmartComponent', () => {
  let component: TablaSmartComponent;
  let fixture: ComponentFixture<TablaSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
