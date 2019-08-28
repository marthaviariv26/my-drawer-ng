// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
//punto de entrada

import { AppModule } from "./app/app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
