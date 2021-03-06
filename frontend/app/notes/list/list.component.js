"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var notes_service_1 = require("../notes.service");
var create_component_1 = require("../create/create.component");
var NotesListComponent = (function () {
    function NotesListComponent(noteService) {
        this.noteService = noteService;
    }
    NotesListComponent.prototype.getNotes = function () {
        var _this = this;
        this.noteService.getNotes()
            .subscribe(function (notes) { return _this.notes = notes; }, function (error) { return _this.errorMessage = error; });
    };
    NotesListComponent.prototype.ngOnInit = function () {
        this.getNotes();
    };
    NotesListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sn-notes',
            templateUrl: 'list.component.html',
            styleUrls: ['list.component.css'],
            directives: [create_component_1.CreateNoteComponent]
        }), 
        __metadata('design:paramtypes', [notes_service_1.NoteService])
    ], NotesListComponent);
    return NotesListComponent;
}());
exports.NotesListComponent = NotesListComponent;
//# sourceMappingURL=list.component.js.map