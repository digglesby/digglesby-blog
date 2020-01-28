# Digglesby.com Blog Website

This is the code to [my personal blog](https://www.digglesby.com). Posts are loaded from S3 and served using this Next.js website.

## What does it do?

This Next.js site is built using Serverless.js to be run through AWS lambda. The site loads blog posts from an S3 bucket behind Cloudfront to serve blog posts and most notably doesn't use a database, only a manifest.json file to load basic information about each post. You can learn more about how posts are stored and accessed from [my blog post upload tool](https://github.com/digglesby/digglesby-blog-posts).

## Why is it like this?

My goal for my blog is to keep in running as long as possible as cheaply as possible. The low traffic my blog generates means that my use case fits really well with AWS Lambda for pricing, so the site is built using Next.js and Serverless.js to run on Lambda.

I also wanted a way to save blog data without having to pay for and maintain a database while also ensuring I had a local copy of everything.

I also wanted full control of the site content so an off the shelf solution like Hugo didn't fit well.

Please full free to [visit my blog](https://www.digglesby.com) and take a look at how posts are uploaded with [my blog post upload tool](https://github.com/digglesby/digglesby-blog-posts).
