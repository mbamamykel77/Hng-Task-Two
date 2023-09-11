import Joi from "joi";

export const userValidator = Joi.object({
    name: Joi.string().required(),
});