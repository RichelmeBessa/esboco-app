import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'dashboard';

  opened = true;

  mode = 'side';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.down();
  }

  SideBarToggler() {
    this.opened = !this.opened;
  }

  @HostListener('window:resize')
  down() {
    if (window.innerWidth < 768) {
      this.mode = 'over';
      this.opened = false;
    } else {
      this.mode = 'side';
    }
  }

  navigate(url: string) {
    if (this.mode === 'over') {
      this.opened = false;
    }
    this.router.navigate([url]);
  }
}


