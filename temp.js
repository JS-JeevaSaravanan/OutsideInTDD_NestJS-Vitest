
import { moviesTable } from './src/drizzle/schema.ts'; 
import { db } from './src/drizzle/db.ts';



async function main() {
    const allMovies = await db.select().from(moviesTable).execute();
    console.log(allMovies);
}

main();