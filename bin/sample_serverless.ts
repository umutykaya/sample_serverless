#!/usr/bin/env node
import 'source-map-support/register';
import { DefaultStackSynthesizer, App} from 'aws-cdk-lib';
import { SampleServerlessStack } from '../lib/sample_serverless-stack';

const app = new App();
new SampleServerlessStack(app, 'SampleServerlessStack', {
  env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION
  },
  synthesizer: new DefaultStackSynthesizer({
      generateBootstrapVersionRule: true, // Change to false if not needed 
  }),
});