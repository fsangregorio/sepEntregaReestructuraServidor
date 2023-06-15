

import mongoosePaginate from "mongoose-paginate-v2";
import { Schema, model } from "mongoose";

const roleSchema = new Schema({
  name: { type: Schema.Types.String, required: true },
  permissions: [{ type: Schema.Types.String }],
});

roleSchema.plugin(mongoosePaginate);

const Role = model("Role", roleSchema);

export { Role };
