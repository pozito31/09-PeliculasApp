import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostergridComponent } from './postergrid.component';

describe('PostergridComponent', () => {
  let component: PostergridComponent;
  let fixture: ComponentFixture<PostergridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostergridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostergridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
