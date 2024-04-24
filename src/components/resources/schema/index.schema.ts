import Joi from "joi";

export const promps = {
    id:Joi.string(),
    user:Joi.string(),
    title:Joi.string(),
    description:Joi.string(),
    image:Joi.string(),
}

export const getResourceSchema = Joi.object({
    id:promps.id.required(),
});

export const createResourceSchema = Joi.object({
    user:promps.user,
    title:promps.title,
    description:promps.description,
    image:promps.image    
});

export const updateResourceSchema = Joi.object({
    title:promps.title,
    description:promps.description,
    image: promps.image,
});

