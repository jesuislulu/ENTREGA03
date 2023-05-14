import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlumnosComponent } from './alumnos.component';

describe('AlumnosComponent', () => {
  let component: AlumnosComponent;
  let fixture: ComponentFixture<AlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
