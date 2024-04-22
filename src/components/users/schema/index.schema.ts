import Joi from 'joi';


const id = Joi.string();
const username = Joi.string();
const password = Joi.string();


const getUserSchema = Joi.object({
    id:id.required(),
    username,
});

