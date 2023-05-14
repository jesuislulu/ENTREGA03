import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { TablaCursosPorIdAlumnoComponent } from './tabla-cursos-por-id-alumno.component';

describe('TablaCursosPorIdAlumnoComponent', () => {
    let component: TablaCursosPorIdAlumnoComponent;
    let fixture: ComponentFixture<TablaCursosPorIdAlumnoComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ TablaCursosPorIdAlumnoComponent ],
        providers: [
          { provide: MatDialogRef, useValue: {} },
          { provide: Router, useValue: {} },
          { provide: ActivatedRoute, useValue: {} },
        ],
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(TablaCursosPorIdAlumnoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  