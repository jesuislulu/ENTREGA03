import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DocentesService } from 'src/app/services/docentes.service';
import { Docente } from 'src/interfaces/docente';

import { DetalleDocentesComponent } from './detalle-docentes.component';

describe('DetalleDocentesComponent', () => {
  let component: DetalleDocentesComponent;
  let fixture: ComponentFixture<DetalleDocentesComponent>;
  let docentesService: jasmine.SpyObj<DocentesService>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    docentesService = jasmine.createSpyObj('DocentesService', ['getDocentesPorId']);

    await TestBed.configureTestingModule({
      declarations: [ DetalleDocentesComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { params: { idDocente: '1' } } } },
        { provide: DocentesService, useValue: docentesService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get docente by id', () => {
    const docente: Docente = { id: 1, nombre: 'Juan', apellido: 'Pérez', curso: 'A' };
    docentesService.getDocentesPorId.and.returnValue(of(docente));

    component.ngOnInit();

    expect(component.docente).toEqual(docente);
    expect(docentesService.getDocentesPorId).toHaveBeenCalledWith(1);
  });
});
