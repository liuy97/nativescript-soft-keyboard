import { Component, OnInit } from "@angular/core";
import { registerSoftKeyboardCallback } from "nativescript-soft-keyboard";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    ngOnInit() {
        registerSoftKeyboardCallback((h) => console.log(h));
    }

}
