import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Pages } from './pages';
import { Views } from './views';
import { Partials } from './partials';
import { AuiModules } from './aui.modules';

import { AppRoutingModule } from './app-routing.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// import { DynamicLoadModule } from 'wcm-template-manager-ng2';
import { DynamicLoadModule } from './components/dynamic/dynamic-load.module';
import { DataComponent } from './components/data/data.component';

// Redux
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, IAppState, INITIAL_STATE, LangActions } from './store';
// import thunk from 'redux-thunk';

// Services
import { ContentService } from './services/content.service';
import { ContentResolver } from './services/content.resolver';
import { MenuService } from './services/menu.service';

const DEVMODE = process.env.NODE_ENV === 'DEV';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    // tslint:disable-line max-line-length
    return new TranslateHttpLoader(http, 'http://localhost:4000/api/1.0.0/consumer-translations/download/public/a9543588-18d6-4527-99e3-36544456f560?lang=', '&type=json');
}

const dynamicComponents = [
    ...Pages,
    ...Views,
    ...Partials
];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        NgReduxModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        ...AuiModules,
        AppRoutingModule,
        DynamicLoadModule.forRoot(dynamicComponents)
    ],
    declarations: [
        AppComponent,
        DataComponent,
        ...Pages,
        ...Views,
        ...Partials
    ],
    providers: [
        ContentService,
        ContentResolver,
        MenuService,
        LangActions
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
        public appRef: ApplicationRef,
        private ngRedux: NgRedux<IAppState>,
        private devTools: DevToolsExtension
    ) {
        const enhancers = DEVMODE && devTools.isEnabled() ? [ devTools.enhancer() ] : [];
        this.ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
    }
}
