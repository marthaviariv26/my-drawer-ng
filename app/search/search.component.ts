import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NoticiasService } from "../domain/noticia.service";

@Component({
    selector: "Search",//nombre del TAG
    moduleId: module.id,
    templateUrl: "./search.component.html"/*,
    providers:[NoticiasService]*/
})
export class SearchComponent implements OnInit {

    constructor(private noticias: NoticiasService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        //evento de angular
        /*console.log("prueba");
        console.log({nombre: {nombre: {nombre:{nombre:"martha"}}}});
        console.dir({nombre: {nombre: {nombre:{nombre:"martha"}}}});//muestra un poco mas de info
        console.log([1,2,3]);
        console.dir([4,5,6]);*/
        this.noticias.agregar("hola");
        this.noticias.agregar("hola 2");
        this.noticias.agregar("hola 3");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
