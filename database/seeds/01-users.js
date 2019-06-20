
exports.seed = function(knex, Promise) {
      return knex('users').insert([
        {username: 'Shannon', password: 'shannonpassword' , department: 'Web19'},
        {username: 'Tatum', password: 'tatumpassword' , department: 'Web18'},
        {username: 'Keya', password: 'keyapassword' , department: 'Web17'}
      ]);
};
