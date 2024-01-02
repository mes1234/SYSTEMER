import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { ContentSummaryComponent } from './content-summary.component';

describe('ContentSummaryComponent', () => {
  let component: ContentSummaryComponent;
  let fixture: ComponentFixture<ContentSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentSummaryComponent, MatCardModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContentSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
