import Joi from 'joi';


const id = Joi.string();
const username = Joi.string();
const password = Joi.string();


export const getUserSchema = Joi.object({
    id,
    username,
});

