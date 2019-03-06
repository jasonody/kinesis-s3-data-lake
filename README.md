# kinesis-s3-data-lake

AWS Kinesis stream with an S3 data lake

## Steps
1. Execute `npm install`
2. Execute `sls deploy -v`
3. Execute `sls invoke -f publisher`
4. Wait 60 seconds and check S3 for you published event