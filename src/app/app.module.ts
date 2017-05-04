// Angular
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';

// App
import { AppComponent } from './app.component';
import { Pages } from './pages';
import { Views } from './views';
import { Partials } from './partials';
import { Components } from './components';
import { AuiModules } from './aui.modules';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Translations
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Redux
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import thunk from 'redux-thunk';
import {
    StoreModule
} from './store';

// Dynamic Components
import { DynamicLoadModule } from 'wcm-template-manager-ng2';
// import { DynamicLoadModule } from './components/dynamic/dynamic-load.module';

// Services
import { ContentService } from './services/content.service';
import { ContentResolver } from './services/content.resolver';
import { MenuService } from './services/menu.service';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, '/translations/');
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
        StoreModule,
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
        ...Pages,
        ...Components,
        ...Views,
        ...Partials
    ],
    providers: [
        ContentService,
        ContentResolver,
        MenuService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
