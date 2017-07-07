"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var players = [
            { id: 0, name: 'Zero' },
            { id: 11, name: 'Cristiano Ronaldo' },
            { id: 12, name: 'Lionell Messi' },
            { id: 13, name: 'Neymar' },
            { id: 14, name: 'Luka Modrić' },
            { id: 15, name: 'Sergio Ramos' },
            { id: 16, name: 'Zlatan Ibrahimović' },
            { id: 17, name: 'Toni Kroos' },
            { id: 18, name: 'Arjen Robben' },
            { id: 19, name: 'Ivan Rakitić' },
            { id: 20, name: 'Gianluigi Buffon' }
        ];
        return { players: players };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map