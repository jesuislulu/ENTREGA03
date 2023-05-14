import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { FormAbmAlumnosComponent } from './form-abm-alumnos.component';
import { Alumno } from 'src/interfaces/alumno';

describe('FormAbmAlumnosComponent', () => {
    let component: FormAbmAlumnosComponent;
    let fixture: ComponentFixture<FormAbmAlumnosComponent>;
  
    const dialogRefMock = {
      close: () => {},
    };
    const dataMock = {
        alumno: {
          id: 1,
          nombre: 'Juan',
          apellido: 'Pérez',
          email: 'juanperez@gmail.com',
          dni: 12345678,
          telefono: 55555555,
          cursos: ['Javascript'],
        } as Alumno,
      };    
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
        declarations: [FormAbmAlumnosComponent],
        providers: [
          { provide: MatDialogRef, useValue: dialogRefMock },
          { provide: MAT_DIALOG_DATA, useValue: dataMock },
        ],
      }).compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(FormAbmAlumnosComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  