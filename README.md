### Lambda Function Boilerplate

This is a boilerplate for creating AWS Lambda functions using TypeScript and Prisma ORM.

---

### Setup:

- Install dependencies by running `npm install`.

- Configure the `schema.prisma` file with the tables you'll need to access in the database.

- Set up the `.env` file with the database URL for local testing.

- Run the command `npx prisma generate` to update dependencies in the node_modules directory.

---

### Development:

- Develop your code in the `index.ts` file.

- Upon completion, run the command `npm run build` to compile the code.

---

### Production Package:

- After compilation, a `.zip` file will be created in the `dist` folder, containing the compiled code with only production dependencies.

---

### Build Pipeline:

The build pipeline can be found in the `build.ts` file. This file contains the necessary steps to prepare the code for production. Here's an overview of the pipeline steps:

- **File Copying**: Necessary files are copied to the `dist` folder.

- **Start Script Configuration**: Start script in the `package.json` file are configured to ensure proper initialization of the Lambda function.

- **Dependency Installation**: Dependencies are installed in the dist folder using the `npm install --production` command.

- **Folder Compression**: The `src` folder within the `dist` folder is compressed into a `.zip` file.

This pipeline automates the process of preparing the code for deployment, ensuring that all dependencies and necessary files are included and configured correctly.

**Feel free to adjust the pipeline as needed to meet the specific requirements of your function**.
