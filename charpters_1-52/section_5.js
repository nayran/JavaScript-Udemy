let x;

let user = 
{
    name: `nayran`,
    age: 22,
    email: `nayran@nayran.com`,
    location: [
        {
            local: `brazil`, 
            time: Math.random() * 100 
        },
        { 
            local: `italy`, 
            time: Math.random() * 50 
        }
    ],
    login: function()
    {
        console.log(`vai`);
    },
    logTry: function()
    {
        this.location.forEach(place => 
        {
            console.log(Math.round(place.time));
        });
    }
};

 user.logTry();

