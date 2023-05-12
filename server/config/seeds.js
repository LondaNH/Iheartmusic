const db = require('./connection');
const { User, Package, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'I think I like them' },
    { name: 'I really like them' },
    { name: 'Theyre gonna be around for a while' },
    { name: 'Im stuck with them' },
   
  ]);

  console.log('categories seeded');

  await Package.deleteMany();

  const products = await Package.insertMany([
    {
      name: 'I think I like them  2 days',
      description:
        'Still early? Not sure if youre feeling the vibe yet?  This package is perfect for you! Stroll hand-in-hand through the lush gardens, enjoy a candlelit dinner for two and wrap up the evening in our infinty pool! If things arent going so great there are emergency exits and buttons located throughout for your safety! This package includes accomodation in the luxury rooms and meals for the maximum of 2 persons. .',
      image: 'fresh1.jpg',
      category: categories[0]._id,
      price: 500.00,
      quantity: 20
    },
    {
      name: 'I think I like them  2 days',
      description:
      'Still early? Not sure if youre feeling the vibe yet?  This package is perfect for you! Stroll hand-in-hand through the lush gardens, enjoy a candlelit dinner for two and wrap up the evening in our infinty pool! If things arent going so great there are emergency exits and buttons located throughout for your safety! This package includes accomodation in the luxury rooms and meals for the maximum of 2 persons. .',
      image: 'fresh2.jpg',
      category: categories[0]._id,
      price: 500.00,
      quantity: 10
    },
    {
      name: 'I REALLY like them 5 days',
      category: categories[1]._id,
      description:
        'Finaly passed the awkward stage? Ready to COMMIT to an extended weekend? This package is for you! Weve got more than enough activities to keep you occupied for an extended amount of time. This activities include, but are not limited toiwne tasting, mini golf, and dessert making!  This package includes accomodation in the luxury rooms and meals for the maximum of 2 persons,.',
      image: 'dating1.jpg',
      price: 1200.00,
      quantity: 10
    },
    {
      name: 'I REALLY like them 5 days',
      category: categories[1]._id,
      description:
      'Finaly passed the awkward stage? Ready to COMMIT to an extended weekend? This package is for you! Weve got more than enough activities to keep you occupied for an extended amount of time. This activities include, but are not limited toiwne tasting, mini golf, and dessert making!  This package includes accomodation in the luxury rooms and meals for the maximum of 2 persons,.',
      image: 'dating2.jpg',
      price: 800.00,
      quantity: 10
    },
    {
      name: 'Theyre gonna be around for a while 7 days ',
      category: categories[2]._id,
      description:
        'The I dos are done now its time for the fun! This is an ideal Honeymoon package! Enjoy all things couple! Couples massage, couples facial, and finish up with a couples dip in our infinity pool! Enjoy the ocean views with bae! This package includes accomodation in the luxury rooms and meals for the maximum of 2 persons,.',
      image: 'newly2.jpg',
      price: 2500.00,
      quantity: 5
    },
    {
      name: 'Theyre gonna be around for a while 7 days',
      category: categories[2]._id,
      description:
        'This package includes accomodation in the luxury rooms and meals for the maximum of 2 persons,.',
      image: 'newly1.jpg',
      price: 2500.00,
      quantity: 5
    },
    {
      name: 'Im stuck with them now 10 days',
      category: categories[3]._id,
      description:
        'Who says the flame is gone? Show your partner that they are still the one and the two! This package is for you! Youve stayed committed to the same face and now its time to reap in the rewards "getaway with bae style" Enjoy our gourmet dinners and sunset cruises. If youre feeling adventurous weve got something for that too! Book our romantic hot air balloon ride! This package includes accomodation in the luxury rooms and meals for the maximum of 2 persons,.', 
      image: 'stuck2.jpg',
      price: 3200.00,
      quantity: 5
    },
    {
      name: 'Im stuck with them now 10 days',
      category: categories[3]._id,
      description:
      'Who says the flame is gone? Show your partner that they are still the one and the two! This package is for you! Youve stayed committed to the same face and now its time to reap in the rewards "getaway with bae style" Enjoy our gourmet dinners and sunset cruises. If youre feeling adventurous weve got something for that too! Book our romantic hot air balloon ride! This package includes accomodation in the luxury rooms and meals for the maximum of 2 persons,.', 
      image: 'stuck1.jpg',
      price: 3200.00,
      quantity: 3
    },
  
  ]);
  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Londa',
    lastName: 'Test',
    email: 'londa@testmail.com',
    password: 'password5256632',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Kaloni',
    lastName: 'Test',
    email: 'kaloni@testmail.com',
    password: 'password5256632'  
  });

  console.log('users seeded');

  process.exit();
});