import {User} from '../models/user';

export class Article {
    id:number;

    title:string;

    description:string;

    image:string;

    url:string;

    sharer:User;
}