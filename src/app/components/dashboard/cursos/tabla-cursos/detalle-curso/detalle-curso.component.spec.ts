import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Curso } from 'src/interfaces';
import { CursosService } from 'src/app/services/cursos.service';


describe('CursosService', () => {
  let mockCursosService: jasmine.SpyObj<CursosService>;

  beforeEach(() => {
    const cursosServiceSpy = jasmine.createSpyObj('CursosService', ['getCursos', 'getCursoPorId']);

    TestBed.configureTestingModule({
      providers: [
        { provide: CursosService, useValue: cursosServiceSpy }
      ]
    });

    mockCursosService = TestBed.inject(CursosService) as jasmine.SpyObj<CursosService>;
  });

  it('should be created', () => {
    expect(mockCursosService).toBeTruthy();
  });

  it('should return cursos', () => {
    const mockCursos: Curso[] = [
      { id: 1, nombre: 'Javascript', docente: 'Juan Perez', duracion: 3 },
      { id: 2, nombre: 'Angular', docente: 'Maria Gomez', duracion: 4 },
      { id: 3, nombre: 'Vue', docente: 'Pedro Rodriguez', duracion: 5 }
    ];

    mockCursosService.getCursos.and.returnValue(of(mockCursos));

    mockCursosService.getCursos().subscribe((cursos) => {
      expect(cursos).toEqual(mockCursos);
    });
  });

  it('should return a curso by id', () => {
    const mockCurso: Curso = { id: 1, nombre: 'Javascript', docente: 'Juan Perez', duracion: 3 };

    mockCursosService.getCursoPorId.and.returnValue(of(mockCurso));

    mockCursosService.getCursoPorId(1).subscribe((curso) => {
      expect(curso).toEqual(mockCurso);
    });
  });
});
