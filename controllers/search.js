
module.exports = {
    get: async (ctx, next) => {
        const user = ctx.query.q;

        /*
         * https://api.github.com/users/${user}
         * https://api.github.com/users
         */
        await ctx.render('search', {
            result: 'The search query is: ' + user
        });
    }
};
