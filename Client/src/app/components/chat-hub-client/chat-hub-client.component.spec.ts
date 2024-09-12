import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHubClientComponent } from './chat-hub-client.component';

describe('ChatHubClientComponent', () => {
  let component: ChatHubClientComponent;
  let fixture: ComponentFixture<ChatHubClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatHubClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatHubClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
