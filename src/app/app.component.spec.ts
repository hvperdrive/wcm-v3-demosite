import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('App', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent],
            providers: [provideRoutes([])]
        });
    });

    it('should have an url', () => {
        let fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const debugElement = fixture.debugElement.query(By.css('nav a'));
        const nativeElement = debugElement.nativeElement;

        expect(nativeElement.textContent).toEqual('Home');
    });

});
