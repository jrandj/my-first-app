import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AuthInterceptorService } from "./auth/auth-intercepter.service";
import { RecipeService } from "./recipes/recipe.service";
import { RecipeResolverService } from "./recipes/recipes-resolver.service";
import { DataStorageService } from "./shared/data-storage.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";


@NgModule({
    providers: [
        ShoppingListService,
        RecipeService,
        DataStorageService,
        RecipeResolverService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ]
})

export class CoreModule { }
