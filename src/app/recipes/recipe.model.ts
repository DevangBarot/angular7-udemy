import { Ingrediant } from '../shared/ingredient.model';

export class Recipe{
    public name: String;
    public description: String;
    public imagePath: String;     
    public ingrediants: Ingrediant[];

    constructor(name: String ,desc: String ,imagePath: String, ingrediants: Ingrediant[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingrediants = ingrediants;
    }
}