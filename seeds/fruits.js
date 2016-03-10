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
    	 description: 'Orange flavored like something that is fanta. Sweet after taste, with a tasty vitimin c kick. "Squish," the onomatopoeia of delectable deliciousness which is an orange.',
         image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg',
    	 outofstock: false
    	}),
    knex('fruits').insert(
        {
         name: 'Tangerine',
         price: 8.23,
         rating: 5,
         description: 'Tangy like something that is pretty tangy. Almost tastes like an orange. Sweet after taste, with a sweet intensity. "Squish," the onomatopoeia of delectable deliciousness which is this Tangerine. Live the dream, dream the Tang.',
         image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg',
         outofstock: false
        }),
    knex('fruits').insert(
        {
         name: 'Manderine',
         price: 0.23,
         rating: 5,
         description: 'Sometimes you really have to think, why the hell are there so many different types of oranges... they all taste fairly similar. But then you remember, you never complained about how many types of apples there are... so SHUT the BONKERS up!',
         image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg',
         outofstock: false
        }),
    knex('fruits').insert(
        {
         name: 'Satsuma',
         price: 1.01,
         rating: 5,
         description: 'Sweet like something that is sweet. Sweet after taste, with immediate sour intensity. "Squish," the onomatopoeia of delectable deliciousness which is this Satsuma.',
         image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg',
         outofstock: false
        }),
    knex('fruits').insert(
        {
         name: 'Grapefruit',
         price: 4.23,
         rating: 5,
         description: 'Tart like something that is kind of tart. Sweet after taste, with a slow, sour-ish, intensity. "Squish," the onomatopoeia of delectable deliciousness which is this Grapefruit.',
         image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Grapefruit-Whole-%26-Split.jpg',
         outofstock: false
        }),
    knex('fruits').insert(
        {
         name: 'Lemon',
         price: 0.99,
         rating: 2,
         description: 'Tart like something that is tart. Sweet after taste, with immediate sour intensity. "Squish," the onomatopoeia of delectable deliciousness which is the lemon.',
         image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Lemon-Whole-Split.jpg',
         outofstock: false
        }),
    knex('fruits').insert(
        {
         name: 'Lime',
         price: 4.23,
         rating: 2,
         description: 'Limey like something that is lime flavored. Bitter after taste, with immediate intensity of sourness. "Squish," the onomatopoeia of delectable deliciousness which is the Lime.',
         image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Lime-Whole-Split.jpg',
         outofstock: false
        }),
    knex('fruits').insert(
        {
         name: 'Clementine',
         price: 0.02,
         rating: 1,
         description: 'Sweet like something that is not tart. Light after taste, with immediate suculant intensity. "Squish," the onomatopoeia of delectable deliciousness which is NOT this Clementine, it sucks!',
         image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Citrus_unshiu_20101127_c.jpg',
         outofstock: false
        })
  );
};
