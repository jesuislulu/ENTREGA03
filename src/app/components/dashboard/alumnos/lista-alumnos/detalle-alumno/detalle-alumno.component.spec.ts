import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Alumno } from 'src/interfaces';
import { DetalleAlumnoComponent } from './detalle-alumno.component';

describe('DetalleAlumnoComponent', () => {
  let component: DetalleAlumnoComponent;
  let fixture: ComponentFixture<DetalleAlumnoComponent>;

  const activatedRouteMock = {
    snapshot: { params: { idAlumno: '1' } }
  };

  const alumnosServiceMock = {
    getAlumnoPorId: (id: number) => of({ id, nombre: 'Test' } as Alumno)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAlumnoComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: AlumnosService, useValue: alumnosServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load alumno', () => {
    expect(component.alumno).toEqual({ id: 1, nombre: 'Test' } as Alumno);
  });
});
