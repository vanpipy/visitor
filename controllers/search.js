
const model = require('../models/search');

module.exports = {
    get: async (ctx, next) => {
        const userexisted = model.getUser(ctx.query.q);

        /*
         * https://api.github.com/users/${user}
         * https://api.github.com/users
         */
        if (userexisted) {
            await ctx.render('search', {
                result: `The result is: ${JSON.stringify(userexisted)}`,
            });
        } else {
            await ctx.render('search', {
                result: 'The user you search is not exist.',
            });
        }

        await next();
    }
};
