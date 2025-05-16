const users = [
    {
        name: "Mudasir",
        role: "admin",
    },
    {
        name: "Mubashir",
        role: "seller",
    },
    {
        name: "Muammir",
        role: "seller",
    },
    {
        name: "Ahmad",
        role: "buyer",
    },
    {
        name: "Mehboob",
        role: "buyer",
    },
    {
        name: "Aqib",
        role: "buyer",
    },
];

const groupUsers = Object.groupBy(users, ({ role }) => role);
console.log(groupUsers);

/*
we will get data in this formate
{
    "admin": [
        {
            "name": "Mudasir",
            "role": "admin"
        }
    ],
        "seller": [
            {
                "name": "Mubashir",
                "role": "seller"
            },
            {
                "name": "Muammir",
                "role": "seller"
            }
        ],
            "buyer": [
                {
                    "name": "Ahmad",
                    "role": "buyer"
                },
                {
                    "name": "Mehboob",
                    "role": "buyer"
                },
                {
                    "name": "Aqib",
                    "role": "buyer"
                }
            ]
}
*/