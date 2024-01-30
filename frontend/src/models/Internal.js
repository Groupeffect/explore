import { Model, useRepo } from "pinia-orm";
export default class Internal extends Model {
  // entity is a required property for all models.
  static entity = "internals";
  // List of all fields (schema) of the post model. `this.string()` declares
  // a string field type with a default value as the first argument.
  // `this.uid()` declares a unique id if none provided.
  static fields() {
    return {
      id: this.uid(),
      error: this.attr(),
      success: this.attr(false),
      tag: this.attr(),
      data: this.attr(),
    };
  }

  static loadCellularAutomataConfig(){
    
  }
}
