import { Context } from 'src/dbContext/context';
import { IRecipeRepository } from '../recepe_application/repositories/iRecepeRepository';
import { RecipeQueryResultDto } from '../recepe_application/query/recepeQueryResultDto';
import { IRecipe } from '../recepe_domain/model/recepeEntity';

export class RecipeRepository implements IRecipeRepository {
  private readonly _db: Context;
  private recipe: IRecipe[];

  constructor(db: Context, recipe: IRecipe[]) {
    this._db = db;
    this.recipe = recipe;
  }
  getAll(): RecipeQueryResultDto {
    const recipeEntity = this.recipe;
    
    recipeEntity.map(entity => {
      return { 
        id: entity.id, 
        name: entity.name, 
        description: entity.description, 
        ingredients:entity.ingredients, 
        instructions:entity.instructions, 
        nutritionalInformation:entity.nutritionalInformation, 
        category:entity.category }
    })
    throw new Error('Method not implemented.');
    //return new RecipeQueryResultDto(recipeEntity);
  }
  update(recepe: IRecipe): void {
    this.update(recepe);

    //this._db.SaveChanges();
    throw new Error('Recipe could not be updated in teh db');
  }

  add(recipe: IRecipe) {
    this.add(recipe);
  }

  load(id: number): IRecipe {
    throw new Error('Method not implemented.');
  }

  get(id: number): RecipeQueryResultDto {
    //find recipe der matcher givne id
    const recipeEntity = this.recipe.find((recipe) => recipe.id === id);
    //hvis der ikke kan findes en recipe med givne id, send da en error message
    if (!recipeEntity) {
      throw console.error('recipe does not exist');
    }
    //hvis id fundet, konverter da recepe til dto
    return new RecipeQueryResultDto(recipeEntity);

    // const recipeDto : RecipeQueryResultDto = new RecipeQueryResultDto({
    //   description: '',
    //   id: 42,
    //   ingredients: [],
    //   instructions: '',
    //   name: '',
    //   nutritionalInformation: '',
    // });
  }
}
