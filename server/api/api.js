import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import newRouter from './new-router.js';
const router = newRouter();

// Convert the module URL to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const routesPath = path.join(__dirname, 'routes');

/**
 * Function to autoload routes from a directory
 * @param {string} dir - The directory to load routes from
 * @param {string} basePath - The base path for the routes (default is an empty string)
 * This function reads the contents of the directory and loads each route file.
 * If a subdirectory is found, it recursively calls itself to load routes from that directory.
 * The base path is used to set the URL path for each route.
 * For example, if the base path is '/api', the routes will be loaded under the '/api' URL.
 */
async function autoloadRoutes(dir, basePath = '') {
  const files = await fs.promises.readdir(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = await fs.promises.stat(fullPath);

    if (stat.isDirectory()) {
      await autoloadRoutes(fullPath, `${basePath}/${file}`);
    } else if (file.endsWith('.js')) {
      const routeName = file.replace('.js', '');
      const parentDirName = path.basename(dir);

      // Skip creating a route if the file name matches the directory name
      if (routeName === parentDirName) {
        console.log(`Skipping route: ${basePath}/${routeName} (file name matches directory name)`);
        continue;
      }

      const route = await import(fullPath);
      const routePath = `${basePath}/${routeName}`;
      router.use(routePath, route.default || route);
      console.log(`Route loaded: api${routePath}`);
    }
  }
}

await autoloadRoutes(routesPath);
export default router;