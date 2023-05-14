import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAbmCursosComponent } from './form-abm-cursos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Curso } from 'src/interfaces';

describe('FormAbmCursosComponent', () => {
  let component: FormAbmCursosComponent;
  let fixture: ComponentFixture<FormAbmCursosComponent>;

  const dialogMock = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAbmCursosComponent],
      imports: [ReactiveFormsModule, BrowserAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: MAT_DIALOG_DATA, useValue: { curso: { id: 1, nombre: 'Angular', duracion: 3, docente: 'Juan Perez' } as Curso } }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAbmCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog when calling cerrarDialog', () => {
    component.cerrarDialog();
    expect(dialogMock.close).toHaveBeenCalled();
  });

  it('should close dialog with correct data when calling guardar', () => {
    const data = { id: 1, nombre: 'React', duracion: 2, docente: 'Ana Gomez' } as Curso;
    component.registerForm.setValue(data);
    component.guardar();
    expect(dialogMock.close).toHaveBeenCalledWith({ ...data, id: 1 });
  });

  it('should not close dialog when calling guardar with invalid form', () => {
    component.guardar();
    expect(dialogMock.close).not.toHaveBeenCalled();
  });

  it('should set form values from data', () => {
    expect(component.registerForm.value).toEqual({ nombre: 'Angular', duracion: 3, docente: 'Juan Perez' });
  });

});
