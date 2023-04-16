module.exports = {
    async afterCreate(event) {
        const { result } = event;
        try {
            await strapi.plugins['email'].services.email.send({
                to: `contact@meetdemocracy.com`,
                subject: `New ticket from ${result.fullname}`,
                text: `Name: ${result.fullname}\nEmail: ${result.email}\nMessage: ${result.message}`
            })
        }
        catch(err){
            console.log(err);
        }
    }
}