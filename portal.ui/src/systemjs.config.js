/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
	transpiler: 'typescript',
	//typescript compiler options
	typescriptOptions: {
	  emitDecoratorMetadata: true
	},
    paths: {
      'npm:': 'node_modules/',
      "ng2-translate/ng2-translate":"node_modules/ng2-translate/bundles/ng2-translate.umd.js"
    },
    map: {
      app: 'app',
      'ng2-translate': 'npm:ng2-translate/bundles/ng2-translate.umd.js',
      'ng2-page-scroll/ng2-page-scroll': 'npm:ng2-page-scroll/bundles/ng2-page-scroll.umd.js',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'primeng':                   'npm:primeng',
      'typescript': 'npm:typescript@2.0.2/lib/typescript.js',
      'ng2-page-scroll/ng2-page-scroll': 'npm:ng2-page-scroll/bundles/ng2-page-scroll.umd.js',
      '@ng-idle/core': 'npm:@ng-idle/core/bundles/core.umd.js',
      '@ng-idle/keepalive': 'npm:@ng-idle/keepalive/bundles/keepalive.umd.js',
      'moment': 'npm:moment',
      'angular2-moment': 'npm:angular2-moment'
    },
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      primeng: {
          defaultExtension: 'js'
      },
      'ng2-translate': {
          defaultExtension: 'js'
      },
      'ng2-page-scroll': {
          defaultExtension: 'js'
      },
      'moment': {
          main: './moment.js',
          defaultExtension: 'js'
      },
      'angular2-moment': {
          main: './index.js',
          defaultExtension: 'js'
      }
    }
  });
})(this);