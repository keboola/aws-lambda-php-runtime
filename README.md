# lambda-php-runtime 
PHP runtime for AWS Lambda. Based on [akrabat/lambda-php][2].

## Building a PHP runtime layer from Docker image

1. Create the runtime docker file:

        $ docker build -t lambda-php-runtime .

    Update `Dockerfile` if you want different extensions.

2. Upload to Amazon using [img2lambda][1]:

        $ img2lambda -i lambda-php-runtime:latest -r eu-west-2 -n lambda-php73

    (Change the region if you aren't deploying to eu-west-2).

    The layer's ARN is now in `output/layers.json`, put it in ENV variable and reference it in your apps `serverless.yml`.

[1]: https://github.com/awslabs/aws-lambda-container-image-converter
[2]: https://github.com/akrabat/lambda-php/tree/master/php-runtime

