import { S3EventRecord } from "aws-lambda";

export const mockS3EventRecord: S3EventRecord = {
  eventVersion: "2.1",
  eventSource: "aws:s3",
  awsRegion: "us-east-1",
  eventTime: new Date().toISOString(),
  eventName: "ObjectCreated:Put",
  userIdentity: {
    principalId: "AWS:123456789012:user/S3AccessRole",
  },
  requestParameters: {
    sourceIPAddress: "192.168.1.1",
  },
  responseElements: {
    "x-amz-request-id": "EXAMPLE123456789",
    "x-amz-id-2":
      "EXAMPLE123/5678abcdefghijklambdaisawesome/mnopqrstuvwxyzABCDEFGH",
  },
  s3: {
    s3SchemaVersion: "1.0",
    configurationId: "testConfigRule",
    bucket: {
      name: "mybucket",
      ownerIdentity: {
        principalId: "EXAMPLE",
      },
      arn: "arn:aws:s3:::mybucket",
    },
    object: {
      key: "happyface.jpg",
      size: 1024,
      eTag: "0123456789abcdef0123456789abcdef",
      versionId: "096fKKXTRTtl3on89fVO.nfljtsv6qko",
      sequencer: "0A1B2C3D4E5F678901",
    },
  },
  glacierEventData: {
    restoreEventData: {
      lifecycleRestorationExpiryTime: "1970-01-01T00:00:00.000Z",
      lifecycleRestoreStorageClass: "string",
    },
  },
};
