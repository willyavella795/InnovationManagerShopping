import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '',
        title: 'Pagina Inicial',
        icon: 'icon-Car-Wheel',
        class: 'has-arrow',
        ddclass: '',
        extralink: false,
        submenu: [
            {
                path: '/dashboard/dashboard1',
                title: 'Empresas',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/dashboard/dashboard2',
                title: 'Actividad',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/dashboard/dashboard3',
                title: 'Equipos',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Facturador Web Sinergia',
        icon: 'icon-Box-withFolders',
        class: 'has-arrow',
        ddclass: '',
        extralink: false,
        submenu: [
            {
                path: '/fw-sinergia',
                title: 'Sinergia',
                icon: '',
                class: '',
                ddclass: '',
                extralink: false,
                submenu: []
            }
            
        ]
    }
];
