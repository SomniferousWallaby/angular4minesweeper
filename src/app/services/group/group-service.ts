import {Injectable} from '@angular/core';

export class Group {
    constructor(
        public id: string,
        public name: string,
        public permissions: string[]
    ) {}
}

@Injectable()
export class GroupService {
    getGroups(): Group[] {
        return groups.map(g => new Group(g.id, g.name, g.permissions));
      }
    getGroupById(groupId: string): Group {
        return groups.find(g => g.id === groupId);
      }
}

const groups = [
    {
        'id': 'tyler',
        'name': 'Tyler Persona',
        'permissions': ['tyler']
    },
    {
        'id': 'web_user',
        'name': 'Web User Persona',
        'permissions': ['web_stuff', 'web_payments']
    }
];
