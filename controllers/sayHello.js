
module.exports = {
    post: async (ctx, next) => {
        ctx.body = { say: 'Hello' };
    }
};
