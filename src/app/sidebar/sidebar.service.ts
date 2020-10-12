import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public routerLinkVariable = "";

  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'General',
      type: 'header'
    },
    {
      title: 'Dashboard',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Dashboard 1',
          routerLinkVariable: '/home/dashboard'
        }
      ]
    },
    {
      title: 'Quản lý nhân viên',
      icon: 'far fa-gem',
      active: false,
      type: 'dropdown',
      routerLinkVariable : '',
      submenus: [
        {
          title: 'Thêm mới nhân viên',
<<<<<<< HEAD
          routerLinkVariable: '/employee/create'
        },
        {
          title: 'Danh sách nhân viên',
          routerLinkVariable: '/employee'
=======
          routerLinkVariable: '/home/employee/create'
        },
        {
          title: 'Danh sách nhân viên',
          routerLinkVariable: '/home/employee'
>>>>>>> 0b56c2ca1c1e52db7c774c11907094d66dbe7b7b
        }
      ]
    },
    {
      title: 'Quản lý In/Out',
      icon: 'fa fa-chart-line',
      active: false,
      type: 'dropdown',
      routerLinkVariable : '',
      submenus: [
        {
          title: 'Lịch sử truy nhập',
          routerLinkVariable: '/home/log'
        },
        {
          title: 'Lịch sử truy nhập trái phép',
          routerLinkVariable: '/home/loginvalid'
        }
      ]
    },
    {
      title: 'Extra',
      type: 'header'
    },
    {
      title: 'Hướng dẫn sử dụng',
      routerLinkVariable: '/home/help',
      icon: 'fa fa-book',
      active: false,
      type: 'simple'
    },
    {
      title: 'Liên hệ',
      routerLinkVariable: '/home/contact',
      icon: 'fa fa-bell',
      active: false,
      type: 'simple'
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
