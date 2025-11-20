import { Test, TestingModule } from '@nestjs/testing';
import { User7Service } from './user7.service';

describe('User7Service', () => {
  let service: User7Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User7Service],
    }).compile();

    service = module.get<User7Service>(User7Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
