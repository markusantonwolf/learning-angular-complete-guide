import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appUnless]',
})
export class UnlessDirective {
    @Input('appUnless') set unless(condition: boolean) {
        if (!condition) {
            this.view.createEmbeddedView(this.template);
        } else {
            this.view.clear();
        }
    }
    constructor(
        private template: TemplateRef<any>,
        private view: ViewContainerRef
    ) {}
}
