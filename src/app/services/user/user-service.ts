import {Injectable} from '@angular/core';

export class User {
    constructor(
        public id: string,
        public name: string,
        public imgUrl: string,
        public email: string,
        public groups: string[]
    ) {}
}

@Injectable()
export class UserService {
    getUsers(): User[] {
        return users.map(u => new User(u.id, u.name, u.imgUrl, u.email, u.groups));
      }
    getUserById(userId: string): User {
        return users.find(u => u.id === userId);
      }
}

const users = [
    {
        'id': 'tyler_aaron.mindt',
        'name': 'Aaron Mindt',
        'imgUrl': 'http://placehold.it/150',
        'email': 'aaron.mindt@tylertechnologies.com',
        'groups': ['tyler']
    },
    {
        'id': 'tyler_thomas.lees',
        'name': 'Thomas Lees',
        'imgUrl': 'http://placehold.it/150',
        'email': 'thomas.lees@tylertechnologies.com',
        'groups': ['tyler']
    },
    {
        'id': 'rmconnell',
        'name': 'Ross McConnell',
        'imgUrl': 'http://placehold.it/150',
        'email': 'rossBoi@cs.colostate.edu',
        'groups': ['web_users', 'admin']
    },
    {
        'id': 'bdraper',
        'name': 'Bruce Draper',
        'imgUrl': 'http://placehold.it/150',
        'email': 'official_draped_god@cs.colostate.edu',
        'groups': ['public-users', 'public_web_users']
    },
    {
        'id': 'rwakefield',
        'name': 'Russ Wakefield',
        'imgUrl': 'http://placehold.it/150',
        'email': 'sony_wakeman@cs.colostate.edu',
        'groups': ['hype_users', 'web_beast_users']
    }

];

