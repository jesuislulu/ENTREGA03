import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from 'src/interfaces';
import { Observable, Subject, Subscription } from 'rxjs';
import links from './nav-items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {

  links = links;

  showFiller = false;

  authUserObs$: Observable<Usuario | null>

  suscripcionAuthUser: Subscription | null = null;

  destrodyed$ = new Subject<void>();

  activeLink: string | null = null;

  constructor(private authService: AuthService,
    private router: Router
  ) {
    this.authUserObs$ = this.authService.obtenerUsuarioAutenticado();
  }

  // para evitar usar espacio de la Mem RAM guardamos el auth en una variable

  setActiveLink(link: any) {
    this.activeLink = link.title;
  }

  logOut(): void {
    this.authService.logOut();
  }

}

