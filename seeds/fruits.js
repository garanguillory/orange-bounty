exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('fruits').del(), 

    // Inserts seed entries
    knex('fruits').insert(
    	{
    	 name: 'Orange',
    	 price: 4.23,
    	 rating: 5,
    	 description: 'Deliciousness',
         image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg',
    	 outofstock: false
    	}),
    knex('fruits').insert(
        {
         name: 'Tangerine',
         price: 8.23,
         rating: 5,
         description: 'Deliciousness',
         image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg',
         outofstock: false
        }),
    knex('fruits').insert(
        {
         name: 'Manderine',
         price: 0.23,
         rating: 5,
         description: 'Deliciousness',
         image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg',
         outofstock: false
        }),
    knex('fruits').insert(
        {
         name: 'Satsuma',
         price: 1.01,
         rating: 5,
         description: 'Deliciousness',
         image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg',
         outofstock: false
        }),
    knex('fruits').insert(
        {
         name: 'Grapefruit',
         price: 4.23,
         rating: 5,
         description: 'Deliciousness',
         image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Grapefruit-Whole-%26-Split.jpg',
         outofstock: false
        }),
    knex('fruits').insert(
        {
         name: 'Lemon',
         price: 0.99,
         rating: 2,
         description: 'Deliciousness',
         image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Lemon-Whole-Split.jpg',
         outofstock: false
        }),
    knex('fruits').insert(
        {
         name: 'Lime',
         price: 4.23,
         rating: 2,
         description: 'Deliciousness',
         image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Lime-Whole-Split.jpg',
         outofstock: false
        }),
    knex('fruits').insert(
        {
         name: 'Satsuma',
         price: 0.99,
         rating: 4,
         description: 'Deliciousness',
         image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Citrus_unshiu_20101127_c.jpg',
         outofstock: false
        })
  );
};
