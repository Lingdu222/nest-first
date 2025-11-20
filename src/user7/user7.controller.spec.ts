import { Test, TestingModule } from '@nestjs/testing';
import { User7Controller } from './user7.controller';
import { User7Service } from './user7.service';

describe('User7Controller', () => {
  let controller: User7Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [User7Controller],
      providers: [User7Service],
    }).compile();

    controller = module.get<User7Controller>(User7Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
