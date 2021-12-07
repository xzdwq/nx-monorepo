import { Injectable } from '@nestjs/common';
import { TestData } from '@multi-app/general-types'

@Injectable()
export class AppService {
  // private testData: TestData[] = []
  private testData: TestData[] = [{
    id: 1,
    text: '123'
  }]

  getData(): TestData[] {
    return this.testData
  }
}
