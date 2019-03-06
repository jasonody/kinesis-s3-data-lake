# kinesis-s3-data-lake

AWS Kinesis stream with an S3 data lake

## Steps
1. Execute `npm install`
2. Execute `sls deploy -v`
3. Execute `sls invoke -f publisher`
4. Wait 60 seconds and check S3 for you published event

## Cleanup
1. Execute `aws s3 rm s3://{NAME OF YOUR DATA LAKE'S S3 BUCKET} --recursive`
    - The S3 bucket needs to be empty in order to dispose of it
2. Execute `sls remove -v`