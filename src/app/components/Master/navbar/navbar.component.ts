import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/master/Menu';
import { MenuService } from 'src/app/services/master/menu.service';
import { menuData } from 'src/app/data/Menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menus: Menu[];
  constructor(private service: MenuService) { }

  ngOnInit() {
    this.service.Get().subscribe(item => {
      this.menus = item;
      console.log(this.menus);
    });
  }

}
