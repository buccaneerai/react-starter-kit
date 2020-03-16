// Example: https://www.npmjs.com/package/s3-node-client
import optimist from 'optimist';
import prompt from 'prompt';
import s3 from 's3-node-client';
import {Observable} from 'rxjs';

const client = s3.createClient({
  maxAsyncS3: 20,     // this is the default
  s3RetryCount: 3,    // this is the default
  s3RetryDelay: 1000, // this is the default
  multipartUploadThreshold: 20971520, // this is the default (20 MB)
  multipartUploadSize: 15728640, // this is the default (15 MB)
  s3Options: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION || 'us-east-1',
    // endpoint: 's3.yourdomain.com',
    // sslEnabled: false
    // any other options are passed to new AWS.S3()
    // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
  },
});

function syncDirectory({s3Bucket, localDir, prefix = ''}) {
  const params = {
    localDir,
    deleteRemoved: true, // default false, whether to remove s3 objects
    s3Params: {Bucket: s3Bucket, Prefix: prefix},
  };
  console.log('Uploading to S3!');
  return new Observable(obs => {
    const uploader = client.uploadDir(params);
    uploader.on('error', err => obs.error(err));
    uploader.on('progress', () => (
      obs.next([uploader.progressAmount, uploader.progressTotal])
    ));
    uploader.on('end', () => {
      console.log('Finished upload to s3!');
      obs.complete();
    });
  });
}

const schema = {
  properties: {
    s3Bucket: {
      description: 'target s3 bucket',
      type: 'string',
      required: true,
    },
    localDir: {
      description: 'folder to upload to s3',
      type: 'string',
      default: './build',
    },
  }
};
prompt.override = optimist.argv;
prompt.start();
prompt.get(schema, (err, params) => syncDirectory(params));
