import { Test, TestingModule } from '@nestjs/testing';
import { User3Service } from './user3.service';

describe('User3Service', () => {
  let service: User3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User3Service],
    }).compile();

    service = module.get<User3Service>(User3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
