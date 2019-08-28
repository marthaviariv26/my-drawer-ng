import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { usersRoutingModule } from "./users-routing.module";
import { usersComponent } from "./users.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        usersRoutingModule
    ],
    declarations: [
        usersComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class usersModule { }
