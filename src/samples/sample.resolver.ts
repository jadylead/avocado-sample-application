import {
  Args,
  ID,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('Sample')
export class SamplesResolver {
  constructor(
  ) {}

  @Query()
  hello(
  ) {
    return "hello"
  }
}
