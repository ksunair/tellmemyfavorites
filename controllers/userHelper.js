exports.getAllUsers = function (req, res) {
    users = [
        {
            'name': 'unni',
            'age': 19,
            'state': 'TN'
        },
        {
            'name': 'Neha',
            'age': 29,
            'state': "KN"
        },
        {
            'name': 'Alpa',
            'age': 19,
            'state': "GJ"
        },
        {
            'name': 'Baskar',
            'age': 21,
            'state': 'TN'
        },
        {
            'name': 'Manasa',
            'age': 31,
            'state': 'TG'
        }
    ];
    res.json(users);
};