import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPaperComponent } from './content-paper.component';

describe('ContentPaperComponent', () => {
  let component: ContentPaperComponent;
  let fixture: ComponentFixture<ContentPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentPaperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
