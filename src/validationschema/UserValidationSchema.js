const zod = require("zod");

const userValidationSchema = zod.object({
    name:zod.string().min(3,"min 3 char....").max(20,"max 20 char...."),
    age:zod.number().min(18).max(60),
    status:zod.boolean().default(true),
    hobbies:zod.array(zod.string()),
    bloodGroup:zod.enum(["A+","A-","B+","B-"]),
    email:zod.string().email(),
    password:zod.string().min(5).max(20),
    roleId:zod.string().optional()
})

module.exports = userValidationSchema
