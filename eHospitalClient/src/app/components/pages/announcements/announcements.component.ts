import { Component, OnInit } from '@angular/core';
import { BreadcrumpComponent } from "../../layout/shared/breadcrump/breadcrump.component";
import { TableComponent } from "../../layout/shared/table/table.component";
import { TitleService } from '../../../services/title.service';

@Component({
    selector: 'app-announcements',
    standalone: true,
    templateUrl: './announcements.component.html',
    styleUrl: './announcements.component.css',
    imports: [BreadcrumpComponent, TableComponent]
})
export class AnnouncementsComponent implements OnInit{

    constructor(private title: TitleService) { }

    ngOnInit(): void {
      this.title.setPageTitle('Announcements');
    }
}