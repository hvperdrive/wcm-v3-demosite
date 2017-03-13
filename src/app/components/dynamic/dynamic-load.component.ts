import { Component, ViewContainerRef, ComponentFactoryResolver, OnChanges, OnDestroy, Input, Inject } from '@angular/core';
import { DynamicLoadService } from './dynamic-load.service';

@Component({
    selector: 'app-dynamic-load',
    template: '',
    styles:  [':host { display: block; }']
})
export class DynamicLoadComponent implements OnChanges, OnDestroy {
    @Input()
    componentData: any;
    @Input()
    partial = false;

    private currentComponent: any;

    constructor(
        // The 'ViewContainerRef' has the 'createComponent()' function we need to get the Component in our DOM
        @Inject(ViewContainerRef) private vcr,
        // The 'ComponentFactoryResolver' gets the component out of the ComponentFactory
        // This can only be done using the component's name
        @Inject(ComponentFactoryResolver) private cfr,
        // That's where our DynamicLoadService steps in
        // Thanks to the 'ENTRIES' we injected in it
        // .getComponents() now returns an array of all the components that we passed into the 'dynamic-load.module'
        @Inject(DynamicLoadService) private dynamicLoadService
    ) {}

    ngOnChanges() {
        // First, if a component is already loaded, we keep track of it in 'this.currentComponent'
        // This way we can destroy it before loading a new one
        if (typeof this.currentComponent !== 'undefined') { this.currentComponent.destroy(); }

        const   availableComponents = this.dynamicLoadService.getComponents(),
                selectors = [],
                selectedComponent = '';

        // First we devide the componentData to create a couple scenarios
        if (this.componentData.err !== null && this.componentData.hasOwnProperty('viewReference')) {
            // The first one is if we have data for a 'view'
            // tslint:disable max-line-length
            if (typeof this.componentData.title !== 'undefined') { selectors.push('view-' + this.componentData.title.toLowerCase()); }
            if (typeof this.componentData.viewReference !== 'undefined') { selectors.push('view-' + this.componentData.viewReference); }
            if (typeof this.componentData.contentType !== 'undefined') { selectors.push('view-' + this.componentData.contentType.toLowerCase()); }
            // tslint:enable max-line-length
            selectors.push('view');
        } else if (this.componentData.err !== null && this.partial) {
            // The second one is if we have data for 'partial'
            // tslint:disable max-line-length
            if (typeof this.componentData.meta.safeLabel !== 'undefined') { selectors.push('partial-' + this.componentData.meta.safeLabel); }
            if (typeof this.componentData.meta.contentType !== 'undefined') { selectors.push('partial-' + this.componentData.meta.contentType); }
            // tslint:enable max-line-length
            selectors.push('content');
        } else if (this.componentData.err !== null && this.componentData.meta.hasOwnProperty('contentType')) {
            // The third one is if we have data for 'content'
            // tslint:disable max-line-length
            if (typeof this.componentData.meta.slug !== 'undefined') { selectors.push('content-' + this.componentData.meta.slug); }
            if (typeof this.componentData.meta.safeLabel !== 'undefined') { selectors.push('content-' + this.componentData.meta.safeLabel); }
            if (typeof this.componentData.meta.contentType !== 'undefined') { selectors.push('content-' + this.componentData.meta.contentType); }
            // tslint:enable max-line-length
            selectors.push('content');
        } else {
            // If it's none of the above, it's data we can't process so we just return false
            console.log('nothing to process');
            return false;
        }

        // If the previous step provided us with selectors we will now cross-reference them with the selector provided in the component
        // This selector needs to be provided through the 'Dynamic' class (see dynamic.ts)
        if (selectors.length > 0) {
            let component;
            // Loop through the selectors
            for ( let i = 0; i < selectors.length; i++ ) {
                // Check if any of the options can be found in the availableComponents
                component = availableComponents.find((comp) => comp.selectComponent.selector.toLowerCase() === selectors[i]);
                // If a usable component is found, break the for-loop
                if (typeof component !== 'undefined') { break; }
            }

            if (typeof component !== 'undefined') {
                // Based on what we retrieved in the previous step we now get the component out of the ComponentFactory
                const compFactory = this.cfr.resolveComponentFactory(component);
                // Using the above we now use the 'ViewContainerRef' to get the Component in our DOM
                // We also store the component in our 'currentComponent' if we need to destroy it.
                this.currentComponent = this.vcr.createComponent(compFactory);
                // Lastly we pass the resolved data to the component
                this.currentComponent.instance.data = this.componentData;
            } else {
                console.log('there was no component found');
            }
        }
    }

    ngOnDestroy() {
        if (typeof this.currentComponent !== 'undefined') { this.currentComponent.destroy(); }
    }
}
