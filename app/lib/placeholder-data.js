// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const gallerys = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    userId: users[0].id,
    title: 'untitle1',
    discription: 'discription1',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    userId: users[0].id,
    title: 'untitle2',
    discription: 'discription2',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    userId: users[0].id,
    title: 'untitle3',
    discription: 'discription3',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    userId: users[0].id,
    title: 'untitle4',
    discription: 'discription4',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    userId: users[0].id,
    title: 'untitle5',
    discription: 'discription5',
  },
];

module.exports = {
  users,
  gallerys,
};
