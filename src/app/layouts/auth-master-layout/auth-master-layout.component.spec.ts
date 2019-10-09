import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMasterLayoutComponent } from './auth-master-layout.component';

describe('AuthMasterLayoutComponent', () => {
  let component: AuthMasterLayoutComponent;
  let fixture: ComponentFixture<AuthMasterLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthMasterLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthMasterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
