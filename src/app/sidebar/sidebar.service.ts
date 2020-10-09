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
          title: 'Dashboard 1'
        },
        {
          title: 'Dashboard 2'
        },
        {
          title: 'Dashboard 3'
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
          routerLinkVariable: '/employee/create'
        },
        {
          title: 'Danh sách nhân viên',
          routerLinkVariable: '/employee'
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
          routerLinkVariable: '/log'
        },
        {
          title: 'Lịch sử truy nhập trái phép',
          routerLinkVariable: '/loginvalid'
        }
      ]
    },
    {
      title: 'Extra',
      type: 'header'
    },
    {
      title: 'Hướng dẫn sử dụng',
      routerLinkVariable: '/help',
      icon: 'fa fa-book',
      active: false,
      type: 'simple'
    },
    {
      title: 'Liên hệ',
      routerLinkVariable: '/contact',
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
