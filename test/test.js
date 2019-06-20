const aws = require('aws-sdk');
aws.config.setPromisesDependency(Promise);

const lambda = new aws.Lambda({
  region: process.env.REGION,
});

describe('Functional test', () => {
  it('Invoke lambda using aws-sdk', async () => {
    const res = await lambda.invoke({
      FunctionName: `aws-lambda-php-runtime-test-test-hello`,
      InvocationType: 'RequestResponse',
      Payload: JSON.stringify({}),
    }).promise();

    expect(res).toHaveProperty('StatusCode');
    expect(res.StatusCode).toEqual(200);
    expect(res).toHaveProperty('Payload');
    const payload = JSON.parse(res.Payload);
    expect(payload).toHaveProperty('status');
    expect(payload.status).toEqual('ok');
  });
});
