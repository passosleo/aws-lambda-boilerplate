import { execSync } from "child_process";
import AdmZip from "adm-zip";
import fs from "fs-extra";
import path from "path";
import packageJson from "./package.json";
import tsConfig from "./tsconfig.json";

const distPath = tsConfig.compilerOptions.outDir;
const zipPath = "./dist/Arquivo Comprimido.zip";

function copyFiles(files: string[] = []) {
  console.log("Copying files to the dist folder...");
  fs.copySync("./prisma", `${distPath}/prisma`);
  files.forEach((file) => {
    fs.copySync(file, `${distPath}/${file}`);
  });
  console.log("Files copied successfully to the dist folder.");
}

function configureStartScript(command: string) {
  packageJson.scripts.start = command;
  fs.writeJsonSync(`${distPath}/package.json`, packageJson);
}

function installDependencies(command: string) {
  try {
    console.log("Installing dependencies in the dist folder...");
    process.chdir(distPath);
    execSync(command, { stdio: "inherit" });
    console.log("Dependencies installed successfully in the dist folder.");
  } catch (error) {
    console.error("Error occurred while installing dependencies:", error);
  }
}

function zipFolder(sourceFolder: string, targetZip: string) {
  console.log(`Zipping folder ${sourceFolder} to ${targetZip}...`);
  const absoluteSourceFolder = path.resolve(__dirname, sourceFolder);
  const absoluteTargetZip = path.resolve(__dirname, targetZip);
  const zip = new AdmZip();
  zip.addLocalFolder(absoluteSourceFolder);
  zip.writeZip(absoluteTargetZip);
  console.log(`Folder ${sourceFolder} zipped successfully to ${targetZip}`);
}

(function pipeline() {
  copyFiles(["model.json"]);
  configureStartScript("npx prisma generate && node index.js");
  installDependencies("npm install --production");
  zipFolder(distPath, zipPath);
})();
