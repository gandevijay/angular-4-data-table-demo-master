import { Component } from '@angular/core';
import { RemoteService } from './data-table-demo1-remote-service';


@Component({
    selector: 'data-table-demo-1-remote',
    providers: [RemoteService],
    templateUrl: './data-table-demo1.html',
    styleUrls: ['./data-table-demo1.css']
})
export class DataTableDemo1Remote {

    items = [];
    itemCount = 0;

    constructor(private remoteService: RemoteService) {}

    reloadItems(params) {
        this.remoteService.query(params).then(result => {
            this.items = result.items;
            this.itemCount = result.count;
            console.log(result);
        });
    }
}
