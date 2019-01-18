export class Index {
    configureRouter(config, router) {
        config.map([
            { route: ['', 'list'], moduleId: './list', name: 'list', nav: true, title: 'List: Master Tipe Material' },
            { route: 'view/:id', moduleId: './view', name: 'view', nav: false, title: 'View: Master Tipe Material' },
            { route: 'edit/:id', moduleId: './edit', name: 'edit', nav: false, title: 'Edit: Master Tipe Material' },
            { route: 'create', moduleId: './create', name: 'create', nav: false, title: 'Create: Master Tipe Material' }
            // { route: 'upload', moduleId: './upload', name: 'upload', nav: false, title: 'Upload: Master Tipe Material' }
        ]);
    }
}
