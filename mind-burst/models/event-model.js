
// event models
{
    title: String,

    topic: String,

    location: [String],

    time: Date,

    attendance: {
        // each properties refers to a list of user ids
        yes: [Number],

        no: [Number],

        maybe: [Number]
    },

    event_id: Number

}



// User model
{

    name: String,

    user_id: Number,

    location: [String],

    // a list of event_ids
    events: [Number]

}