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
    user:promps.user.required(),
    title:promps.title.required(),
    description:promps.description.required(),
    image:promps.image.required(),    
});

export const updateResourceSchema = Joi.object({
    title:promps.title,
    description:promps.description,
    image: promps.image,
});

