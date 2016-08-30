import {User} from '../models/user';

export class Article {
    public id:number;

    public title:string;

    public description:string;

    public image:string;

    public url:string;

    public sharer:User;
}