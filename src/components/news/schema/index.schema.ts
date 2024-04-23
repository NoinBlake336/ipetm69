import Joi from "joi"


const promps = {
    id:Joi.string(),
    user:Joi.string(),
    title: Joi.string(),
    description: Joi.string(),
    image: Joi.string(),
    enlace: Joi.string(),
};



export const createNewsSchema = Joi.object({
    user: promps.user.required(),
    title: promps.title.required(),
    description: promps.description.required(),
    image: promps.image.required(),
    enlace: promps.enlace.required(),
});


export const getNewsSchema = Joi.object({
    id: promps.id.required()
})



export const updateNewsSchema = Joi.object({
    title:promps.title,
    description: promps.description,
    image: promps.image,
    enlace: promps.enlace
});


