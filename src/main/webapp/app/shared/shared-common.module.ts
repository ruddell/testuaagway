import { NgModule } from '@angular/core';

import { TestuaagwaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TestuaagwaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TestuaagwaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestuaagwaySharedCommonModule {}
