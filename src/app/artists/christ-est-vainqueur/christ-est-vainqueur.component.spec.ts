import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChristEstVainqueurComponent } from './christ-est-vainqueur.component';

describe('ChristEstVainqueurComponent', () => {
  let component: ChristEstVainqueurComponent;
  let fixture: ComponentFixture<ChristEstVainqueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChristEstVainqueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChristEstVainqueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
