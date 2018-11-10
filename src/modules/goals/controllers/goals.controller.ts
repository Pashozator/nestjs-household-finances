import { Controller } from '@nestjs/common';
import { GoalsService } from '../services/goals.service';

@Controller('goals')
export class GoalsController {
  constructor(private readonly service: GoalsService) {
  }
}
