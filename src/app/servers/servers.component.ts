import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
    new_server: string = '';
    servers: string[] = [
        'Test 1234',
        'Hallo welt'
    ];

    constructor() {}

    ngOnInit(): void {}

    addServer() {
        this.servers.push(this.new_server);
        this.new_server = '';
    }

    removeServer(server: string) {
        this.servers = this.servers.filter((item) => {
            return item != server;
        });
    }
}
