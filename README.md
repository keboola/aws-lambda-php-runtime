# aws-lambda-php-runtime

[![Build Status](https://travis-ci.com/keboola/aws-lambda-php-runtime.svg?branch=master)](https://travis-ci.com/keboola/aws-lambda-php-runtime) 

PHP runtime for AWS Lambda. Based on [akrabat/lambda-php][1].

The runtime is built and deployed to AWS Lambda using Travis CI. See [.travis.yml](.travis.yml) for details.

## Setup

1. Create IAM user.
2. Create CF stack from template [cf-resources.json](cf-resources.json).
3. Attach created group to the user.
4. Create CF stack from template [cf-tests.json](cf-tests.json).
5. Attach created group to the user.

[1]: https://github.com/akrabat/lambda-php/tree/master/php-runtime

