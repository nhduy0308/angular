import { Menu } from '../models/master/Menu';

export const menuData: Menu[] = [
    {
        id: '1',
        url: '/',
        text: 'Home',
        children: null
    },
    {
        id: '2',
        url: '#',
        text: 'Games',
        children: [
            {
                id: '3',
                url: '/games',
                text: 'Games',
                children: null
            },
            {
                id: '4',
                url: '/games/detail',
                text: 'Games detai',
                children: null
            }
        ]
    }

]
