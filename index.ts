import { S3 } from "@aws-sdk/client-s3";
import { PrismaClient } from "@prisma/client";
import { S3Event } from "aws-lambda";
import { mockS3EventRecord } from "./event.mock";

const prisma = new PrismaClient();
const s3 = new S3();

export async function handler(event: S3Event): Promise<void> {
  console.log("Received event:", JSON.stringify(event, null, 2));
}

/* Test purpose only, remove before deploying */
handler({
  Records: [mockS3EventRecord],
});
