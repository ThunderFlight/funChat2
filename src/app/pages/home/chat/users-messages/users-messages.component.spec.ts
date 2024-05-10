import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMessagesComponent } from './users-messages.component';

describe('UsersMessagesComponent', () => {
  let component: UsersMessagesComponent;
  let fixture: ComponentFixture<UsersMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersMessagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
