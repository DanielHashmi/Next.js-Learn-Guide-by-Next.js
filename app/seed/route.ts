// import bcrypt from 'bcrypt';
// import { db } from '@vercel/postgres';
// import { invoices, customers, revenue, users } from '../lib/placeholder-data';

// async function seedDatabase() {
//   const client = await db.connect();

//   try {
//     await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//     // Users Table
//     await client.sql`
//       CREATE TABLE IF NOT EXISTS users (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email TEXT NOT NULL UNIQUE,
//         password TEXT NOT NULL
//       );
//     `;
//     await Promise.all(
//       users.map(async (user) => {
//         const hashedPassword = await bcrypt.hash(user.password, 10);
//         return client.sql`
//           INSERT INTO users (id, name, email, password)
//           VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
//           ON CONFLICT (id) DO NOTHING;
//         `;
//       })
//     );

//     // Customers Table
//     await client.sql`
//       CREATE TABLE IF NOT EXISTS customers (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         email VARCHAR(255) NOT NULL,
//         image_url VARCHAR(255) NOT NULL
//       );
//     `;
//     await Promise.all(
//       customers.map((customer) =>
//         client.sql`
//           INSERT INTO customers (id, name, email, image_url)
//           VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
//           ON CONFLICT (id) DO NOTHING;
//         `
//       )
//     );

//     // Invoices Table
//     await client.sql`
//       CREATE TABLE IF NOT EXISTS invoices (
//         id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//         customer_id UUID NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
//         amount INT NOT NULL,
//         status VARCHAR(255) NOT NULL,
//         date DATE NOT NULL
//       );
//     `;
//     await Promise.all(
//       invoices.map((invoice) =>
//         client.sql`
//           INSERT INTO invoices (customer_id, amount, status, date)
//           VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
//           ON CONFLICT (id) DO NOTHING;
//         `
//       )
//     );

//     // Revenue Table
//     await client.sql`
//       CREATE TABLE IF NOT EXISTS revenue (
//         month VARCHAR(4) NOT NULL UNIQUE,
//         revenue INT NOT NULL
//       );
//     `;
//     await Promise.all(
//       revenue.map((rev) =>
//         client.sql`
//           INSERT INTO revenue (month, revenue)
//           VALUES (${rev.month}, ${rev.revenue})
//           ON CONFLICT (month) DO NOTHING;
//         `
//       )
//     );

//     return { message: 'Database seeded successfully' };
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new Error(`Seeding failed: ${error.message}`);
//     } else {
//       throw new Error('Seeding failed: Unknown error');
//     }
//   } finally {
//     client.release();
//   }
// }

export async function GET() {
  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  });
  // try {
  //   const result = await seedDatabase();
  //   return Response.json(result);
  // } catch (error) {
  //   const errorMessage = error instanceof Error ? error.message : 'Unknown error';
  //   return Response.json({ error: errorMessage }, { status: 500 });
  // }
}
