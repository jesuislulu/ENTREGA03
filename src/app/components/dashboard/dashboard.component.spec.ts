import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    authService = jasmine.createSpyObj('AuthService', ['obtenerUsuarioAutenticado']);
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: AuthService,
          useValue: authService
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    authService.obtenerUsuarioAutenticado.and.returnValue(of({ email: 'test@example.com' }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set active link', () => {
    const link = { title: 'Alumnos' };
    component.setActiveLink(link);
    expect(component.activeLink).toEqual(link.title);
  });

  it('should log out', () => {
    spyOn(component['router'], 'navigate');
    component.logOut();
    expect(component['authService'].logOut).toHaveBeenCalled();
    expect(component['router'].navigate).toHaveBeenCalledWith(['/login']);
  });
});
